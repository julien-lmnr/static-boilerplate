node_modules:
	yarn

.PHONY: sass
dev: node_modules
	npx parcel src/index.njk

build: node_modules
	npx parcel build src/index.njk

stylelint: node_modules
	npx stylelint "src/assets/**/*.scss"

eslint: node_modules
	npx eslint "src/assets/**/*.js"
