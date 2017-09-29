const Koa = require('koa');
const app = new Koa();

const go = require('./src')(app)

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000);