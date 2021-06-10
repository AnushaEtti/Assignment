function Ele(){
var time=document.getElementById('time').value
if(time<'12'){
    console.log('good morning')
}
else if(time>='12'&& time<'16'){
    console.log('good afternoon')
}
else{
    console.log('good evening')
}
}