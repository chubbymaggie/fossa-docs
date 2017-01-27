# Policies Overview

A **policy** in FOSSA is a collection of **rules** that enables control over which issues are created in your project for **licenses** and **dependencies** (**projects**).  You can think of policies like license firewalls for your project.

## Rules

A **rule** is a restriction built around **licenses** and/or **projects**. You may *deny*, *flag*, or *approve* any **license** or **dependency** that can be used with your **project**.

**DENY**:
Deny a **dependency** or **license** from being included in your project. This will tell the issue scanners to create an issue that requires the **license** or **dependency** to be removed somehow. Example:

![Deny rules example](/img/deny-rules.png "Deny rules example")

**FLAG**:
Flag a **dependency** or **license** if it is included with your project. This will tell the issue scanners to create an issue that requires manual approval. Example:

![Flag rules example](/img/flag-rules.png "Flag rules example")

**APPROVE**:
Allow a **dependency** or **license** to be included with your project. This tells the issue scanners to never create issues for the chosen **dependency** or **license**. Example:

![Approve rules example](/img/approve-rules.png "Approve rules example")

## Pre-installed Policies

FOSSA comes equipped with 3 standard, editable policies:

![Standard policies](/img/bundles.png "Standard policies")

**Standard Bundle Distribution**: Recommended for software deployed on **on-premises**. E.G. Apache Hadoop.

**Single-Binary Distribution**: Recommended for **embedded software**. E.G. A mobile app.

**Website/Hosted Service**: Recommended for **websites**. E.G. fossa.io.
