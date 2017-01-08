var path = require('path');
var fs = require('fs');

var yamlFront = require('yaml-front-matter')
var Liquid = require('shopify-liquid');

var listFiles = require('./listFiles.js');

var engine = Liquid({
    root: path.resolve(__dirname, '.'),
    extname: '.liquid'
});

var templatePath = path.resolve(__dirname, '../index.liquid.md');
var dataPath = path.resolve(__dirname, '../index.yml');
var outputhPath = dataPath.replace('.yml', '.md');

var content = fs.readFileSync(dataPath, 'utf8');
var yml = yamlFront.loadFront(content);

var template = engine.parse(fs.readFileSync(templatePath, 'utf8'));

return engine.render(template, yml)
    .then(function (markdown) {
        fs.writeFile(outputhPath, markdown);
    });