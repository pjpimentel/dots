# changelog

## **3.0.3** - 2019-12-03

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
