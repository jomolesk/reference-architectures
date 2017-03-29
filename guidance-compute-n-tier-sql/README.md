Azure three-tier web application Blueprint compliance architecture for FedRAMP
==============================================================================

- [Overview](#overview)
- [Architecture and components](#architecture-and-components)
- [Deployment instructions](#deployment-instructions])
- [Further reading](#further-reading)

Overview
========

This Azure Blueprint compliance architecture provides a baseline resource deployment in Azure from which customers can build upon to achieve compliance with NIST SP 800-53 security controls required by FedRAMP. The accompanying Azure Resource Manager (ARM) templates deploy a notional three-tier web-based application architecture that demonstrates many best practices for resource deployment in Azure.

An accompanying Blueprint compliance matrix is provided showing security control inheritance from Azure and where deployed resources and configurations align with NIST SP 800-53 security controls, thereby enabling organizations to fast-track compliance obligations.

Architecture and components
===========================

This Azure Blueprint compliance architecture deploys a notional three-tier web-based application architecture. 

![alt text](images/n-tier-diagram.png?raw=true "Azure Blueprint FedRAMP three-tier web-based application compliance architecture")

The components of this architecture include:

 - **Production VNet**. The production [VNet](https://docs.microsoft.com/en-us/azure/Virtual-Network/virtual-networks-overview) (Virtual Network) hosts the application and other operational resources deployed in Azure. Th VNet contains several subnets which are used for isolating and managing network traffic.

 - **Web tier.** The web tier handles incoming HTTP requests. Responses are returned through this tier.

 - **Business tier:** This tier implements business processes and other functional logic for the system.

 - **Database tier:** The database tier provides persistent data storage, using [SQL Server Always On Availability Groups](https://msdn.microsoft.com/en-us/library/hh510230.aspx) for high availability.

 - **Management subnet:** This subnet contains resources that implement management capabilities for the workloads running in the production VNet.

 - **Jumpbox.** Also, called a [bastion host](https://en.wikipedia.org/wiki/Bastion_host), this secure VM is used by administrators to connect to VMs in the production VNet. The jumpbox has an network security group that allows remote desktop (RDP) traffic only from public IP addresses on a safe list.

 - **Network Security Groups:** [NSGs](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-nsg) contain access control lists that allow or deny traffic to subnets and VMs.

 - **Active Directory Domain Services (AD DS):** This architecture provides a dedicated [Active Directory](https://msdn.microsoft.com/library/azure/jj156090.aspx) [Active Directory Domain Services](https://technet.microsoft.com/library/dd448614.aspx) deployment.

 - **Logging and audit:** [Azure Activity Log](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview-activity-logs) captures operations taken on resources. [Azure Monitor](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-get-started) provides a single source for monitoring the activity log, metrics, and diagnostic logs of all Azure resources.

 - **High availability:** Server workloads are grouped in a [Availability Set](https://docs.microsoft.com/en-us/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) to ensure high availability of deployed virtual machines.

- **Storage Service Encryption:** [SSE](https://docs.microsoft.com/en-us/azure/storage/storage-service-encryption) (Storage Service Encryption) helps protect data at rest by automatically encrypting data prior to persisting to storage and decrypts prior to retrieval.

- **Geo-redundant storage:** [GRS](https://docs.microsoft.com/en-us/azure/storage/storage-redundancy) (geo-redundant storage) replicates data to a secondary region that is hundreds of miles away from the primary region.

 - **Access control restrictions:** Azure Active Directory's [Role-Based Access Control](https://docs.microsoft.com/en-gb/azure/active-directory/role-based-access-control-configure) (RBAC) enables management of the resources in deployed by this architecture. [RBAC](https://docs.microsoft.com/en-gb/azure/active-directory/role-based-access-control-configure) can also be used to restrict the operations that DevOps can perform on each tier.
 
 - **Resource Management**: Azure resources such as VMs, VNets, and load balancers are managed by grouping them together into [Azure Resource Groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groupsresource). 

Deployment instructions
=======================
These Azure Resource Manager (ARM) templates automatically deploy the Azure resources for a notional three-tier web-based application architecture. The architecture builds on [Azure Reference Architectures](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/) and makes use of AzureCAT's [Template Building Blocks project](https://github.com/mspnp/template-building-blocks), which provides a series of ARM templates that can be use to deploy a collection of resources that, together, make up a building block for larger solutions.

## Deployment process

A deployment for this reference architecture is available on
[GitHub](https://github.com/jomolesk/reference-architectures/tree/master/guidance-compute-n-tier-sql). The templates can be cloned or downloaded if customization of parameters are required. The reference architecture is deployed in three stages. To deploy the architecture, follow these steps for each deployment stage:

### Stage 1

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2FvirtualNetwork.azuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2FvirtualNetwork.azuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/AzureGov.png"/>
</a>
<a href="http://armviz.io/#/?load=uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2FvirtualNetwork.azuredeploy.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a>

1. Click on the **Deploy to Azure** or **Deploy to Azure Gov** button to begin the first stage of the deployment. The link will open the Azure portal.
2. The **resource group** name is defined in the parameter file for this architecture, so select **Create new** and enter `ra-ntier-sql-network-rg` in the text box.
3. Select a region such as `USGov Virginia` from the **Location** drop down box.
4. Do not edit the **Template Root Uri** or the **Parameter Root Uri** text boxes. This template can be cloned or downloaded if customization of parameters is required.
5. Review the terms and conditions, then click the **I agree to the terms and conditions stated above** checkbox.
6. Click on the **Purchase** button.
7. Check the Azure portal notifications for a message that this deployment stage is complete, then move on to stage 2.

![alt text](images/deploy-1.png?raw=true "Deployment stage 1")

### Stage 2

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2Fworkload.azuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2Fworkload.azuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/AzureGov.png"/>
</a>
<a href="http://armviz.io/#/?load=uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2Fworkload.azuredeploy.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a>

1. Click on the **Deploy to Azure** or **Deploy to Azure Gov** button to begin the second stage of the deployment. The link will open the Azure portal.
2. The **resource group** name is defined in the parameter file for this architecture, so select **Create new** and enter `ra-ntier-sql-workload-rg` in the text box.
3. Select a region such as `USGov Virginia` from the **Location** drop down box.
4. Do not edit the **Template Root Uri** or the **Parameter Root Uri** text boxes. This template can be cloned or downloaded if customization of parameters is required.
5. Review the terms and conditions, then click the **I agree to the terms and conditions stated above** checkbox.
6. Click on the **Purchase** button.
7. Check the Azure portal notifications for a message that this deployment stage is complete, then move on to stage 3.

![alt text](images/deploy-2.png?raw=true "Deployment stage 2")

### Stage 3

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2Fsecurity.azuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2Fsecurity.azuredeploy.json" target="_blank">
    <img src="http://azuredeploy.net/AzureGov.png"/>
</a>
<a href="http://armviz.io/#/?load=uri/https%3A%2F%2Fraw.githubusercontent.com%2Fjomolesk%2Freference-architectures%2Fmaster%2Fguidance-compute-n-tier-sql%2Fsecurity.azuredeploy.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a>

1. Click on the **Deploy to Azure** or **Deploy to Azure Gov** button to begin the second stage of the deployment. The link will open the Azure portal.
2. The **resource group** name is defined in the parameter file for this architecture, so select **Use existing** and enter `ra-ntier-sql-network-rg` in the text box.
3. Select a region such as `USGov Virginia` from the **Location** drop down box.
4. Do not edit the **Template Root Uri** or the **Parameter Root Uri** text boxes. This template can be cloned or downloaded if customization of parameters is required.
5. Review the terms and conditions, then click the **I agree to the terms and conditions stated above** checkbox.
6. Click on the **Purchase** button.
7. Check the Azure portal notifications for a message that this deployment stage is complete.

![alt text](images/deploy-3.png?raw=true "Deployment stage 3")

### (Optional) PowerShell Deployment 

To deploy the architecture through PowerShell, follow these steps:

1. Download or clone the solution folder from GitHub to your local machine.
2. Run the following command: `.\Deploy-ReferenceArchitecture.ps1`.
3. Enter your Azure subscription ID.
4. Enter the appropriate environment, such as `AzureCloud` or `AzureUSGovernment`.
5. Enter an Azure region, such as `USGov Virginia`.

## Deployment considerations

Deploying these templates will create Azure resources within your subscription. You will be responsible for the costs associated with these resources, so it is important that you review the applicable pricing and legal terms associated with all resources and offerings deployed as part of this template. For cost estimates, you can use the [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator).

This is a complex deployment that may take more than 2 hours to deploy. Progress can be monitored from the resource group blade in the Azure portal. If for some reason the deployment fails, to avoid incurring cost and orphan resources, it is advisable to delete the resource group in its entirety, fix the issue, and redeploy the template.

The parameter files for these templates include hard-coded administrator user names and passwords. It is **strongly recommended** that you immediately change both on all deployed VMs. Select each VM in virtual machines blade in the Azure portal, then click on reset password. Select reset password in the mode drop down box, then select a new user name and password. Click the update button to save the new user name and password.

Further reading
===============

Further best practice information and recommendations for configuring and securing a multi-tier application in Azure can be found in
 [Running Windows VMs for an N-tier architecture on Azure](https://docs.microsoft.com/en-gb/azure/guidance/guidance-compute-n-tier-vm).

Best practices on Azure network security and a decision-making matrix can be found in [Microsoft cloud services and network
security](https://docs.microsoft.com/en-gb/azure/best-practices-network-security).
