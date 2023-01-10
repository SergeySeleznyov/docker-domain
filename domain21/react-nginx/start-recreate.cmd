rem docker-compose up --no-deps --build frontend
docker-compose up -d --force-recreate && docker-compose ps
pause