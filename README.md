# emulate
a minimalist library for test an express / Nodejs / API 


# INSTALL NECCESARY DEPENDENCIES ON MAIN PROJECT

npm install --save ws

npm install --save path

    OR

"dependencies": {
    "path": "^0.12.7",
    "ws": "^8.18.1"
}


# PACKAGE.JSON CONFIGURATION ON MAIN PROJECT

copy and paste wsServer <FOLDER> to FOLDER on main project


"scripts": {
    "test": "node <FOLDER> -- environment=test"
}


"scripts": {
    "test": "node ./test/wsServer.js -- environment=test"
}


# FILL CASES
  if you download stepByStep you have many expamples to see

# FILL WSSERVER

# npm run test

