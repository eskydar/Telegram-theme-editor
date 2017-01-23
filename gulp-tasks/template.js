var _ = require('underscore');
var gutil = require('gulp-util');
var through = require('through2');

function compile(outputTpl) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-template', 'Streaming not supported'));
            return;
        }

        function filePush(contents) {
            file.contents = new Buffer(contents);
            file.path = gutil.replaceExtension(file.path, '.js');
            cb(null, file);
        }

        function callback (error, javascript) {
            if ( error ) {
                cb(new gutil.PluginError('gulp-template', 'Oh oh'))
            }
            filePush(javascript);
        }

        try {
            getTemplatesContent(outputTpl, file, callback);
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-template', err, {fileName: file.path}));
        }
    });
}

function getTemplatesContent(outputTpl, file, cb) {
    try {
        var templates = extractTemplates(file.contents);
        templates = compileTemplates(templates, cb);
        var str = createJavascript(outputTpl, templates);
    } catch(e) {
        cb(e);
    }
    cb(null, str)
}

function extractTemplates(content) {
    var match;
    var templateContentRegex = /<script.*?id="(.*?)-template".*?>([\s\S]*?)<\/script>/gmi;
    var templateName;
    var templates = {};

    while (match = templateContentRegex.exec(content)) {
        templateName = match[1].replace(/-/g, '_');
        templates[templateName] = match[2].trim();
    }
    return templates;
}

function compileTemplates(templates, cb) {
    var templateName;
    for (templateName in templates) {
        if (templates.hasOwnProperty(templateName)) {
            try {
                templates[templateName] = _.template(templates[templateName]).source.toString();
            } catch(e) {
                cb(e);
            }
        }
    }
    return templates;
}

function createJavascript(outputTpl, templates) {
    var lines = [];
    var templateName;
    for (templateName in templates) {
        if ( templates.hasOwnProperty(templateName) ) {
            lines.push('"' + templateName + '": ' + templates[templateName] + '');
        }
    }
    return outputTpl.replace('{{tpl}}', '{' + lines.join(',\n') + '}');
}

module.exports = compile;