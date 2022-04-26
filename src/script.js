const sumbit = document.querySelector("#submit-rating-btn")
const thanks_div = document.getElementById("thanks_div")
const rating = document.getElementById("rating-star")
const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")
const btn5 = document.getElementById("btn-5")
const subRating = document.getElementById("submitted-rating")


const changeColor = () => {
   thanks_div.style.display = "block"
   rating.style.display = "none"

};

const chooseBtn1 = () =>{

btn1.style.backgroundColor = "hsl(25, 97%, 53%)"
btn2.style.backgroundColor = ""
btn3.style.backgroundColor = ""
btn4.style.backgroundColor = ""
btn5.style.backgroundColor = ""
number1()

}

const chooseBtn2 = () =>{

   btn2.style.backgroundColor = "hsl(25, 97%, 53%)"
   btn1.style.backgroundColor = ""
   btn3.style.backgroundColor = ""
   btn4.style.backgroundColor = ""
   btn5.style.backgroundColor = ""
   number2()


}
const chooseBtn3 = () =>{

   btn3.style.backgroundColor = "hsl(25, 97%, 53%)"
   btn1.style.backgroundColor = ""
   btn2.style.backgroundColor = ""
   btn4.style.backgroundColor = ""
   btn5.style.backgroundColor = ""
   number3()

   }
const chooseBtn4 = () =>{

btn2.style.backgroundColor = ""
btn1.style.backgroundColor = ""
btn3.style.backgroundColor = ""
btn4.style.backgroundColor = "hsl(25, 97%, 53%)"
btn5.style.backgroundColor = ""
number4()

}

const chooseBtn5 = () =>{

   btn5.style.backgroundColor = "hsl(25, 97%, 53%)"
   btn1.style.backgroundColor = ""
   btn3.style.backgroundColor = ""
   btn4.style.backgroundColor = ""
   btn2.style.backgroundColor = ""
   number5()


   }




const number1 = () => {

subRating.textContent = btn1.value

}
const number2 = () => {

   subRating.textContent = btn2.value
   
   }
   const number3 = () => {

      subRating.textContent = btn3.value
      
      }
      const number4 = () => {

         subRating.textContent = btn4.value
         
         }
         const number5 = () => {

            subRating.textContent = btn5.value
            
            }












sumbit.addEventListener("click", changeColor)
btn1.addEventListener("click",chooseBtn1)
btn2.addEventListener("click",chooseBtn2)
btn3.addEventListener("click",chooseBtn3)
btn4.addEventListener("click",chooseBtn4)
btn5.addEventListener("click",chooseBtn5)

console.log(btn1.value)