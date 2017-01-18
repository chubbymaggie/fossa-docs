# Installation Guide

If you are reading this guide inside of FOSSA, you have already completed setup and can skip this step.  This document is intended to help guide & troubleshoot local installations only.

FOSSA requires the modules `fossa-core` and `fossa-agent` to be running in order to work.

## Minimum Requirements

- Postgres 9.3+
- Node.js 4.2.3
- Mac OSX or Linux

If you want to get started with FOSSA immediately, scroll down to the [Quick Start](#quick-start) section. *NOTE: the Quick Start method is not ideal for production performance and should only be used for testing/evaluation.*

## Recommended Additions

- Provision at least 1 (ideally 3 or more) machine dedicated to `fossa-agent`
- Provision 1 machine dedicated to `fossa-core`
- Redis, MongoDB or a separate store for caching

### 1. Download & Configure



### 2. Set up FOSSA-agent

`fossa-agent` is responsible for the heavy-duty work involved in download and analyzing code.  For ideal performance, agent processes should always be run on a separate machines than `fossa-core`.



### 3. Set up FOSSA-core

`fossa-core` is the main server and Web UI that powers FOSSA.  This is what all users will be accessing.

### via Docker

Install

## Quick Start<a name="quick-start"> </a>

If you want to get started with FOSSA as quickly as possible in order to test/evaluate the tool, this method outlines the simplest way to get started on a single machine.

**This method is not meant to be used in a production setting and WILL introduce performance problems.**

 1. Download and Install
   ````bash
   $ npm install --production
   ````

 2. Run migrations
  ````bash
  $ tools/fossa.js sequelize db:migrate
  ````

 3. Synchronize licenses
  ````bash
  $ tools/fossa.js licenses sync
  ````
