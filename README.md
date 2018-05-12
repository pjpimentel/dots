# dots

**Digital Ocean** API **V2** wrapper. **TypeScript** - **Javascript**

Not tested in production.
## Install
``` bash
    #npm install --save git+ssh://git@github.com:pjpimentel/dots.git
    npm install --save dots-wrapper
```
## Usage
Typescript
``` typescript
    import DigitalOcean from 'dots-wrapper';
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    digitalOcean.Account.get().subscribe(
        account => console.log(account),
        err => console.log(err.message)
    );
```
Javascript - Nodejs
``` javascript
    const {DigitalOcean} = require('dots-wrapper');
    const myApiToken = 'my-long-token';
    const digitalOcean = new DigitalOcean(myApiToken);

    digitalOcean.Account.get().subscribe(
        account => console.log(account),
        err => console.log(err.message)
    );
```
## Docs

## [https://dots.pimentel.co](https://dots.pimentel.co)

## License: [MIT](LICENSE)

## TODO

Endpoint docs
Add firewall endpoint
Compile to Browser usage.
