var express = require('express');
var router = express.Router();

/* GET users listing. */


const Contact = require('../models/contacts');


router.get('/', function(req, res, next){
    res.send('API PAGE');
});
router.get('/tasks', function(req, res, next){
    res.send('TASKS API');
});
// retrieve contacts
router.get('/contacts', function(req, res, next){
    //res.send('getting contact list');
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});
// add contact
router.post('/contact', function(req, res, next){
    //res.send('adding a contact');
    let newContact = new Contact({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        phone: req.body.phone
    });
    newContact.save((err, contact)=>{

        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added successfully'});
        }
    })
});

//del contact
router.delete('/contact/:id', function(req, res, next){
    res.send('deleting a contact');
});
module.exports = router;

