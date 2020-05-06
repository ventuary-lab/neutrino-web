# Neutrino Protocol

Neutrino is an algorithmic price-stable cryptocurrency protocol that allows for the creation of stable coins tied to a specific real world asset, such as national currency or commodity, and collateralized by a native token. The first synthetic asset created with Neutrino Protocol is USD Neutrino (USDN). Neutrino is currently in public beta.

Neutrino documentation is hosted at docs.neutrino.at.

# Deployment

App deploys using Docker, with default image and container name as "neutrino".


### Ports reference

In this app, two isolated processes are being run in parallel.
Firstly, main app instance that only returns results (5000 port).
Second app instance that only updates redis(5001 port).
Parsing blockchain (sync loop that blocks Node.JS I/O) and persisting data to storage took dozens of seconds to complete. 

That is why we only request to 5000 port inside docker container.

### Simple deploy
```
    bash deploy.sh --simple
```

### Providing exact image or container name

'--in' param stands for image name, and '--cn' for container name.

```
    bash deploy.sh --in neutrino --cn neutrino --simple
```

### Example with Chinese version usage.

Branch 'beta-localized' has chinese version. We don't use here '--simple'
option, if another instance of app is already running. 

So we run it manually, let's say, on port 5002. 

```
    > git checkout beta-localized
    > bash deploy.sh --in cn-neutrino --simple-build
    > docker run -itd --name cn-neutrino -p 5002:5000 --env-file .env cn-neutrino
```

### Running outside the Docker (local dev)

In order to run backend services we need to run 2 isolated processes.
The first one that updates redis (5001 port by default) and another one
that serves client API calls (5000 port by default). 

```
    > npm run serve-and-update
    > # In another window
    > npm run serve
```

After that, local webpack server can be started.

```
    > npm run dev
```


###  Endpoints reference
  
| Route | Description | Param 
|----------------|-------------------------------|-----------------------------|
| `/api/v1/init` | `Return config variables` | `-` |
|`/api/v1/staking/mass-payment/:address/:assetId`| `Returns Mass Payment transactions of configured sender` |`account address and assetID`
|`/api/v1/neutrino-config/:pairName`| `Checks dApp config state, i.g. is the dApp blocked or not.` | `pairName, example: 'usd-nb_usd-n'`
|`/api/v1/bonds/:pairName/orders`|`Returns buy/auction orders of all users (IOrder[])`|`pairName`
|`/api/v1/liquidate/:pairName/orders`|`Returns liquidate orders of all users (IOrder[])`|`pairName`
|`/api/v1/bonds/user/:address`|`Returns liquidate & auction orders of specific address ({ opened: IOrder[], history: IOrder[] })`| `address`
|`/api/explorer/`| `Wildcard reference to Neutrino Explorer` |`-`
|`/api/*` | `Return all available methods` | `-`
|`/static/*` | `Return static files in relative project directory src/*`
|`/whitepaper` | `Redirects to wp.neutrino.at` | `-`

> `pairName` param that is always used is 'usd-nb_usd-n'. 



### Environment file reference

| Param | Desired Value | Desc 
|-------|-------|-----|
| `APP_ADDRESS_USDNB_USDN` | `dApp address` | `Main neutrino contract` |`APP_DAPP_NETWORK` | `mainnet, testnet, stagenet, etc.` | `Network name`
|`APP_ENV` | `string` | `App environment name`
|`IS_CLEANING_REDIS` | `boolean` | `Checks, whether to flush redis storage on app start`
|`NODE_ENV` | `string` | `Node.js environment name`
|`PAPERTRAIL_API_TOKEN` | `string` | `Papetrail is log saver, not used currently`
|`REDIS_NAMESPACE` | `string` | `Redis records prefix`
|`MASS_PAYMENT_SENDER` | `waves address` | `Staking payments sender address`
|`POSTGRES_CONNECTION_URL` | `URL` | `Connection URL to PosgreSQL database`
|`EXPLORER_ENDPOINT` | `URL` | `URL where Neutrino Explorer is accessible`


### NGINX config examples

#### Mainnet

[Beta Neutrino Example](nginx/example.conf)