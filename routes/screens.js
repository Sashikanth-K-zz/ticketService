var express = require('express');
var router = express.Router();

var screenFactory = require('../routes/screenFactory.js');

var bookingStore = require('../routes/bookingStore.js');



/* GET screens listing. */
router.get('/screens', function (req, res, next) {
    res.send(screenFactory.getAll());
});


/* GET screen . */
router.get('/screens/:id', function (req, res, next) {
    console.log(req.params);
    console.log(screenFactory.getOne(req.params.id));
    res.send(screenFactory.getOne(req.params.id));
});

/* POST screen . */
router.post('/screens', function (req, res, next) {
    screenFactory.addScreen(req.body);
    res.send("Successfully added");
});

/* POST screen . */
router.put('/screens/:id', function (req, res, next) {
     
     var flag = screenFactory.updateScreen(req.params.id,req.body);
     
    res.send(flag);
});


/* POST screen . */
router.post('/bookings', function (req, res, next) {
    var bookObj = req.body;
    var obj = screenFactory.getOne(bookObj.id);
    var flag = false;
    var response = null;
    if(obj.availableSeats - bookObj.seats >= 0){
        obj.availableSeats = obj.availableSeats - bookObj.seats;
        screenFactory.updateScreen(obj.id,obj);
        response = bookingStore.book({
            'screenId' : obj.id,
            'seats' : bookObj.seats
        });
        
    }
   
    res.send(response);
});

/* GET bookings listing. */
router.get('/bookings', function (req, res, next) {
    res.send(bookingStore.getAll());
});






module.exports = router;
