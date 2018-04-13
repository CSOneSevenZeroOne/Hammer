var express = require("express");
var mysql=require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'hammer'
});

connection.connect();
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json())
router.post('/',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	console.log(request.body);
			connection.query(`INSERT INTO cart SET ?`,{
				tel:request.body.tel,
				name:request.body.name,
				newprice:request.body.newprice,
				num:request.body.num,
				imgsrc:request.body.imgsrc
			}, function(error, results, fields){
				response.end("添加完成")
			})
})

router.post('/watch',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	console.log(request.body);
	connection.query(`SELECT * FROM cart where ?`,{
		tel:request.body.tel,
	}, function(error, results, fields){
		response.end(JSON.stringify(results))
	})
})
module.exports = router;