(function(global) {

  var map = {
    'app':         'app',
    '@angular':    'node_modules/@angular',
    'rxjs':        'node_modules/rxjs'
  };

  var packages = {
    'app':         { main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':        { defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];

  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);