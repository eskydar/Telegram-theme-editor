define([
    'jquery',
    'helpers/utils',
    'models/Theme',
    'models/Changelog',
    'workers/themer',
    'workers/api',
    'workers/overlay',
    'core/bus',

    //Not directly used, just included
    'pages/changelog'
], function(
    $,
    U,
    Theme,
    Changelog,
    themeWorker,
    api,
    overlay,
    BUS
) {
    function bootstrap() {
        themeWorker.initialize();
        attachEvents();
        window.themeWorker = themeWorker;
        window.Theme = Theme;
        window.bassieApi = api;
    }

    function attachEvents() {
        U.attachDetachEvents(document, 'add', 'click', function(event) {
            U.clickListener(event, function(eventString, value, button) {
                BUS.trigger(eventString, value, button);
            });
        });
    }

    return {
        bootstrap: bootstrap
    };
});