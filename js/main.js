(function($){

    // 슬라이드
    $('.slide-inner').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 6000,
        speed: 600,
        slideToShow: 1,
        slideToScroll: 1,
        pauseOnHover: true,
        pauseOnDotHover: false,
        pauseOnFocus: false,
        cssEase: 'linear',
        draggable: true,
        arrows: true,
        prevArrow: '<button class="prev arr-box"><span class="arr arr-left"></span></button>',
        nextArrow: '<button class="next arr-box"><span class="arr arr-right"></span></button>'
    })

    // scroll 애니
    $('.service .section_tit h2, .service .section_tit p, .service ul li, .pointmessage .text, .challenge .video_box, .challenge .table_box, .business .section_tit h2, .business .section_tit p, .business ul li, .inside .section_tit h2, .inside .section_tit p, .inside ul li').hide()
    $('.service .section_tit h2, .service .section_tit p').show()
    $(window).scroll (function(){
        if ($('#containerBox > section').hasClass('main_section')){
            var sct = $(window).scrollTop()
            var service = $('.service').offset().top - ($(window).height()-350)
            if(sct >= service){$('.service ul li').show()}
            var point = $('.pointmessage').offset().top - ($(window).height()-160)
            if(sct >= point){$('.pointmessage .text').show()}
            var challenge = $('.challenge').offset().top - ($(window).height()-200)
            if(sct >= challenge){$('.challenge .video_box, .challenge .table_box').show()}
            var business = $('.business').offset().top - ($(window).height()-100)
            if(sct >= business){$('.business .section_tit h2, .business .section_tit p').show()}
            if(sct >= business+180){$('.business ul li').show()}
            var inside = $('.inside').offset().top - ($(window).height()-180)
            if(sct >= inside){$('.inside .section_tit h2, .inside .section_tit p').show()}
            if(sct >= inside+180){$('.inside ul li').show()}
            if(sct === 0){$('.service ul li, .pointmessage .text, .challenge .video_box, .challenge .table_box, .business .section_tit h2, .business .section_tit p, .business ul li, .inside .section_tit h2, .inside .section_tit p, .inside ul li').hide()}
        } 
    })

    // 게시판 미리보기
    $('.tabTit li').each(function(i){
        $(this).find('a').on('click',function(e){
            e.preventDefault()
            $(this).parent().addClass('on')
            .siblings().removeClass('on')
            $('.tabCont > div').eq(i).fadeIn(300)
            .siblings().fadeOut(300)
        })
    })

    // 팝업
    if($.cookie('pop') != 'none'){
        $('#popupBox').fadeIn(300)
    }
    $('#popupBox button').on('click', function(){
        var bool = $('#popupBox input').prop('checked')
        console.log(bool)
        if (bool){
            $.cookie('pop', 'none', {expires:1})
        }
        $('#popupBox').fadeOut(300)
    })
    

})(jQuery)