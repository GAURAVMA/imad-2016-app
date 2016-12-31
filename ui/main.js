//console.log('Loaded!');
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
 request.open('GET', '/counter', true);
    request.send(null);
}



getCounter();
//var button=document.getElementById('counter');

//button.onClick=function(){
    
    
  //  var request=new XMLHttpRequest();
    
    //request.onreadystatechange=function(){
        
      //  if(request.readyState === XMLHttpRequest.DONE){
            
        //    if(request.status === 200){
                
          //      var counter=request.responseText;
            //    var span=document.getElementById('count');
             //   span.innerHTML=counter.toString();
            //}
            
            
        //}
        
    //};
    
    //request.open('GET','http://gauravma.imad.hasura-app.io/counter',true);
   //request.send(null); 
    
//};