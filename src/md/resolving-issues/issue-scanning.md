# Issue Scans
  This document will tell you all you need to know about how FOSSA's issue scanner works.
## **How does FOSSA trigger an issue scan?**

After a project has been added and built by FOSSA it is able to be scanned for issues. This can be done either manually via the Project Summary page, or will be done automatically by FOSSA.  

FOSSA will only scan revisions for issues automatically if they meet the following criteria:

1. Revision belongs to a tracking branch
2. Revision is the head of a tracking branch
3. Revision was built successfully
4. Revision has not been scanned yet

***NOTE:*** By default, when a project is added to FOSSA, it selects one branch to be the tracking branch. This is set to either "master", "trunk", or the first branch FOSSA finds. Tracking branches can also be manually added/removed via the Project Summary page:

![Tracking branches](/img/tracking-branches.png)

## **What kind of issues does FOSSA look for?**

### Unlicensed dependencies  
  This will be reported if FOSSA finds any dependencies that have no license associated with them.
### Disallowed project  
  This will be reported if FOSSA finds any licenses in your project that are marked as `DENY` in the projects Policy
### Flagged project  
  This will be reported if FOSSA finds any licenses in your project that are marked as `FLAG` in the projects Policy
### Missing attribution file  
  This will be reported if FOSSA finds either an outdated attribution file, or doesn't find one at all. By default, scanning for this is turned off.  

  To turn this on, Go to `Project > Settings > Issue scanners` and check `Raise issue if attribution file is outdated`:

![Missing attr](/img/missing-attribution-scan.png)


## **How does FOSSA find issues?**

Several factors go into issue scans, one of the biggest being the Scanner Detail Settings. This is found under the Project Settings tab: (`Project > Settings > Issue scanners`)

![Scanner detail settings](/img/scanner-detail.png)

On this page, scan details are configured for four different categories. For each of these, two factors go into issue scans: **Level of Detail** and **File Coverage Detail**.

### **Level of Detail**

Level of detail refers to how deep in the dependency tree FOSSA will look. For only direct dependencies, depth would be 1. For direct dependencies and their dependencies, depth would be 2, etc.

By default, Fossa offers three quick settings to set Level of detail:

1. Limited (depth of 3)
2. Standard (depth of 5)
3. Full (depth of 15)

![Level of detail](/img/level-of-detail.png)

Level of detail can also be customized further for each scan category:

![Level of detail depth](/img/level-of-detail-depth.png)


### **File Coverage Detail**

   Each section has two options for file coverage, **Common License Files** or **100% Code Coverage**:  

* **Common License Files**

   This option tells FOSSA to only consider common license files i.e `LICENSE, README, COPYING`, package files, etc...

* **100 Code Coverage**

   This will scan every file in the project for license information. This will find any embedded licenses in files that were left out of the Common License Files.


![Common or 100](/img/common-100-coverage.png)

### **Scan detail categories**  

There are four scan detail settings to customize.

* **Default & Browsing UI**  
  This sets the depth and file coverage for most areas of the FOSSA UI, reporting, etc.

* **Unlicensed Dependency Scanner**  
  This sets the depth and file coverage for scanning for an unlicensed dependency. If set to **Common License Files**, the scan results will be a little more noisy, so for *Limited* and *Standard* Level of Detail, this is set to **100% Code Coverage**.

* **Policy Conflict Scanner**  
  This sets the depth and file coverage for policy checks. For information on policies, view the [Policy Documentation](../policies/overview)

* **Attribution File/Bill-of-Materials (BOM) Generation**  
  This sets the depth and file coverage for Attribution files

## **How do you resolve these issues?**

If issues are found, you can take action on them by navigating to the Project Summary page, and clicking `Review & Fix`:

![Found issues](/img/found-issues.png)

For each type of issue found, FOSSA allows you to simply ignore the issue, or resolve it. The way to resolve issues varies by the type of issue:

* For unlicensed dependencies, you are able to resolve issues by adding a license to the dependency. 
* For flagged or disallowed projects, you are able to resolve issues by ignoring a license found on the dependency.

You can create a JIRA ticket from this screen as well.

When selecting a license or dependency, you may view the paths to this dep in the code:

![issue relationships](/img/issue-relationships.png)

the licenses associated with it:

![issue licenses](/img/issue-licenses.png)

and the issue change history:

![issue history](/img/issue-history.png)