# Git SCM Support

FOSSA is designed for SCMs with complex branching structures like Git.  For non-branching systems, FOSSA will by default name the source trunk or release history to `master`.

FOSSA is able to resolve all Git objects that are accessible via `git checkout`, both if part of the source tree or detached from refs.

## Branches & Tags

FOSSA is aware of all branches and tags in a git project

By default, FOSSA will only track your **Default Branch** for per-commit updates/analysis.  You can track an unlimited number of branches/tags if you need to, for instance, track multiple releases on multiple targets/platforms. 

Automatic updates in FOSSA are triggered via webhooks, which are automatically set up via GitHub or Bitbucket, but may also be configured to work with post-receive hooks.

## Pull Requests and Git-Based Workflows

FOSSA also supports Github pull requests and other features via the commit API.  Any time a pull request is submitted, FOSSA will begin tracking that pull request for release until it is closed.

This means that when browsing issues, pull requests, or arbitrary commits on a tracked branch, FOSSA will inject a "License Compliance" check into the GitHub UI.

## Submodules

FOSSA will analyze a project for submodules by examining the `.gitmodules` file, and add them as dependencies of the root project.

## Other SCMs

FOSSA does not currently support other SCMs directly, but will still resolve them if needed by another package manager (i.e. npm, CocoaPods, etc...).

More SCMs are slated for future releases -- please contact [support@fossa.io](mailto:support@fossa.io) to request an SCM integration.

## Known Issues

- Repositories without any commits or branches cannot be imported
- Repositories without any files cannot be analyzed
- Repository search matches against the whole repository name