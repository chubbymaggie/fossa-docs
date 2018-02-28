# Integrating Github

FOSSA supports and integrated with Github tools out of the box.  

You should be able to sign in with Github and immediately get going with importing repos and scanning Pull Requests, but some permission configurations can lead access issues.

## Troubleshooting Github

If you're in Github and not seeing repos or organizations listed, you may need to ensure that your account has the right permissions.

### 1. Ensure your account is added to the Github Org you're importing from

Under https://github.com/orgs/{YOUR_ORG}/people the user should be available in your organization.  If not, make sure the user is added as a member with global read access.

### 2. Ensure your organization has granted FOSSA access

 a) First, revoke any existing FOSSA access at [https://github.com/settings/applications](https://github.com/settings/applications) 

![](https://static.notion-static.com/0f009348-f2e3-4ace-817f-845d0d18ad1d/Untitled)

 b) Then, connect FOSSA back to Github at ([https://app.fossa.io/projects/import/github](https://app.fossa.io/projects/import/github)) but **DO NOT** authorize yet; stop at this screen:

![](https://static.notion-static.com/e6638870-ec73-4602-82bd-2e0d9384a3ef/Untitled)

 c) Ensure your organization has access.  You will see a green check mark and message below:

![](https://static.notion-static.com/7fbd9432-0dfa-45ae-b5d7-df48213f502c/Untitled)

If not, there should be a "Request" or "Grant" button for access.  You will need an administrator to grant access — they can configure their 3rd-party settings at:

https://github.com/organizations/{YOUR_ORGANIZATION}/settings/oauth_application_policy

If you have turned on access restriction, ensure that FOSSA is approved:

![](https://static.notion-static.com/2cdabe2f-ba30-42c9-abfd-5d3cf335cd8c/Untitled)
