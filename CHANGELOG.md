# changelog

## **3.1.8** - 2020-04-18

### **fix**

* IDroplet type

## **3.1.7** - 2020-03-17

### **fix**

* packages update
* npm audit

## **3.1.6** - 2020-03-15

### **fix**

* automatic update package acorn from 5.7.3 to 5.7.4

## **3.1.5** - 2019-12-15

### **fix**

* quality gate issues

## **3.1.4** - 2019-12-15

### **added**

* **cdn-endpoints** module
* **container-registry** module

### **fix**

* list-available-options-of-kubernetes url path

## **3.1.3** - 2019-12-14

### **added**

* **kubernetes** module

### **fix**

* updateLoadBalancer test

## **3.1.2** - 2019-12-12

### **added**

* **project** module

## **3.1.1** - 2019-12-10

### **added**

* **droplet**.deleteDropletsByTag ([@Cosmic-Goat](https://github.com/Cosmic-Goat))

## **3.1.0** - 2019-12-08

### **added**

* **database** module

### **changed**

the `id` input was removed from the following methods to avoid missunderstands.
now it is `{entity}_id`.
(to allow backward compatibility the `id` field still accepted but will be removed in future versions)

the following methods were affected:

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

## **3.0.2** - 2019-11-20

added browser source

### **added**

* browser build

## **3.0.1** - 2019-11-17

release to sync npm package README with latest changes

### **changed**

* updated main readme

## **3.0.0** - 2019-11-09

project refactor to make it (simple and better) to (use and mantain).

if you are using the 2.6.0 and migrate to 3.0.0 you will need to change the inputs/outputs to fit the new pattern.

the main changes are:

* not using rxjs anymore, just simple promises.
* the return signature contain the full http response.
* as DO use snake_case, ALL camelCase properties were removed.
* unit tests with 100% code coverage.

## **2.6.0**

* initial stable version
