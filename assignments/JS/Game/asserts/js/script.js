var boy = document.getElementById("boyIdle1")

// ========= Idle Animation ====================================

idleImgNum= 0;
idleAnimationNum = 0;

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

// ========= Run Animation ====================================

runImgNumber =0;
runAnimationNum =0

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

/*
$(document).on('keydown',function (event){
    if(event.key =="Enter"){
        if(runAnimationNum==0){
            runAnimationStart();
        }

    }

})
*/

// ========= Background Animation ====================================

var backgroundNum =0;

function backgroundAnimationStart(){
    backgroundNum=setInterval(backgroundAnimation,120);
}

var position =0;

function backgroundAnimation(){
    position = position - 20;
    $('.background').css("background-position-x",+position+"px")

}

// ========= Jump Animation ====================================

var jumpImgNum =1;
var jumpAnimationNum =0;
boytop = 300;

function jumpAnimation(){
    jumpImgNum =jumpImgNum +1;

    if(jumpImgNum <= 6){
        boytop = boytop -20;
        $(".boy").css("top",boytop+"px");



    }
    if(jumpImgNum >= 7){
        boytop = boytop +20;
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


// ========= Key Events ====================================

$(document).on('keydown',function (event){
    if(event.key =="Enter"){
        if(runAnimationNum==0){
            runAnimationStart();
            backgroundAnimationStart();
        }

    }

    if(event.key =="ArrowUp"){
        if(jumpAnimationNum ==0){
            jumpAnimationStart();
            //   backgroundAnimationStart();
        }

    }

})
