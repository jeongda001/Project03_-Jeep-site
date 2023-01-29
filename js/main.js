
$(function(){

  $('section').mousewheel(function(e, delta){

    if(delta > 0 ){
      let prev = $(this).prev().offset().top; 
      $('html, body').stop().animate({scrollTop: prev}, 1000)
    }else if(delta< 0){
      let next = $(this).next().offset().top; 
      $('html, body').stop().animate({scrollTop: next}, 1000)
    }
  }) 
})//section mousewheel_event





$(function(){
  let btnOpen = $('.header .lnb .btn_open')
  let btnClose = $('.header .lnb .btn_close')
  let btnCloseIn = $('.header .lnb_menu .btn_close_in')
  let LnbMenu = $('.header .lnb_menu')


  btnOpen.click(function(){
    LnbMenu.stop().animate({
      height:860
    },300)
    btnOpen.css('display','none')
    btnClose.css('display','block')
    btnCloseIn.css('display', 'block')
  })


  btnClose.click(function(){
    LnbMenu.stop().animate({
      height:0
    },300)
    btnOpen.css('display','block')
    btnClose.css('display', 'none')
    btnCloseIn.css('display','none')
  })


  btnCloseIn.click(function(){
    LnbMenu.stop().animate({
      height:0
    },300)
    btnOpen.css('display','block')
    btnClose.css('display', 'none')
    btnCloseIn.css('display','none')
  })

})//lnb_menu fulldown 




$(function(){
  let Indi01 = $('.car_indicator .car_indi01')
  let Indi02 = $('.car_indicator .car_indi02')
  let Indi03 = $('.car_indicator .car_indi03')
  let Indi04 = $('.car_indicator .car_indi04')

  Indi01.click(function(){
    $('.car_frame>ul').stop().animate({left:0},300)
    Indi01.css('background-color','#ea144e').siblings().css('background-color','white')
  })

  Indi02.click(function(){
    $('.car_frame>ul').stop().animate({left:-652},300)
    Indi02.css('background-color','#ea144e').siblings().css('background-color','white')
  })


  Indi03.click(function(){
    $('.car_frame>ul').stop().animate({left:-1304},300)
    Indi03.css('background-color','#ea144e').siblings().css('background-color','white')
  })

  Indi04.click(function(){
    $('.car_frame>ul').stop().animate({left:-1956},300)
    Indi04.css('background-color','#ea144e').siblings().css('background-color','white')
  })

})//page02 car_Indicator
 




$(function(){
  $(window).mousewheel(function(){

    if($(window).scrollTop() >=627){
      let page03Img = $('.page03 .page03_img')
      let page03Title = $('.page03 .page03_title')
      let page03Btn = $('.page03 .page03_btn')

      page03Img.animate({
        // delay: 2,
        right: 0
      },800)

      page03Title.animate({
        left: 280
      },800)

      page03Btn.animate({
        left: 360
      },800)
    }

  })
})//page03 scroll event


$(function(){
  $(window).mousewheel(function(){

    if($(window).scrollTop() >=1207){
      let page04Img = $('.page04 .page04_img')
      let page04Title = $('.page04 .page04_title')
      let page04Btn = $('.page04 .page04_btn')

      page04Img.animate({
        left: 0
      }, 800)

      page04Title.animate({
        right: 200
      },800)

      page04Btn.animate({
        right: 220
      },800)
    }

  })
})//page04 scroll event


$(function(){
  $(window).mousewheel(function(){

    if($(window).scrollTop() >=2100){
      let page05Img = $('.page05 .page05_img')
      let page05Title = $('.page05 .page05_title')
      let page05Btn = $('.page05 .page05_btn')

      page05Img.animate({
        // delay: 2,
        right: 0
      },800)

      page05Title.animate({
        left: 280
      },800)

      page05Btn.animate({
        left: 360
      },800)
    }

  })
})//page05 scroll event




document.addEventListener('DOMContentLoaded', ()=> {

  let thumImg = document.querySelectorAll('.page07 .sbox01>div')
  
  for(let i=0; i<thumImg.length; i++) { 
    thumImg[i].addEventListener('click', function(){
      let newDiv = document.createElement('div')
      let newImg = document.createElement('img')
      //newImg.src = thumImg[i].children[0].src
      newImg.src = './images/text_img0' + i + '.jpg'
      newDiv.appendChild(newImg)
      document.querySelector('.main_img').appendChild(newDiv)
      newDiv.setAttribute('class','big_img')
  
  
      let newSpan = document.createElement('span')
      let spanText = document.createTextNode('X')
  
      newSpan.appendChild(spanText)
      newSpan.setAttribute('class','delete')
      newDiv.appendChild(newSpan)
  
      let delBtn = document.querySelectorAll('.delete')
      
      for(let i=0; i<delBtn.length; i++) {
        delBtn[i].addEventListener('click',function(){
          if(this.parentNode.parentNode){
            this.parentNode.parentNode.removeChild(this.parentNode)
          }
        })
      }
    })//thumImg click()
  }
 
})//page08 share_box 이미지생성 




const BtnTop = document.querySelector('.btn_top')

BtnTop.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: 0
  })
})


window.addEventListener('scroll', () => {
  if(window.scrollY >200) {
    gsap.to(BtnTop, 0.3,{
      opacity: 1
    })
  }else{
    gsap.to(BtnTop, 0.3, {
      opacity:0 
    })
  }
})//btn_top (gsap)