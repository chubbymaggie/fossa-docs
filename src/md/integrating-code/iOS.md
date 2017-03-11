# iOS

Fossa supports Swift and Objective-C Cocoa projects with both CocoaPods and Carthage.

## CocoaPods (Alpha)

Fossa is using CocoaPods Version ~1.0. If your Podfile is built using an earlier version, there is a chance that it may not build correctly. To upgrade [See doc](http://blog.cocoapods.org/CocoaPods-1.0/)

The CocoaPods [build system](https://cocoapods.org/) pulls in dependencies based on:

1. Name
2. [SemVer Version](http://semver.org/)
3. External Repository (Git, Subversion, Mercurial, HTTP)

Fossa derives dependencies by analyzing your Podfile/Podfile.lock files and seeing which dependencies are brought in. Other metadata is fetched directly from repository podspec files.

### Configuring podspec repos

FOSSA allows you to add your own podspec repos as well. This is done via the [Language Settings](/account/settings/languages) page under `Cocoapods Settings`. The url should be of the form: `https://github.com/artsy/Specs.git`.

### Authentication

Before adding a repo that requires authentication, you must add the following public key to your projects settings:

> ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCvWCpvoCLbHt6+VfYhK1gHpWnDegn7xGLLJ3sdg/crdBjXIRkWQ5ABpoJ8OohMY6ulGzhdCA3jh9jShTfcd6etotyVC2+troKbJ8Jpn8rFaMR6df5ij7TSakHV1pAKijLpaFcRdLQQE2hoTqkIQCwLBevWKkM4hAiZky/cI62cg+AaM+8cjpih0Ok3t7fgtY7ei2AGXKBS4zHg/YYl9rSQ1tWBV605K25tGvsmTdtddvaTIGqV5svGea7+txvJFo4NW6YI9U99EkeFMkkz9IF6nK5kPlElledAqtD05Ui3WSbOEQNvesetPJc+PwUiCSLjsMGYjO2PM5V5tw8orNW5vQKZlt2IaZ5ZDHLIz9KI5R/Y61jPkaCOcHBErSD5oWX018vqmi9/5xyM6jeyy7XK193929smc+OeF79p2zaIOVEiVnTDcvu/8DIFvrCiQiU7NNFkey7Umawy5QvYnJcdU+p9cuk6s63jheyfczYQZtTEb6q/VgwfC3RXm7t3/h/mV6XvCRoORLm5ViD21DDdyWAnMXzJ9EPfvxnkM2SuUoMhEdITWIUkbDv8sK1g9F6kLoaeC8kYrGe0RiyJMbLJ8IxK6Pa6Ztohs7xIoHdGDfhFr1DoNkuYC+VMpp8SLAOeOsh0J8DVa8af0MrdK0+N85y0MPt9yFkTiAT1l7ayPw==


If your podspec repo requires authentication, the URL should be of the form `git@github.com:artsy/eigen.git` 

## Carthage (Alpha)

Fossa scans through your Project and analyzes any Cartfile that is found. Cartfile.private and Cartfile.resolved files are ignored. It grabs dependencies based on:

1. Name
2. [SemVer Version](http://semver.org/)
3. External Repository (Git, Github)


# Known Limitations

### CocoaPods Limitations

- We don't factor in the platform specified in the Podfile. For each dependency, we will fetch the code for all valid platforms
- Build configurations are not being taken into account at the moment 
- If a subspec(s) of a pod is given, Fossa will analyze the entire Pod
- Only git external sources are supported. Subversion, Mercurial, and HTTP sources are currently not supported
- Plugins in Podfiles are currently being ignored
- Pre and Post install hooks sometimes do not work properly
- Pre-release version ranges currently just resolve to the version given (i.e. >=10.1.1.beta will resolve to 10.1.1.beta, as well as ~>10.1.1.beta)
- multi range versions with pre-releases may not work properly (i.e. >10.1.1.beta1 <10.1.1.beta4)

### Carthage Limitations

- Nested dependencies aren't properly handled
- Cartfile.resolve files aren't being analyzed, so versioning may be inconsistant
- Local file repositories (i.e. File:///) in Cartfile's aren't analyzed.