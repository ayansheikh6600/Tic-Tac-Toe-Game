// console.log("hi,,")
var tossDiv = document.querySelector(".tossDiv")
var tossResult = document.querySelector(".tossResult")
var gameBoard = document.querySelector(".gameBoard")
var td = document.querySelectorAll("td")
console.log("🚀 ~ file: app.js:6 ~ td:", td)

var td1 = document.querySelector(".td1")
var td2 = document.querySelector(".td2")
var td3 = document.querySelector(".td3")
var td4 = document.querySelector(".td4")
var td5 = document.querySelector(".td5")
var td6 = document.querySelector(".td6")
var td7 = document.querySelector(".td7")
var td8 = document.querySelector(".td8")
var td9 = document.querySelector(".td9")



function headBtn() {
    var player1 = document.getElementById("PlayerOne").value
    var player2 = document.getElementById("PlayerTwo").value


    if (!player1 || !player2) {
        alert("Enter Players Name")
        return
    }

    tossDiv.style.display = "none"
    gameBoard.style.display = "block"
    var random = Math.random()
    random = Math.round(random)
    console.log("🚀 ~ file: app.js:12 ~ headBtn ~ random:", random)

    if (random == 1) {
        tossResult.innerHTML = "Congratulation! Head's <br>"  + player1 + " "+"Turn's"
        for (var i of td) {
            i.setAttribute("onclick", "playerOne(this)")
            console.log(i)
        }
    } else {
        tossResult.innerHTML = "Opp's Tail's <br>" + player2 +" " +"Turn's"
        // td.setAttribute("onclick", "player2()")
        for (var i of td) {
            i.setAttribute("onclick", "playerTwo(this)")
            console.log(i)
        }
    }
}
function tailBtn() {
    var player1 = document.getElementById("PlayerOne").value
    var player2 = document.getElementById("PlayerTwo").value


    if (!player1 && !player2) {
        alert("Enter Players Name")
        return
    }

    tossDiv.style.display = "none"
    gameBoard.style.display = "block"
    var random = Math.random()
    random = Math.round(random)
    console.log("🚀 ~ file: app.js:12 ~ headBtn ~ random:", random)

    if (random == 1) {
        tossResult.innerHTML = "Congratulation! Tail's <br>"  + player1 + " "+"Turn's"
        for (var i of td) {
            i.setAttribute("onclick", "playerOne(this)")
            console.log(i)
        }
    } else {
        tossResult.innerHTML = "Opp's Head's <br>" + player2 +" " +"Turn's"
        // td.setAttribute("onclick", "player2()")
        for (var i of td) {
            i.setAttribute("onclick", "playerTwo(this)")
            // console.log(i)
        }
    }
}

