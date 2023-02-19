const fullDate = document.querySelector(".fullDate");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");


const date = Date.now();
const d = new Date();
console.log(date);
console.log(d.toDateString())

fullDate.innerText = d.toDateString();

const runtime = ()=>{
    

    setInterval(()=>{
        const newd = new Date();
        let hrs = newd.getHours();
        let mins = newd.getMinutes();
        let secs = newd.getSeconds();
        if(newd.getHours() < 10){
            hrs = `0${newd.getHours()}`
        }
        if(newd.getMinutes() < 10){
            mins = `0${newd.getMinutes()}`
        }
        if(newd.getSeconds() < 10){
            secs = `0${newd.getSeconds()}`;
        }
        hour.innerText = hrs
        min.innerHTML = mins
        sec.innerText = secs
    },1000)

    
}

runtime();