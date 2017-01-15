define([
    'jquery',
], function(
    $
) {
    function typeStr ( val ) {
        return Object.prototype.toString.call( val ).slice(8, -1).toLowerCase();
    }

    return {
        typeStr: typeStr
    };
});