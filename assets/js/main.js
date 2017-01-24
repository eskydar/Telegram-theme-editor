require.config({
    paths: {
        underscore: '../thirdparty/underscore/underscore',
        jquery: '../thirdparty/jquery/dist/jquery.min',
        domReady: '../thirdparty/domReady/domReady',
        colorpicker: '../thirdparty/jquery-minicolors/jquery.minicolors',
        templates: '../templates/templates',
        minibus: 'core/minibus'
    },
    shim: {
        'core/bus': {
            deps:['minibus']
        },
        colorpicker: ['jquery'],
        app: [
            'colorpicker',
            'core/bus'
        ]
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