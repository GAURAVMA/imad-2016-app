//console.log('Loaded!');
var button=document.getElementById("counter");

button.onCLick=function(){
    
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
            
            
        }
        
    };
    
    request.open('GET','/ui/counter',true);
   request.send(null); 
    
};