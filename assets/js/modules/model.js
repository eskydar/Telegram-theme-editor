define([
    'helpers/utils'
], function(
    U
) {
    var instanceCount = 0;
    var getNewInstanceID = function(){
        return ++instanceCount;
    };
    function Model(){
        this._instanceID = getNewInstanceID();
        return this;
    }
    Model.getInstanceCount = function(){
        return instanceCount;
    };
    Model.prototype = {
        getInstanceID: function(){
            return this._instanceID;
        },

        set: function ( prop, value ) {
            this[prop] = value;
        },

        get: function ( prop ) {
            return this[prop];
        },

        setDeep: function ( propPath, value ) {
            var path    = propPath.split('.'),
                l       = path.length,
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

        getDeep: function ( propPath ) {
            var path    = propPath.split('.'),
                l       = path.length,
                obj     = this;
            for ( var i = 0; i < l; i++ ) {
                var key = path[i];
                if ( obj[key] == undefined ) return undefined;
                obj = obj[key];
            }
            return obj;
        }
    };
    return Model ;
});