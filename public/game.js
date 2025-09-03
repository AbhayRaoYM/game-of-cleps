const playButton=document.querySelector(".play");
const imagePlate=document.querySelectorAll(".hands img");
const outputText=document.querySelector(".output-container h1");

playButton.addEventListener("click",function() {
    if(playButton.innerHTML==="Play") {
        let values=[];
        let count0=0;
        let count1=0;
        let index0=-1;
        let index1=-1;
        for(let i=0;i<4;i++) {
            const n=Math.floor(Math.random()*2);
            values.push(n);
            imagePlate[i].setAttribute("src",`./hands/hand${n}.png`);
            if(n==1) {
                count1++; index1=i;
            }
            else {
                count0++; index0=i;
            }
        }
        if(count1===1) {
            outputText.innerHTML=`Winner is Player ${index1+1}`;
            playButton.innerHTML="Reset";
        }
        else if(count0===1) {
            outputText.innerHTML=`Winner is Player ${index0+1}`;
            playButton.innerHTML="Reset";
        } 
    }
    else {
        window.location.reload();
    }
})




// document.querySelector(".play").addEventListener("click",function(){
// var value=[];
// for(var i=0;i<4;i++){
//     var n=Math.floor(Math.random()*2)
//     value.push(n)
//     var new_attribute="./hands/hand"+n+".png";
//     document.querySelectorAll("img")[i].setAttribute("src",new_attribute);
//     }
//     var count_0=0;
//     var count_1=0;
//     var index_1=[];
//     var index_0=[];
//     for(var i=0;i<4;i++){
//         if(value[i]==1){
//             count_1+=1;
//             index_1[0]=i;
//         }else{
//             count_0+=1;
//             index_0[0]=i;
//         }
//     }
//     if(count_1===1){
//         document.querySelector("h1").innerHTML="The winner is Player "+(index_1[0]+1);
//         //document.querySelector(".play").disabled=true;
//         document.querySelector("button").innerHTML="Reset";
//     }
//     else if(count_0===1){
//         document.querySelector("h1").innerHTML="The winner is Player "+(index_0[0]+1);
//         //document.querySelector(".play").disabled=true;
//         document.querySelector("button").innerHTML="Reset";
//     }
//     document.querySelector(".reset").addEventListener("click",function() {
//      window.location.reload();
// })
// })
