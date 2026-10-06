const buttons = document.querySelectorAll('.item')
const body = document.querySelector('body')
// onclick = (e) => {
//   if (e.target.classList.contains('item')) {
//     body.style.backgroundColor = e.target.dataset.color
//   }
// }
buttons.forEach((button) => {
 console.log(button)
  button.addEventListener('click', (e) => {
     console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.dataset.color
  })    
})