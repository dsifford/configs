'use strict';

module.exports = {
    extends: ['stylelint-config-recommended-scss'],
    rules: {
        'max-empty-lines': [1, { ignore: ['comments'] }],
        'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
        'rule-empty-line-before': [
            'always',
            { except: ['after-single-line-comment', 'first-nested'] },
        ],
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['value'] }],
        'selector-pseudo-class-no-unknown': [
            true,
            { ignorePseudoClasses: ['export', 'global'] },
        ],
    },
};
