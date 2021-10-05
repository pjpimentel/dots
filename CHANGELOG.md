# changelog

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
