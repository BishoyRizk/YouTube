// $(function(){
//     $('.loader').fadeOut(1500,function(){
//         $('.loading').slideUp(1500,function(){
//             $('body').css('overflow','auto',function(){
//                 $('.loading').remove()
//             })
//         })
//     })
// })





// let links = document.querySelectorAll('.menu a')
// links.forEach(function(item){
//     item.addEventListener('click',function(){
//         document.querySelector('.menu .active').classList.remove('active')
//         item.classList.add('active')
        
//     })
// })



let dark = document.getElementById('dark')

let light = document.getElementById('light')
console.log(dark);


let header = document.getElementById ('header')
console.log(header);
let micro =document.getElementById('micro')

let linkone= document.getElementById('linkone')
let linktwo = document .getElementById('linktwo')
let linkthree = document.getElementById('linkthree')
let link = document.getElementById ('link')
console.log(linkone);





dark.addEventListener('click',function(){
        light.classList.remove('d-none')
        header.style.backgroundColor = 'black'
        header.style.color='#f9f9f9'
        micro.style.color='white'
        micro.style.backgroundColor='black'
        linkone.style.color='white'
        linktwo.style.color='white'
        linkthree.style.color='white'
        link.style.color='white'
})