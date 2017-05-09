# TravisCI Integration

This guide is for you to set up the FOSSA app in your CI workflow. We offer two ways currently for you to integrate FOSSA into your workflow, through a `TravisCI Build Step`, or a `Post-build Webhook`.

## TravisCI Build Step

We have provided a script that you may run as a custom build step that checks for the build and issues scan status of the FOSSA project. This is available [Here](https://github.com/fossas/fossa-travisci-plugin).

In order for this to work, you will also have generate a FOSSA API token. This can be found in [Integration Settings](/account/settings/integrations):

![API Token](/img/api-token-creation.png)

Once this is generated, you will have to add this as an environment variable named `FOSSA_API_TOKEN` in your TravisCI build. After that, you are all set up!


## Post-build Webhook

Another way to integrate FOSSA into your workflow is to set up a webhook notification in TravisCI. To do this, you will have to add the following to your .travis.yml file:

```
notifications:
  webhooks: https://app.fossa.io/hooks/travisci
```

You will also have to update your project settings in FOSSA by navigating to `Project > Settings > Update Hooks`, and selecting TravisCI in the dropdown.
