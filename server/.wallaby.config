/* eslint-disable */

module.exports = function (wallaby) {
    console.log(wallaby);
    return {
        files: [
            'src/**/**.js',
            '!src/**/**.spec.js',
            'src/**/**.js.snap',
            { pattern: '.env.example', instrument: false },
            { pattern: '.env', instrument: false },
        ],

        tests: [
            'src/**/**.spec.js'
        ],

        env: {
            type: 'node',
            runner: '/Users/jferrell/.nvm/versions/node/v8.4.0/bin/node'
        },

        compilers: {
            'src/**/*.js': wallaby.compilers.babel()
        },

        testFramework: 'jest'
    };
};
