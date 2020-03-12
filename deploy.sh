#!/usr/bin/bash

# DEFAULTS
image_name="neutrino"
container_name="neutrino"

build_image () {
    docker build -t "$image_name" .
}

run_container () {
    docker run -itd --name "$image_name" -p 5001:5001 -p 5000:5000 --env-file .env "$image_name"
}

stop_and_run () {
    docker stop "$container_name"
    docker rm "$container_name"
    run_container
}

simple_deploy () {
    git checkout beta
    git pull origin beta
    docker build -t neutrino .
    docker stop neutrino
    docker rm neutrino
    docker run -itd --name neutrino -p 5001:5001 -p 5000:5000 --env-file .env neutrino
}

main () {
    while [ -n "$1" ]
    do
        case "$1" in
            # --image-name) image_name=$2 ;;
            # --container-name) container_name=$2 ;;

            # --stop-and-run) stop_and_run ;;
            --simple) simple_deploy ;;
        esac
        shift
    done
}

# docker run -itd --name neutrino -p 6000:6000 neutrino
# docker exec -it neutrino bash server-wrap.sh --command serve --timeout 5s