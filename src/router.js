const { Event } = require('./event')

module.exports.Router = {
    async testToken(ctx, next) {
        if (ctx.request.body.token !== process.env.EVENT_TOKEN) {
            ctx.throw(418, 'Invalid Token provided')
        }

        await next()
    },

    async challenge(ctx, next) {
        if (ctx.request.body.type == 'url_verification') {
            ctx.body = ctx.request.body.challenge
            return
        }
        
        await next()
    },

    async event(ctx, next) {
        if (ctx.request.body.type == 'event_callback') {
            ctx.status = 200
            Event.handle(ctx.request.body.event)            
            return
        }

        await next()
    },
}