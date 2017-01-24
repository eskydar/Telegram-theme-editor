define([
    'minibus'
], function(
    minibus
) {
    var mb = minibus.create();

    function _on(event, cb) {
        mb.on(event, cb);
    }

    function _off(event, cb) {
        mb.off(event, cb);
    }

    function _once(event, cb) {
        mb.once(event, cb);
    }

    function _emit() {
        mb.emit.apply(mb, arguments);
    }

    return {
        listenTo: _on,
        stopListening: _off,
        trigger: _emit,
        once: _once
    };
});