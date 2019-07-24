## DOCKER PUSH
docker image build -t study/mangotv-web:latest . 
docker container run -t -p 9001:3000 study/mangotv-web:latest