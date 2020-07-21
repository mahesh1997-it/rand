function rand(n)
{
   var a,b,c=" "; 


if(n>0){
 a = (Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString()+Math.ceil(Math.random()*9).toString());
 
 console.log(a); 
 
 n--;
 rand (n);
     
}
}

rand(1);