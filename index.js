const welcomeParagraph=document.getElementById("welcome")
const isRed=false;
const isGreen=true;


// const button=document.getElementById("change")

const header=document.querySelector(".header")
const header2 = document.querySelector("#headerId");
const header3=document.querySelector("h2")
console.log(header3)


const body=document.querySelector("body")


// button.addEventListener("click",function(e){
// // welcomeParagraph.classList.add("green")
// welcomeParagraph.classList.toggle("green");
// const newHeader=document.createElement("h2");
// newHeader.textContent=input.nodeValue
// body.appendChild(newHeader);
// });


// const input=document.getElementById("headerName")


const button =document.getElementById("userButton")
const input=document.getElementById("name")
const input1=document.getElementById("last")
const input2=document.getElementById("age")

button.addEventListener("click",function(e){
    const name=document.createElement("h2");
    name.textContent=input.value;
    body.appendChild(name);

    const lastName=document.createElement("h2");
    lastName.textContent=input1.value;
    body.appendChild(lastName)

    const age =document.createElement("h2");
    age.textContent=input2.value;
    body.appendChild(age);


    });


    const select =document.createElement("ageSelect");



//     const addAge1 =()=>{
// for (let index=0;index<=100;index++){
//  select(ageSelect,index);

 
// }
//     }

// const select=(selectElement,OptionText)=>{
//     const newOption=document.createElement("option")
//     newOption.textContent=OptionText;
//     selectElement.appendChild(newOption)
// }
// addAge1();
const array=[
    {
        name:"georgia",
        id:11
    },
    {
        name:"usa",
        id:11
    },
    {
        name:"german",
        id:11
    }
]


const select1=document.getElementById("taskSelect")

const taskSelect =()=>{
    for (let index = 0; index<array.length; index++) {
      const user =array[index]
      const option=document.createElement("option")
        option.textContent=user.name
        option.setAttribute("value",user.id)
        select1.appendChild(option)
    }
}


taskSelect()


const array2=[1,5,7,8,9]
const bank=document.getElementById("bankLb")

const bank1=()=>{
    for (let i= 0; i < array2.length; i++) {
      const userB=array2[i];
      const option1=document.createElement("option1");
      option1.textContent=userB.array2
      option1.setAttribute("value",userB.id)
      select2=appendChild(option1)
      
        
    }
}




// welcomeParagraph.style.color="red"

// if(isGreen){
// welcomeParagraph.classList.add("green")

// }
// else if (isRed){
// welcomeParagraph.classList.add("red")
// }



// task1
// const person = prompt("romeli feri mogwons?")
// const task =document.getElementById("task")
// task.style.color=person


