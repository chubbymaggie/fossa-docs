# Managing and Updating FOSSA

Use the FOSSA CLI as `sudo` and the following commands to manage FOSSA.

## Starting/Stopping FOSSA

`fossa start` - start the instance
`fossa stop` - stop the instance; it will take a second to clean up all running data
`fossa restart` - stop then start the instance

## Updating FOSSA

`fossa upgrade` - download and install the latest version of FOSSA.

To update fossa, you must first stop the instance, upgrade and then restart: `fossa stop && fossa upgrade && fossa start`.

## Initializing FOSSA

`fossa init` - Download and install the FOSSA appliance.  Do not run this command if you've already followed the setup guide.