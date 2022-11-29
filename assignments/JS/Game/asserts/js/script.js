
var boy = document.getElementById("boyIdle1")

// ========= Idle Animation Start ====================================

var idleImgNum= 0;
var idleAnimationNum = 0;

function idleAnimation(){
    idleImgNum = idleImgNum + 1;
    if(idleImgNum == 11){
        idleImgNum = 1;
    }

    boy.src = "asserts/Idle ("+idleImgNum+").png";

}

function idleAnimationStart(){
    idleAnimationNum = setInterval(idleAnimation,200)

}

// ========= Run Animation Start====================================

var runImgNumber =0;
var runAnimationNum =0

function runAnimation(){
    runImgNumber = runImgNumber +1 ;
    if(runImgNumber==9){
        runImgNumber = 1;

    }

    boy.src = "asserts/Run ("+runImgNumber+").png"
}

function runAnimationStart(){
    runAnimationNum = setInterval(runAnimation,100);
    clearInterval(idleAnimationNum);

}


// ========= Background Animation Start================================

var backgroundNum =0;

function backgroundAnimationStart(){
    backgroundNum=setInterval(backgroundAnimation,120);
}

var position =0;

var score =0;

function backgroundAnimation(){
    position = position - 20;
    $('.background').css("background-position-x",+position+"px")

    score++;
    document.getElementById("score").innerHTML = score;

}

// ========= Jump Animation Start====================================

var jumpImgNum =1;
var jumpAnimationNum =0;
boytop = 420;

function jumpAnimation(){
    jumpImgNum =jumpImgNum +1;

    if(jumpImgNum <= 7){
        boytop = boytop -70;
        $(".boy").css("top",boytop+"px");


    }
    if(jumpImgNum >= 8){
        boytop = boytop +70;
        $(".boy").css("top",boytop+"px");

    }


    if(jumpImgNum == 13){
        jumpImgNum = 1;
        clearInterval(jumpAnimationNum)
        jumpAnimationNum =0;
        runImgNumber =0;
        runAnimationStart()

    }

    boy.src = "asserts/Jump ("+jumpImgNum+").png"

}

function jumpAnimationStart(){
    clearInterval(idleAnimationNum)
    runImgNumber=0
    clearInterval(runAnimationNum)
    jumpAnimationNum = setInterval(jumpAnimation,100);
    //clearInterval(runAnimationNum)
    // clearInterval(idleAnimationNum)
}

// ========= Barriers Animation Start====================================

bMarginLeft=1800;

function createBarriers(){

    for (var i = 0; i <=20 ; i++) {

        $(".background").append("<div style='margin-left:" + bMarginLeft + "px ' id='barrier"+i+"' ></div>");
        // var barrier = "div"+i;

        // $("#barrier").css("marginLeft",bMarginLeft+"px");

        if(i<10){
            bMarginLeft = bMarginLeft +1200;
        }
        if(i>=10){
            bMarginLeft = bMarginLeft +500;
        }
    }


}

var barrierAnimationId =0;

function barrierAnimation(){
    for (var i=0;i<=10;i++){
        var box = document.getElementById("barrier"+i);
        var currentMargin = getComputedStyle(box).marginLeft;
        var newMargin = parseInt(currentMargin)-35;
        box.style.marginLeft = newMargin+"px";


        if(newMargin >= -110 & newMargin <=100){
            if(boytop>300){
                clearInterval(barrierAnimationId);
                barrierAnimationId=-1;
                clearInterval(runAnimationNum);
                runAnimationNum=-1;
                clearInterval(jumpAnimationNum);
                jumpAnimationNum =-1;
                clearInterval(backgroundNum)
                backgroundNum=-1;

                setInterval(deadAnimation,100)

            }

        }
    }
}

// ========= Dead Animation Start====================================


deadImgNum =1;


function deadAnimation(){
    deadImgNum++;
    if(deadImgNum == 11){
        deadImgNum =10;
    }


    boy.src = "asserts/Dead ("+deadImgNum+").png"


}




// ========= Key Events ====================================

$(document).on('keydown',function (event){
    if(event.key =="Enter"){
        if(runAnimationNum==0){
            runAnimationStart();
            backgroundAnimationStart();
        }
        if(barrierAnimationId ==0){
            barrierAnimationId = setInterval(barrierAnimation,100)
        }

    }

    if(event.key =="ArrowUp"){
        if(jumpAnimationNum ==0){
            jumpAnimationStart();
            //   backgroundAnimationStart();
        }

        if(barrierAnimationId ==0){
            barrierAnimationId = setInterval(barrierAnimation,100)
        }

    }

})



