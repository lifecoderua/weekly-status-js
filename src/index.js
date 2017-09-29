

module.exports = function go(app) {
    app.use(async ctx => {
        ctx.body = 'Hello //World';
    });
}