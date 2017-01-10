---
title: Azure Guidance | Microsoft Docs
description: Azure Reference Architectures
services: ''
documentationcenter: na
author: bennage
manager: marksou
editor: ''
tags: ''
layout: HubPage

ms.assetid: ef1257b3-c0cc-4e3d-bca1-a83085d1e8c4
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/24/2016
ms.author: christb
---
<link href="./pnp.css" type="text/css" rel="stylesheet" />
<div id="main" class="v2 pnp">
    <div class="container">
        <header>
            <div>
                <a href="http://aka.ms/mspnp" title="patterns & practices"><img src="/azure/architecture/_themes/images/pnp-logo.svg" alt="patterns &amp; practices"></a>
                    <h1>Azure Reference Architectures</h1>
            </div>
        </header>
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
                                    <a href="{{ item.path }}/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
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