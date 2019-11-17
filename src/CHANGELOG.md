# changelog

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
