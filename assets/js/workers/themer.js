define([
    'jquery',
    'helpers/utils',
    'models/Theme',
    'workers/css'
], function(
    $,
    U,
    Theme,
    CSS
){
    function setupBasicTheme (){
        Theme.setDeep( 'config.titleBg', {element: 'titleBar', type: 'backgroundColor', color: '', pseudo: ''} );
        Theme.setDeep( 'config.titleButtonCloseBgOver', {element: 'titleBar', type: 'backgroundColor', color: '', pseudo: 'hover'} );
        Theme.setDeep( 'config.titleButtonCloseFgOver', {element: 'titleBar', type: 'backgroundColor', color: '', pseudo: 'hover'} );
    }

    function initialize () {
        setupBasicTheme();
    //    This will get removed, is for testing
        $('[data-color-swapper]').on('blur', function() {
            var prop = $(this).attr('data-theme-property');
            setNewColor(prop, $(this).val());
        });
        CSS.createStyleSheet( true )
    }

    function setNewColor ( themeProperty, color ) {
        Theme.setDeep( 'config.'+themeProperty+'.color', color );
        patchElementStyle( themeProperty, color );
    }

    function patchElementStyle ( themeProperty, color ) {
        var data = Theme.getDeep( 'config.'+themeProperty );
        var selector = CSS.createSelector( data.element, data.pseudo );
        var rule = CSS.createRuleString( data.type, color );
        CSS.addCSSRule(selector, rule)
    }

    return {
        initialize: initialize,
        patchElementStyle: patchElementStyle,
        setNewColor: setNewColor
    };
});