const n = prompt("N : ")

let hours=0
let minutes=0
let seconds=0
let count=0
while(hours!==Number(n)||minutes!==59||seconds!==59){
    if(String(hours)[1]==='3'){
        count++
    }else if(String(minutes)[0]==='3'){
        count++
    }else if(String(minutes)[1]==='3'){
        count++
    }else if(String(seconds)[0]==='3'){
        count++
    }else if(String(seconds)[1]==='3'){
        count++
    }
    seconds++
    if(seconds>=60){
        seconds=0
        minutes++
    }
    if(minutes>=60){
        minutes=0
        hours++
    }
}

// for(let h=0;h<=Number(n);h++){
//     for(let m=0;m<60;m++){
//         for(let s=0;s<60;s++){
//             if(String(h)[1]==='3'||String(m)[0]==='3'||String(m)[1]==='3'||String(s)[0]==='3'||String(s)[1]==='3'){
//                 count++
//             }
//         }
//     }
// }

console.log(count)