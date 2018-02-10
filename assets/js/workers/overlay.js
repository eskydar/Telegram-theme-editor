define([
    'jquery',
    'underscore',
    'helpers/utils',
    'models/Changelog',
    'core/bus',
    'templates'
], function(
    $,
    _,
    U,
    Changelog,
    BUS,
    TPL
){
    var targetContainer = $('#overlay-container');
    var mainOverlayTemplate = TPL.overlay_main;
    var overlay = {
        create: function( tplName, data ) {
            if ( !tplName ) return;
            data = data || {};

            var overlayModal = TPL[tplName](data);
            var html = mainOverlayTemplate({content:overlayModal});

            insertToHtml(html);
            return this;
        },

        toggleShow: function( show ) {
            prepareBox(show);
            targetContainer.toggleClass('animate', show);
        }
    };

    BUS.listenTo('CORE_CREATE_OVERLAY', function(config) {
        overlay.create('overlay_changelog', config).toggleShow(true);
    });

    BUS.listenTo('CORE_CLOSE_OVERLAY', function() {
        overlay.toggleShow(false);
    });

    function prepareBox(show) {
        if ( show ) {
            targetContainer.addClass('shown');
            return;
        }
        U.transitionEnd(targetContainer, false, 'opacity', function( container ) {
            targetContainer.removeClass('shown');
            targetContainer.empty();
        });
    }

    function insertToHtml (html) {
        var contentContainer = targetContainer;
        contentContainer.empty();
        contentContainer.html(html);
    }

    return overlay;

});

