#!/bin/bash
typedoc \
	--gaID	UA-102652050-1 \
	--gaSite dots.pimentel.co \
	--readme ./docs-README.md \
	--mode file \
	--module commonjs \
	--out ./docs ./lib \
	--exclude ./lib/test
