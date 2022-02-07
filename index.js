obj=document.getElementsByClassName('obj')[0]
i=document.getElementsByClassName('i')[0]
profile=document.getElementsByClassName('profile')[0]


setTimeout(function(){
    obj.style.display='block'
    obj.style.animation='flow 2s forwards'
    profile.style.animation='flow1 3s forwards'
},2000)
setTimeout(function(){
    i.style.display='block'
    i.style.animation='flow2 .5s forwards'
},4000)
setTimeout(function(){
    document.body.style.animation='flow3 2s forwards'
},3000)

// if(obj.offsetWidth>210){
//     console.log('k');
// i.style.display='block'
// }