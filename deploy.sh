#!/usr/bin/bash

docker build -t neutrino .
docker run -itd --name neutrino -p 6000:6000 neutrino
# docker exec -it neutrino bash server-wrap.sh --command serve --timeout 5s