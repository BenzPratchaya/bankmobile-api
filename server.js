const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

//
// controllers
//
const { UserController } = require('./controller/UserController');
const { CompanyController } = require('./controller/CompanyController');
const { ProductController } = require('./controller/ProductController');
const { SellController } = require('./controller/SellController');
const { ServiceController } = require('./controller/ServiceController');

//
// middleware
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//
// service
//
app.post('/api/service/create', ServiceController.create);
app.get('/api/service/list', ServiceController.list);
app.put('/api/service/update/:id', ServiceController.update);
app.delete('/api/service/remove/:id', ServiceController.remove);

//
// sell
//
app.post('/api/sell/create', SellController.create);
app.get('/api/sell/list', SellController.list);
app.delete('/api/sell/remove/:id', SellController.remove);
app.get('/api/sell/confirm', SellController.confirm);
app.get('/api/sell/dashboard/:year', SellController.dashboard);
app.get('/api/sell/history', SellController.history);
app.get('/api/sell/info/:id', SellController.info);

//
// buy
//
app.post('/api/buy/create', ProductController.create);
app.get('/api/buy/list/:page', ProductController.list);
app.put('/api/buy/update/:id', ProductController.update);
app.delete('/api/buy/remove/:id', ProductController.remove);
app.post('/api/buy/export', ProductController.exportToExcel);

//
// company
//
app.post('/api/company/create', CompanyController.create);
app.get('/api/company/list', CompanyController.list);

//
// user
//
app.post('/api/user/signin', UserController.signIn);
app.get('/api/user/info', UserController.info);
app.put('/api/user/update', UserController.update);
app.get('/api/user/list', UserController.list);
app.post('/api/user/create', UserController.create);
app.put('/api/user/update/:id', UserController.updateRow);
app.delete('/api/user/remove/:id', UserController.remove);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});