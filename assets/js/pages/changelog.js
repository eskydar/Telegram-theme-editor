define([
    'underscore',
    'models/Changelog',
    'core/bus',
    'templates'
], function(
    _,
    Changelog,
    BUS,
    TPL
){
    BUS.listenTo('SHOW_CHANGELOG', function() {
        var changelogData = Changelog.get('releases');
        var html = _.map(changelogData, function(logData, i) {
            logData.inverted = !!(i % 2);
            return TPL.overlay_changelog_item(logData)
        }).join('');
        BUS.trigger('CORE_CREATE_OVERLAY', {releases: html});
    });
});

