# iOS

Fossa supports Swift and Objective-C Cocoa projects with both CocoaPods and Carthage.

## CocoaPods (Alpha)

Fossa is using CocoaPods Version ~1.0. If your Podfile is built using an earlier version, there is a chance that it may not build correctly. To upgrade [See doc](http://blog.cocoapods.org/CocoaPods-1.0/)

The CocoaPods [build system](https://cocoapods.org/) pulls in dependencies based on:

1. Name
2. [SemVer Version](http://semver.org/)
3. External Repository (Git, Subversion, Mercurial, HTTP)

Fossa derives dependencies by analyzing your Podfile/Podfile.lock files and seeing which dependencies are brought in. Other metadata is fetched directly from repository podspec files.

Here's some of the metadata that's pulled in:

- Available versions
- Home page URL -- if any
- Repository URL -- if any
- Dependencies
  - Name
  - Version
  - Source
- Authors

## Carthage (Alpha)

Fossa scans through your Project and analyzes any Cartfile that is found. Cartfile.private and Cartfile.resolved files are ignored. It grabs dependencies based on:

1. Name
2. [SemVer Version](http://semver.org/)
3. External Repository (Git, Github)


# Known Issues

### CocoaPods Issues

- Build configurations are not being taken into account at the moment
- If a subspec(s) of a pod is given, Fossa will analyze the entire Pod
- Only git external sources are supported. Subversion, Mercurial, and HTTP sources are currently not supported
- Plugins in Podfiles are currently being ignored
- Pre-release version ranges currently just resolve to the version given (i.e. >=10.1.1.beta will resolve to 10.1.1.beta, as well as ~>10.1.1.beta)
- multi range versions with pre-releases may not work properly (i.e. >10.1.1.beta1 <10.1.1.beta4)

### Carthage Issues

- Nested dependencies aren't properly handled
- Local file repositories (i.e. File:///) in Cartfile's aren't analyzed.


