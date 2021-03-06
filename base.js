module.exports = {

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",

    ecmaFeatures: {
      'globalReturn': false, // allow return statements in the global scope
      'jsx': false, // enable JSX
      'experimentalObjectRestSpread': true // enable support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
    }
  },


  // Environment should be set by each project explicitly
  // We're setting only "browser" and "es6"
  env: {
    browser: true, // browser global variables.
    node: false, // Node.js global variables and Node.js scoping.
    commonjs: false, // CommonJS global variables and CommonJS scoping (use this for browse: false, //only code that uses Browserify/WebPack).
    worker: false, // web workers global variables.
    amd: false, // defines require() and define() as global variables as per the amd spec.
    mocha: false, // adds all of the Mocha testing global variables.
    jasmine: false, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    jest: false, // Jest global variables.
    phantomjs: false, // PhantomJS global variables.
    protractor: false, // Protractor global variables.
    qunit: false, // QUnit global variables.
    jquery: false, // jQuery global variables.
    prototypejs: false, // Prototype.js global variables.
    shelljs: false, // ShellJS global variables.
    meteor: false, // Meteor global variables.
    mongo: false, // MongoDB global variables.
    applescript: false, // AppleScript global variables.
    nashorn: false, // Java 8 Nashorn global variables.
    serviceworker: false, // Service Worker global variables.
    embertest: false, // Ember test helper globals.
    webextensions: false, // WebExtensions globals.
    es6: true // enable all ECMAScript 6 features except for modules.
  },


  rules: {

    //
    // Possible Errors
    //
    'no-cond-assign': [2, 'except-parens'], //disallow assignment operators in conditional expressions
    'no-console': 1, //disallow the use of console
    'no-constant-condition': 2, //disallow constant expressions in conditions
    'no-control-regex': 2, //disallow control characters in regular expressions
    'no-debugger': 2, //disallow the use of debugger
    'no-dupe-args': 2, //disallow duplicate arguments in function definitions
    'no-dupe-keys': 2, //disallow duplicate keys in object literals
    'no-duplicate-case': 2, //disallow duplicate case labels
    'no-empty-character-class': 2, //disallow empty character classes in regular expressions
    'no-empty': 2, //disallow empty block statements
    'no-ex-assign': 2, //disallow reassigning exceptions in catch clauses
    'no-extra-boolean-cast': 2, //disallow unnecessary boolean casts
    'no-extra-parens': 1, //disallow unnecessary parentheses
    'no-extra-semi': 2, //disallow unnecessary semicolons
    'no-func-assign': 2, //disallow reassigning function declarations
    'no-inner-declarations': 2, //disallow variable or function declarations in nested blocks
    'no-invalid-regexp': 2, //disallow invalid regular expression strings in RegExp constructors
    'no-irregular-whitespace': 2, //disallow irregular whitespace outside of strings and comments
    'no-obj-calls': 2, //disallow calling global object properties as functions
    'no-prototype-builtins': 0, //disallow calling some Object.prototype methods directly on objects
    'no-regex-spaces': 1, //disallow multiple spaces in regular expressions
    'no-sparse-arrays': 2, //disallow sparse arrays
    'no-template-curly-in-string': 2, //disallow template literal placeholder syntax in regular strings
    'no-unexpected-multiline': 2, //disallow confusing multiline expressions
    'no-unreachable': 2, //disallow unreachable code after return, throw, continue, and break statements
    'no-unsafe-finally': 2, //disallow control flow statements in finally blocks
    'no-unsafe-negation': 2, //disallow negating the left operand of relational operators
    'use-isnan': 2, //require calls to isNaN() when checking for NaN
    'valid-jsdoc': 1, //enforce valid JSDoc comments
    'valid-typeof': 2, //enforce comparing typeof expressions against valid strings

    //
    // Best Practices
    //
    'accessor-pairs': [ 2, {
      'getWithoutSet': true,
      'setWithoutGet': false
    }], //enforce getter and setter pairs in objects
    'array-callback-return': 2, //enforce return statements in callbacks of array methods
    'block-scoped-var': 0, //enforce the use of variables within the scope they are defined
    'class-methods-use-this': 0, //enforce that class methods utilize this
    'complexity': 0, //enforce a maximum cyclomatic complexity allowed in a program
    'consistent-return': 2, //require return statements to either always or never specify values
    'curly': [2, 'multi'], //enforce consistent brace style for all control statements
    'default-case': 2, //require default cases in switch statements
    'dot-location': 0, //enforce consistent newlines before and after dots
    'dot-notation': [2, {
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }], //enforce dot notation whenever possible
    'eqeqeq': [2, 'allow-null'], //require the use of === and !==
    'guard-for-in': 1, //require for-in loops to include an if statement
    'no-alert': 2, //disallow the use of alert, confirm, and prompt
    'no-caller': 2, //disallow the use of arguments.caller or arguments.callee
    'no-case-declarations': 2, //disallow lexical declarations in case clauses
    'no-div-regex': 2, //disallow division operators explicitly at the beginning of regular expressions
    'no-else-return': 2, //disallow else blocks after return statements in if statements
    'no-empty-function': 1, //disallow empty functions
    'no-empty-pattern': 2, //disallow empty destructuring patterns
    'no-eq-null': 0, //disallow null comparisons without type-checking operators
    'no-eval': 2, //disallow the use of eval()
    'no-extend-native': 2, //disallow extending native types
    'no-extra-bind': 2, //disallow unnecessary calls to .bind()
    'no-extra-label': 2, //disallow unnecessary labels
    'no-fallthrough': 1, //disallow fallthrough of case statements
    'no-floating-decimal': 1, //disallow leading or trailing decimal points in numeric literals
    'no-global-assign': 2, //disallow assignments to native objects or read-only global variables
    'no-implicit-coercion': 0, //disallow shorthand type conversions
    'no-implicit-globals': 2, //disallow variable and function declarations in the global scope
    'no-implied-eval': 2, //disallow the use of eval()-like methods
    'no-invalid-this': 2, //disallow this keywords outside of classes or class-like objects
    'no-iterator': 2, //disallow the use of the __iterator__ property
    'no-labels': 2, //disallow labeled statements
    'no-lone-blocks': 2, //disallow unnecessary nested blocks
    'no-loop-func': 2, //disallow function declarations and expressions inside loop statements
    'no-magic-numbers': 1, //disallow magic numbers
    'no-multi-spaces': 1, //disallow multiple spaces
    'no-multi-str': 2, //disallow multiline strings
    'no-new-func': 2, //disallow new operators with the Function object
    'no-new-wrappers': 2, //disallow new operators with the String, Number, and Boolean objects
    'no-new': 2, //disallow new operators outside of assignments or comparisons
    'no-octal-escape': 2, //disallow octal escape sequences in string literals
    'no-octal': 2, //disallow octal literals
    'no-param-reassign': 0, //disallow reassigning function parameters
    'no-proto': 2, //disallow the use of the __proto__ property
    'no-redeclare': 2, //disallow variable redeclaration
    'no-restricted-properties': 0, //disallow certain properties on certain objects
    'no-return-assign': 1, //disallow assignment operators in return statements
    'no-return-await': 1, //disallow unnecessary return await
    'no-script-url': 2, //disallow javascript: urls
    'no-self-assign': 1, //disallow assignments where both sides are exactly the same
    'no-self-compare': 1, //disallow comparisons where both sides are exactly the same
    'no-sequences': 1, //disallow comma operators
    'no-throw-literal': 2, //disallow throwing literals as exceptions
    'no-unmodified-loop-condition': 1, //disallow unmodified loop conditions
    'no-unused-expressions': 2, //disallow unused expressions
    'no-unused-labels': 2, //disallow unused labels
    'no-useless-call': 1, //disallow unnecessary calls to .call() and .apply()
    'no-useless-concat': 2, //disallow unnecessary concatenation of literals or template literals
    'no-useless-escape': 1, //disallow unnecessary escape characters
    'no-useless-return': 2, //disallow redundant return statements
    'no-void': 2, //disallow void operators
    'no-warning-comments': 0, //disallow specified warning terms in comments
    'no-with': 2, //disallow with statements
    'radix': 2, //enforce the consistent use of the radix argument when using parseInt()
    'vars-on-top': 2, //require var declarations be placed at the top of their containing scope
    'wrap-iife': [2, 'any'], //require parentheses around immediate function invocations
    'yoda': 0, //require or disallow “Yoda” conditions

    //
    // Strict Mode
    //
    'strict': 2,

    //
    // Variables
    //
    'init-declarations': 0, //require or disallow initialization in variable declarations
    'no-catch-shadow': 2, //disallow catch clause parameters from shadowing variables in the outer scope
    'no-delete-var': 2, //disallow deleting variables
    'no-label-var': 2, //disallow labels that share a name with a variable
    'no-restricted-globals': 0, //disallow specified global variables
    'no-shadow-restricted-names': 2, //disallow identifiers from shadowing restricted names
    'no-shadow': 1, //disallow variable declarations from shadowing variables declared in the outer scope
    'no-undef-init': 2, //disallow initializing variables to undefined
    'no-undef': 2, //disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undefined': 2, //disallow the use of undefined as an identifier
    'no-unused-vars': 2, //disallow unused variables
    'no-use-before-define': [2, 'nofunc'], //disallow the use of variables before they are defined

    //
    // Node.js and CommonJS
    //
    'callback-return': 0, //require return statements after callbacks
    'global-require': 2, //require require() calls to be placed at top-level module scope
    'handle-callback-err': 1, //require error handling in callbacks
    'no-mixed-requires': 1, //disallow require calls to be mixed with regular variable declarations
    'no-new-require': 1, //disallow new operators with calls to require
    'no-path-concat': 1, //disallow string concatenation with __dirname and __filename
    'no-process-env': 1, //disallow the use of process.env
    'no-process-exit': 1, //disallow the use of process.exit()
    'no-restricted-modules': 0, //disallow specified modules when loaded by require
    'no-sync': 0, //disallow synchronous methods

    //
    // Stylistic Issues
    //
    'array-bracket-spacing': [2, 'never'], //enforce consistent spacing inside array brackets
    'block-spacing': [2, 'always'], //enforce consistent spacing inside single-line blocks
    'brace-style': [2, '1tbs'], //enforce consistent brace style for blocks
    'camelcase': 2, //enforce camelcase naming convention
    'comma-dangle': [1, 'never'], //require or disallow trailing commas
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }], //enforce consistent spacing before and after commas
    'comma-style': [2, 'last'], //enforce consistent comma style
    'computed-property-spacing': [2, 'never'], //enforce consistent spacing inside computed property brackets
    'consistent-this': [1, 'root'], //enforce consistent naming when capturing the current execution context
    'eol-last': 2, //require or disallow newline at the end of files
    'func-call-spacing': [2, 'never'], //require or disallow spacing between function identifiers and their invocations
    'func-name-matching': 0, //require function names to match the name of the variable or property to which they are assigned
    'func-names': 0, //require or disallow named function expressions
    'func-style': 0, //enforce the consistent use of either function declarations or expressions
    'id-blacklist': 0, //disallow specified identifiers
    'id-length': 0, //enforce minimum and maximum identifier lengths
    'id-match': 0, //require identifiers to match a specified regular expression
    'indent': [2, 4, {
      'SwitchCase': 1
    }], //enforce consistent indentation
    'jsx-quotes': 2, //enforce the consistent use of either double or single quotes in JSX attributes
    'key-spacing': 0, //enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': 2, //enforce consistent spacing before and after keywords
    'line-comment-position': 0, //enforce position of line comments
    'linebreak-style': 0, //enforce consistent linebreak style
    'lines-around-comment': 0, //require empty lines around comments
    'lines-around-directive': 0, //require or disallow newlines around directives
    'max-depth': 0, //enforce a maximum depth that blocks can be nested
    'max-len': 0, //enforce a maximum line length
    'max-lines': 0, //enforce a maximum number of lines per file
    'max-nested-callbacks': 0, //enforce a maximum depth that callbacks can be nested
    'max-params': 0, //enforce a maximum number of parameters in function definitions
    'max-statements-per-line': 0, //enforce a maximum number of statements allowed per line
    'max-statements': 0, //enforce a maximum number of statements allowed in function blocks
    'multiline-ternary': 0, //enforce newlines between operands of ternary expressions
    'new-cap': 2, //require constructor names to begin with a capital letter
    'new-parens': 0, //require parentheses when invoking a constructor with no arguments
    'newline-after-var': [1, 'always'], //require or disallow an empty line after variable declarations
    'newline-before-return': 0, //require an empty line before return statements
    'newline-per-chained-call': 0, //require a newline after each call in a method chain
    'no-array-constructor': 2, //disallow Array constructors
    'no-bitwise': 0, //disallow bitwise operators
    'no-continue': 0, //disallow continue statements
    'no-inline-comments': 0, //disallow inline comments after code
    'no-lonely-if': 1, //disallow if statements as the only statement in else blocks
    'no-mixed-operators': 0, //disallow mixed binary operators
    'no-mixed-spaces-and-tabs': 2, //disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': [1, {
      'max': 2
    }], //disallow multiple empty lines
    'no-negated-condition': 0, //disallow negated conditions
    'no-nested-ternary': 1, //disallow nested ternary expressions
    'no-new-object': 2, //disallow Object constructors
    'no-plusplus': 0, //disallow the unary operators ++ and --
    'no-restricted-syntax': 0, //disallow specified syntax
    'no-tabs': 0, //disallow all tabs
    'no-ternary': 0, //disallow ternary operators
    'no-trailing-spaces': 2, //disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, //disallow dangling underscores in identifiers
    'no-unneeded-ternary': 2, //disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 1, //disallow whitespace before properties
    'object-curly-newline': 0, //enforce consistent line breaks inside braces
    'object-curly-spacing': 0, //enforce consistent spacing inside braces
    'object-property-newline': 0, //enforce placing object properties on separate lines
    'one-var-declaration-per-line': 0, //require or disallow newlines around variable declarations
    'one-var': 1, //enforce variables to be declared either together or separately in functions
    'operator-assignment': 1, //require or disallow assignment operator shorthand where possible
    'operator-linebreak': [2, 'before'], //enforce consistent linebreak style for operators
    'padded-blocks': [2, 'never'], //require or disallow padding within blocks
    'quote-props': 0, //require quotes around object literal property names
    'quotes': [2, 'single'], //enforce the consistent use of either backticks, double, or single quotes
    'require-jsdoc': 0, //require JSDoc comments
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }], //enforce consistent spacing before and after semicolons
    'semi': [2, 'always'], //require or disallow semicolons instead of ASI
    'sort-keys': 0, //require object keys to be sorted
    'sort-vars': 0, //require variables within the same declaration block to be sorted
    'space-before-blocks': [2, 'always'], //enforce consistent spacing before blocks
    'space-before-function-paren': [2, 'always'], //enforce consistent spacing before function definition opening parenthesis
    'space-in-parens': [2, 'never'], //enforce consistent spacing inside parentheses
    'space-infix-ops': [2, {
      'int32Hint': true
    }], //require spacing around infix operators
    'space-unary-ops': 0, //enforce consistent spacing before or after unary operators
    'spaced-comment': 1, //enforce consistent spacing after the // or /* in a comment
    'unicode-bom': 0, //require or disallow Unicode byte order mark (BOM)
    'wrap-regex': 0, //require parenthesis around regex literals

    //
    // EcmaScript 6
    //
    'arrow-body-style': [2, 'as-needed'], //require braces around arrow function bodies
    'arrow-parens': [2, 'as-needed'], //require parentheses around arrow function arguments
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }], //enforce consistent spacing before and after the arrow in arrow functions
    'constructor-super': 2, //require super() calls in constructors
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }], //enforce consistent spacing around * operators in generator functions
    'no-class-assign': 2, //disallow reassigning class members
    'no-confusing-arrow': 0, //disallow arrow functions where they could be confused with comparisons
    'no-const-assign': 2, //disallow reassigning const variables
    'no-dupe-class-members': 2, //disallow duplicate class members
    'no-duplicate-imports': 2, //disallow duplicate module imports
    'no-new-symbol': 2, //disallow new operators with the Symbol object
    'no-restricted-imports': 0, //disallow specified modules when loaded by import
    'no-this-before-super': 2, //disallow this/super before calling super() in constructors
    'no-useless-computed-key': 1, //disallow unnecessary computed property keys in object literals
    'no-useless-constructor': 1, //disallow unnecessary constructors
    'no-useless-rename': 1, //disallow renaming import, export, and destructured assignments to the same name
    'no-var': 0, //require let or const instead of var
    'object-shorthand': [2, 'always'], //require or disallow method and property shorthand syntax for object literals
    'prefer-arrow-callback': 1, //require arrow functions as callbacks
    'prefer-const': 1, //require const declarations for variables that are never reassigned after declared
    'prefer-numeric-literals': 0, //disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-rest-params': 0, //require rest parameters instead of arguments
    'prefer-spread': 0, //require spread operators instead of .apply()
    'prefer-template': 1, //require template literals instead of string concatenation
    'require-yield': 2, //require generator functions to contain yield
    'rest-spread-spacing': 0, //enforce spacing between rest and spread operators and their expressions
    'sort-imports': 0, //enforce sorted import declarations within modules
    'symbol-description': 1, //require symbol descriptions
    'template-curly-spacing': [2, 'never'], //require or disallow spacing around embedded expressions of template strings
    'yield-star-spacing': [2, {"before": true, "after": true}], //require or disallow spacing around the * in yield* expressions
  }
}
