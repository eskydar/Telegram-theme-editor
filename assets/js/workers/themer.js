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
    }

    function setNewColor ( themeProperty, color ) {
        Theme.setDeep( 'config.'+themeProperty+'.color', color );
        patchElementStyle( themeProperty, color );
    }

    function patchElementStyle ( themeProperty, color ) {
        var data = Theme.getDeep( 'config.'+themeProperty );
        var element = $('[data-themeConfig-connection=' + data.element + ']');
        // element.css( U.camelCaseToDashed( data.type ), color );

        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);
        style.sheet.insertRule('[data-themeConfig-connection="' + data.element + '"]:hover { background: green !important; }', 0);
        console.log(document.styleSheets)
    }

    return {
        initialize: initialize,
        patchElementStyle: patchElementStyle,
        setNewColor: setNewColor
    };
});