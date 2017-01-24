---
title: Azure Guidance
description: Azure Reference Architectures
layout: LandingPage
---
<link href="/azure/architecture/_css/hubCards.css" type="text/css" rel="stylesheet" />
<style type="text/css" >
.panel.x2 li {
    flex-basis: 25% !important;
}
</style>
# Azure Reference Architectures
[!INCLUDE [header](./_includes/header.md)]

Our reference architectures are arranged by scenario, with multiple related architectures grouped together.
Each individual architecture offers recommended practices and prescriptive steps, as well as an executable component that embodies the recommendations.
Many of the architectures are progressive; building on top of preceding architectures that have fewer requirements.

<section class="series">
    <h2>Linux VM workloads</h2><ul class="cardsD panel x2">
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
                            <h3>Running a Linux VM</h3>
                            <p>How to run a Linux VM on Azure, paying attention to scalability, resiliency, manageability, and security.</p>
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
                            <h3>Running multiple VMs</h3>
                            <p>How to run multiple VM instances on Azure for scalability, resiliency, manageability, and security.</p>
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
                            <h3>Running Linux VMs for an N-tier architecture on Azure</h3>
                            <p>How to run Linux VMs for an N-tier architecture in Microsoft Azure.</p>
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
                            <h3>Running Linux VMs in multiple regions for high availability</h3>
                            <p>How to deploy VMs in multiple regions on Azure for high availability and resiliency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
    <div class="links">
        <a href="./virtual-machines-linux/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Windows VM workloads</h2><ul class="cardsD panel x2">
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
                            <h3>Running a Windows VM</h3>
                            <p>How to run a VM on Azure, paying attention to scalability, resiliency, manageability, and security.</p>
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
                            <h3>Running multiple VMs</h3>
                            <p>How to run multiple VM instances on Azure for scalability, resiliency, manageability, and security.</p>
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
                            <h3>Running Windows VMs for an N-tier architecture</h3>
                            <p>How to implement a multi-tier architecture on Azure, paying particular attention to availability, security, scalability, and manageability security.</p>
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
                            <h3>Running Windows VMs in multiple regions for high availability</h3>
                            <p>How to deploy VMs in multiple regions on Azure for high availability and resiliency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.</p>
    <div class="links">
        <a href="./virtual-machines-windows/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Azure App Service</h2><ul class="cardsD panel x3">
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
                            <h3>Basic web application</h3>
                            <p>Recommended architecture for a basic web application running in Microsoft Azure.</p>
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
                            <h3>Scalable web application</h3>
                            <p>Improving scalability in a web application running in Microsoft Azure.</p>
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
                            <h3>Multi-region web application</h3>
                            <p>Recommended architecture for web application with high availability, running in Microsoft Azure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.</p>
    <div class="links">
        <a href="./app-service/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Identity management</h2><ul class="cardsD panel x2">
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
                            <h3>Integrating on-premises Active Directory domains with Azure Active Directory</h3>
                            <p>How to implement a secure hybrid network architecture using Azure Active Directory.</p>
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
                            <h3>Extending Active Directory Domain Services (AD DS) to Azure</h3>
                            <p>How to implement a secure hybrid network architecture with Active Directory authorization in Azure.</p>
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
                            <h3>Creating an Active Directory Domain Services (DS) resource forest in Azure</h3>
                            <p>How to create a trusted Active Directory domain in Azure.</p>
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
                            <h3>Implementing Active Directory Federation Services (AD FS) in Azure</h3>
                            <p>How to implement a secure hybrid network architecture with Active Directory Federation Service authorization in Azure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity.</p>
    <div class="links">
        <a href="./identity/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Connect an on-premises network to Azure</h2><ul class="cardsD panel x3">
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
                            <h3>Implementing a hybrid network rchitecture with Azure and on-premises VPN</h3>
                            <p>How to implement a secure site-to-site network architecture that spans an Azure virtual network and an on-premises network connected using a VPN.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
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
                            <h3>Implementing a Hybrid Network Architecture with Azure ExpressRoute</h3>
                            <p>How to implement a secure site-to-site network architecture that spans an Azure virtual network and an on-premises network connected using Azure ExpressRoute.</p>
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
                            <h3>Implementing a highly available hybrid network architecture</h3>
                            <p>How to implement a secure site-to-site network architecture that spans an Azure virtual network and an on-premises network connected using ExpressRoute with VPN gateway failover.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.</p>
    <div class="links">
        <a href="./hybrid-networking/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
<section class="series">
    <h2>Network DMZ</h2><ul class="cardsD panel x2">
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
                            <h3>Implementing a secure hybrid network architecture in Azure</h3>
                            <p>How to implement a secure hybrid network architecture in Azure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
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
                            <h3>Implementing a DMZ between Azure and the Internet</h3>
                            <p>How to implement a secure hybrid network architecture with Internet access in Azure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
    <p>An on-premises network can be connected to a virtual network in Azure by using an Azure VPN gateway. The network boundary between these two environments can expose areas of weakness in terms of security, and it is necessary to protect this boundary to block unauthorized requests. Similar protection is required for applications running on VMs in Azure that are exposed to the public Internet.</p>
    <div class="links">
        <a href="./dmz/index.md" class="c-call-to-action c-glyph"><span>Series overview</span></a>
    </div>
</section>
