const mongoose = require('mongoose');

const PolicySchema = mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_address: {
        type: String,
        required: true
    },
    premium: {
        type: String,
        required: true
    },
    policy_type: {
        type: String,
        required: true
    },
    insurer_name: {
        type: String,
        required: true
    }
});

const Policy = module.exports = mongoose.model('Policy', PolicySchema);

//mongoimport --db Testpolicylist --collection policies --file /Users/abhishekkargawal/Desktop/db.json --jsonArray