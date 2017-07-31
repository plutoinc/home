const bundle = require('./bundle');

module.exports.ssr = bundle.ssr.handler;
module.exports.subscribeMail = bundle.ssr.subscribeMailHandler;
