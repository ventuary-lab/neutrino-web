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
    # git checkout beta
    # git pull origin beta
    docker rmi "$image_name"
    docker build -t "$image_name" .
    docker stop "$image_name"
    docker rm "$image_name"
    docker run -itd --name "$container_name" -p 5001:5001 -p 5000:5000 --env-file .env "$image_name"
}

simple_build () {
    docker build -t "$image_name" .
    docker stop "$image_name"
    docker rm "$image_name"
}

main () {
    while [ -n "$1" ]
    do
        case "$1" in
            --in) image_name=$2 ;;
            --cn) container_name=$2 ;;
            # --stop-and-run) stop_and_run ;;
            --simple-build) simple_build ;;
            --simple) simple_deploy ;;
        esac
        shift
    done
}

main $@