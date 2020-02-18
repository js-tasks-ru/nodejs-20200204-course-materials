const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();

  await next();

  const end = Date.now();
  console.log(`${ctx.request.method} - ${ctx.request.url} - ${ctx.request.ip} - ${end - start}ms`);
});

app.use(async (ctx, next) => {
  ctx.body = {'hello': 'world'};
  ctx.status = 200;

  return new Promise(resolve => setTimeout(resolve, 200));
});

app.listen(3000);


/**
 *         req
 *  mw1      *     await next()     *
 *  mw2        *   await next()   *
 *  mw3                *
 *
 *
 */
