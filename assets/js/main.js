require.config({
    paths: {
        underscore: '../thirdparty/underscore/underscore',
        jquery: '../thirdparty/jquery/dist/jquery.min',
        domReady: '../thirdparty/domReady/domReady',
        colorpicker: '../thirdparty/jquery-minicolors/jquery.minicolors'
    },
    shim: {
        colorpicker: ['jquery'],
        app: ['colorpicker']
    }
});

require([
    'jquery',
    'app',
    'domReady'
], function(
    $,
    app,
    domReady
) {
    domReady(function() {
        app.bootstrap();
    });
});