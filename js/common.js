(function($){
    
    // 로딩
    var anicount = 0
    var setTimer = setInterval(timer, 15)
    function timer() {
        anicount++
        $('.loading .contBox .txtBox span').css({
            width: anicount+'%'})
        if(anicount===100){
            clearInterval(setTimer)
            $('.loading').fadeOut(500)
            return false
        }
        $('.loading .count').text(anicount+'%')
    }

    // 햄버거버튼
    function openNav(){
        $('.toph1Nav').toggleClass('on')
        if($('.toph1Nav').hasClass('on')){
            $('.lognav-box').stop().slideDown(800)
            $('.mobile-box').css({display: 'block'})
        } else {
            $('.lognav-box').stop().slideUp(800)
            $('.mobile-box').css({display: 'none'})
        }
    }
    $('.open-nav, .mobile-box').on('click', openNav)
    
    // depth1 클릭
    $('.depth1 > li > a').on('click', function(e){
        e.preventDefault()
        if($('html').hasClass('mobile')){
            $(this).toggleClass('on')
            $(this).parent().find('.depth2').stop().slideToggle(800)
            $(this).parent().siblings().each(function(){
                if ($(this).css('display') === 'block'){
                    $(this).find('.depth2').slideUp(800)
                    $(this).removeClass('on')
                }
            })
        } else if ($('html').hasClass('pc')){
            var url = $(this).attr('href')
            $('#containerBox').remove()
            $('#containerArea').load(url)
        }
    })

    // depth1 hover - pc
    $('.nav').hover(
        function(){
            if($('html').hasClass('pc')){
                $(this).find('.depth2').stop().slideDown(800)
                $('.deco-box').stop().slideDown(800)
            }
        },
        function(){
            if($('html').hasClass('pc')){
                $(this).find('.depth2').stop().slideUp(800)
                $('.deco-box').stop().slideUp(800)
            }
        }
    )

    // 리사이즈 + nav 슬라이드
    function init() {
        var winWidth = $(window).innerWidth()
        if (winWidth > 1180 && !$('html').hasClass('pc')) {
            $('.toph1Nav').removeClass('on')
            $('.depth1').css({display: 'inline-block'})
            $('.depth2').css({display:'none', height: '210px'})
            $('.lognav-box').css({display: 'block', height: 'auto'})
            $('.nav').css({display: 'block'})
            $('.toplogin a:first-child span').text('')
            $('.toplogin a:last-child span').text('')
            $('.toph1Nav h1 a div').html('')
            $('html').addClass('pc').removeClass('mobile')
        } else if (winWidth <= 1180 && !$('html').hasClass('mobile')) {
            $('.depth1').css({display: 'block'})
            $('.toph1Nav').removeClass('on')
            $('.depth2').css({display:'none', height: 'auto'})
            $('.lognav-box').css({display: 'none'})
            $('.toplogin a:first-child span').text('LOGIN')
            $('.toplogin a:last-child span').text('LOCATION')
            $('.toph1Nav h1 a div').html('PAH<em>COMPANY</em>')
            $('.deco-box').stop().slideUp()
            $('html').addClass('mobile').removeClass('pc')
        }
    }
    init()
    $(window).resize(function(){
        init()
    })

    // 사이트맵
    function mapfn (){
        $('.mapbtn').siblings().slideToggle(800)
        $('.mapbtn').toggleClass('on')
    }
    $('.mapbtn').on('click', function(e){
        e.preventDefault()
        mapfn()
    })
    
    // goTop 버튼
    $('.goTop a').on('click', function(e){
        e.preventDefault()
        $('body, html').stop().animate({scrollTop: 0}, 800)
    })

    // load
    $('#containerArea').load('main.html')
    $('.toplogin a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#containerBox').remove()
        $('#containerArea').load(url)
    })
    $('.depth2 > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#containerBox').remove()
        $('#containerArea').load(url)
    })
    $('.maplist1 a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#containerBox').remove()
        $('#containerArea').load(url)
        mapfn()
    })




})(jQuery)