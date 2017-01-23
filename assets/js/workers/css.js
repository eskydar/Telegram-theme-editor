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
    }

    function addCSSRule ( selector, rule ) {
        var index = ruleCount();
        //Before we create a new css rule we should clean up our mess that we made before, so lets remove old rules
        // removeCSSRule(selector);
        if(sheet.insertRule) {
            sheet.insertRule(selector + "{" + rule + "}", index);
        }
        else {
            sheet.addRule(selector, rule, index);
        }
    }

    // function removeCSSRule ( selector ) {
    //     if (sheet.cssRules) {
    //         console.log(sheet.cssRules.length)
    //         for ( var i = 0; i < sheet.cssRules.length; i++ ) {
    //             var rule = sheet.cssRules[i].selectorText;
    //             console.log(rule == selector, rule, selector)
    //             if ( rule == selector ) {
    //                 sheet.deleteRule(i);
    //             }
    //         }
    //     } else {
    //         for ( var i = 0; i < sheet.rules.length; i++ ) {
    //             if ( sheet.rules[i].selectorText == selector ) {
    //                 sheet.removeRule(i);
    //             }
    //         }
    //     }
    // }

    function createSelector ( element, child, pseudo ) {
        var selector = '[data-themeConfig-connection="' + element + '"]';
        if ( pseudo ) selector += ':' + pseudo;
        if ( child ) selector += ' ' + child;
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
        return sheet.rules.length;
    }

    return {
        createStyleSheet: createStyleSheet,
        addCSSRule: addCSSRule,
        createSelector: createSelector,
        createRuleString: createRuleString
    };

});

