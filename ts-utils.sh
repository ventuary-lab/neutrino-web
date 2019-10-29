# !/usr/bin/bash

function main {

    while [ -n "$1" ]
    do
        case "$1" in
            -fix-require) rewrite_require $2 ;;
        esac
        shift
    done
}

function rewrite_require {
    local data=$(cat $1);

    
    for line in $data 
    do
        local conforms=$(
            node -e "
                \`$data\`.match(/^const (\w+) = require/g)
            " -p
        );

        if [ "$conforms" != 'null' ]
        then
            local line=$(
                node -e "
                    let d = \`
                        $data
                    \`;
                    d = d.replace(/const/, 'import');

                    d = d.replace(/\= require\((.+)/, (res) => {
                        res = res.slice(10, res.length - 2);

                        return ' from ' + res + ';';
                    });

                    console.log(d);
                "
            );
            echo $line;
        fi
    done
}

main $@