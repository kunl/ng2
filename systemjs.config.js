(function(global) {

    var map = {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'd3': 'node_modules/d3',
    };

    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'd3': {
            main: 'build/d3.js',
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'forms',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    };

    ngPackageNames.forEach(packUmd);

    packages['@angular/router'] = {
        main: 'index.js',
        defaultExtension: 'js'
    };

    var config = {
        map: map,
        packages: packages
    }

    System.config(config);

})(this);