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

$(document).on('keydown',function (event){
    if(event.key =="Enter"){
        if(runAnimationNum==0){
            runAnimationStart();
        }

    }

})

// ========= Background Animation ====================================