define([
    'jquery',
    'underscore',
    'helpers/utils',
    'models/Theme',
    'workers/css',
    'colorpicker'
], function(
    $,
    _,
    U,
    Theme,
    CSS,
    colorpicker
){
    function initialize () {
    //    This will get removed, is for testing
        $('[data-color-swapper]').on('blur', function() {
            var prop = $(this).attr('data-theme-property');
            setNewColor(prop, $(this).val());
        });

        createHTML(createElementsHTMLData());

        CSS.createStyleSheet( true );
    }
    //sidebar-template
    function createElementsHTMLData () {
        var elementsModelKeys = [];
        var target = 'data-themeConfig-connection';
        var attr = '[' + target + ']';
        var elements = $('#telegram-wrapper').find(attr);
        elements.each(function(i, element) {
            var elAttribute = $(element).attr(target);
            elementsModelKeys = _.union(elementsModelKeys, Theme.getElementHTMLData(elAttribute));
        });
        elementsModelKeys = _.unique(elementsModelKeys);

        return _.map(elementsModelKeys, function( elementModelKey ) {
            var label = Theme.getElementLabel(elementModelKey);
            return {label: label, connection:elementModelKey};
        });
    }

    function createHTML ( data ) {
        var templateEl = $('script#sidebar-template').html();
        var html = [];
            var tpl = _.template(templateEl);
            var htmlToInsert = $(tpl({inputs: data}));
            htmlToInsert.colorpicker().on('changeColor', function(e) {
                var input = $(this).find('input');
                setNewColor(input.attr('data-theme-property'), input.val())
            });
            html.push(htmlToInsert);
        // });
        $('#sidebar-wrapper').html(html);
    }

    function setNewColor ( themeProperty, color ) {
        Theme.setDeep( 'config.'+themeProperty+'.color', color );
        patchElementStyle( themeProperty, color );
    }

    function patchElementStyle ( themeProperty, color ) {
        var data = Theme.getDeep( 'config.'+themeProperty );
        var selector = CSS.createSelector( data.element, data.child, data.pseudo );
        var rule = CSS.createRuleString( data.type, color );
        CSS.addCSSRule(selector, rule);
    }

    return {
        initialize: initialize,
        patchElementStyle: patchElementStyle,
        setNewColor: setNewColor
    };
});