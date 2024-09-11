$(function(e){
  // depth2 숨기기
  // display:flex 사용으로 js로 숨기기
  $('.m_gnb>li>.depth2').hide()

// 메뉴 버튼클릭시 모바일 메뉴 화면에 뜨게하기
    $('.m_btn').on('click',function(){
      $('.m_menu_wrap').animate({'left':0})
      $('.m_cover').fadeIn()
      $('body,html').css({'overflow':'hidden'})
    })
    // 커버 클릭시 모바일 메뉴를 닫게하기
     $('.m_cover').on('click',function(){
      $('.m_menu_wrap').animate({'left':'-100%'})
      $('.m_cover').fadeOut()
      $('body,html').css({'overflow':'auto'})
     })
    //  모바일 메뉴(아코디언 메뉴)
     $('.m_gnb>li>a').on('click',function(){
      $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp()
     })
     

    // e.preventDefault()
    $('.slider').slick({
        autoplay:true,
        dots:true
      });

      // 2차메뉴 보이기
      $(".gnb>li>.depth2").hide()

      $('.gnb>li').on("mouseenter",function(){
        $(this).find('.depth2').fadeIn(1000)
      })
      $('.gnb>li').on("mouseleave",function(){
        $(this).find('.depth2').fadeOut(1000)
      })


      // cover를 보이지 않기
      $('.cover').hide()
      // collection div에 마우스를 hover하면
      // 어두운이미지를 보이기
      $('.collection div a').on('mouseenter',function(){
        console.log("마우스오버")
        $(this).stop().find('.cover').fadeIn()
      })

      $('.collection div a').on('mouseleave',function(){
        $(this).stop().find('.cover').fadeOut()
      })

       $('.list .sns li a').on('mouseenter',function(){
        console.log("마우스오버")
        $(this).stop().find('.cover').fadeIn()
      })

      $('.list .sns li a').on('mouseleave',function(){
        $(this).stop().find('.cover').fadeOut()
      })

      // 패밀리 사이즈 보이고.숨김
      $('.btn_f').on('click',function(e){
        e.preventDefault();
        $('.family .list').fadeToggle();
      })

      // 창의 크기를 조절했을때 이벤트 발생
      $(window).on('resize',function(){
        // 창의 현재 크기가 얼마인지 알기
        let num = $(this).width()
        console.log(num)
        // 창의 가로사이즈가 767작거나 같으면
        // 모바일 이미지로 교체
        if(num <= 767){
          // 슬라이드 좌우 버튼을 숨기기
          $('.slick-prev,.slick-next').hide()
          // 이미지 모바일 이미지로 교체
          $('main .slider .visual1 img').attr('src','./images/m_visual_a.jpg')
          $('main .slider .visual2 img').attr('src','./images/m_visual_b.jpg')
          // collection섹션에서 이미지 교체
          $('main .collection .collect3 img').attr('src','./images/m_product.jpg')
        }else{
          // 슬라이드 좌우버튼 보이기
          $('.slick-prev,.slick-next').show()
          //pc용 이미지로 교체
          $('main .slider .visual1 img').attr('src','./images/visual_a 1.jpg')
          $('main .slider .visual2 img').attr('src','./images/visual_b 1.jpg')
          $('main .collection .collect3 img').attr('src','./images/product_ot.jpg')
          }
        }) // resize이벤트 종료

       
          let num = $(window).width()
          if(num <= 767){
            // 슬라이드 좌우 버튼을 숨기기
            $('.slick-prev,.slick-next').hide()
            // 이미지 모바일 이미지로 교체
            $('main .slider .visual1 img').attr('src','./images/m_visual_a.jpg')
            $('main .slider .visual2 img').attr('src','./images/m_visual_b.jpg')
            // collection섹션에서 이미지 교체
            $('main .collection .collect3 img').attr('src','./images/m_product.jpg')
          }else{
            // 슬라이드 좌우버튼 보이기
            $('.slick-prev,.slick-next').show()
            //pc용 이미지로 교체
            $('main .slider .visual1 img').attr('src','./images/visual_a 1.jpg')
            $('main .slider .visual2 img').attr('src','./images/visual_b 1.jpg')
            $('main .collection .collect3 img').attr('src','./images/product_ot.jpg')
            }
         
    
})