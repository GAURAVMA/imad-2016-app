//console.log('Loaded!');
var button=document.getElementById('a');

button.onclick=function(){
    
    
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