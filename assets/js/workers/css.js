define([
    'underscore',
    'helpers/utils'
], function(
    _,
    U
){
    var sheet;
    function createStyleSheet (addToDom) {
        addToDom = addToDom || false;
        // Create the <style> tag
        var style = document.createElement("style");

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        if ( addToDom ) document.head.appendChild(style);

        sheet = style.sheet;
        window.bassieSheet = sheet;

    }

    function addCSSRule ( selector, rule ) {
        removeCSSRule(selector);
        var index = ruleCount();
        if(sheet.insertRule) {
            sheet.insertRule(selector + "{" + rule + "}", index);
        }
        else {
            sheet.addRule(selector, rule, index);
        }
    }

    function removeCSSRule ( selector ) {
        var i;
        if (sheet.cssRules) {
            for ( i = 0; i < sheet.cssRules.length; i++ ) {
                var rule = sheet.cssRules[i].selectorText;
                if ( rule == selector ) {
                    sheet.deleteRule(i);
                }
            }
        } else {
            for ( i = 0; i < sheet.rules.length; i++ ) {
                if ( sheet.rules[i].selectorText == selector ) {
                    sheet.removeRule(i);
                }
            }
        }
    }

    function createSelector ( element, child, pseudo ) {
        var selector = '[data-themeconfig-connection="' + element + '"]';
        if ( pseudo ) selector += ':' + pseudo;
        if ( child ) selector += ' ' + child;
        //TODO: Check if child > 1 if so create two css rules.
        return selector;
    }

    function createRuleString ( type, value ) {
        if ( !type ) return '';
        var types = type.split(',');
        if ( types.length == 1 ) return U.camelCaseToDashed( type ) + ': ' + value + '!important;';
        return _.map(types, function(type) {
            return U.camelCaseToDashed( type ) + ': ' + value + '!important;';
        }).join('');
    }
    function ruleCount () {
        if ( sheet.rules ) return sheet.rules.length;
        return sheet.CSSRuleList;
    }

    return {
        createStyleSheet: createStyleSheet,
        addCSSRule: addCSSRule,
        createSelector: createSelector,
        createRuleString: createRuleString
    };

});

