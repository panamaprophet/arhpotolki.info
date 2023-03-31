#!/bin/sh

DESTINATION_PATH=$(git rev-parse --git-path hooks/pre-commit)
SOURCE_PATH="$(dirname $(readlink -f $0))$(echo '/pre-commit')"

echo "copying file..."
cp $SOURCE_PATH $DESTINATION_PATH

echo "changing file mode..."
chmod +x $DESTINATION_PATH
