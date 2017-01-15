define([
    'jquery',
    'helpers/utils',
    "models/Theme"
], function(
    $,
    U,
    Theme
){
    function setupBasicTheme (){
        Theme.setDeep( 'config.titleBg', {element: 'titleBar', type: 'backgroundColor', color: ''} );
    }

    function initialize () {
        setupBasicTheme();
    //    This will get removed, is for testing
        $('[data-color-swapper]').on('blur', function() {
            var prop = $(this).attr('data-theme-property');
            setNewColor(prop, $(this).val());
        });
    }

    function setNewColor ( themeProperty, color ) {
        Theme.setDeep( 'config.'+themeProperty+'.color', color );
        patchElementStyle( themeProperty, color );
    }

    function patchElementStyle ( themeProperty, color ) {
        var data = Theme.getDeep( 'config.'+themeProperty );
        var element = $('[data-themeConfig-connection=' + data.element + ']');
        element.css( U.camelCaseToDashed( data.type ), color );
    }

    return {
        initialize: initialize,
        patchElementStyle: patchElementStyle,
        setNewColor: setNewColor
    };
});