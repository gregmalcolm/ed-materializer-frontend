/* jshint node: true */
var figaro = require('figaro');

module.exports = function(deployTarget) {
  return new Promise(function(resolve, reject) {
    var ENV = {
      build: {}
      // include other plugin configuration that applies to all deploy targets here
    };

    figaro.parse(null, function(err) {
      if (!err) {
        if (deployTarget === 'development') {
          ENV.build.environment = 'development';
          // configure other plugins for development deploy target here
        }

        if (deployTarget === 'staging') {
          ENV.build.environment = 'production';
          // configure other plugins for staging deploy target here
        }

        if (deployTarget === 'production') {
          ENV.build.environment = 'production';
          // configure other plugins for production deploy target here
          ENV.s3 = {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            bucket: 'elasticbeanstalk-us-east-1-354643948167',
            region: 'us-east-1',
            filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}'
          };
        }
        resolve(ENV);
      } else {
        console.log(`Figaro failed: ${err}`);
        reject(err);
      }
    });
  });
};
