var R = require("js-call-r");
//var R = require("r-script");
const chalk = require('chalk');

const prediction = {
    predict: (message , res) => {

        console.log('message from RCaller : ' + message);
        console.log(__dirname+'./R_predict/predict-cvs.R');

        try{ 
            //R.call(__dirname +'./R_predict/testR.R')
            R.call(__dirname + './R_predict/predict-cvs.R', message)   // set R variable environment first !!!!
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