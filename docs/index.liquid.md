---
title: Azure Guidance
description: Azure Reference Architectures
layout: HubPage
---
<link href="./_css/pnp.css" type="text/css" rel="stylesheet" />
<div id="main" class="v2 pnp">
    <div class="container">
        <h1>Azure Reference Architectures</h1>
        <div class="frontmatter">
            Our reference architectures are arranged by scenario, with multiple related architectures grouped together.
            Each individual architecture offers recommended practices and prescriptive steps, as well as an executable component that embodies the recommendations.
            Many of the architectures are progressive; building on top of preceding architectures that have fewer requirements.
        </div>
        <ul class="pivots">
            <li>
                <a href="#refarch">Reference Architectures</a>
                <ul id="refarch">
                    <li>
                        <a href="#all">All scenarios</a>
                        <section id="all" class="catalog panelContent">
                        {% assign cardStyle = 'cardsC' %}
                        {% include 'index' %}
                        </section>
                    </li>
                    {% for item in series %}
                    <li>
                        <a href="#{{ item.path }}">{{ item.title }}</a>
                        <div id="{{ item.path }}" class="catalog panelContent">
                            <section class="series">
                                <h2>{{ item.title }}</h2>
                                {% include 'series' with item %}
                                <p>{{ item.description }}</p>
                                <div class="links">
                                    <a href="{{ item.path }}/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    {% endfor %}
                </ul>
            </li>
        </ul>
    </div>
</div>