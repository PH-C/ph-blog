var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var City = mongoose.model('city');

/* GET home page. */
router.get('/', function(req, res, next) {
	// City.find({}).exec((err, data)=>{
	// 	// if(err) return 
	// 	res.json({
	// 		code:0,
	// 		data:data
	// 	})
	// })
	City.find({

	},function(err, data){
		// if(err) return next(err)
		console.log('data',data)
		res.send({
			code:0,
			data:data
		})
	})
	
	// City.find({},(err, data)=>{
		
	// })
	// mongoose.collection('city').find({}, (err, data)=>{
	// 	res.send({
	// 		code:0,
	// 		data
	// 	})
	// })
});

router.post('/list',function(req, res, next){

	res.send({
		code:0,
		data:[{
			list:1
		}]
	})
})

module.exports = router;