function playerTwo(ele1){
    console.log(ele1)
    ele1.innerHTML = "X"
    ele1.classList.add("disable")
    for (var i of td) {
        i.setAttribute("onclick", "playerOne(this)")
        // console.log(i)
    }
    if(td1.innerHTML == "O" && td2.innerHTML == "O" && td3.innerHTML=="O"){

        td1.classList.add("right")   
        td2.classList.add("right")   
        td3.classList.add("right")   
    }else if(td1.innerHTML == "O" && td4.innerHTML == "O" && td7.innerHTML=="O"){

        td1.classList.add("right")   
        td4.classList.add("right")   
        td7.classList.add("right")   
    }else if(td1.innerHTML == "O" && td5.innerHTML == "O" && td9.innerHTML=="O"){

        td1.classList.add("right")   
        td5.classList.add("right")   
        td9.classList.add("right")   
    }else if(td2.innerHTML == "O" && td5.innerHTML == "O" && td8.innerHTML=="O"){

        td2.classList.add("right")   
        td5.classList.add("right")   
        td8.classList.add("right")   
    }else if(td3.innerHTML == "O" && td5.innerHTML == "O" && td7.innerHTML=="O"){

        td3.classList.add("right")   
        td5.classList.add("right")   
        td7.classList.add("right")   
    }else if(td3.innerHTML == "O" && td6.innerHTML == "O" && td9.innerHTML=="O"){

        td3.classList.add("right")   
        td6.classList.add("right")   
        td9.classList.add("right")   
    }else if(td4.innerHTML == "O" && td5.innerHTML == "O" && td6.innerHTML=="O"){

        
        td4.classList.add("right")   
        td5.classList.add("right")   
        td6.classList.add("right")   
    }else if(td7.innerHTML == "O" && td8.innerHTML == "O" && td9.innerHTML=="O"){

        
        td7.classList.add("right")   
        td8.classList.add("right")   
        td9.classList.add("right")   
    }
    if(td1.innerHTML == "X" && td2.innerHTML == "X" && td3.innerHTML=="X"){

        td1.classList.add("right")   
        td2.classList.add("right")   
        td3.classList.add("right")   
    }else if(td1.innerHTML == "X" && td4.innerHTML == "X" && td7.innerHTML=="X"){

        td1.classList.add("right")   
        td4.classList.add("right")   
        td7.classList.add("right")   
    }else if(td1.innerHTML == "X" && td5.innerHTML == "X" && td9.innerHTML=="X"){

        td1.classList.add("right")   
        td5.classList.add("right")   
        td9.classList.add("right")   
    }else if(td2.innerHTML == "X" && td5.innerHTML == "X" && td8.innerHTML=="X"){

        td2.classList.add("right")   
        td5.classList.add("right")   
        td8.classList.add("right")   
    }else if(td3.innerHTML == "X" && td5.innerHTML == "X" && td7.innerHTML=="X"){

        td3.classList.add("right")   
        td5.classList.add("right")   
        td7.classList.add("right")   
    }else if(td3.innerHTML == "X" && td6.innerHTML == "X" && td9.innerHTML=="X"){

        td3.classList.add("right")   
        td6.classList.add("right")   
        td9.classList.add("right")   
    }else if(td4.innerHTML == "X" && td5.innerHTML == "X" && td6.innerHTML=="X"){

        
        td4.classList.add("right")   
        td5.classList.add("right")   
        td6.classList.add("right")   
    }else if(td7.innerHTML == "X" && td8.innerHTML == "X" && td9.innerHTML=="X"){

        
        td7.classList.add("right")   
        td8.classList.add("right")   
        td9.classList.add("right")   
    }
    
}
function playerOne(ele2){
    console.log(ele2)
    ele2.classList.add("disable")
    ele2.innerHTML = "O"
    for (var i of td) {
        i.setAttribute("onclick", "playerTwo(this)")
        console.log(i)
    }
    if(td1.innerHTML == "X" && td2.innerHTML == "X" && td3.innerHTML=="X"){

        td1.classList.add("right")   
        td2.classList.add("right")   
        td3.classList.add("right")   
    }else if(td1.innerHTML == "X" && td4.innerHTML == "X" && td7.innerHTML=="X"){

        td1.classList.add("right")   
        td4.classList.add("right")   
        td7.classList.add("right")   
    }else if(td1.innerHTML == "X" && td5.innerHTML == "X" && td9.innerHTML=="X"){

        td1.classList.add("right")   
        td5.classList.add("right")   
        td9.classList.add("right")   
    }else if(td2.innerHTML == "X" && td5.innerHTML == "X" && td8.innerHTML=="X"){

        td2.classList.add("right")   
        td5.classList.add("right")   
        td8.classList.add("right")   
    }else if(td3.innerHTML == "X" && td5.innerHTML == "X" && td7.innerHTML=="X"){

        td3.classList.add("right")   
        td5.classList.add("right")   
        td7.classList.add("right")   
    }else if(td3.innerHTML == "X" && td6.innerHTML == "X" && td9.innerHTML=="X"){

        td3.classList.add("right")   
        td6.classList.add("right")   
        td9.classList.add("right")   
    }else if(td4.innerHTML == "X" && td5.innerHTML == "X" && td6.innerHTML=="X"){

        
        td4.classList.add("right")   
        td5.classList.add("right")   
        td6.classList.add("right")   
    }else if(td7.innerHTML == "X" && td8.innerHTML == "X" && td9.innerHTML=="X"){

        
        td7.classList.add("right")   
        td8.classList.add("right")   
        td9.classList.add("right")   
    }
    if(td1.innerHTML == "O" && td2.innerHTML == "O" && td3.innerHTML=="O"){

        td1.classList.add("right")   
        td2.classList.add("right")   
        td3.classList.add("right")   
    }else if(td1.innerHTML == "O" && td4.innerHTML == "O" && td7.innerHTML=="O"){

        td1.classList.add("right")   
        td4.classList.add("right")   
        td7.classList.add("right")   
    }else if(td1.innerHTML == "O" && td5.innerHTML == "O" && td9.innerHTML=="O"){

        td1.classList.add("right")   
        td5.classList.add("right")   
        td9.classList.add("right")   
    }else if(td2.innerHTML == "O" && td5.innerHTML == "O" && td8.innerHTML=="O"){

        td2.classList.add("right")   
        td5.classList.add("right")   
        td8.classList.add("right")   
    }else if(td3.innerHTML == "O" && td5.innerHTML == "O" && td7.innerHTML=="O"){

        td3.classList.add("right")   
        td5.classList.add("right")   
        td7.classList.add("right")   
    }else if(td3.innerHTML == "O" && td6.innerHTML == "O" && td9.innerHTML=="O"){

        td3.classList.add("right")   
        td6.classList.add("right")   
        td9.classList.add("right")   
    }else if(td4.innerHTML == "O" && td5.innerHTML == "O" && td6.innerHTML=="O"){

        
        td4.classList.add("right")   
        td5.classList.add("right")   
        td6.classList.add("right")   
    }else if(td7.innerHTML == "O" && td8.innerHTML == "O" && td9.innerHTML=="O"){

        
        td7.classList.add("right")   
        td8.classList.add("right")   
        td9.classList.add("right")   
    }
    
}




// if(td1.innerHTML === td2.innerHTML && td2.innerHTML === td3.innerHTML){
        
//     td1.classList.add("right")   
//     td2.classList.add("right")   
//     td3.classList.add("right")   
// }else if(td1.innerHTML === td5.innerHTML && td5.innerHTML === td9.innerHTML){
//     td1.classList.add("right")   
//     td5.classList.add("right")   
//     td9.classList.add("right")     
// }else if(td2.innerHTML === td5.innerHTML && td5.innerHTML === td8.innerHTML){
    
//     td2.classList.add("right")   
//     td5.classList.add("right")   
//     td8.classList.add("right")    
// }else if(td3.innerHTML === td5.innerHTML && td5.innerHTML === td7.innerHTML){
     
//     td3.classList.add("right")   
//     td5.classList.add("right")   
//     td7.classList.add("right")    
// }else if(td3.innerHTML === td6.innerHTML && td6.innerHTML === td9.innerHTML){
    
//     td3.classList.add("right")   
//     td6.classList.add("right")   
//     td9.classList.add("right")    
// }else if(td4.innerHTML === td5.innerHTML && td5.innerHTML === td6.innerHTML){
     
//     td4.classList.add("right")   
//     td5.classList.add("right")   
//     td6.classList.add("right")    
// }else if(td7.innerHTML === td8.innerHTML && td9.innerHTML === td6.innerHTML){
    
//     td7.classList.add("right")   
//     td8.classList.add("right")   
//     td9.classList.add("right")   
// }

