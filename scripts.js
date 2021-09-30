
const button = document.querySelector('button')

button.addEventListener('click' , () => {

    let inputContent = document.querySelector('input').value


    const newLi = document.createElement('li')

    newLi.textContent = inputContent

    document.querySelector('ul').appendChild(newLi)

    console.log(inputContent)

})
