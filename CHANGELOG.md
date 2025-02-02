# changelog

## **2025-02-01** - new version 3.11.15

* update dependencies

## **2025-01-05** - new version 3.11.14

* update dependencies
* add attribute with_droplet_agent

## **2024-12-21** - new version 3.11.13

* update dependencies

## **2024-10-20** - new version 3.11.12

* update dependencies

## **2024-09-04** - new version 3.11.11

* update dependencies
* modified `region` input to be optional at droplet creation.

## **2024-08-24** - new version 3.11.10

* npm audit + update dependencies
* upgrade actions/setup-node@v3 to actions/setup-node@v4
* add dependabot setting for github-actions

## **2024-06-23** - new version 3.11.9

* npm audit + update dependencies
* drop node 16 support
* add node 20 support
* using node 20 to build

## **2024-05-19** - new version 3.11.8

* update dependencies

## **2024-03-30** - new version 3.11.7

* update dependencies

## **2024-03-10** - new version 3.11.6

* update dependencies

## **2024-02-12** - new version 3.11.5

* update dependencies

## **2023-11-16** - new version 3.11.4

* update dependencies

## **2023-10-22** - new version 3.11.3

* update dependencies

## **2023-08-24** - new version 3.11.2

* update dependencies

## **2023-07-09** - new version 3.11.1

* update all dependencies

## **2023-06-19** - new version 3.11.0

