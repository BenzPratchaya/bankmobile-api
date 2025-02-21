const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

//
// controllers
//
const { UserController } = require('./controller/UserController');
const { CompanyController } = require('./controller/CompanyController');
//
// middleware
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//
// user
//
app.post('/api/user/signin', UserController.signIn);

//
// company
//
app.post('/api/company/create', CompanyController.create);
app.get('/api/company/list', CompanyController.list);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});