pullrequest?=""
branch?=master
publish?=
preid?=

.PHONY: install
install:
	yarn install --frozen-lockfile
	@NODE_ENV=ci yarn bootstrap

.PHONY: validate
validate:
	yarn validate

.PHONY: version
version:
	npx lerna version --message 'chore(release): publish' $(args)

.PHONY: publish
publish:
	npx lerna publish from-package $(publish)

.PHONY: pr-publish
pr-publish:
	npx lerna publish --canary --message 'chore(release): publish' --preid $(preid) --npm-tag $(branch) --force-publish

.PHONY: docs
docs:
	PUBLIC_URL=./ yarn docs:build
	cp -r config docs/build    # holds cache settings for publish
	(cd docs/build; tar czf ../../origin-ui-docs.tar.gz .; cd ../..)

.PHONY: test/visuals
test/visuals:
	docker-compose -p origin-ui \
		-f docker-compose.yml \
		build
	docker-compose -p origin-ui \
		-f docker-compose.yml \
		run testcafe