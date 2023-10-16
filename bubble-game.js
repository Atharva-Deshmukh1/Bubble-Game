var timer = 60;
var score = 0;
var num = 0;

function makebubble(){
    var bubble = "";
    for(var i = 1; i<=96;i++){
    random = Math.floor(Math.random()*10)
    bubble += `<div class="circle">${random}</div>`;
}
document.querySelector(".cbottom").innerHTML = bubble;

}

function runtimer(){
    var a = setInterval(function(){
        if (timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer
    }
    if (timer == 0){
        clearInterval(a);
        
        document.querySelector(".cbottom").innerHTML = `<h2>Game Over. Your Score is: ${score}</h2>`;
        
    }  
       
    },1000);
}

function newhit(){
    num = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = num;
}

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    
};
document.querySelector(".reset").onclick =() => {
    score = 0;
    if (timer == 0){
        runtimer();
    }
    timer=60;
    document.querySelector("#scoreval").textContent = score;
    makebubble();
    newhit();
    eventbubbling();
    
};



            

function eventbubbling(){
    document.querySelector(".cbottom").addEventListener("click",function(details){
        var targethit = (Number(details.target.textContent));
        if (targethit === num){
            increasescore();
            makebubble();
            newhit();
        }
    });
}

var c = 0;
function darktheam(){
    var dark = document.querySelector(".ctop")
    var btn = document.querySelector("button")
    var dar = document.querySelector(".cbottom")
    var main = document.getElementById("main")

    btn.addEventListener("click",function(){
            if (c == 0){
            dark.style.backgroundColor="rgb(187 111 142)";
            dar.style.backgroundColor="#323237";
            main.style.backgroundColor="#241f1f";
            btn.innerHTML="Light Theam";
            c = 1;
        }
        
    else {
        dark.style.backgroundColor="rgb(129 181 192)";
                main.style.backgroundColor="white";
                dar.style.backgroundColor="#292c46";
                btn.innerHTML="Dark Theam";
                c = 0;
    }

    
    
});
}


runtimer();
makebubble();
newhit();
eventbubbling();
darktheam();