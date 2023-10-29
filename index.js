var colors=["green","red","yellow","blue"]
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=0;


function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("level "+level)  
    var random=Math.floor(Math.random()*4)
   gamePattern.push(colors[random])
   $("#"+colors[random]).fadeIn(100).fadeOut(100).fadeIn(100);
   playsound(colors[random]);
 
}

$(".btn").click(function (){
    var clicked= $(this).attr("id")
    userClickedPattern.push(clicked)
    animation(clicked);
    playsound(clicked);
    check(userClickedPattern.length-1)
    
})

$("body").keydown(function(){
if(started===0){
    $("h1").text("level "+level)  
    nextSequence();
}
   started=1;

})

function check(value){
    if(gamePattern[value]===userClickedPattern[value]){
      if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000)
      }
    }
    else{
        $("h1").text("Game-Over,Press any key to continue")  
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");    
        },100)  
        playsound("wrong");
        restart();
    }
    }


function playsound(sound){
    var audio = new Audio("sounds/"+sound+".mp3");
    audio.play();
}

function animation(currentbutton){
    $("#"+currentbutton).addClass("pressed");
    setTimeout(function(){
        $("#"+currentbutton).removeClass("pressed")  
    },100)
}

function restart(){
    level=0;
    gamePattern=[];
    started=0;

}
