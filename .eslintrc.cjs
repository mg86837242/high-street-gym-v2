module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    ignorePatterns: [
        // Unused folders && files
        'src/data/controllers/__high_street_gym_v0__',
        'src/data/controllers/__sail_away__',
        'src/data/models/__dbConnVariation__',
        'src/data/models/__high_street_gym_v0__',
        'src/data/models/__sail_away__',
    ],
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: 'warn',
            },
        },
    },
};
