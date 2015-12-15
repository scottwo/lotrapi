var mongoose = require('mongoose');


module.exports = {
    getData: function(urlParams){
        var data;
        var Character = mongoose.model('Character'),
            Race = mongoose.model('Race'),
            Monster = mongoose.model('Monster'),
            Place = mongoose.model('Place'),
            Weapon = mongoose.model('Weapon'),
            Armor = mongoose.model('Armor'),
            Relic = mongoose.model('Relic');
        switch(urlParams.category) {
            case 'Character':
                data = Character.find();
                break;
            
            case 'Race':
                data = Race.find();
                break;
            
            case 'Monster':
                data = Monster.find();
                break;
            
            case 'Place':
                data = Place.find();
                break;
                
            case 'Weapon':
                data = Weapon.find();
                break;
                
            case 'Armor':
                data = Armor.find();
                break;
                
            case 'Relic':
                data = Relic.find();
                break;
                
            default: 
                data = "Incorrect URL Parameter";
                return;
        }
    },
    db: function(){
        var db = mongoose.connect('mongodb://localhost/lotrData');
        require('./data.models.js')
        return db;
    }
}

