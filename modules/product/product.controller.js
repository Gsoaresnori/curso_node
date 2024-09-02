import { Router } from "express";

export const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/', function (req, res) {
    res.send('product USER AGORA')
});

router.get('/:product', function (req, res) {
    res.send('product')
});