define([
    'jquery',
    'helpers/utils',
    'models/Theme',
    'workers/themer'
], function(
    $,
    U,
    Theme,
    themeWorker
) {
    function bootstrap() {
        themeWorker.initialize();
        window.themeWorker = themeWorker;
        window.Theme = Theme;
    }

    return {
        bootstrap: bootstrap
    };
});