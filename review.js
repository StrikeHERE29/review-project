const reviews = [
    {
        id: 1,
        name: "Sara Jones",
        job: "Web Developer",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        info: "Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded."
    },
    {
        id: 2,
        name: "Emily Blunt",
        job: "Data Analyst",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        info: "Be me shall purse my ought times. Joy years doors all would again rooms these. Solicitude announcing as to sufficient my. No my reached suppose proceed pressed perhaps he. Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain highly feebly add people manner say. It high at my mind by roof. No wonder worthy in dinner."
    },
    {
        id:3,
        name: "Brad Pitt",
        job: "Software Engineer",
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        info: "Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view."
    },
    {
        id:4,
        name: "Emma Stone",
        job: "Network Engineer",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        info: "Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy."
    }
];

//selectors
let name = document.querySelector("#name");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let img = document.querySelector(".person-img");

let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

//set starting item
let currentItem = 0;


//load initial item
window.addEventListener("DOMContentLoaded", function(){
showPerson()
})


function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}   


nextBtn.addEventListener("click", function(){
    currentItem++;
if(currentItem > reviews.length - 1){
currentItem = 0;
}
    showPerson()
})

prevBtn.addEventListener("click",function(){
   currentItem--;
   
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})
