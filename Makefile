PROJECT = "Web Application API"

clean: ;@echo "Cleaning node_modules" \
	rm -rf node_modules
.PHONY: clean

test: ;@echo "Testing ${PROJECT}..."; \
	export NODE_PATH=.; \
	npm run test
.PHONY: test

install: ;@echo "Installing ${PROJECT}..."; \
	npm install
.PHONY: install

dev: ;@echo "Installing ${PROJECT}..."; \
	npm run start:dev
.PHONY: dev

build: ;@echo "Building ${PROJECT}..."; \
	git pull --rebase; \
	npm run build
.PHONY: build

start: ;@echo "Starting ${PROJECT}..."; \
	export NODE_PATH=.; \
	npm run start:prod
.PHONY: start
