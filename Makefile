install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

start-brain-even:
	npx babel-node src/bin/brain-even.js

start-brain-calc:
	npx babel-node src/bin/brain-calc.js

start-brain-gcd:
	npx babel-node src/bin/brain-gcd.js

start-brain-prime:
	npx babel-node src/bin/brain-prime.js

start-brain-progression:
	npx babel-node src/bin/brain-progression.js

publish:
	npx publish --dry -run

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .
