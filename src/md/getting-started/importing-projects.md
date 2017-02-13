# Importing Projects

You can add a project to FOSSA in a few ways **Dashboard > Add Project**:

- Github 
- Github Enterprise (on-prem only, requires config)
- Bitbucket Server (on-prem only, requires config)
- Manually via URL (on-prem only, for any supported VCS or package registry)

By default, FOSSA will automatically set up automatic updates, code review integrations and more if you use a service (non-manual) import method:

![Importing projects](/img/import-projects.png "Importing projects")

1. Select your organization
2. Select one or more repositories (on the same page)
3. Click **Fetch & Import**

Once imported, you will be redirected to the project or your dashboard.

## <a name="supported-environments">#</a> Currently Code Supported Environments

As long as FOSSA can reach your code, it will download and scan all of it for license information.  To discover and organize additional dependencies, FOSSA integrates with various other methods:

- Arbitrary [Git repos and submodules](../../integrating-code/git)
- [Javascript (Node.js, Bower, NPM)](../../integrating-code/javascript)
- [Java (Maven/Gradle)](../../integrating-code/java)
- [*.NET (Nuget)* **BETA***](../../integrating-code/NET)
- [*Ruby (Rubygems) **BETA***](../../integrating-code/ruby)
- [*Python (Pip - **BETA***, Setuptools/DistTools - **Alpha**)](../../integrating-code/python)
- [*iOS (CocoaPods - **ALPHA***, Carthage - **BETA***)](../../integrating-code/iOS)
- [*Golang **Alpha***](../../integrating-code/go)
- [*Rust (Cargo) **Alpha***](../../integrating-code/rust)

Coming Soon:

- Java (Ant)
- Scala (Sbt)
- Haskell
- PHP (Composer)
- C, C++ (Yocto)

Every month we're actively adding more integrations!  For unsupported environments, FOSSA will still run for your repository -- however it may either miss some dependency data or have trouble organizing information in the UI.

*NOTE: FOSSA analyzes these projects according to industry standards of development setups.  If you have a particularly unique setup, contact support and we'll help FOSSA work with you. Any integration limitations are listed in the relevant docs articles.*

## Supported Tooling Integrations

In addition to code environments, FOSSA supports other ways of integrating with your workflow.

- [Atlassian JIRA](../../integrating-tools/jira-issue-tracker)
- [Slack](../../integrating-tools/slack)
- [Bitbucket Server/Atlassian Stash **On-Prem Only**](../../integrating-tools/bitbucket-server-(stash))
- [npm On-Site (npm Enterprise) **On-Prem Only**](../../integrating-tools/npm-enterprise)
- [Private Registries (Artifactory) **On-Prem Only**](../../integrating-tools/private-registries-(artifactory))
- Github Pull Requests (code review, automatically setup if importing from GitHub)
- Email notifications

Coming Soon:

- Github Issues (currenty FOSSA can export to GH issues -- deeper integration and status syncing coming soon...)

## Request Integrations

To request more integrations or ask about an integration in development, contact [support@fossa.io](mailto:support@fossa.io)