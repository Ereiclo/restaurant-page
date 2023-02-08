import createElement from './createElements'

function displayMenu(){

    let contentMenu = createElement.newDiv();

    contentMenu.classList.add('.menu')


    for(let i = 0; i < 500;++i){

        contentMenu.innerText += 'esto es el menu';

    }


    return contentMenu;


}


export default displayMenu;