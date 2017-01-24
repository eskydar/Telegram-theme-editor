define([
    'jquery',
], function(
    $
) {
    var html = document.documentElement;

    var matchesSel = (function(func) {
        if ( func ) {
            return function(node, selector) {
                return func.call(node, selector);
            };
        } else {
            return function(node, selector) {
                var m = node.parentNode ? node.parentNode.querySelectorAll(selector) : [];
                var l = m.length;
                while(l--) {
                    if ( m[l] === node ) {
                        return true;
                    }
                }
            };
        }
    })(html.matches || html.matchesSelector || html.webkitMatchesSelector ||
        html.msMatchesSelector || html.mozMatchesSelector || html.oMatchesSelector);

    // matches jQuery closest() http://api.jquery.com/closest/
    function querySelectorClosest(node, selector) {
        var n = node;
        while ( n !== node.ownerDocument && !matchesSel(n, selector) ) {
            n = n.parentNode;
        }
        // to match behaviour of DOM functions, return null here
        return n.ownerDocument ? n : null;
    }

    function typeStr ( val ) {
        return Object.prototype.toString.call( val ).slice(8, -1).toLowerCase();
    }

    function attachDetachEvents ( el, type, event, eventCallback ) {
        if ( type == 'add') {
            type = 'addEventListener';
        } else if ( type == 'remove' ) {
            type = 'removeEventListener';
        } else {
            return;
            //    Error here
        }

        if ( el.length ) {
            for ( var i = 0; i < el.length; i++ ) {
                el[i][type]( event, eventCallback, false );
            }
        } else {
            el[type]( event, eventCallback, false );
        }
    }

    function clickListener ( event, callback ) {
        var button = querySelectorClosest(event.target, '[data-action]');
        if ( button && !button.hasAttribute('disabled') ) {
            var eventString = button.getAttribute('data-action');
            var value;
            try {
                value = JSON.parse(button.getAttribute('data-value'));
            } catch(e) {
                value = button.getAttribute('data-value');
            }
            callback( eventString, value, button );
        }
    }

    function camelCaseToDashed ( val ) {
        return val.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    function transitionEnd(el, timeout, specificAttrListener, fn) {
        var self = this;
        var $el = $(el);
        var transitionComplete = false;
        timeout = timeout || 5000;
        function whichTransitionEvent() {
            var el = document.createElement('fake');
            var transEndEventNames = {
                'transition'		:	'transitionend',
                'OTransition'		:	'oTransitionEnd',
                'MozTransition'		:	'transitionend',
                'WebkitTransition'	:	'webkitTransitionEnd',
                'MSTransition'		:	'msTransitionEnd'
            };
            var result = '';
            for(var t in transEndEventNames){
                if ( el.style[t] !== undefined ) {
                    result = transEndEventNames[t];
                }
            }
            return result;
        }
        var transEndEventName = whichTransitionEvent();
        function callback(el) {
            fn.call(this, el);
            transitionComplete = true;
        }
        if( specificAttrListener ) {
            $el.on(transEndEventName, function(e) {
                if( !transitionComplete && $(e.currentTarget)[0] == $el[0] && e.originalEvent.propertyName == specificAttrListener ) callback(el);
            });
        } else {
            $el.one(transEndEventName, function(e) {
                if(!transitionComplete && $(e.currentTarget)[0] == $el[0]) callback(el);
            });
        }
        setTimeout(function(){
            !transitionComplete && callback(el);
        }, timeout);
    }

    return {
        typeStr: typeStr,
        attachDetachEvents: attachDetachEvents,
        querySelectorClosest: querySelectorClosest,
        clickListener: clickListener,
        camelCaseToDashed: camelCaseToDashed,
        transitionEnd: transitionEnd
    }
});
