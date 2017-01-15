define([
    'jquery',
    'helpers/utils',
    'models/Theme'
], function(
    $,
    U,
    Theme
) {
    function bootstrap() {
        var theme = new Theme();
        console.log(theme)
    }

    return {
        bootstrap: bootstrap
    };
});