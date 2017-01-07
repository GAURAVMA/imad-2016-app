var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;


var config = {
    user: 'gauravma',
    database: 'gauravma',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password:process.env.DB_PASSWORD
    
    
}

var app = express();
app.use(morgan('combined'));

var count=0;
var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});

var pool=new Pool(config);
var artcount;
var sendata="<div>";
app.get('/db', function (req, res) {
    pool.query('Select Count(artname) from artlist',function(err,result){
        if(err){}
        else{
            
            artcount=(JSON.stringify(result.rows[0].count));
            artcount=Number(artcount.replace(/"/g,""));
         
        }
        pool.query('SELECT * from artlist', function(err,result)      {
    if(err){}
    else{
        for(var i=0;i<artcount;i++){
            sendata=sendata+"<p>";
            sendata=sendata+JSON.stringify(result.rows[i].artname);
            sendata=sendata+"</p>";
        }
        
        sendata=sendata+"</div>";
       res.send(sendata);
        sendata="";
        //res.send(JSON.stringify(result.rows[0].artname)+JSON.stringify(result.rows[1].artname)+JSON.stringify(result.rows[2].artname)+JSON.stringify(result.rows[3].artname));
        
    }
});
    });



});


var comcount;
var sendata="<div>";
app.get('/cb', function (req, res) {
    pool.query('Select Count(comcount) from comlist',function(err,result){
        if(err){}
        else{
            
            comcount=(JSON.stringify(result.rows[0].count));
            comcount=Number(comcount.replace(/"/g,""));
         
        }
        pool.query('SELECT * from comlist', function(err,result)      {
    if(err){}
    else{
        for(var i=0;i<comcount;i++){
            sendata=sendata+"<p>";
            sendata=sendata+JSON.stringify(result.rows[i].comment);
            sendata=sendata+"         <br>        - comment by ";
            sendata=sendata+JSON.stringify(result.rows[i].username)+"<hr>";
        }
        
        sendata=sendata+"</div>";
       res.send(sendata);
        sendata="";
        //res.send(JSON.stringify(result.rows[0].artname)+JSON.stringify(result.rows[1].artname)+JSON.stringify(result.rows[2].artname)+JSON.stringify(result.rows[3].artname));
    }
    });
    });
    });



app.get('/cb1/:comment', function (req, res) {
   var comment=req.params.comment;
   var username=req.query.username;
   pool.query("Insert into comlist(comment,username) values('"+comment+"','"+username+"')",function(err,result){
       if(err){}
       else{
           res.sendStatus(200);
           
       }
   });
    });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'homepage.html'));
});
app.get('/ab', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/myblogmain.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myblogmain.html'));
});

app.get('/blog1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog1.html'));
});

app.get('/blog2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog2.html'));
});

app.get('/blog3.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog3.html'));
});

app.get('/blog4.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog4.html'));
});

app.get('/t', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Sorry.html'));
});

app.get('/old', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
