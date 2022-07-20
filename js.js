// function data() {
//        let data = {
//         id: 1,
//         ism: salom,
//         model:1
//        }


// }   


let local = document.querySelector('.local_page');
let h1 = document.getElementById('h1');
let svg = document.querySelector(".btn4");


svg.addEventListener("click", function(){
    local.style.transform =  "translateX(0px)";
});


h1.addEventListener("click", function(){
    local.style.transform =  "translateX(300px)";
})


// ==================

let data = [
    
    {
        "name": "John",
        "age": 30,
    },
    {
        "name": "Jane",
        "age": 25,
    },


]

function add(){
    localStorage.setItem("data", JSON.stringify(data));
}

function get(){
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
}

let malumot = document.getElementById("malumot");

{data.map((item, index) => {
    malumot.innerHTML += `<div class="item">
    <div class="name"${item.name}></div>
    <div class="age"${item.age}></div>
    <div class="delete">X</div>
    </div>
    `
}
)}


// const btn_2 = document.querySelector(".btn"),
//     div_1 = document.querySelector(".div_1"),
//     div_2 = document.querySelector(".div_2"),
//     div_3 = document.querySelector(".div_3"),
//     div_4 = document.querySelector(".div_4"),
//     div_5 = document.querySelector(".div_5");  


// let section_1 = document.querySelector(".section_1");

// const data = [
// {
//     id:1,
//     narxi:100,
//     nomi:"s",
//     soni:50,
//     img:"./img/Rectangle 3.png"
// }

// ]
// data.map((item)=>{
//     section_1.innerHTML +=`

//     <div class="sec1_1">
//     <img scr="${item.img}" alt ="" >

//     <p> ${item.id} </p>
//     <p> ${item.narxi} </p>
//     <p> ${item.nomi} </p>
//     <p> ${item.soni} </p>
//     <button class="ilyosbek"> sotib olish </button>
//     </div>
//     `;
// });

// let btn_3 = document.querySelector(".ilyosbek")

// btn_3.addEventListener("click", function(){
//   let Json = localStorage.getItem("salom", );
//   Json = JSON.parse(Json);
//     localStorage.setItem("salom", JSON.stringify(data));
//     Json.map((item)=> {
//         modal.innerHTML +=  `
//         <div class="sec1_1">
//         <img scr="${item.img}" alt ="" >
    
//         <p> ${item.id} </p>
//         <p> ${item.narxi} </p>
//         <p> ${item.nomi} </p>
//         <p> ${item.soni} </p>
//         </div>
//         `;
        
//         p_1.addEventListener("click", function () {
//             modal.style.display = "none";
//         });
//     })
// });

