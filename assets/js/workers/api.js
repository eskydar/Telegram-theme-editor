define([
    'underscore',
    'helpers/utils'
], function(
    _,
    U
){
    function request ( url, callback, method, data ) {
        method = method || 'GET';
        data = JSON.stringify(data) || null;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 ) {
                callback( {statusCode: xmlHttp.status, response: xmlHttp.responseText} );
            }
        };
        xmlHttp.open(method, url, true);
        xmlHttp.send(data);
    }

    function post ( url, data, callback ) {
        request( url, callback, 'POST', data);
    }

    function get ( url, callback) {
        request( url, callback, 'GET' );
    }


    return {
        post: post,
        get: get
    };

});

