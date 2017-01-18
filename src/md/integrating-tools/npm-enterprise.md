# NPM Enterprise

FOSSA integrates directly with NPM Enterprise to enable rich licensing data embedded in your NPM package pages as well as analysis on anything in your private NPM on-site registry.

## Installation

1. To install the FOSSA addon into NPM Enterprise, `ssh` into your NPME instance and run `npme addon http://__FOSSA_HOST_AND_PORT__/api/services/npm`.

2. (Optional) If your NPME modules are behind any authentication/config, FOSSA will need a token to access them.  To generate a token, run `npme manage-tokens generate`.  This will generate a prompt, follow it like so:

  ```bash
  ? npm username fossabot
	? email address support@fossa.io
	generated token: deploy_55a20cd1-z225-619d-8e0f-691fa48113cb
  ```

	Take the `generated token` and save it for the next step.

3. In FOSSA's config, add the FOSSA's `config.env` file, add the following lines replacing the relevant values:

	```bash
	# NPME registry URL including protocol
	npm__registry=http://npme.my-company.com:8080/

	# Optional NPM auth token, if you completed step 2. above
	npm__auth_token=deploy_55a20cd1-z225-619d-8e0f-691fa48113cb
	```

4. Restart FOSSA with `fossa restart`.  

  Once fossa is up and running again, you should see a FOSSA plugin on every npme package page.

  ![NPMe FOSSA Preview](/img/fossa-npme-preview.png)