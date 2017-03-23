# Prerequisites for FOSSA On-Prem

**This doc only applies for FOSSA on-prem users!  Ignore if you use app.fossa.io**

- Linux Box with:
  - Ubuntu 14.04 LTS
  - Static IP address (accessible to users in your organization)
  - &gt; 16 GB RAM
  - &gt; 80 GB HDD
  - Docker 1.3+ (config'd to use `devicemapper` over AUFS), Bash 3.2+, curl & tar 
  - Port 80 (or whatever configured) exposed in firewall
- SMTP server 
- Postgres 9.3+ on a machine with >16 GB RAM, >30 GB HDD


**Prepare the following:**

- External IP (accessible to your users) of the box running FOSSA
- SMTP server host/port
- Postgres host, port, username & password
- Database in Postgres named "fossa", accessible to the user

Make sure all of these endpoints are accessible from the machine running FOSSA.

Once ready, [contact support](mailto:support@fossa.io) to schedule an installation or `ssh` into your Ubuntu machine and proceed to [install FOSSA](../installation-guide).