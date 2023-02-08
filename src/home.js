import createElement from './createElements'

function displayHome(){

    let contentHome = createElement.newDiv();

    contentHome.classList.add('home');


    for(let i = 0; i < 500;++i){

        contentHome.innerText += 'esto es la home';

    }


    return contentHome;


}


export default displayHome;