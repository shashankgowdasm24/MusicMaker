window.addEventListener("load",()=>{
    const sounds=document.querySelectorAll('.sound');
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#77f7b0",
        "#e2a74d",
        "#fa5555",
        "#63dcfa",
        "#dfee5a",
        "#8b6ef3",
        "#cf3fec"
    ];
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubble(index);
        });
    });

    const createBubble=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    };
});


