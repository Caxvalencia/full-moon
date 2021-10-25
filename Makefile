.PHONY: getting-started
getting-started:
	npm i -g nx
	npm install
	make run-servers

run-servers:
	nx run-many --target=serve --projects=dark-side-express,light-side-angular --parallel

deploy:
  nx run-many --target=build --projects=dark-side-express,light-side-angular --parallel
  nx run-many --target=deploy --projects=dark-side-express,light-side-angular --parallel
