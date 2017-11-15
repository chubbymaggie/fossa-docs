# On-Prem Architecture Overview

When FOSSA is installed behind your firewall, it will run an environment that's fully sealed within your organization.

![](https://static.notion-static.com/a1f737832a4c492f87b54d5c8dca540d/Untitled)

 **Key Factors** 

1. No proprietary code will ever leave your premises
2. No scan data, signatures or hints are ever sent to FOSSA's servers — custom OSS database is fully built and maintained on premise
3. Installing FOSSA creates no additional InfoSec footprint
  - (a) With internet access, FOSSA will download and analyze 3rd-party code anonymously from the web, equivalent to current behavior on developer machines or CI environments
  - (b) In fully air-gapped environments (no internet), all network activity can be routed through internal code and artifact hosts 

For security info about our hosted version or development process, please visit https://fossa.io/security

## Importing from Custom URLs or Code Hosts

By default, FOSSA works best with rich service brokers (like Github, Bitbucket, Gitlab). However if you have code living in a custom code or artifact host, FOSSA's on-prem version can import from a raw URL:

![](https://static.notion-static.com/4c06a9dadbe64b948b20914192c4990a/Untitled)

FOSSA supports any URL from supported VCS, artifact hosts/registries and tools that live inside your intranet. After importing custom code, FOSSA will scan it for all branches/tags and set up automatic updates/tracking for the default branch: 

![](https://static.notion-static.com/e5417f66f0694dd8a6cf33f58a203d74/Untitled)

By default, FOSSA will enable daily or hourly scans on your default branch. If FOSSA finds any issues, it will notifying you with email reports that will link back to your dashboard where you can analyze and fix the issue:

![](https://static.notion-static.com/cdc8d5a4180b4457a71b6c427bfc9c51/Untitled)

Congrats! Now you have compliance running internally at your company in the background of your workflow.

## Hooking Into Development

If you'd like to surface/enforce its checks deeper within your organization, you can easily configure it to add more feedback to your internal tools.

Importing through Github, Gitlab or Bitbucket will immediately prepare deeper integrations that you can toggle including:

- Continual per-commit scanning via Webhooks
- Automated code review (pull request) feedback / blocking
- Issue tracker syncing
- Continuous integration and test plugins
- Commit status integration

![](https://static.notion-static.com/65d5892e86fb42bdba53f09a21115f1f/Untitled)

![](https://static.notion-static.com/7813ffc908d04f33903d518ba577344e/Untitled)

FOSSA also comes with a full suite of plugins and integrations into other tools that will work all on-premises:

- [CircleCI](http://fossa.io/docs/integrating-tools/circleci/)
- [TravisCI](http://fossa.io/docs/integrating-tools/travisci/)
- [Jenkins](https://github.com/fossas/fossa-jenkins-plugin)
- [Terminal/CLI or custom CI systems](https://www.notion.so/fossa/On-Prem-Overview-5e0740c8f60b4d4fbab6042f4c182a5e#520e71b9157c410da0514a20e7eb270d)
- Slack notifications

See our full integration directly at [https://fossa.io#integrations](https://fossa.io#integrations) or docs on how to set these up.