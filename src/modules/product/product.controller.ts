import { Request, Response, Router } from 'express';

const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/', function (_, res: Response): void {
  res.send('product USER AGORA');
});

router.get('/:product', function (req, res) {
  res.send('product');
});

export default productRouter;
