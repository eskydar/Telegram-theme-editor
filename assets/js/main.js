require.config({
    paths: {
        underscore: '../thirdparty/underscore/underscore',
        jquery: '../thirdparty/jquery/dist/jquery.min',
        domReady: '../thirdparty/domReady/domReady',
        colorpicker: '../thirdparty/jquery-minicolors/jquery.minicolors',
        templates: '../templates/templates'
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