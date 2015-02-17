require('shared-sofa-component-tasks')(require('gulp'), {
    pkg: require('./package.json'),
    baseDir: __dirname,
    testDependencyFiles: [
        'node_modules/angular-sofa-scrolling-shadow/dist/sofaScrollingShadow.js',
        'node_modules/angular-sofa-scrolling-shadow/dist/sofa-scrolling-shadow.css'
    ]
});
