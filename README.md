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