define([
    'config',
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
    CFG,
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
    }

    function attachEvents() {
        U.attachDetachEvents(document, 'add', 'click', function(event) {
            U.clickListener(event, function(eventString, value, button) {
                BUS.trigger(eventString, value, button);
            });
        });

        BUS.listenTo('CREATE_THEME', function() {
        //    TODO::validate the theme name field
            var generatedThemeConfig = Theme.generateThemeConfig();
            var themeName = $('#option-theme-name').val();
            api.post(CFG.apiBaseUrl + 'theme/create/' + themeName, generatedThemeConfig, function(response) {
                console.log(response)
            });
        });
    }

    return {
        bootstrap: bootstrap
    };
});