//<![CDATA[
$(function(){
           var num=0;  // num에 초기값 0 지정
            $(".cont_inner4_box1 .plus").on("click",function(){ // 증가 버튼을 클릭했을때 기능이~
                num++; // 변수 num에 데이터를 1만큼 증가시킵니다.
                $(".cont_inner4_box1 .c2").text(num); // 변수 num에 데이터를 <p>에 텍스트로 출력함.
            });
            
            $(".cont_inner4_box1 .minus").on("click",function(){ // 증가 버튼을 클릭했을때 기능이~
                num--; // 변수 num에 데이터를 1만큼 증가시킵니다.
                $(".cont_inner4_box1 .c2").text(num); // 변수 num에 데이터를 <p>에 텍스트로 출력함.
            });
    
            var num1=0;  // num에 초기값 0 지정
            $(".cont_inner4_box2 .plus").on("click",function(){ // 증가 버튼을 클릭했을때 기능이~
                num1++; // 변수 num에 데이터를 1만큼 증가시킵니다.
                $(".cont_inner4_box2 .c2").text(num1); // 변수 num에 데이터를 <p>에 텍스트로 출력함.
            });
            
            $(".cont_inner4_box2 .minus").on("click",function(){ // 증가 버튼을 클릭했을때 기능이~
                num1--; // 변수 num에 데이터를 1만큼 증가시킵니다.
                $(".cont_inner4_box2 .c2").text(num1); // 변수 num에 데이터를 <p>에 텍스트로 출력함.
            });
    
            var num2=0;  // num에 초기값 0 지정
            $(".cont_inner4_box3 .plus").on("click",function(){ // 증가 버튼을 클릭했을때 기능이~
                num2++; // 변수 num에 데이터를 1만큼 증가시킵니다.
                $(".cont_inner4_box3 .c2").text(num2); // 변수 num에 데이터를 <p>에 텍스트로 출력함.
            });
            
            $(".cont_inner4_box3 .minus").on("click",function(){ // 증가 버튼을 클릭했을때 기능이~
                num2--; // 변수 num에 데이터를 1만큼 증가시킵니다.
                $(".cont_inner4_box3 .c2").text(num2); // 변수 num에 데이터를 <p>에 텍스트로 출력함.
            });
            
        });

//]]>