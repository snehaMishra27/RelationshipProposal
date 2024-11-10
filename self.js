console.log("Hello world");
// console.log("Sneha Mishra");
// fullName="Aman Dhattarwal";
// console.log(fullName);
// const b=49;
// {
//     let a=10;
//     console.log(a);
//     const b=20;
//     console.log(b);
// }
// {
//     const b=30;
//     console.log(b);
//     typeof b;
// }

// const product={
//     title:"Ball Pen",
//     rating: 4,
//     offer:80,
//     price:299
// }

// console.log(product);

// const profile={
//     fullName:"Sneha Mishra",
//     designation:"Amazon Intern",
//     followers:30000,
//     posts:195,
//     isFollow:false,
// }

// console.log(profile);


//alert("hello");
// let num=prompt("Enter the score: ");
// if(num>=80 && num<=100){
//     console.log("A Grade");
// }
// else if(num>=70 && num<=89){
//     console.log("B Grade");
// }
// else if(num>=60 && num<=69){
//     console.log("C Grade");
// }
// else if(num>=50 && num<=59){
//     console.log("D Grade");
// }
// else if(num>=0 && num<=49){
//     console.log("F Grade");
// }
// else{
//     console.log("Invalid Score ");
// }
//console.log(fullname);
//console.log("hi");

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let gameNum=25;
// let guess=prompt("Enter the number to play game : ");
// while (gameNum!=guess){
//     let guess=prompt("Guess Again.");
// }

// console.log("YEY! THAT'S THE CORRECT GUESS.");

// str="Hello Baby";
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fullName=prompt("Enter your full name: ");
// console.log("@"+fullName+fullName.length);

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// let average=sum/marks.length;
// console.log("Average marks of the class is",average);

// let array=[250,645,300,900,50];
// for(let i=0;i<array.length;i++){
//     array[i]=array[i]-array[i]*0.1;

// }

// for(let j=0;j<array.length;j++){
//     console.log(array[j]);
// }


//ARROW FUNCTION 


// const mul=(a,b)=>{
//     console.log(a*b);
// }

// const hello=()=>{
//     console.log("hello");
// }

// function returnVowels(str){
//     let count=0;
//     for(let ch of str){
//         // let ch=str.charAt(i);
        
//         if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
//             count++;
//         }

//     }
//     return count;
// }

// const vowels=(str)=>{
//     let count=0;
//     for(let ch of str){
//         // let ch=str.charAt(i);
        
//         if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
//             count++;
//         }

//     }
//     return count;
// }

//FOREACH METHOD
// let arr=[1,2,3,4,5];
// arr.forEach((element)=>{
//     console.log(element*element);
// });

// let calcSq=(element)=>{
//     console.log(element*element);
// }

// arr.forEach(calcSq);

//MAP METHOD

//let nums=[67,52,10,56,23,97,98,20];
// let newArr=nums.map((val)=>{
//     return val*val;
// });

// console.log(newArr);

// let evenarr=nums.filter((val)=>{
//       return val%2==0;                                  
// })

// console.log(evenarr);

// const output=nums.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// });

// console.log(output);

// let marks=[97,64,32,49,99,96,86];
// let greaterMark=marks.filter((val)=>{
//     return val>90;
// });

// console.log(greaterMark);

// let num=prompt("Enter the number to form array: ");
// let arr=[];

// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log("Sum: ",sum);

// let mul=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log("Multiply: ",mul);

// let div=document.querySelector("div");
// console.dir(div);

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from Apna College";
// console.log(h2);

// let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="Unique text 1";
// console.log();
// divs[1].innerText="Unique text 2";
// divs[2].innerText="Unique text 3";
// for(div in divs){
//     div.innerText=`New Unique Text ${idx}`;
//     idx++;
    
// }
// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("class");
// console.log(name);

// let para=document.querySelector("p");
// let peru=para.getAttribute("class");
// console.log(peru);

// let JSId=p.getAttribute("JSId");
// console.log(JSId);

// let pari=document.querySelector("p");
// console.log(pari);
// console.log(para.setAttribute("class","paris"));


// inline styling inside js


// let div=document.querySelector("div");
// console.log(div);
// div.style.width="100px";
// div.style.height="100px";
// div.style.border="1px solid blue";
// div.style.backgroundColor="pink";
// div.innerText="Division Box ";

// //creating button
// let newBtn=document.createElement("Button");
// newBtn.innerText="Submit";
// console.log(newBtn);

// let divi=document.querySelector("div");
// divi.append(newBtn);


// //creating heading
// let newHeading=document.createElement("h1");
// newHeading.innerText="Heading!!";

// document.querySelector("body").prepend(newHeading);

// let para=document.querySelector("p");
// para.remove();

// let button=document.createElement("button");
// button.innerText="Click Me!";
//console.log(button);

// let print=document.querySelector("button");
// console.log(print);

// let printy=document.querySelector("button");
// button.style.color="white";
// button.style.backgroundColor="red";

// let body=document.querySelector("body");
// body.prepend(button);


// let para = document.querySelector("p");

//Event Handler

let btn1=document.querySelector("#yes");
    btn1.addEventListener("click",(evt)=>{
        console.log("button was clicked handler 1");
    });

// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked handler 1");
// });

// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked handler 2");
// });

// let handler3=()=>{
//     console.log("button was clicked handler 3");
// };
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked handler 4");
// });

// btn1.removeEventListener("click",handler3);

// let mode=document.querySelector("#mode");
// let currMode="light";
// mode.addEventListener("click",(evt)=>{
//     //console.log("button was clicked handler 1");
//     if (currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     //console.log(currMode);
// });
// mode.addEventListener=("click",(evt)=>{
//     console.log("clicked");
    // if (currMode==="light"){
    //     currMode="dark";
    //     console.log("Theme is light");

    // }
    // else{
    //     currMode="light";
    //     console.log("Theme is dark");
    // }

    // console.log(currMode);
//});


const btn2 = document.querySelector('#no'); // Select the element with id="no"
btn2.addEventListener("mouseover", mouseHover);

function mouseHover() {
    // Generate random positions within a 500x500 area
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    // Set the random position for the button
    btn2.style.position = 'absolute'; // Ensure it's absolutely positioned to move
    btn2.style.left = i + "px";
    btn2.style.top = j + "px";
}

//pehle ka

// const container=document.querySelector('#body');
// const btn2=document.querySelector('no');
// const containerReact=container.getBoundingClientRect();
// const noBtnReact=container.getBoundingClientRect();

    // btn2.addEventListener("mouseover",()=>{
    //     const i=Math.floor(Math.random()*containerReact.width-noBtnReact.width)+1;
    //     const j=Math.floor(Math.random()*containerReact.width-noBtnReact.width)+1;

    //     btn2.style.left=i+"px";
    //     btn2.style.top=j+"px";
    // })
    // btn2.addEventListener("mouseover",(evt)=>{
    //     const i=Math.floor(Math.random()*500)+1;
    //     const j=Math.floor(Math.random()*500)+1;

    //     btn2.style.left=i+"px";
    //     btn2.style.top=j+"px";
    // });

        //console.log("Hi");
    


let btn3=document.querySelector("#think");
    btn3.addEventListener("click",(evt)=>{
        alert("Toh Sochlo nah..Accha ladka hu main😁😁...\nVrna koi aur le jaegi mujhe🙃");
    });


