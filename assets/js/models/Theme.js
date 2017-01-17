define([
    'underscore',
    'core/model',
    'core/theme-data'
], function(
    _,
    Model,
    themeData
){
    var Theme = Model.extend({
        initialize: function(){
            this.set('config', themeData);
        },

        _name: 'Default name',

        getName: function () {
            return this._name;
        },
        setName: function ( name ) {
            this._name = name;
        },
        generateThemeConfig: function () {
            var theme = this.get('config');
            return _.mapObject(theme, function( val ) {
                var color = val.color;
                if ( val.inherit ) {
                    color = theme[val.inherit].color;
                }
                return color;
            });
        },
        getElementHTMLData: function (elementId) {
            var theme = this.get('config');
            var keyArray = [];
            _.mapObject(theme, function( val, key ) {
                if ( val.element && val.element == elementId ) keyArray.push(key);
            });
            return keyArray;
        },
        getElementLabel: function ( key ) {
            var theme = this.get('config');
            return theme[key].label || key;
        },
        getElementColor: function ( key ) {
            var theme = this.get('config');
            return theme[key].color || '#000000';
        }
    });

    return new Theme();
});

