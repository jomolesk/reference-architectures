---
title: Azure Guidance
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
<link href="./_css/pnp.css" type="text/css" rel="stylesheet" />
<style type="text/css">
main div:first-child .content:first-child  {
    max-width: 1200px;
    margin: 0 auto;
}
.pnp .series .links {
    float: none;
    margin-top: 8px;
}
.pnp header {
    margin-left:0;
    margin-right: 0;
}
</style>
<div id="main" class="v2 pnp">
    <div class="container">
        <header>
            <div>
                <a href="http://aka.ms/mspnp" title="patterns & practices"><img src="/azure/architecture/_themes/images/pnp-logo.svg" alt="patterns &amp; practices"></a>
                    <h1>Azure Reference Architectures</h1>
            </div>
        </header>
        <p>
        Our reference architectures are arranged by scenario, with several related architectures for each scenario.
        Each reference architecture includes best practices and considerations for availability, security, scalability, and manageability. Most of them also include an Azure Resource Manager template that you can deploy.</p>
        <section class="series">
    <h2>Run Linux virtual machine workloads</h2>
    <ul class="cardsD panel x4">
</ul>
    <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
    <div class="links">
        <a href="virtual-machines-linux/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Run Windows virtual machine workloads</h2>
    <ul class="cardsD panel x4">
</ul>
    <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
    <div class="links">
        <a href="virtual-machines-windows/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Build web applications</h2>
    <ul class="cardsD panel x4">
</ul>
    <p>Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.</p>
    <div class="links">
        <a href="app-service/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Manage identity in Azure</h2>
    <ul class="cardsD panel x4">
</ul>
    <p>Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity.</p>
    <div class="links">
        <a href="identity/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Connect an on-premises network to Azure</h2>
    <ul class="cardsD panel x3">
</ul>
    <p>Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.</p>
    <div class="links">
        <a href="hybrid-networking/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Protect the cloud boundary</h2>
    <ul class="cardsD panel x4">
</ul>
    <p>An on-premises network can be connected to a virtual network in Azure by using an Azure VPN gateway. The network boundary between these two environments can expose areas of weakness in terms of security, and it is necessary to protect this boundary to block unauthorized requests. Similar protection is required for applications running on VMs in Azure that are exposed to the public Internet.</p>
    <div class="links">
        <a href="dmz/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>

        </p>
    </div>
</div>