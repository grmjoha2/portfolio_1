(function($){

    $('.subnav a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#containerBox').remove()
        $('#containerArea').load(url)
    })

    // 전송버튼 클릭 유효성 체크
    $('.join_form').submit(function(){

        // 아이디: 5~15글자 첫글자숫자제외 특문제외
        var idtxt = $('#id_lbl').val()
        if (idtxt.length>=5 && idtxt.length<=15){ 
            if (!/^(?=[a-zA-Z])(?=.*[a-zA-Z0-9]).*$/.test(idtxt)){
                alert('아이디는 대소문자, 숫자만 가능하며 숫자로 시작할 수 없습니다.')
                $('#id_lbl').focus()
                $('#id_lbl').select()
                return false
            } 
        } else {
            alert('아이디는 5~15글자 범위입니다.')
            $('#id_lbl').focus()
            $('#id_lbl').select()
            return false
        }

        // 비밀번호 : 8~15글자, 첫글자 대소문자, 영문숫자특문중 1개 이상 조합
        var pass1 = $('#pw_lbl').val()
        var pass2 = $('#pwOk_lbl').val()
        if (pass1.length>=8 && pass1.length<=15){
            var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
            if (!check1.test(pass1)){
                alert('비밀번호 첫글자는 영문 대소문자만 허용하며, 반드시 숫자와 특수문자 1개 이상 조합해 주세요.')
                $('#pw_lbl').focus()
                $('#pw_lbl').select()
                return false
            }
        } else {
            alert('비밀번호는 8~12글자 범위입니다.')
            $('#pw_lbl').focus()
            $('#pw_lbl').select()
            return false
        }
        // 비밀번호 확인
        if (pass1!==pass2){
            alert('비밀번호 확인이 일치하지 않습니다.')
            $('#pwOK_lbl').focus()
            $('#pwOK_lbl').select()
            return false
        }

        // 이름 : 한글만 가능
        var nametxt = $('#name_lbl').val()
        if (!/^[가-힣]+$/.test(nametxt)){
            alert('이름은 한글만 입력할 수 있습니다.')
            $('#name_lbl').focus()
            $('#name_lbl').select()
            return false
        }
        
        // 이메일 : 한글 특수문자 제외
        var email = $('#email_lbl').val()
        if (!/^[a-zA-Z0-9]+$/.test(email)){
            alert('이메일 형식이 틀립니다.')
            $('#email_lbl').focus()
            $('#email_lbl').select()
            return false
        }
        var domain = $('#domain').val()
        if (domain.length===0){
            alert('도메인을 선택해 주세요.')
            $('#email_lbl').focus()
            return false
        } else if (!/^[a-zA-Z0-9]+[\.][a-z]+$/.test(domain)){
            alert('도메인 형식에 맞지 않습니다.')
            $('#domain').focus()
            return false
        }
        return false //나중에삭제
    })

    // 이메일 select
    $('#email_select').on('change', function(){
        $('#email_select option:selected').each(function(){
            if($(this).val()==='nochoice'){
                $('#domain').val('')
                $('#domain').attr('disabled', true)
            } else if($(this).val()==='self'){
                $('#domain').val('')
                $('#domain').attr('disabled', false)
            } else {
                $('#domain').val($(this).val())
                $('#domain').attr('disabled', true)
            } 
        })
    })

    // 비밀번호질문 직접선택
    $('#pw_question').on('change', function(){
        $('#pw_question option:selected').each(function(){
            if($(this).val()==='self'){
                $('#pw_question').after('<input type="text" class="w300 pw_self">')
            } else {
                $('#pw_question').next().remove()
            }
        })
    })

})(jQuery)