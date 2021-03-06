define([
    'helpers/utils',
    'underscore'
], function(
    U,
    _
) {
   return {
       windowBg: {element: 'mainBackground', type: 'backgroundColor', color: '#ffffff', child: '', pseudo: ''},
       windowFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowSubTextFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowSubTextFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowBoldFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowBoldFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowBgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowActiveTextFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowShadowFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       windowShadowFgFallback: {element: '', type: '', color: '', child: '', pseudo: ''},
       shadowFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       slideFadeOutBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       slideFadeOutShadowFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       imageBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       imageBgTransparent: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonSecondaryFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeButtonSecondaryFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeLineFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       activeLineFgError: {element: '', type: '', color: '', child: '', pseudo: ''},
       lightButtonBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       lightButtonBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       lightButtonBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       lightButtonFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       lightButtonFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       attentionButtonFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       attentionButtonFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       attentionButtonBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       attentionButtonBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       outlineButtonBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       outlineButtonBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       outlineButtonOutlineFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       outlineButtonBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuSubmenuArrowFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuFgDisabled: {element: '', type: '', color: '', child: '', pseudo: ''},
       menuSeparatorFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       scrollBarBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       scrollBarBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       scrollBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       scrollBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       smallCloseIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       smallCloseIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       radialFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       radialBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       placeholderFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       placeholderFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       inputBorderFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       filterInputBorderFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       filterInputInactiveBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       checkboxFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       sliderBgInactive: {element: '', type: '', color: '', child: '', pseudo: ''},
       sliderBgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       tooltipBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       tooltipFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       tooltipBorderFg: {element: '', type: '', color: '', child: '', pseudo: ''},

       //Title bar
       titleShadow: {element: '', type: '', color: '#000000', child: '', pseudo: ''},
       titleBg: {element: 'titleBar', type: 'backgroundColor', color: '#f1f1f1', child: '', pseudo: ''},
       titleBgActive: {inherit: 'titleBg'},
       titleButtonBg: {element: 'titleButtonIcon', type: 'backgroundColor', color: '#f1f1f1', child: '', pseudo: ''},
       titleButtonFg: {element: 'titleButtonIcon', type: 'fill,stroke', color: '#ababab', child: 'svg', pseudo: ''},
       titleButtonBgOver: {element: 'titleButtonIcon', type: 'backgroundColor', color: '#e5e5e5', child: '', pseudo: 'hover'},
       titleButtonFgOver: {element: 'titleButtonIcon', type: 'fill,stroke', color: '#9a9a9a', child: 'svg', pseudo: 'hover'},
       titleButtonBgActive: {inherit: 'titleButtonBg'},
       titleButtonFgActive: {inherit: 'titleButtonFg'},
       titleButtonBgActiveOver: {inherit: 'titleButtonBgOver'},
       titleButtonFgActiveOver: {inherit: 'titleButtonFgOver'},
       titleButtonCloseBg: {element: 'titleCloseIcon', type: 'backgroundColor', color: '#f1f1f1', child: '', pseudo: ''},
       titleButtonCloseFg: {element: 'titleCloseIcon', type: 'fill', color: '#ababab', child: 'svg', pseudo: ''},
       titleButtonCloseBgOver: {element: 'titleCloseIcon', type: 'backgroundColor', color: '#e81123', child: '', pseudo: 'hover'},
       titleButtonCloseFgOver: {element: 'titleCloseIcon', type: 'fill', color: '#ffffff', child: 'svg', pseudo: 'hover'},
       titleButtonCloseBgActive: {inherit: 'titleButtonCloseBg'},
       titleButtonCloseFgActive: {inherit: 'titleButtonCloseFg'},
       titleButtonCloseBgActiveOver: {inherit: 'titleButtonCloseBgOver'},
       titleButtonCloseFgActiveOver: {inherit: 'titleButtonCloseFgOver'},
       titleFg: {inherit: 'titleButtonBg'},
       titleFgActive: {inherit: 'titleButtonBg'},
       //End titlebar

       trayCounterBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       trayCounterBgMute: {element: '', type: '', color: '', child: '', pseudo: ''},
       trayCounterFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       trayCounterBgMacInvert: {element: '', type: '', color: '', child: '', pseudo: ''},
       trayCounterFgMacInvert: {element: '', type: '', color: '', child: '', pseudo: ''},
       layerBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       cancelIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       cancelIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTextFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTextFgGood: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTextFgError: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTitleFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxSearchBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxSearchCancelIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxSearchCancelIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTitleAdditionalFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTitleCloseFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       boxTitleCloseFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       membersAboutLimitFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       contactsBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       contactsBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       contactsNameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       contactsStatusFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       contactsStatusFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       contactsStatusFgOnline: {element: '', type: '', color: '', child: '', pseudo: ''},
       photoCropFadeBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       photoCropPointFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introTitleFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introDescriptionFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introErrorFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverTopBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverBottomBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverIconsFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverPlaneTrace: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverPlaneInner: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverPlaneOuter: {element: '', type: '', color: '', child: '', pseudo: ''},
       introCoverPlaneTop: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsMenuIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsMenuIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsBg: {element: 'chatlistItem', type: 'backgroundColor', color: '#ffffff', child: '', pseudo: ''},
       dialogsNameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsChatIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsDateFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsTextFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsTextFgService: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsDraftFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsVerifiedIconBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsVerifiedIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsSendingIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsSentIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadBgMuted: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsBgOver: {element: 'chatlistItem', type: 'backgroundColor', color: '#f1f1f1', child: '', pseudo: 'hover'},
       dialogsNameFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsChatIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsDateFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsTextFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsTextFgServiceOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsDraftFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsVerifiedIconBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsVerifiedIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsSendingIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsSentIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadBgMutedOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsBgActive: {element: 'chatlistItemActive', type: 'backgroundColor', color: '#419fd9', child: '', pseudo: ''},
       dialogsNameFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsChatIconFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsDateFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsTextFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsTextFgServiceActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsDraftFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsVerifiedIconBgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsVerifiedIconFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsSendingIconFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsSentIconFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadBgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadBgMutedActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsUnreadFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsForwardBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       dialogsForwardFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       searchedBarBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       searchedBarBorder: {element: '', type: '', color: '', child: '', pseudo: ''},
       searchedBarFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       topBarBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       emojiPanBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       emojiPanCategories: {element: '', type: '', color: '', child: '', pseudo: ''},
       emojiPanHeaderFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       emojiPanHeaderBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       stickerPanDeleteBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       stickerPanDeleteFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       stickerPreviewBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyTextInFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyTextOutFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyCaptionInFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyCaptionOutFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileNameInFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileNameOutFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyOutIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyOutIconFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyIconFgInverted: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySendingOutIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySendingInIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySendingInvertedIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySystemBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySystemBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySystemFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyUnreadBarBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyUnreadBarBorder: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyUnreadBarFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyForwardChooseBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyForwardChooseFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer1NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer1UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer2NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer2UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer3NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer3UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer4NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer4UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer5NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer5UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer6NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer6UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer7NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer7UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer8NameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeer8UserpicBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPeerUserpicFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyScrollBarBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyScrollBarBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyScrollBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyScrollBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgSelectOverlay: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgStickerOverlay: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInServiceFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInServiceFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutServiceFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutServiceFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInShadow: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInShadowSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutShadow: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutShadowSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInDateFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInDateFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutDateFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutDateFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgServiceFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgServiceBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgServiceBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInReplyBarColor: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInReplyBarSelColor: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutReplyBarColor: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutReplyBarSelColor: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgImgReplyBarColor: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgInMonoFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgOutMonoFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgDateImgFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgDateImgBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgDateImgBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgDateImgBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileThumbLinkInFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileThumbLinkInFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileThumbLinkOutFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileThumbLinkOutFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileInBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileInBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileInBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileOutBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileOutBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFileOutBgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile1Bg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile1BgDark: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile1BgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile1BgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile2Bg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile2BgDark: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile2BgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile2BgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile3Bg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile3BgDark: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile3BgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile3BgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile4Bg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile4BgDark: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile4BgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgFile4BgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileInIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileInIconFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileInRadialFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileInRadialFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileOutIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileOutIconFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileOutRadialFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileOutRadialFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileThumbIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileThumbIconFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileThumbRadialFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyFileThumbRadialFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformInActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformInActiveSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformInInactive: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformInInactiveSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformOutActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformOutActiveSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformOutInactive: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgWaveformOutInactiveSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgBotKbOverBgAdd: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgBotKbIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       msgBotKbRippleBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaInFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaInFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaOutFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaOutFgSelected: {element: '', type: '', color: '', child: '', pseudo: ''},
       youtubePlayIconBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       youtubePlayIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       videoPlayIconBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       videoPlayIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       toastBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       toastFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       reportSpamBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       reportSpamFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyToDownBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyToDownBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyToDownBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyToDownFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyToDownFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyToDownShadow: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeAreaBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeAreaFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeAreaFgService: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySendIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historySendIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyPinnedBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyReplyBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyReplyIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyReplyCancelFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyReplyCancelFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeButtonBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeButtonBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       historyComposeButtonBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       overviewCheckBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       overviewCheckFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       overviewCheckFgActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       overviewPhotoSelectOverlay: {element: '', type: '', color: '', child: '', pseudo: ''},
       profileStatusFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       profileVerifiedCheckBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       profileVerifiedCheckFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       profileAdminStartFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationsBoxMonitorFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationsBoxScreenBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationSampleUserpicFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationSampleCloseFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationSampleTextFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationSampleNameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mainMenuBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mainMenuCoverBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mainMenuCoverFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaPlayerBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaPlayerActiveFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaPlayerInactiveFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaPlayerDisabledFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileNameFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileSizeFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileRedCornerFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileYellowCornerFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileGreenCornerFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileBlueCornerFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewFileExtFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewMenuBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewMenuBgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewMenuBgRipple: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewMenuFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewVideoBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewControlBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewControlFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewCaptionBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewCaptionFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewTextLinkFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewSaveMsgBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewSaveMsgFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackActive: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackInactive: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackActiveOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackInactiveOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackProgressFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackIconFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewPlaybackIconFgOver: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewTransparentBg: {element: '', type: '', color: '', child: '', pseudo: ''},
       mediaviewTransparentFg: {element: '', type: '', color: '', child: '', pseudo: ''},
       notificationBg: {element: '', type: '', color: '', child: '', pseudo: ''}
   };
});