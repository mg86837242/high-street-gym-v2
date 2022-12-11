module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    ignorePatterns: [
        'src/data/controllers/__controllers_high_street_gym_v0__',
        'src/data/controllers/__controllers_sail_away__',
        'src/data/models/__models_high_street_gym_v0__',
        'src/data/models/__models_sail_away__',
        'src/data/__database_high_street_gym_v0__.js',
    ],
    rules: {
        'prettier/prettier': ['error'],
        indent: ['error', 4],
    },
};
