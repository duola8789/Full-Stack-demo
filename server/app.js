/**
 * Created by zh on 2018/6/5.
 */

import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBodyParser from 'koa-bodyparser';
import KoaLogger from 'koa-logger';
import KoaJson from 'koa-json';

import * as auth from './router/authRouter';

const app = new Koa();
const router = new KoaRouter();
const authRouter = auth.router;

app.use(KoaBodyParser());
app.use(KoaLogger());
app.use(KoaJson());

app.use( async (ctx, next) => {
  const start = new Date();
  await next();
  let ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms); // 显示执行的时间
});

app.on('error', (err, ctx) => {
  console.log('server error: ', err);
});

router.use('/auth', authRouter.routes());

app.use(router.routes());

app.listen(8889, () => {
  console.log('Koa is listening in 8889');
});

export default app;
