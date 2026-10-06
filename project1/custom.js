const buttons = document.querySelectorAll('.item')
const body = document.querySelector('body')

// buttons.forEach((button) => {
//  console.log(button)
//   button.addEventListener('click', (e) => {
//      console.log(e)
//     console.log(e.target)
//     body.style.backgroundColor = e.target.dataset.color
//   })    
// })
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    body.style.backgroundColor = e.target.dataset.color
  })

// button.addEventListener('click', function(e) {
//     if( e.target.dataset.color === 'lightgreen' ) {
//     body.style.backgroundColor = 'lightgreen'
//     }
//      if( e.target.dataset.color === 'lightblue' ) {
//     body.style.backgroundColor = 'lightblue'
//     }
//      if( e.target.dataset.color === 'lightyellow' ) {
//     body.style.backgroundColor = 'lightyellow'
//     }
//      if( e.target.dataset.color === 'lightcoral' ) {
//     body.style.backgroundColor = 'lightcoral'
//     }
// })
})