/**
 * Created by zh on 2018/6/5.
 */
import * as exampleController from '../controller/exampleController'
import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/example/:id', exampleController.getExampleById);
router.get('/examples', exampleController.getAllExamples);
router.post('/example', exampleController.createExample);

export  {
  router
};
