console.log("inside of dogs.js");

const mongoose = require("mongoose");
const Dog = mongoose.model('Dog');

class DogController {
    index(req, res) {
        Dog.find({})
            .then(dogs => res.render("index", {dogs}))
            .catch(err => {
                console.log(err)
                res.render("index", {dogs: []});
            });
    }
    create(req, res) {
        let dog = new Dog(req.body);
        dog.save()
            .then(res.redirect("/"))
            .catch(err => {
                console.log(err);
                res.redirect("/")
            });
    }
    show(req, res) {
        console.log(req.params._id);
        Dog.findById({_id: req.params._id})
            .then(dog => res.render("show", {dog}))
            .catch(err => res.json(err));
    }
}

module.exports = new DogController();