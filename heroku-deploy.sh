#!/usr/bin/bash

docker build -t neutrino .
docker run -itd --name neutrino -p 6000:6000 neutrino