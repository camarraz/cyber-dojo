#!/bin/bash

. /var/www/cyber-dojo/admin_scripts/make_env_vars.sh
export CYBER_DOJO_RUNNER_CLASS_NAME=HostTestRunner
rails s