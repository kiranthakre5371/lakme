let circle=document.querySelector(".cursor")
let blcircle=document.querySelector(".blcircle")
let wheelcir=document.querySelector(".rowheel")

// window.addEventListener("mousemove",function(dets){
// circle.style.top=dets.pageY+"px"
// circle.style.left=dets.pageX+"px"

// })
window.addEventListener("mousemove",function(dets){
    circle.style.top=`${dets.clientY}px`
    circle.style.left=`${dets.clientX}px`
    // function dfg(){
    //     circle.style.top=`${dets.clientY}px`
    //     circle.style.left=`${dets.clientX}px`
    //     window.requestAnimationFrame(dfg)

    // }
    // window.requestAnimationFrame(dfg)

    })



document.querySelectorAll(".txt").forEach(element => {
    element.addEventListener("mousemove",function(){
        circle.style.height="100px"
        circle.style.width="100px"
        circle.style.backgroundColor="white"
        circle.style.mixBlendMode="difference"

    })
    element.addEventListener("mouseleave",function(){
        circle.style.height="30px"
        circle.style.width="30px"
        circle.style.backgroundColor="transparent"     
        circle.style.mixBlendMode="initial"



    })
});
let body=document.querySelector(".main")
document.querySelectorAll(".imgEffect").forEach(element => {
    element.addEventListener("mousemove",function(dets){
        wheelcir.style.top=`${dets.clientY}px`
        wheelcir.style.left=`${dets.clientX}px`
        wheelcir.style.display="block"
         circle.style.display="none"
         body.style.backgroundColor=dets.target.dataset.color
        // function abcd(){
        //   wheelcir.style.top=`${dets.clientY}px`
        //  wheelcir.style.left=`${dets.clientX}px`
        //  window.requestAnimationFrame(abcd)

        // }
        //  window.requestAnimationFrame(abcd)


    })
    element.addEventListener("mouseleave",function(){
        
        wheelcir.style.display="none"
        circle.style.display="initial"
        body.style.backgroundColor="white"


    })
});






// BLACK CIRCLE

blcircle.addEventListener("mousemove",function(dets){
    blcircle.style.transform=`translate(${dets.clientX*.22}px,${dets.clientY*.099}px)`
})
blcircle.addEventListener("mouseleave",function(dets){
    blcircle.style.transform=`translate(0,0)`
})


// GSAP

// gsap.to(".heading h1",{
//     y:0,
//     stagger:0.1,
    
// })



// HEADING ANIMATION
// $('.heading h1').textillate({
//     in:{
//         effect:"fadeInUp"
//     },
//     loop:true,
//     out:{
//         effect:"fadeOutRight"
//     }
// })
$('.heading h1').textillate({ in: { effect: 'fadeInUp' } });
$('.blocka h1').textillate({ in: { effect: 'fadeInUp', } });





// document.querySelector(".insider").addEventListener("mousemove",function(){
//     document.querySelector(".cursor").style.height="100px"
    
//     document.querySelector(".cursor").style.width="100px"
//     document.querySelector(".cursor").style.backgroundColor="rgba(105, 103, 103, 0.304)"
    

// })
// document.querySelector(".insider").addEventListener("mouseleave",function(){
//     document.querySelector(".cursor").style.height="30px"
//     document.querySelector(".cursor").style.width="30px"
//     document.querySelector(".cursor").style.backgroundColor="rgba(105, 103, 103, 0.304)"
    

// })



