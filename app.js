import './env'
import Koa from 'koa'
import json from 'koa-json'
import convert from 'koa-convert'
import logger from 'koa-logger'
import path from 'path'
import historyApiFallback from 'koa-history-api-fallback'
import util from 'util'

import koaRouter from 'koa-router'
import koaBodyparser from 'koa-bodyparser'

const app = new Koa()
const router = koaRouter();

let port = process.env.PORT

app.use(convert(koaBodyparser()))
app.use(convert(json()))
app.use(convert(logger()))

app.use(async (ctx, next) => {
  let start = new Date()
  await next()
  let ms = new Date - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})

app.on('error', (err, ctx) => {
  console.error('error ' + err);
})

// 将路由规则挂载到Koa上
app.use(router.routes())
app.use(convert(historyApiFallback()))
app.use(convert(require('koa-static')(path.resolve('dist'))))

export default app.listen(port, () => {
  console.log(`Koa is listening in ${port}`)
})
