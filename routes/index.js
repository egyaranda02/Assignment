const express = require('express');
const apiRouter = express.Router();
const accountController = require('../controllers/accountController');
const transactionController = require('../controllers/transactionController')

//Account Routes
apiRouter.get('/account/', accountController.getAllAccount);
apiRouter.post('/account/', accountController.addAccount);

//Transaction Routes
apiRouter.get('/transaction/', transactionController.getAllTransaction);
apiRouter.get('/report/', transactionController.printReport);
apiRouter.post('/transaction/', transactionController.inputTransaction);
apiRouter.get('/point/', transactionController.getPoint);

module.exports = apiRouter;