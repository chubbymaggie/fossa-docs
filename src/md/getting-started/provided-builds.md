# Provided Builds (Alpha)

After importing a project, FOSSA provides an alternative way integrate build and code analysis called "Provided Builds".

In this model, FOSSA will no longer the run analysis of your first-party code from within the service.  Instead, you will provide a pre-configured build environment and run a plugin built by FOSSA to analyze and upload dependency data from your build tasks.

By using this approach, you can take advantage of your CI / dev environments for dramatically faster, more accurate and reliable dependency reports, regardless of how large and complicated your build is.

#### Pros

 1. Dramatically increased performance and reliability
 1. Zero false positives: guranteed to match your exact build behavior and configuration
 1. Dead-simple integration model for complex builds (uses existing config)
 1. (Coming Soon) Publish and view reports without granting any code access to FOSSA

#### Cons

 1. Builds no longer run within FOSSA, meaning you may no longer trigger analysis from within the UI
 1. Requires a plugin to publish results from an external, successfully-running build environment (i.e. a CI or developer machine)
 1. Provided Builds are in Alpha; see "Current Limitations" listed below

During Alpha, Provided Builds are only available to certain users. 

If you would like access to opt-in to Provided Builds, please contact [support@fossa.io](mailto:support@fossa.io).

## Enabling Provided Builds

Provided Builds are enabled on a project-by-project basis.  To start, import or pick a project that you'd like to integrate and follow the steps below:

### 1. Turn on Provided Builds

Navigate into **Project > Settings > Builds & Languages** and click "Enable Provided Builds".

  ![Provided Builds Settings](/img/settings-provided-builds.png)

Then, click on "Save" to submit.

Once finished, FOSSA will no longer automatically run builds and scans on your code, but instead wait for data to be "provided" by your build.

  ![Waiting for Data](/img/waiting-provided-builds.png)

### 2. Installing the `fossa` Build Plugin

The FOSSA build plugin (`fossa`) is a lightweight `CLI` tool that interrogates an existing build environment for third-party code and uploads them to FOSSA for deeper analysis.  It runs on all major platforms including Linux (Unix), OSX (Darwin) and Windows.

Run the following command from within your terminal or CI machine to get the latest version:

```bash
CLI is only available to beta users; contact support@fossa.io to apply.
```

Then, add it to your `PATH` or transfer it to the root directory of the repository you want to anaylze. To test your installation, simply run `fossa` and look for this message:

```bash
CRITICAL no modules specified for analysis
```

**NOTE:** We reccomend only invoking `fossa` from within a `git` repository for now.

### 3. Configuring the Plugin with `.fossa.yml`

If you don't already have an API key, [generate a token using the instructions here](/docs/projects/api-endpoints/).

Then, in the root directory of your repository, create a `.fossa.yml` or `.fossa.yaml` file with the following layout:

#### Minimal Example:

```yaml
version: 1

cli:
  # NOTE: we recommend you set this via the FOSSA_API_KEY environment variable
  api_key: some-key-here
  # # Defaults to https://app.fossa.io, replace if you are on-prem
  # server: https://fossa.on-prem

analyze:
  modules:
    - name: example-gopackage
      path: github.com/orgname/full/path/to/example-gopackage
      type: gopackage
    # # Examples of all other currently-supported module types:
    # - name: example-js
    #   path: package.json
    #   type: commonjspackage
    # - name: example-ruby
    #   path: module/Gemfile
    #   type: rubygem
    # - name: example-java
    #   path: example-java/pom.xml
    #   type: mavenartifact
    # - name: example-bower
    #   path: bower.json
    #   type: bowerpackage
    # - name: example-php
    #   path: composer.json
    #   type: composerpackage
```

Before running, you must explicitly define which `modules` you want to scan in the following format:

- **Name** of the module
- **Path** to the manifest or import identifier i.e. `module/package.json`
- **Type** of the module listed in a supported format above

Once done, simply running `fossa` should succeed and generate a report link for your first Provided Build!

```bash
⣾ Uploading build results (2/2)...
============================================================

   View FOSSA Report:
   http://app.fossa.io/projects/{LINK_TO_REPORT}

============================================================
```

