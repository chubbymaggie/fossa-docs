# Troubleshooting

1. Why does my project not have any dependencies?

  Projects without any dependencies are known as **partially supported environments**. Below is an image of what you might see on the **project summary** page.

  ![Partially Supported Environments](/img/project-partially-supported.png)

  There are 3 reasons this might be the case:

  - The project is not supported. See what languages are supported in our [importing projects](../getting-started/importing-projects#-a-name-supported-environments-a-currently-supported-environments) documentation.
  - The project is misconfigured and cannot be analyzed. Check out our [individual language](../getting-started/importing-projects#-a-name-supported-environments-a-currently-supported-environments) documentation for more details.
  - The project is having trouble being analyzed. [Reach out to support](javascript:window.Intercom%28'showNewMessage'%29) for help.

2. Why are there missing dependencies?

  - The project contains multiple languages and one or more are not supported. See what languages are supported in our [importing projects](../getting-started/importing-projects#-a-name-supported-environments-a-currently-supported-environments) documentation.
  - The dependencies could not be resolved or analyzed. If this is the case, [reach out to support](javascript:window.Intercom%28'showNewMessage'%29) for help.
  - There are dependencies that are being included in non-traditional ways. They can be manually included via the dependency manager (**Project Summary > Dependencies**).

3. Why are there so many issues?

  Fossa pulls is every dependency and all your dependencies' dependencies. This is a recursive operation that can pull in thousands of dependencies. Issues are created against each dependency that is included. There are a couple of strategies that can help reduce the noise:

  - Some times the best thing to do is limit what you look at the triage and fix issues. Navigate to issue scan settings (**Project Settings > Issue Scanners**) and lower your level of detail.
  - Create policies that best reflect what you're interested. See the [policies](../policies/1.-overview) documentation for more information.
  - Some languages allow you to limit which dependencies you look at by **scope**. Take a peek at the [Java](../integrating-code/java) documentation for more detail.

4. How can I generate reports in Fossa?

  Navigate to **Project Summary > Generate Report**. You can download reports in various formats (Markdown, HTML, PDF) and generate a publically accessible link.
