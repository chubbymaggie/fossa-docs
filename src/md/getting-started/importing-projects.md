# Importing Projects

You can add a project to FOSSA by copying the URL of your code repository and going to **Projects > Add Project** to paste it in.  We currently support URLs from the following code hosts:

- Any online Git Repository (Github, Bitbucket, etc...)
- Packages on [NPM](http://npmjs.com) (i.e. http://npmjs.com/recast) or Maven
- *Coming soon: Hg, SVN, Mercurial, Pip...*

Then, click **Fetch and Import** to begin the build and analysis process.  

## <a name="supported-environments">#</a> Currently Supported Environments

For FOSSA to work best, it should be run on a supported environment. FOSSA currently supports a number languages and environments today, and we're actively adding more.

- Javascript (Node.js, Bower, NPM)
- Java (Maven/Gradle)
- *.NET (Nuget)* **BETA***
- *Python (Pip) **BETA***
- *Golang **BETA***
- *Rust (Cargo) **BETA***
- *iOS (CocoaPods, Carthage) **BETA***
- *Ruby (Rubygems) **BETA***

Coming Soon:

- Java (Ant)
- Scala (Sbt)
- Haskell
- PHP (Composer)
- C, C++ (Yocto)

For unsupported languages, FOSSA will still run for your repository, but won't be able to download all relevant dependencies for analysis.

*NOTE: FOSSA analyzes these projects according to industry standards of development setups.  If you have a particularly unique setup, contact support and we'll help FOSSA work with you.*

*NOTE: Maven Projects: Only compile time dependencies will be analyzed.*

*NOTE: iOS Projects: We are running on CocoaPods version >=1.0. Projects running on older versions may not work: [Breaking Changes](http://blog.cocoapods.org/CocoaPods-1.0-Migration-Guide/)*