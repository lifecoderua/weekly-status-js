const Koa = require('koa');
const app = new Koa();
var bodyParser = require('koa-bodyparser');

if (app.env === 'development') {
    require('dotenv').config();
}

app.on('error', function (err) {
    console.log('ONERROR', arguments)
})

app.use(bodyParser({
    onerror: function (err, ctx) {
        console.log(err)
        ctx.throw('body parse error', 422);
    }
  }))


const go = require('./src')(app)

app.listen(8080);