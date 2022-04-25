var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../db/dbconfig.js');
var pool = mysql.createPool(dbconfig);

var mybatisMapper = require('mybatis-mapper');

mybatisMapper.createMapper(['./mapper/lunchSQL.xml']);
var format = { language : 'sql', indent : '  '}

router.use(express.urlencoded({ extended : true }));
router.use(express.json());

router.post('/',(req, res) => {
    var type = req.query.type; 
    var params = req.body;
    
    console.log('type : ', type );

    var paramsobj = params.body;
    // if ( type === 'lunchInsert' ) var paramsobj = JSON.parse(params.body);
    // else var paramsobj = params.body;
    // console.log(paramsobj);
    // console.log('req.body.body 즉 요청데이터타입 : ', typeof paramsobj );
    // console.log('req.body.body 요청데이터  : ', paramsobj ); 

    var query = mybatisMapper.getStatement(
        paramsobj.mapper, paramsobj.mapperid, paramsobj, format );
        console.log("쿼리문 :", query);
        pool.getConnection(function(err, connection) {

            if(err) throw console.log(" DB 접속불가 dbconfig.js 에러  : " + err);
    
            connection.query(
                query, 
                (error, result) => {
                    
                    if(error) throw "여기 "+ error + result;
                    
                    if(paramsobj.crud === 'select'){
                        console.log("crud : select 실행됨", paramsobj.crud)
                        
                        res.send(result);

                        console.log('타입 : ' , typeof result , ' 전송데이터 : ', result)
                    }else{
                        console.log("crud : select외 실행", paramsobj.crud)
                        res.send("success");
                    }
                })       
            connection.release(); 
        })
})

module.exports = router;