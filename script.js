document.addEventListener("DOMContentLoaded",()=>{
  event.preventDefault();
  const gridDisplay= document.querySelector(".game-container");

const width=4;
let squares=[];
const image_array=["avo","sweet potato","broccoli","cauliflower","kiwi","peach","persimmon","butternut","avo","sweet potato","broccoli","cauliflower","kiwi","peach","persimmon","butternut"];
//function to createBoard
function createBoard(){
  for(let i=0;i<width*width;i++){
    const square=document.createElement("div");
    square.innerHTML= "?";
    gridDisplay.appendChild(square);
    squares.push(square);
  }
}
  createBoard();
  
  function loadImages(){
    const image= image_array.sort(() => 0.5 - Math.random());
  
    
    
  }
  loadImages;
  let chosencards=[];
let chosencardindex=[]

squares.forEach((square,index)=>{
                square.addEventListener("click",()=>{
             square.innerHTML=image_array[index];
                  
            let clicked_value=image_array[index];
chosencards.push(clicked_value);
                   chosencardindex.push(square);
                  
                 
                if(chosencards.length===2){
                   let first_choice= chosencards[0];
                  let second_choice= chosencards[1];
                   let first_choiceIndex=chosencardindex[0];
                     let second_choiceIndex=chosencardindex[1];
                  for(var i = 0; i<chosencards.length;i++){
         console.log("Chosen cards"+chosencards[i]);
         console.log(chosencards.length);
                     }
                  if(first_choice === second_choice){
                    first_choiceIndex.classList.add(".show");
                    second_choiceIndex.classList.add(".show");
                    console.log("Match");
                    chosencards = [];
    chosencardindex = [];
                  }else{
                    
                 setTimeout(()=>{
                   console.log("Not a Match"); 
                  first_choiceIndex.innerHTML="?";
                  second_choiceIndex.innerHTML="?";
      console.log("first"+ first_choiceIndex); 
                      console.log("seconds"+second_choiceIndex); 
                    chosencards=[];
                  chosencardindex=[];
                      
                    },500);
                  }
                }
for(var i =0; i<squares.length;i++){
  if(squares[i].innerHTML==="?"){
    return false;
  }else{
    console.log("You finished the game");
  }
}
       
                                         
  });
});
  
});
