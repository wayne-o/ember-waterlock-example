# ember-waterlock-example


# Install top level deps:

- npm install -g sails@v0.12.0-rc3
- npm install -g ember-cli
- npm install -g phantomjs

# Pull down the code and initialize submodules
- git pull && git submodule init && git submodule update && git submodule status

# Install and test deps
- cd waterlock
- npm install && npm test
- cd ../waterlock-local-auth
- npm install && npm test
- cd ../waterlock-google-auth
- npm install && npm test
- - cd ../waterlock-facebook-auth
- npm install && npm test

#Run the apps:
- sails lift --port 8181
- ember server --proxy http://dev.festivaltribe.co.uk:8181
