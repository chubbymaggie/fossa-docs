# Gitlab Integration (On-Prem)

FOSSA integrates directly with Gitlab to allow you to manage your login and code imports through the third-party service.

If you're using FOSSA's cloud product at app.fossa.io, then Gitlab.com should be natively integrated -- just login with GitLab no setup necessary!  If you're running FOSSA on-prem with an on-prem GitLab instance, then follow this guide to get set up.

## Configuring GitLab

Start by adding the FOSSA application to your GitLab instance.  This can be done with your GitLab administrator's account at **User Settings > Applications > Add New Application** or by navigating to `{GITLAB_HOST}/profile/applications`.

Once on the page, fill out the application details like so using for FOSSA configuration:

![Gitlab Add Application](/img/gitlab-add-app.png)

After hitting "Save", you should have successfully configured FOSSA's access to GitLab.  You will be given an `Application ID`, `Secret` and `Callback URL`.  Save these for the next step:

![Gitlab View Creds](/img/gitlab-view-creds.png)

## Configuring FOSSA

Now that GitLab is configured, you will have to add GitLab access details to FOSSA.

SSH into the box hosting FOSSA and edit FOSSA's configuration file (`config.env`). Find or add the following lines to the end:

```bash
# Base Config
gitlab__enabled=true
gitlab__base_url={GITLAB_HOST}

# Access details from previous step
gitlab__credentials__oauth2__client_id={APPLICATION_ID}
gitlab__credentials__oauth2__client_secret={SCRET}
gitlab__credentials__oauth2__callback={CALLBACK_URL}
```

Replace the configuration with your GitLab internal URL (protocol included) as well as the access details from the previous step.

## Restart FOSSA

To finish, run `fossa restart` while still inside of your SSH session and wait for FOSSA to boot up again.

Congrats!  Now you should be able to log in with GitLab and begin importing from the service.
