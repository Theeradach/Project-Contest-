var R = require("js-call-r");
//var R = require("r-script");
const chalk = require('chalk');

const prediction = {
    predictFrequent: (res) => {

        try{ 
            
            R.call(__dirname + './R_predict/predict-frequen.R')   // set R variable environment first !!!!
            .then((result) => {
                console.log('file run successfully');
                res.json(result); 
            })
            .catch(err => { 
                console.log('err = ', err);
                res.status(404);
                res.json(err);
            });
        }catch(e){
            console.log('Catch error : ' + e );
        }   
    }
}

module.exports = prediction;