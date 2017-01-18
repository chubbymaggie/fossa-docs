# Java

Fossa supports Java and 2 of the 3 main build systems:

1. Maven (Supported)
2. Gradle (Supported)
3. Ant (Not Supported)

## Configuration

Project settings config is accessible and editable from the projects page (http://&lt;fossa-host&gt;/projects/&lt;project&gt;/settings/languages).

The `environment variables` used during project build is configurable via **Project Settings > Builds and Languages > General**.

![General Language and Build Settings](/img/project-settings-language-settings-general.png)

The `maven profiles` and `gradle configuration file` used during project build is configurable via **Project Settings > Builds and Languages > Java**.

![Java Language Settings](/img/project-settings-language-settings-java.png)

`Dependency Scope` can be limited via **Project Settings > Builds and Languages > Java** (see above image) making Fossa reduce the number of dependencies it displays and uses during issue analysis. If not limited, all dependencies are included.


## Maven

The Maven build system (http://maven.apache.org/) pulls in dependencies based on:

1. Group ID
2. Artifact ID
3. Version

Fossa derives dependencies by building your project and seeing which dependencies are brought in. Other metadata is fetched directly from repositories.

Here's some of the metadata that's pulled in:

- Home page URL
- Dependencies
  - Group ID
  - Artifact ID
  - Resolved version
  - Transitive excludes
  - Optional
  - Scopes

### Dependencies

**Optional**

Optional dependencies are included in analysis and are grok'ed by Fossa. The optional dependencies are tagged as `Optional` by Fossa and are not included beyond depth 1.

**Scope**

`Dependency Scope` is included in analysis and is selectable in Fossa. Choosing different project scopes allows you to choose which dependencies are included in issue scans and in the UI.

**Transitive Excludes**

Dependencies that are excluded transitively are also grok'ed by Fossa. If a transitive dependency is expicitly excluded, Fossa will exclude that dependency from its issue scans and in the UI. If another dependency brings in the excluded transitive dependency, then it will be included. These excludes are scoped to dependencies, not projects.

## Gradle

The Gradle build system (https://docs.gradle.org/) pulls in dependencies based on the repository it's pulling from:

1. Maven (Supported)
2. Ivy (Unsupported)
3. Local (Unsupported)

The metadata pulled in is similar to maven:

- Available versions
- Home page URL
- Dependencies
  - Group ID
  - Artifact ID
  - Resolved version
  - Transitive excludes
  - Scopes

### Properties

Gradle properties can be set via **environment variables** as defined above. Gradle property names should be prefixed with `ORG_GRADLE_PROJECT_` as per the [gradle documentation](https://docs.gradle.org/current/userguide/build_environment.html).

![Gradle Properties](/img/gradle-properties.png)

### Dependencies

See the **Maven** section for more detail.

## Known Issues

- Only Maven repositories are supported with Gradle currently.
- Certain SDKs missing during Gradle build process will cause a Fossa build to fail. Contact [support@fossa.io](mail:support@fossa.io) for help.
- Some artifacts in Maven repositories are missing information (especially projects that were built with ant and deployed to a maven repository). It's likely license information will be missing from these dependencies.
- META-INF information is not parsed yet.
