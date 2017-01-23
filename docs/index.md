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

                        </section>
                    </li>
                    
                    <li>
                        <a href="#virtual-machines-linux">Run Linux virtual machine workloads</a>
                        <div id="virtual-machines-linux" class="catalog panelContent">
                            <section class="series">
                                <h2>Run Linux virtual machine workloads</h2>
                                <ul class="cardsD panel x4">
</ul>
                                <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
                                <div class="links">
                                    <a href="virtual-machines-linux/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#virtual-machines-windows">Run Windows virtual machine workloads</a>
                        <div id="virtual-machines-windows" class="catalog panelContent">
                            <section class="series">
                                <h2>Run Windows virtual machine workloads</h2>
                                <ul class="cardsD panel x4">
</ul>
                                <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
                                <div class="links">
                                    <a href="virtual-machines-windows/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#app-service">Build web applications</a>
                        <div id="app-service" class="catalog panelContent">
                            <section class="series">
                                <h2>Build web applications</h2>
                                <ul class="cardsD panel x4">
</ul>
                                <p>Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.</p>
                                <div class="links">
                                    <a href="app-service/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#identity">Manage identity in Azure</a>
                        <div id="identity" class="catalog panelContent">
                            <section class="series">
                                <h2>Manage identity in Azure</h2>
                                <ul class="cardsD panel x4">
</ul>
                                <p>Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity.</p>
                                <div class="links">
                                    <a href="identity/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#hybrid-networking">Connect an on-premises network to Azure</a>
                        <div id="hybrid-networking" class="catalog panelContent">
                            <section class="series">
                                <h2>Connect an on-premises network to Azure</h2>
                                <ul class="cardsD panel x">
</ul>
                                <p>Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.</p>
                                <div class="links">
                                    <a href="hybrid-networking/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                    <li>
                        <a href="#dmz">Protect the cloud boundary</a>
                        <div id="dmz" class="catalog panelContent">
                            <section class="series">
                                <h2>Protect the cloud boundary</h2>
                                <ul class="cardsD panel x4">
</ul>
                                <p>An on-premises network can be connected to a virtual network in Azure by using an Azure VPN gateway. The network boundary between these two environments can expose areas of weakness in terms of security, and it is necessary to protect this boundary to block unauthorized requests. Similar protection is required for applications running on VMs in Azure that are exposed to the public Internet.</p>
                                <div class="links">
                                    <a href="dmz/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                </ul>
            </li>
        </ul>
    </div>
</div>