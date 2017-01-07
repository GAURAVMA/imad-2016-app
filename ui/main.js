//console.log('Loaded!');


function getGM(){
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('dbbox');
            span.innerHTML = counter.toString();
        }
    }
};
 request.open('GET', 'http://gauravma.imad.hasura-app.io/db', true);
    request.send(null);
}

function getCOM(){
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('combox');
            span.innerHTML = counter.toString();
        }
    }
};
 request.open('GET', 'http://gauravma.imad.hasura-app.io/cb', true);
    request.send(null);
}


function getCounter(){
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
};
 request.open('GET', 'http://gauravma.imad.hasura-app.io/counter', true);
    request.send(null);
}


//getCOM();
getGM();

getCounter();

var comment=document.getElementById('comment').value;
var username=document.getElementById('username').value;
var anda=document.getElementById('butt');
anda.onclick = function(){
   getCOM(); 
};

var a=document.getElementById('a');

a.onclick=function(){
    
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                
                var counter=request.responseText;
                var span=document.getElementById('b');
                span.innerHTML=counter.toString();
            }
            
            
        }
        
    };
    
    request.open('GET','http://gauravma.imad.hasura-app.io/counter',true);
   request.send(null); 
    
};