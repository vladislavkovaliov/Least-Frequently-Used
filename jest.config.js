export default {
    preset: 'ts-jest',
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
};