/* eslint-disable */

module.exports = function (wallaby) {
    return {
        files: [
            'server/src/**/**.js',
            '!server/src/**/**.spec.js',
            'server/src/**/**.js.snap',
            { pattern: 'server/.env.example', instrument: false },
            { pattern: 'server/.env', instrument: false },
        ],

        tests: [
            'server/src/**/**.spec.js'
        ],

        env: {
            type: 'node',
            runner: '/Users/jferrell/.nvm/versions/node/v8.9.1/bin/node'
        },

        compilers: {
            'server/src/**/*.js': wallaby.compilers.babel()
        },

        testFramework: 'jest'
    };
};
