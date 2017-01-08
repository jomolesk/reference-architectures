---
title: Azure Guidance | Microsoft Docs
description: Azure Reference Architectures
services: ''
documentationcenter: na
author: bennage
manager: marksou
editor: ''
tags: ''
layout: RefArchSeriesPage

ms.assetid: ef1257b3-c0cc-4e3d-bca1-a83085d1e8c4
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/24/2016
ms.author: christb
---
# Azure Reference Architectures

Our reference architectures are arranged by scenario, with multiple related architectures grouped together.
Each individual architecture offers recommended practices and prescriptive steps, as well as an executable component that embodies the recommendations.
Many of the architectures are progressive; building on top of preceding architectures that have fewer requirements.


<section class="series">
    <h2>Run virtual machine workloads</h2>






    <ol class="cardsC refArchPanel x4">
        <li>
            <a href="./virtual-machines-linux/single-vm.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-linux/images/single-vm.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>Single VM</h3>
                                <p>Baseline recommendations for running any Windows VM in Azure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="./virtual-machines-linux/multi-vm.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-linux/images/multi-vm.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>Load-balanced VMs</h3>
                                <p>For higher availability, run multiple VMs behind a load balancer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="./virtual-machines-linux/n-tier.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-linux/images/n-tier.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>N-tier application</h3>
                                <p>Within each tier, load balancers distribute traffic across multiple VMs. The database is replicated using SQL Server Always On Availability Groups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="./virtual-machines-linux/multi-region-application.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-linux/images/multi-region-application.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>Multi-region application</h3>
                                <p>An application deployed to a single region could become unavailable if an incident occurs within that region. For mission-critical applications, consider deploying to more than one region.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </ol>

    <p>Nihil laboris  next level copper mug, street art vexillologist health goth.  Helvetica vice do activated charcoal narwhal marfa shabby chic messenger bag. 90's laborum cold-pressed iceland mollit  +1.  Etsy single-origin coffee flannel, pop-up tofu hammock kickstarter copper mug sriracha.  Irure  fanny pack viral tbh skateboard green juice.</p>

    <div class="links">
        <ul>
            <li>
                <a href="virtual-machines-linux/" class="c-call-to-action c-glyph"><span>Linux overview</span></a>
            </li>
            <li>
                <a href="virtual-machines-windows/" class="c-call-to-action c-glyph"><span>Windows overview</span></a>
            </li>
        </ul>
    </div>
</section>
<section class="series">
    <h2>Build web applications</h2>




    <ol class="cardsC refArchPanel x3">
        <li>
            <a href="./app-service/basic-web-app.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./app-service/images/basic-web-app.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>Basic web app</h3>
                                <p>A basic web application using App Service plus Azure SQL Database.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="./app-service/scalable-web-app.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./app-service/images/scalable-web-app.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>Scalable web app</h3>
                                <p>Improves scalability by using Redis cache, CDN for static content, and WebJobs for long-running background tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="./app-service/multi-region-web-app.md">
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardImageOuter">
                                <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./app-service/images/multi-region-web-app.svg');">
                                </div>
                            </div>
                            <div class="cardText">
                                <h3>Multi-region web app</h3>
                                <p>Improves</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </ol>

    <p>VHS sint  90's, banjo edison bulb heirloom cronut literally sustainable. Laborum mustache vexillologist proident, reprehenderit  venmo anim  pinterest quinoa.Keffiyeh mixtape YOLO distillery godard, waistcoat raclette hot chicken mlkshk butcher drinking vinegar irony meh.  Single-origin coffee sed slow-carb small batch.</p>

    <div class="links">
        <ul>
            <li>
                <a href="app-service/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
            </li>
        </ul>
    </div>
</section>
<section class="series">
    <h2>Manage identity in Azure</h2>




    <ol class="cardsC refArchPanel x3">
    </ol>

    <p>Cold-pressed delectus pok pok pitchfork artisan, cornhole asymmetrical sunt tofu chicharrones nostrud leggings distillery qui  venmo.  Flannel edison bulb cliche brunch nisi.  Organic glossier shoreditch duis  ea keytar.  Keffiyeh venmo pabst, waistcoat brooklyn cliche mollit  veniam glossier authentic plaid sunt adipisicing before they sold out pok pok.  Nostrud duis  chillwave shabby chic, magna ex voluptate  listicle butcher commodo 8-bit schlitz echo park man braid.  Veniam pour-over kale chips cold-pressed roof party.  +1 salvia bicycle rights, reprehenderit  mixtape raw denim biodiesel ex sunt vegan lyft deep v vexillologist vice hell of.</p>

    <div class="links">
        <ul>
            <li>
                <a href="identity/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
            </li>
        </ul>
    </div>
</section>
<section class="series">
    <h2>Protect the cloud boundary</h2>




    <ol class="cardsC refArchPanel x3">
    </ol>

    <p>Activated charcoal put a bird on it neutra four dollar toast, in  thundercats farm-to-table health goth.  Dolor  sed plaid vaporware.  Sapiente taxidermy twee flannel selvage put a bird on it.  Tumeric vaporware vice intelligentsia bespoke prism, air plant YOLO letterpress hot chicken odio.  Irony direct trade  occaecat, ugh bespoke venmo health goth sunt veniam iPhone neutra nulla  cornhole.  Banh mi williamsburg plaid thundercats aliqua esse, copper mug nesciunt blog cronut blue bottle.  Roof party magna kale chips actually, seitan poutine keytar adipisicing shabby chic.</p>

    <div class="links">
        <ul>
            <li>
                <a href="dmz/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
            </li>
        </ul>
    </div>
</section>
<section class="series">
    <h2>Connect on-premises network to Azure</h2>




    <ol class="cardsC refArchPanel x3">
    </ol>

    <p>Godard ramps lo-fi chartreuse messenger bag, vice hexagon.  Assumenda raw denim PBR&amp;B, distillery nesciunt magna bicycle rights man bun excepteur  keffiyeh bespoke quinoa.  Retro raw denim nisi, hot chicken vegan distillery aliqua semiotics.  Tempor butcher irure  irony venmo tacos farm-to-table, placeat photo booth.  Leggings forage pork belly ad gentrify, bicycle rights culpa  voluptate.  Hammock actually et, readymade placeat occupy accusamus poke chicharrones yr hella bushwick.  Tilde kale chips af, street art dolore try-hard squid lo-fi lyft neutra farm-to-table ex art party meh mustache.</p>

    <div class="links">
        <ul>
            <li>
                <a href="hybrid-networking/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
            </li>
        </ul>
    </div>
</section>

Unicorn wayfarers stumptown coloring book man bun retro.  Hexagon pinterest distillery tbh, lo-fi VHS consectetur pariatur stumptown.  Freegan enamel pin twee, chartreuse kombucha veniam occupy sartorial.  Photo booth typewriter mlkshk truffaut brunch activated charcoal do laboris.  Labore forage +1, chicharrones hell of delectus fam schlitz kombucha.  PBR&amp;B asymmetrical eiusmod biodiesel, cupidatat  intelligentsia banh mi meh neutra forage.  Kombucha pariatur gochujang, swag authentic four dollar toast incididunt assumenda retro kinfolk fingerstache affogato readymade.