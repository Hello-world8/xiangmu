$(function(){

    //验证用户名
    $('input[name="username"]').focus(function() {
        //表单获取焦点时提示
        if($(this).val() ==''){
            $(this).next().text('4-20位字符，可由数字英文字母组成');
        }
    }).blur(function() {  //表单失去焦点时判断
        if($(this).val() ==''){
            $(this).next().text('用户名不能为空');
        }else if($(this).val().length >= 4 && $(this).val().length <= 20){
            var reg = /^[A-Za-z0-9]+$/; //所有字母和数字
            if($(this).val().search(reg) == -1){
                $(this).next().text('请输入数字或英文字母');
            }else{
                $(this).next().text('');
            }
        }else{
            $(this).next().text('长度不符合，总长度为4~20位');
        }
    });

    //验证密码
    $('input[name="password"]').focus(function() {
        if($(this).val() ==''){
            $(this).next().text('6~12位字符，可由数字、字母及特殊字符组成');
        }
    }).blur(function() {
        if($(this).val() == ''){
            $(this).next().text('密码不能为空');
        }else if($(this).val().length >= 6 && $(this).val().length <= 12){
            $(this).next().text('');
        }else{
            $(this).next().text('长度不符合，总长度为6~12位');
        }
    });

    //密码强度
    $('input[name="password"]').keyup(function() {
        var strongRegex = /(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,12}/i
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        console.log(strongRegex.test($(this).val()))
        if (false == enoughRegex.test($(this).val())){
            $(this).next().text('');
        }else if(strongRegex.test($(this).val())){
            if($(this).val().length < 12){
                $(this).next().text('密码强度 强');
            }else{
                $(this).next().text('密码长度不能大于12位');
            }
        }else if(mediumRegex.test($(this).val())){
            $(this).next().text('密码强度 中等');
        }else{
            $(this).next().text('密码强度 弱');
        }
        return true;
    });


    //验证确认密码
    $('input[name="conpassword"]').focus(function() {
        if($(this).val() ==''){
            $(this).next().text('请再次输入密码');
        }
    }).blur(function() {
        if($(this).val() != $('input[name="password"]').val()){
            $(this).next().text('两次输入的密码不一致');
        }else if($(this).val() == $('input[name="password"]').val() && $(this).val() != ''){
            $(this).next().text('');
        }else{
            $(this).next().text('请重新输入密码');
        }
    });

    //验证邮箱
    $('input[name="email"]').focus(function() {
        if($(this).val() ==''){
            $(this).next().text('请输入正确的邮箱地址，用来找回密码等');
        }
    }).blur(function() {
        if($(this).val() == ''){
            $(this).next().text('邮箱不能为空');
        }else{
            var reg = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$/;
            if($(this).val().search(reg) == -1){
                $(this).next().text('邮箱格式不正确');
            }else{
                $(this).next().text('');
            }
        }
    });

    //验证推荐人
    $('input[name="reference"]').focus(function() {
        if($(this).val() ==''){
            $(this).next().text('推荐人用户名，区分大小写');
        }
    }).blur(function() {
        $(this).next().text('');
    });

    //验证活动代码
    $('input[name="activedemo"]').focus(function() {
        if($(this).val() ==''){
            $(this).next().text('请输入活动代码');
        }
    }).blur(function() {
        $(this).next().text('');
    });

    //点击切换验证码
    $('.checkcode #changecode').click(function(){
        $(this).parent('.checkcode').find('img').attr('src','http://passport.efeihu.com/CheckCode.aspx?r=' + Math.random());
    })

    //验证码提示
    $('input[name="vercode"]').focus(function() {
        if($(this).val() ==''){
            $(this).next().text('请输入图片中的数字');
        }
    }).blur(function() {
        if($(this).val() == ''){
            $(this).next().text('请输入验证码');
        }else{
            $(this).next().text('');
        }
    });

    //表单是否提交判断
    $('.sub').click(function(){

        var num = 0;
        $('.sign').removeClass('active');
        //遍历所有表单，判断内容是否为空
        $('.sign').each(function(){
            if($(this).val() == ''){
                $(this).addClass('active');
                num ++;
            }
        })
        if(num == 0){
            if(!$("input[type='checkbox']").is(':checked')){
                alert('请勾选用户注册协议');
                return false;
            }else{
                $('form').submit();
            }
        }else{
            if($('.tip').text() != ''){
                return false;
            }else{
                $('.sign.active').next().text('');
                $('.sign.active').eq(0).blur();
                return false;
            }
        }

        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();

        setCookie('username',username,100);
        setCookie('password',password,100);
    })

})