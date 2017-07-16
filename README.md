# dots

**Digital Ocean** API **V2** wrapper. **TypeScript** - **Javascript**

Not tested in production.
## Install
``` bash
    #npm install --save dots
    npm install --save git+ssh://git@github.com:pjpimentel/dots.git
```
## Usage
Typescript
``` typescript
    import DigitalOcean from 'dots';
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    async function main(){
        try{
            let account = await digitalOcean.Account.get();
            console.log(account);
        } catch(e){
            console.log(e.message);
        }
    }

    main();
```
Javascript - Nodejs
``` javascript
    const DigitalOcean = require('dots');
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    digitalOcean.Account.get()
        .then(account => console.log(account))
        .catch(e => console.log(e.message));
```
## Docs

## [https://dots.pimentel.co](https://dots.pimentel.co)

## License: [MIT](LICENSE)

## TODO

Endpoint docs
Add firewall endpoint
Compile to Browser usage.
