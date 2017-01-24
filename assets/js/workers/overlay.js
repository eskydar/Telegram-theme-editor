define([
    'jquery',
    'underscore',
    'helpers/utils',
    'core/bus',
    'templates'
], function(
    $,
    _,
    U,
    BUS,
    TPL
){
    var targetContainer = $('#overlay-container');
    var mainOverlayTemplate = TPL['overlay_main'];
    var overlay = {
        create: function( tplName, data ) {
            if ( !tplName ) return;
            data = data || {content:'test'};

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
        overlay.create('overlay_changelog').toggleShow(true);
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
        });
    }

    function insertToHtml (html) {
        var contentContainer = targetContainer.find('#overlay-content');
        contentContainer.empty();
        contentContainer.html(html);
    }

    return overlay;

});

