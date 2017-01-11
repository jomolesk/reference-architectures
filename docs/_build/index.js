var path = require('path');
var fs = require('fs');

var yamlFront = require('yaml-front-matter')
var Liquid = require('shopify-liquid');

var engine = Liquid({
    root: path.resolve(__dirname, '.'),
    extname: '.liquid'
});

var dataPath = path.resolve(__dirname, '../index.yml');
var content = fs.readFileSync(dataPath, 'utf8');
var yml = yamlFront.loadFront(content);

['hub', 'index'].forEach(x => {
    var templatePath = path.resolve(__dirname, `../${x}.liquid.md`);
    var outputhPath = path.resolve(__dirname, `../${x}.md`);
    var template = engine.parse(fs.readFileSync(templatePath, 'utf8'));

    return engine.render(template, yml)
        .then(function (markdown) {
            fs.writeFile(outputhPath, markdown);
        });
});