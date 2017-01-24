var path = require('path');
var fs = require('fs');
var series = require('./series');

var yamlFront = require('yaml-front-matter')
var Liquid = require('shopify-liquid');

var engine = Liquid({
    root: path.resolve(__dirname, 'templates'),
    extname: '.liquid'
});

var catalog = { series: [] };

// render series overviews
var seriesTemplate = engine.parse("{%- include 'series-overview' -%}");
[
    'virtual-machines-linux',
    'virtual-machines-windows',
    'app-service',
    'identity',
    'hybrid-networking',
    'dmz'
].forEach(slug => {

    var model = series(slug);

    var ymlPath = path.resolve(__dirname, `../docs/${slug}/series.yml`);
    var content = fs.readFileSync(ymlPath, 'utf8');
    var yml = yamlFront.loadFront(content);

    Object.assign(model, yml);

    model.next = model.articles[0].url;
    model.path = slug;
    catalog.series.push(model);

    var outputhPath = path.resolve(__dirname, `../docs/${slug}/index.md`);
    engine.render(seriesTemplate, { series: model })
        .then(markdown => fs.writeFile(outputhPath, markdown));
});

// render main index
['index'].forEach(x => {
    var templatePath = path.resolve(__dirname, `../docs/${x}.liquid.md`);
    var outputhPath = path.resolve(__dirname, `../docs/${x}.md`);
    var template = engine.parse(fs.readFileSync(templatePath, 'utf8'));

    console.log(x);
    engine.render(template, catalog)
        .then(markdown => fs.writeFile(outputhPath, markdown));
});
