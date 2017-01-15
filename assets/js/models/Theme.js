define([
    'modules/model'
], function(
    Model
){
    function Theme(){

        Model.call( this );

        this._name = 'Default theme';

        return this;
    }

    Theme.prototype = Object.create( Model.prototype );

    Theme.prototype.getName = function(){
        return this._name;
    };

    Theme.prototype.setName = function( name ) {
        this._name = name;
    };

    return new Theme();
});

