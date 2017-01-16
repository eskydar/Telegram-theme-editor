define([
    'helpers/utils',
], function(
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
        if(sheet.insertRule) {
            sheet.insertRule(selector + "{" + rule + "}", index);
        }
        else {
            sheet.addRule(selector, rule, index);
        }
    }

    function removeCSSRule ( selector, rules ) {

    }

    function createSelector ( element, child, pseudo ) {
        var selector = '[data-themeConfig-connection="' + element + '"]';
        if ( pseudo ) selector += ':' + pseudo;
        if ( child ) selector += ' ' + child;
        return selector;
    }

    function createRuleString ( type, value ) {
        return U.camelCaseToDashed( type ) + ': ' + value + '!important';
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

