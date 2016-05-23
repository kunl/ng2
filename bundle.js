var SystemBuilder = require('systemjs-builder');
var argv = require('yargs').argv;
var builder = new SystemBuilder();

builder.loadConfig('./systemjs.config.js')
  .then(function(){
  	console.dir(argv)
	  var outputFile = argv.prod ? 'dist/bundle.min.js' : 'dist/bundle.js';
	  return builder.buildStatic('app', outputFile, {
		  minify: argv.prod,
		  mangle: argv.prod,
		  rollup: argv.prod
	  });
  })
  .then(function(){
	  console.log('bundle built successfully!');
  });