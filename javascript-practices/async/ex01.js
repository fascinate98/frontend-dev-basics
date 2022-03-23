const ex01 = function(param, callback){ //콜백 맨뒤에넣어야함 규칙잇음. 
    //비동기 코드
    //비동기 파일 시스템 접근.. , 네트워크 통신, SQL to DB..setTimeout
    //
    // $.ajax({
    //     success: function(){

    //     }
    // });

    
    setTimeout(function(){
        //앞자리 에러 뒷자리 비동기 처리결과
        if(param === 'param-data') {
            callback(null, 'ok');
        }else {
            callback(new Error('fail'), null);
        }
    }, 2000);


}





//유알엘이나 패스 들어감     에러 넣어야함 이게 규칙 ㅇㅇ 콜백규칙 
//test01 : success
ex01('param-data', function(error, res){
    if(error){
        console.error(error);
    }else{
        console.log(res);
    }
  
});


//test 02: fail
ex01('parma-error', function(error, res){
    if(error){
        console.error(error);
    }else{
        console.log(res);
    }
  
});
console.log("wait..............");

//결과를가지고 뭐하려면 콜백을 써야해..