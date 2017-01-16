require.config({
    paths: {
        underscore: '../thirdparty/underscore/underscore',
        jquery: '../thirdparty/jquery/dist/jquery.min',
        domReady: '../thirdparty/domReady/domReady',
        colorpicker: '../thirdparty/bootstrap-colorpicker/dist/js/bootstrap-colorpicker'
    },
    shim: {
        colorpicker: {
            deps: ['jquery'],
            exports: ['jQuery.fn.colorpicker']
        },
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