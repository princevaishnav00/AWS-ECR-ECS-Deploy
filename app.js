const express = require('express');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const sanitizer = require('sanitizer');

const app = express();

const port = 8000;


/* VIEW ENGINE*/

app.set('view engine', 'ejs');


/*  MIDDLEWARE */

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride(function (req, res) {

    if (
        req.body &&
        typeof req.body === 'object' &&
        '_method' in req.body
    ) {

        let method = req.body._method;

        delete req.body._method;

        return method;
    }
}));


/* =========================
   AWS DEVOPS SERVICES
========================= */

let services = [

    "Docker Container Service",

    "AWS Elastic Container Registry",

    "AWS Elastic Container Service",

    "CloudWatch Monitoring",

    "Jenkins CI/CD Pipeline"
];


/* =========================
   HOME ROUTE
========================= */

app.get('/', function (req, res) {

    res.redirect('/dashboard');
});


/* =========================
   DASHBOARD PAGE
========================= */

app.get('/dashboard', function (req, res) {

    res.render('dashboard.ejs', {

        todolist: services
    });
});


/* =========================
   ADD NEW SERVICE
========================= */

app.post('/dashboard/add/', function (req, res) {

    let newService = sanitizer.escape(req.body.newtodo);

    if (newService !== '') {

        services.push(newService);
    }

    res.redirect('/dashboard');
});


/* =========================
   DELETE SERVICE
========================= */

app.get('/dashboard/delete/:id', function (req, res) {

    if (req.params.id !== '') {

        services.splice(req.params.id, 1);
    }

    res.redirect('/dashboard');
});


/* =========================
   EDIT PAGE
========================= */

app.get('/dashboard/:id', function (req, res) {

    let serviceIdx = req.params.id;

    let service = services[serviceIdx];

    if (service) {

        res.render('edit-service.ejs', {

            todoIdx: serviceIdx,

            todo: service
        });

    } else {

        res.redirect('/dashboard');
    }
});


/*  UPDATE SERVICE */

app.put('/dashboard/edit/:id', function (req, res) {

    let serviceIdx = req.params.id;

    let updatedService =
        sanitizer.escape(req.body.editTodo);

    if (
        serviceIdx !== '' &&
        updatedService !== ''
    ) {

        services[serviceIdx] = updatedService;
    }

    res.redirect('/dashboard');
});


/* 404 HANDLER*/

app.use(function (req, res) {

    res.redirect('/dashboard');
});


/* =========================
   SERVER
========================= */

app.listen(port, function () {

    console.log(`
========================================

🚀 AWS DevOps Dashboard Running

🌐 URL:
http://localhost:${port}/dashboard

========================================
    `);
});


/* =========================
   EXPORT APP
========================= */

module.exports = app;