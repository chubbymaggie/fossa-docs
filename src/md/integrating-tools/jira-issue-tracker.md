# Atlassian JIRA Integration

This guide was written to integrate Atlassian JIRA v7.1.4 into FOSSA.

This integration adds the ability to closely link JIRA ticketing workflows and statuses to issues found in FOSSA.  By linking JIRA to your FOSSA projects, issues can be exported to new tickets in JIRA and then assigned/resolved automatically when tickets are closed.

## Add 'fossabot' to JIRA

FOSSA requires an admin account on JIRA to manage the creation and modification of new tickets from issues.

1. Create a new user

  ![JIRA User Dashboard](/img/jira-user-nav.png)

  ![JIRA Create User Button](/img/jira-create-user-btn.png)

  ![JIRA Create User](/img/jira-create-user.png)

  Specify whatever username/password you'd like in the screen above.  By default, we keep the combination `fossabot/fossa123`.

2. Add user as admin 

  ![JIRA Edit Admin Members](/img/jira-edit-members.png)

  ![JIRA Add Admin](/img/jira-add-admin.png)

## Add WebHooks to JIRA

FOSSA requires webhooks to sync ticket/issue status with JIRA.  This means that when a user closes a ticket in JIRA, the corresponding issue will be resolved in FOSSA.

1. Navigate to **Admin > System > Advanced > WebHooks**

	![JIRA Navigate Webhooks](/img/jira-webhook-nav.png)

2. Create a new webhook
	
	![JIRA Create Webhook](/img/jira-create-webhook.png)

	Enter in your FOSSA IP/Port with the path specified below:

	![JIRA Configure Webhook](/img/jira-configure-webhook.png)

	Define events for updating/deleting issues:

	![JIRA Webhook Events](/img/jira-webhook-permissions.png)

	Then click the **Create** on the bottom of the form.  The created webhook should look something like:

	![JIRA Created Webhook](/img/jira-created-webhook.png)

## Configure FOSSA with JIRA

1. Fill in JIRA settings under **Account Settings > Integrations**

	![JIRA Configure Webhook](/img/jira-fossa-settings.png)

2. (Optional, on-prem only) Add JIRA configuration defaults

	Defaults are useful if you are creating multiple sub-organizations in FOSSA that all share the same JIRA instance.

	SSH into the box hosting FOSSA and edit FOSSA's configuration file (`config.env`). Find or add the following lines to the end:

	```bash
	jira__base_url=http://jira.mycompany-internal.com:8080
	jira__credentials__basic__username=fossabot 
	jira__credentials__basic__password=fossa123
	```

	Replace the configuration with your JIRA internal URL (protocol included) as well as the login you created in the first step.

	**NOTE: Make sure the configuration contains the specific pattern of underscores included above.**

3. (Optional, on-prem only) Configure resolved status

	If you have custom workflow statuses, you may want to specify which status triggers FOSSA to resolve an issue.  

	By default, when tickets enter into `Done`, `Resolved` or `Closed` statuses, FOSSA will automatically resolve any corresponding issues.  You can customize this behavior with the following line:

	```bash
	jira__resolved_statuses=Finished
	```

4. If you've followed step 3 or 4, restart FOSSA with `fossa restart`

## Linking FOSSA projects to JIRA projects

Now that both services are configured, you may associate projects in FOSSA with projects in JIRA.

Inside of FOSSA under a project's settings, set:

- **Issue Tracker Type** to `JIRA` 
- **JIRA Project Key**

You can find the project key by looking:

- At JIRA project URLs: `http://jira-url.com/projects/PROJECT_KEY/summary`
- Issue keys: `PROJECTKEY-173`, `PROJECTKEY-244`
- The right-hand details panel of each project summary page under `Key`

## Troubleshooting

If issues aren't getting exported, please check your logs for common errors:

- *"The issue type selected is invalid."*

When FOSSA generates a ticket, by default it sets the JIRA `issueType` to be `Task`.  This is one of the default issue types for new JIRA instalaltions, but your admin may have deleted/configured out this issue type or your installation could just be missing it.  Check on the existing issue types in JIRA and create the `Task` type if it is missing.

See the [JIRA help doc](https://confluence.atlassian.com/jirakb/unable-to-move-issue-to-another-issue-type-due-to-the-issue-type-selected-is-invalid-error-227413483.html) for more instructions.
