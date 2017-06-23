# CircleCI Integration

This guide is for you to set up the FOSSA app in your CI workflow. We offer two ways currently for you to integrate FOSSA into your workflow, through a `CircleCI Build Step`, or a `CircleCI Post-build Webhook`.

## CircleCI Build Step

We have built a CLI tool available [Here](https://www.npmjs.com/package/license-cli)

This will require nodejs and npm to be available on the build machine.

In order for this to work, you will also have generate a FOSSA API token. This can be found in [Integration Settings](/account/settings/integrations):

![API Token](/img/api-token-creation.png)

A sample build step for Circle CI 2.0:

```
- checkout
- run:
    command: |
      license-cli auth <FOSSA_API_TOKEN>
      license-cli scan -r $CIRCLE_SHA1
    no_output_timeout: '45m'
    name: 'Check FOSSA Build/Scan'
```

## CircleCI Post-build Webhook

Another way to integrate FOSSA into your workflow is to set up a webhook notification in CircleCI. To do this, you will have to add the following to your circle.yml file:

```
notify:
  webhooks:
    - url: http://app.fossa.io/hooks/circleci
```

You will also have to update your project settings in FOSSA by navigating to `Project > Settings > Update Hooks`, and selecting CircleCI in the dropdown.
