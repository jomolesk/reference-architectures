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
                        
                        <section class="series">
    <h2>Run Linux virtual machine workloads</h2>
    <ul class="cardsC refArchPanel x4">
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
</ul>
    <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
    <div class="links">
        <a href="virtual-machines-linux/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Run Windows virtual machine workloads</h2>
    <ul class="cardsC refArchPanel x4">
    <li>
        <a href="./virtual-machines-windows/single-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/single-vm.svg');">
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
        <a href="./virtual-machines-windows/multi-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/multi-vm.svg');">
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
        <a href="./virtual-machines-windows/n-tier.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/n-tier.svg');">
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
        <a href="./virtual-machines-windows/multi-region-application.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/multi-region-application.svg');">
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
</ul>
    <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
    <div class="links">
        <a href="virtual-machines-windows/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Build web applications</h2>
    <ul class="cardsC refArchPanel x4">
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
</ul>
    <p>Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.</p>
    <div class="links">
        <a href="app-service/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Manage identity in Azure</h2>
    <ul class="cardsC refArchPanel x4">
    <li>
        <a href="./identity/azure-ad.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/azure-ad.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Integrate with Azure AD</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./identity/adds-extend-domain.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/adds-extend-domain.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Extend your AD domain to Azure</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./identity/adds-forest.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/adds-forest.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Create an AD forest in Azure</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./identity/adfs.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/adfs.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Run AD FS in Azure</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity.</p>
    <div class="links">
        <a href="identity/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Connect an on-premises network to Azure</h2>
    <ul class="cardsC refArchPanel x3">
    <li>
        <a href="./hybrid-networking/expressroute.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./hybrid-networking/images/expressroute.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./hybrid-networking/vpn.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./hybrid-networking/images/vpn.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Site-to-site VPN</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./hybrid-networking/expressroute-vpn-failover.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./hybrid-networking/images/expressroute-vpn-failover.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute with VPN fallback</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.</p>
    <div class="links">
        <a href="hybrid-networking/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Protect the cloud boundary</h2>
    <ul class="cardsC refArchPanel x4">
    <li>
        <a href="./dmz/secure-vnet-dmz.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./dmz/images/secure-vnet-dmz.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>DMZ between Azure and on-premises</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./dmz/secure-vnet-hybrid.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./dmz/images/secure-vnet-hybrid.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>DMZ between Azure and the Internet</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>An on-premises network can be connected to a virtual network in Azure by using an Azure VPN gateway. The network boundary between these two environments can expose areas of weakness in terms of security, and it is necessary to protect this boundary to block unauthorized requests. Similar protection is required for applications running on VMs in Azure that are exposed to the public Internet.</p>
    <div class="links">
        <a href="dmz/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>

                        </section>
                    </li>
                    
                    <li>
                        <a href="#virtual-machines-linux">Run Linux virtual machine workloads</a>
                        <div id="virtual-machines-linux" class="catalog panelContent">
                            <section class="series">
                                <h2>Run Linux virtual machine workloads</h2>
                                <ul class="cardsC refArchPanel x4">
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
</ul>
                                <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
                                <div class="links">
                                    <a href="virtual-machines-linux/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#virtual-machines-windows">Run Windows virtual machine workloads</a>
                        <div id="virtual-machines-windows" class="catalog panelContent">
                            <section class="series">
                                <h2>Run Windows virtual machine workloads</h2>
                                <ul class="cardsC refArchPanel x4">
    <li>
        <a href="./virtual-machines-windows/single-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/single-vm.svg');">
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
        <a href="./virtual-machines-windows/multi-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/multi-vm.svg');">
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
        <a href="./virtual-machines-windows/n-tier.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/n-tier.svg');">
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
        <a href="./virtual-machines-windows/multi-region-application.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./virtual-machines-windows/images/multi-region-application.svg');">
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
</ul>
                                <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
                                <div class="links">
                                    <a href="virtual-machines-windows/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#app-service">Build web applications</a>
                        <div id="app-service" class="catalog panelContent">
                            <section class="series">
                                <h2>Build web applications</h2>
                                <ul class="cardsC refArchPanel x4">
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
</ul>
                                <p>Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.</p>
                                <div class="links">
                                    <a href="app-service/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#identity">Manage identity in Azure</a>
                        <div id="identity" class="catalog panelContent">
                            <section class="series">
                                <h2>Manage identity in Azure</h2>
                                <ul class="cardsC refArchPanel x4">
    <li>
        <a href="./identity/azure-ad.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/azure-ad.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Integrate with Azure AD</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./identity/adds-extend-domain.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/adds-extend-domain.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Extend your AD domain to Azure</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./identity/adds-forest.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/adds-forest.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Create an AD forest in Azure</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./identity/adfs.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./identity/images/adfs.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Run AD FS in Azure</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
                                <p>Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity.</p>
                                <div class="links">
                                    <a href="identity/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#hybrid-networking">Connect an on-premises network to Azure</a>
                        <div id="hybrid-networking" class="catalog panelContent">
                            <section class="series">
                                <h2>Connect an on-premises network to Azure</h2>
                                <ul class="cardsC refArchPanel x">
    <li>
        <a href="./hybrid-networking/expressroute.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./hybrid-networking/images/expressroute.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./hybrid-networking/vpn.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./hybrid-networking/images/vpn.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Site-to-site VPN</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./hybrid-networking/expressroute-vpn-failover.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./hybrid-networking/images/expressroute-vpn-failover.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute with VPN fallback</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
                                <p>Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.</p>
                                <div class="links">
                                    <a href="hybrid-networking/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#dmz">Protect the cloud boundary</a>
                        <div id="dmz" class="catalog panelContent">
                            <section class="series">
                                <h2>Protect the cloud boundary</h2>
                                <ul class="cardsC refArchPanel x4">
    <li>
        <a href="./dmz/secure-vnet-dmz.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./dmz/images/secure-vnet-dmz.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>DMZ between Azure and on-premises</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./dmz/secure-vnet-hybrid.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./dmz/images/secure-vnet-hybrid.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>DMZ between Azure and the Internet</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
                                <p>An on-premises network can be connected to a virtual network in Azure by using an Azure VPN gateway. The network boundary between these two environments can expose areas of weakness in terms of security, and it is necessary to protect this boundary to block unauthorized requests. Similar protection is required for applications running on VMs in Azure that are exposed to the public Internet.</p>
                                <div class="links">
                                    <a href="dmz/" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                </ul>
            </li>
        </ul>
    </div>
</div>