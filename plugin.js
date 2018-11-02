const CryptoJs = require('crypto-js');

module.exports.templateTags = [{
    name: 'jseval',
    displayName: 'JSEval',
    description: 'Evaluate/run Javascript code',
    args: [{
        displayName: 'Javascript code',
        description: 'Javascript code',
        type: 'string',
        placeholder: 'Your JS Code Here'
    }],
    run (context, js) {
        console.log(context);
        try {
            r = eval(js);
        } catch (err) {
            throw new Error(`Cannot eval: ${err.message}`);
        }

        return r
    }
}]
