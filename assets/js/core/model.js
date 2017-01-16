define([
    'helpers/utils',
    'underscore'
], function(
    U,
    _
) {
    var Model = function ( attributes ) {
        this.id = _.uniqueId('model');
        this.attributes = attributes || {};
        this.initialize.apply(this, arguments);
    };

    _.extend(Model.prototype, {
        get: function ( attribute ) {
            return this.attributes[attribute];
        },
        getDeep: function ( attributePath ) {
            var path    = attributePath.split('.');

            if ( path[0] !== 'attributes') path.unshift('attributes');

            var l       = path.length,
                obj     = this;
            for ( var i = 0; i < l; i++ ) {
                var key = path[i];
                if ( obj[key] === undefined ) return undefined;
                obj = obj[key];
            }
            return obj;
        },
        set: function ( attribute, value ) {
            this.attributes[attribute] = value;
        },
        setDeep: function ( attributePath, value ) {
            var path    = attributePath.split('.');

            if ( path[0] !== 'attributes') path.unshift('attributes');

            var l       = path.length,
                lastKey = l-1,
                obj     = this;
            for ( var i = 0; i < l; i++ ) {
                var key = path[i];
                if ( !obj.hasOwnProperty(key) ) obj[key] = {};
                if ( lastKey == i ) {
                    obj[key] = value;
                    return;
                }
                obj = obj[key];
            }
            obj[path[lastKey]] = value;
        },
        toJSON: function () {
            return _.clone(this.attributes);
        }

    });

    var extend = function ( protoProps, staticProps ) {
        var parent = this;
        var child;
        if ( protoProps && _.has(protoProps, 'constructor') ) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }

        _.extend(child, parent, staticProps);

        child.prototype = _.create(parent.prototype, protoProps);
        child.prototype.constructor = child;

        child.__super__ = parent.prototype;

        return child;
    };

    Model.extend = extend;

    return Model;
});