**Troubleshooting:**

- Currently, reports can only be generated for revisions that have been published and are accessible to the FOSSA service node.  If you run `fossa` on an unpublished branch / revision, the dependency analysis will succeed but upload will fail.
- If you are running within a `git` repo, `fossa` will infer the project name, version and ID from `git`.  If this is unavailable, you must pass the `--locator` flag with the revision ID (i.e. `git+github.com/org/repo$revision_hash`).
- If you are using a custom or on-prem installation of FOSSA, make sure your `cli.api_key` and `cli.server` are configured to point at your local FOSSA server.

Documentation for the full `.fossa.yml` config is coming soon.

### 4. Integrating into CI and Build Machines

To update a project using Provided Builds, you must invoke `fossa` continuously as new revisions are published through a CI or Build Machine.  The typical fully-integrated workflow looks something like this:

  1. Revision is published to Git host
  2. CI runs to clone / update Git repo
  3. Build scripts run and succeeds at generating a production artifact
  4. `fossa` runs and analyzes artifact/build environment AFTER build success
  5. `fossa` uploads build results to be analyzed and scanned
  6. CI runs tests and other plugins (i.e. `license-cli`), one of which checks for scan status from FOSSA and fail a build if issues are found

Currently you must manually add a step to your build to invoke `fossa`.  Later on, tool-specific wrappers will be available for `fossa` to provide a better experience for select common integrations (i.e. Jenkins, Bitbucket, Gitlab).

Contact us if your workflow diverges from this dramatically.

**Considerations:**

- To ensure accuracy, make sure your machine is running a **clean environment** with the **same configuration** as your final production build.  Otherwise, you may include test and development dependencies in the report.
- `fossa` requires a build to have succeeded before it is invoked. Ideally, you provide the build command and `fossa` runs after it finishes.  If you want `fossa` to run a default build command for you, you can specify the `--install` flag.
- If `git` is unavailable, you can configure the revision to publish to by specifying its ID via the `--locator` flag.
- If uploads are failing, confirm that your configuration and API key runs locally.  If on-prem, make sure the server and key are both pointed at the right FOSSA server.
- For security reasons, it is reccomended to pass `FOSSA_API_KEY` as an environment variable rather than embedding it into the `.fossa.yml` file.

## Performance and Accuracy

Most users will notice a significant increase in performance and reliability after integrating Provided Builds, enabling a smoother experience when running within the development and triage workflow.  This is for a few reasons:

  1. Provided Builds still require some processing from FOSSA, but often much less work.  As a result, Provided Builds are given higher priority and skip built-in limitations / resource safeguards within FOSSA's build service.
  2. CI builds are often fast and highly optimized; developers and services set up caches and configuration to improve build timing that Provided Builds can leverage
  3. When running Provided Builds, FOSSA will never download or scan any of your code, skipping massive amounts of work when processing large codebases

In addition, users will experience much higher accuracy within reports and issue scans.  When using Provided Builds, FOSSA's analysis operates within your existing build to get a perfect replica of your build configuration and behavior.

This permanently resolves a variety of false positives from the following sources that  affect build behavior:

  1. Unused test and development dependencies
  2. Dependencies mediated by build logic, constaint solvers and configuration
  3. Build "magic" or non-deterministic build system implementations
  4. Environmental factors (network conditions, caches, time of day, or even changes in transitive dependencies between builds)
  5. Variable build tasks that can generate different targets/artifacts

On top of this, explicit module definitions allow you to skip irrelevant modules that aren't built and bundled (i.e. documentation or test modules).  Integrating Provided Builds can often reduce false positives by over 90%.

## Current Limitations

During Alpha, there are current limitations to Provided Builds that our team is actively addressing:

  1. Private dependencies (authenticated or behind a firewall) and are not fully supported across all languages
  2. Relationship and depth browsing is not available in projects that use Provided Builds
  3. License and code scanners are not available in the build plugin (meaning no scans will be run on any 1st-party code).  All analysis will still be run for 3rd-party dependencies.
  4. Provided Builds are a strict alternative to traditional Automated Builds.  In the future, we will introduce the ability for Automated Builds to be "supplemented" by data from the `fossa` plugin.