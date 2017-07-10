var express = require('express');
var router = express.Router();
var config = require("../config");
var mysql      = require('mysql');
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var connection = mysql.createConnection({
	  host     : config.database.url,
	  user     : config.database.user,
	  password : config.database.pass,
	  database : config.database.base
	});
  	connection.connect();
 
	connection.query('SELECT * from words', function (error, results, fields) {
	  connection.end();
	  if (error) throw error;
	  res.send(results);
	  
	});
	 
	connection.end();
	//res.send([{word:"Teste1"},{word:"Teste2"}]);
});
router.put('/',function(req,res,next){
	var data = req.body.word;
	var connection = mysql.createConnection({
	  host     : config.database.url,
	  user     : config.database.user,
	  password : config.database.pass,
	  database : config.database.base
	});
	connection.connect();
 
	connection.query(`Insert into words (word) values ('${data.word}')`, function (error, results, fields) {
		connection.end();
	  	if (error) {
	  		throw error;
	  	}
	  	res.send({ "Result ": results.affectedRows });
	});
	//res.send("Saved word");
});
router.post('/phrase',function(req,res,next){
	var connection = mysql.createConnection({
	  host     : config.database.url,
	  user     : config.database.user,
	  password : config.database.pass,
	  database : config.database.base
	});
	connection.connect();
	connection.query('select * from words order by rand() limit '+Math.floor(Math.random()*10)+1,function(error,results,fields){
		connection.end();
		if(error){
			throw error;
		}
		var phrase = results.map(function(r){
			return r.word;
		}).join(" ");

		//console.log(results);
		res.send({ phrase: phrase });
	});
});
router.post("/phrase/check",function(req,res,next){
	var url = "https://api.textgears.com/check.php?text="+req.body.text+"&key=w5YxfPmTu2RafqHT";
	var headers = { 
	    'Content-Type' : 'application/x-www-form-urlencoded' 
	};
	var form = { text: req.body.text,language: req.body.language};

	request.post({url:url,headers:headers},
			function(error,response,body){
				if(!error && response.statusCode===200){
					var info=JSON.parse(body);
					res.send(info);
				}else{
					if(error){
						res.status(500).send('Something broke!');
					}
				}
			}
	);
});

module.exports = router;
