define(
    function(){
        var instanceCount = 0;
        var getNewInstanceID = function(){
            return( ++instanceCount );
        };
        function Model(){
            this._instanceID = getNewInstanceID();
            return( this );
        }
        Model.getInstanceCount = function(){
            return( instanceCount );
        };
        Model.prototype = {
            getInstanceID: function(){
                return( this._instanceID );
            }
        };
        return( Model );
    }
);