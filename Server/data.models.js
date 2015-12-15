var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    otherNames: Array,
    titles: Array,
    race: String,
    spouse: String,
    birth: String,
    death: String,
    weapons: Array,
    gender: String,
    hair: String,
    eyes: String,
    height: String,
    groups: Array,
    companions: Array
});
var RaceSchema = new Schema({
     origin: String,
     height: String,
     description: String,
     characteristics: String,
     enemies: Array,
     subgroups: Array,
     notables: Array,
     habitats: Array
});
var MonsterSchema = new Schema({
    name: String,
    description: String,
    origin: String,
    notables: String,
    habitats: Array
});
var PlaceSchema = new Schema({
    name: String,
    otherNames: Array,
    nearbyPlaces: Array,
    established: String,
    destroyed: String,
    events: Array
});
//var EventSchema = new Schema({});
var WeaponSchema = new Schema({
    name: String,
    otherNames: Array,
    description: String,
    creator: String,
    created: String,
    destroyer: String,
    destroyed: String,
    notableKills: Array,
    notableWielders: Array
});
var ArmorSchema = new Schema({
    name: String,
    otherNames: Array,
    description: String,
    creator: String,
    created: String,
    destroyer: String,
    destroyed: String,
    notableWielders: Array
});
var RelicSchema = new Schema({
    name: String,
    otherNames: Array,
    description: String,
    creator: String,
    created: String,
    destroyer: String,
    destroyed: String,
    notableWielders: Array
});

mongoose.model('Character', CharacterSchema);
mongoose.model('Race', RaceSchema);
mongoose.model('Monster', MonsterSchema);
mongoose.model('Place', PlaceSchema);
//    .model('Event', EventSchema)
mongoose.model('Weapon', WeaponSchema);
mongoose.model('Armor', ArmorSchema);
mongoose.model('Relic', RelicSchema);
