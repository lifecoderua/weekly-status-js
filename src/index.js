const { Router } = require('./router')
const { Slack } = require('./slack')

module.exports = function go(app) {
    app.use(async (ctx, next) => {
        console.log(ctx.request.body)
        await next();
    })

    app.use(Router.testToken)
    app.use(Router.challenge)
    app.use(Router.event)

    app.use(async ctx => {
        ctx.body = 'Hello //World';
    });
}