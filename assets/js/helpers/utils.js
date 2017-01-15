define([
    'jquery',
], function(
    $
) {
    function typeStr ( val ) {
        return Object.prototype.toString.call( val ).slice(8, -1).toLowerCase();
    }

    function camelCaseToDashed ( val ) {
        return val.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    return {
        typeStr: typeStr,
        camelCaseToDashed: camelCaseToDashed
    };
});