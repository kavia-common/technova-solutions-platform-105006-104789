#!/bin/bash
cd /home/kavia/workspace/code-generation/technova-solutions-platform-105006-104789/technova_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

