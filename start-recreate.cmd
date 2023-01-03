pushd domain21
docker-compose up -d --force-recreate && docker-compose ps
popd
pause