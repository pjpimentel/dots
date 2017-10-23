#!/bin/bash
node_modules/typedoc/bin/typedoc \
	--gaID	UA-102652050-1 \
	--gaSite auto \
	--readme ./docs-README.md \
	--mode file \
	--module commonjs \
	--out ./docs ./lib \
	--exclude ./lib/test
