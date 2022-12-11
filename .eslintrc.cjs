module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    ignorePatterns: [
        // Unused folders & files
        'src/data/controllers/__controllers_high_street_gym_v0__',
        'src/data/controllers/__controllers_sail_away__',
        'src/data/models/__databaseVariation__',
        'src/data/models/__models_high_street_gym_v0__',
        'src/data/models/__models_sail_away__',
    ],
    rules: {
        'prettier/prettier': ['error'],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
};
