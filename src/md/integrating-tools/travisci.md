# TravisCI Integration

This guide is for you to set up the FOSSA app in your CI workflow. We offer two ways currently for you to integrate FOSSA into your workflow, through a `TravisCI Build Step`, or a `Travis Post-build Webhook`.

## TravisCI Build Step

We have built a CLI tool available [Here](https://www.npmjs.com/package/license-cli)

This will require nodejs and npm to be available on the build machine.

In order for this to work, you will also have generate a FOSSA API token. This can be found in [Integration Settings](/account/settings/integrations):

![API Token](/img/api-token-creation.png)

A sample build step for Travis CI:

```
before_script:
		- npm install -g license-cli
		- cd <PROJECT_DIR>
		- license-cli auth <FOSSA_API_TOKEN>
		- license-cli scan -r $TRAVIS_COMMIT
```


## Travis Post-build Webhook

Another way to integrate FOSSA into your workflow is to set up a webhook notification in TravisCI. To do this, you will have to add the following to your .travis.yml file:

```
notifications:
  webhooks: https://app.fossa.io/hooks/travisci
```

You will also have to update your project settings in FOSSA by navigating to `Project > Settings > Update Hooks`, and selecting TravisCI in the dropdown.
