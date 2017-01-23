var path = require('path');
var fs = require('fs');
var series = require('./series');

var yamlFront = require('yaml-front-matter')
var Liquid = require('shopify-liquid');

var engine = Liquid({
    root: path.resolve(__dirname, 'templates'),
    extname: '.liquid'
});

var dataPath = path.resolve(__dirname, '../docs/index.yml');
var content = fs.readFileSync(dataPath, 'utf8');
var yml = yamlFront.loadFront(content);

['hub', 'index'].forEach(x => {
    var templatePath = path.resolve(__dirname, `../docs/${x}.liquid.md`);
    var outputhPath = path.resolve(__dirname, `../docs/${x}.md`);
    var template = engine.parse(fs.readFileSync(templatePath, 'utf8'));

    return engine.render(template, yml)
        .then(function (markdown) {
            fs.writeFile(outputhPath, markdown);
        });
});

var template = engine.parse("{%- include 'series-overview' -%}");

[
    'dmz',
    'app-service',
    'hybrid-networking',
    'identity',
    'virtual-machines-linux',
    'virtual-machines-windows'
].forEach(slug => {

    var model = series(slug);

    var ymlPath = path.resolve(__dirname, `../docs/${slug}/series.yml`);
    var content = fs.readFileSync(ymlPath, 'utf8');
    var yml = yamlFront.loadFront(content);

    Object.assign(model, yml);

    var outputhPath = path.resolve(__dirname, `../docs/${slug}/index.md`);
    engine.render(template, model)
        .then(markdown => fs.writeFile(outputhPath, markdown));
});
