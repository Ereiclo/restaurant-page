import createElement from './createElements'

function displayAbout(){

    let contentAbout = createElement.newDiv();

    contentAbout.classList.add('about');


    for(let i = 0; i < 500;++i){

        contentAbout.innerText += 'esto es la about';

    }


    return contentAbout;


}


export default displayAbout;