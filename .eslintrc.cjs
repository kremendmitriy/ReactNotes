module.exports = {
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   plugins: ['prettier'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json', './packages/*/tsconfig.json'],
   },
   ignorePatterns: ['*.js', 'build'],
   rules: {
      'import/named': 'off',
      'import/no-unresolved': 'off',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/anchor-has-content': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   root: true,
};