* add node 20 to tests coverage.
* removed package axios-mock-adapter
* update all dependencies
* updated all unit tests using axios-mock-adapter 
* upgrade actions/checkout@v2 to actions/checkout@v3
* upgrade actions/setup-node@v2 to actions/setup-node@v3
* upgrade axios to latest version :)
    * if new axios version breaks something not predicted rollback to 3.10.1 and [file a issue for me](https://github.com/pjpimentel/dots/issues/new/choose).
* upgrade node from 16 to 18 on publish workflow
* upgrade SonarSource/sonarcloud-github-action@v1.6 to SonarSource/sonarcloud-github-action@v1.9.1
* upgrade workflow codeql from v1 to v2

## **2023-05-31** - new version 3.10.1

* dependencies updates
* fix `get-droplet-bandwidth-metrics` documentation

## **2023-04-25** - new version 3.10.0

* add `getActiveDeploymentLogs` ([@kkhanhluu](https://github.com/kkhanhluu))
* dependencies updates

## **2023-04-23** - new version 3.9.0

* add `listDatabaseOptions` ([@mueschm](https://github.com/mueschm))
* dependencies updates

## **2023-04-12** - new version 3.8.4

* fix `IApp` type ([@kkhanhluu](https://github.com/kkhanhluu))
* dependencies updates

## **2023-03-25** - new version 3.8.3

* fix `IListResponse` type
* dependencies updates

## **2023-02-03** - new version 3.8.2

* dependencies updates
* add `with_projects` input to app.listApps
* add `project_id` input to app.createApp

## **2022-10-09** - new version 3.8.1

* dependencies updates

## **2022-09-18** - new version 3.8.0

* dependencies updates
* drop node 12.x test support

## **2022-08-22** - new version 3.7.13

* dependencies updates
* add param expiry_seconds to getDockerCredentials

## **2022-08-13** - new version 3.7.12

* dependencies updates

## **2022-07-25** - new version 3.7.11

* dependencies updates

## **2022-07-09** - new version 3.7.10

* dependencies updates
* fix IApp type

## **2022-06-18** - new version 3.7.9

* dependencies updates
## **2022-05-29** - new version 3.7.8

* npm audit + dependencies updates

## **2022-05-21** - new version 3.7.7

* npm audit + dependencies updates

## 2022-05-07 - new version 3.7.6

* add node 18.x test support
* drop node 10.x test support
* fix app spec types, thanks ([@carlosbaraza](https://github.com/carlosbaraza))
* npm audit + dependencies updates

## **2022-04-30** - new version 3.7.5

* add downloads badge to readme.md
* npm audit + dependencies updates
* remove console.log from spec file

## **2022-04-09** - new version 3.7.4

* npm audit + dependencies updates

## **2022-03-26** - new version 3.7.3

* npm audit + dependencies updates

## **2022-03-13** - new version 3.7.2

* npm audit + dependencies updates

## **2022-02-26** - new version 3.7.1

* npm audit + dependencies updates

## **2022-02-16** - new version 3.7.0

* npm audit + dependencies updates
* add module dots.monitoring
* breaking change: removed dots.util, now it's called dots.modules.common

## **2022-02-10** - new version 3.6.3

* npm audit + dependencies updates
* fix dots.action.getAction(input) (https://github.com/pjpimentel/dots/issues/186)

## **2021-10-30** - new version 3.6.2

* npm audit + dependencies updates

## **2021-10-05** - new version 3.6.1

* readme update + docs update thanks ([@codyogden](https://github.com/codyogden))

## **2021-10-04** - new version 3.6.0

* add "force_build" input to dots.app.createAppDeployment

## **2021-09-25** - new version 3.5.9

* npm audit + dependencies updates

## **2021-09-04** - new version 3.5.8

* npm audit + dependencies updates

## **2021-06-14** - new version 3.5.7

* npm audit + dependencies updates

## **2021-05-29** - new version 3.5.6

* npm audit + dependencies updates
* security update, https://github.com/advisories/GHSA-6fc8-4gx4-v693

## **2021-05-17**

* fixed domain module docs

## **2021-05-06** - new version: 3.5.5

* npm audit + dependencies updates
* security update, https://github.com/advisories/GHSA-35jh-r3h4-6jhm

## **2021-05-01** - new version: 3.5.4

* npm audit + dependencies updates
* add method volume.deleteVolumeByName

## **2021-03-29** - new version: 3.5.3

* npm audit + dependencies updates

## **2020-12-22** - new version: 3.5.2

* npm audit + dependencies updates

## **2020-12-03** - new version: 3.5.1

* app platform type fixes (thanks ([@rijkvanzanten](https://github.com/rijkvanzanten)))

## **2020-11-21** - new version: 3.5.0

* npm audit + dependencies updates
* add app module
* removed node 8 test support
* add k8s container registry methods

## **2020-11-01** - new version: 3.4.0

* add missing attributes to firewall type
* npm audit + dependencies updates
* add list domain record filters
* add k8s node pool taints
* add droplet.destroyDropletAndAllAssociatedResources
* add droplet.destroyDropletAndAssociatedResources
* add droplet.getDropletDestroyStatus
* add droplet.listDropletAssociatedResources
* add droplet.retryDropletDestroy
* "add is_default" parameter to vpc.updateVpc and vpc.createVpc
* removed "id" field compatibility, see 3.1.0

## **2020-08-10** - new version: 3.3.3

* load balancer types
* npm audit + dependencies updates

## **2020-07-22** - new version: 3.3.2

* pkg.json homepage

## **2020-07-15** - new version: 3.3.1

* npm audit + dependencies updates

## **2020-06-20** - new version: 3.3.0

* add listInvoices, downloadInvoice, getInvoiceSummary, getInvoice to customer module
* npm audit + dependencies updates
## **2020-05-22** - new version: 3.2.1

* ICreateDropletsApiRequest && ICreateDropletApiRequest ssh_keys attr

## **2020-05-03** - new version: 3.2.0

* add vpc module
* add kubernetes node pool labels
* add mysql_settings to createDatabaseClusterUser
* npm audit

## **2020-04-30** - new version: 3.1.10

* add customer.getBalance
* add customer.listBillingHistory
* fix dev dependencies security issue GHSA-jpcq-cgw6-v4j6
* fix DO changed list-all-droplet-neighbors behavior https://developers.digitalocean.com/documentation/changelog/api-v2/changes-to-the-droplet-neighbors-report/

## **2020-04-27** - new version: 3.1.9

* IKubernetesClusterStatus type
* npm audit

## **2020-04-18** - new version: 3.1.8

* IDroplet type

## **2020-03-17** - new version: 3.1.7

* packages update
* npm audit

## **2020-03-15** - new version: 3.1.6

* automatic update package acorn from 5.7.3 to 5.7.4

## **2019-12-15** - new version: 3.1.5

* fix quality gate issues

## **2019-12-15** - new version: 3.1.4

* add **cdn-endpoints** module
* add **container-registry** module
* fix list-available-options-of-kubernetes url path

## **2019-12-14** - new version: 3.1.3

* add **kubernetes** module
* fix updateLoadBalancer test

## **2019-12-12** - new version: 3.1.2

* add **project** module

## **2019-12-10** - new version: 3.1.1

* add **droplet**.deleteDropletsByTag ([@Cosmic-Goat](https://github.com/Cosmic-Goat))

## **2019-12-08** - new version: 3.1.0

the `id` input was removed from the following methods to avoid missunderstands.
now it is `{entity}_id`.
(to allow backward compatibility the `id` field still accepted but will be removed in future versions)

the following methods were affected:
* add **database** module
* **loadBalancer**.addDropletsToLoadBalancer >> id -> load_balancer_id
* **loadBalancer**.addRulesToLoadBalancer >> id -> load_balancer_id
* **loadBalancer**.deleteLoadBalancer >> id -> load_balancer_id
* **loadBalancer**.getLoadBalancer >> id -> load_balancer_id
* **loadBalancer**.removeDropletsFromLoadBalancer >> id -> load_balancer_id
* **loadBalancer**.removeRulesFromLoadBalancer >> id -> load_balancer_id
* **loadBalancer**.updateLoadBalancer >> id -> load_balancer_id
* **snapshot**.deleteSnapshot >> id -> snapshot_id
* **snapshot**.getSnapshot >> id -> snapshot_id
* **sshKey**.destroySshKey >> id -> ssh_key_id
* **sshKey**.getSshKey >> id -> ssh_key_id
* **sshKey**.updateSshKey >> id -> ssh_key_id
* **volume**.attachVolumeToDroplet >> id -> volume_id
* **volume**.createVolumeSnapshot >> id -> volume_id
* **volume**.deleteVolume >> id -> volume_id
* **volume**.detachVolumeFromDroplet >> id -> volume_id
* **volume**.getVolume >> id -> volume_id
* **volume**.listVolumeActions >> id -> volume_id
* **volume**.listVolumeSnapshots >> id -> volume_id
* **volume**.resizeVolume >> id -> volume_id

## **2019-11-20** - new version: 3.0.2

* browser build

## **2019-11-17** - new version: 3.0.1

* updated main readme

## **2019-11-09** - new version: 3.0.0

project refactor to make it (simple and better) to (use and mantain).

if you are using the 2.6.0 and migrate to 3.0.0 you will need to change the inputs/outputs to fit the new pattern.

the main changes are:

* not using rxjs anymore, just simple promises.
* the return signature contain the full http response.
* as DO use snake_case, ALL camelCase properties were removed.
* unit tests with 100% code coverage.

## version 2.6.0

* initial stable version
