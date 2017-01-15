require.config({
    paths: {
        lodash: '../thirdparty/lodash/lodash',
        jquery: '../thirdparty/jquery/dist/jquery.min',
        domReady: '../thirdparty/domReady/domReady'
    },
    shim: {
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