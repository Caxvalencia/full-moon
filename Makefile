.PHONY: getting-started
getting-started:
	npm i -g nx
	npm install
	make run-servers

run-servers:
	nx run-many --target=serve --projects=dark-side-express,light-side-angular --parallel

deploy:
	nx run-many --target=deploy --projects=dark-side-express,light-side-angular --parallel
	make deploy-run

deploy-run:
	docker run -d -p 3333:3333 --name dark-side-express-server dark-side-express
	docker run -d -p 4200:80 --name light-side-angular-client light-side-angular

deploy-up:
	docker start dark-side-express-server
	docker start light-side-angular-client

deploy-down:
	docker stop dark-side-express-server
	docker stop light-side-angular-client
