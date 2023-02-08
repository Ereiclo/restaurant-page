import element from './createElements'
import displayHome from './home'; 
import displayMenu from './menu'
import displayAbout from './about';


function loadPage(){
    let createDisplayFunctions = [displayHome,displayMenu,displayAbout];

    let content = document.querySelector('#content');
    let hero = element.newDiv();
    let displayContent = element.newDiv();

    hero.classList.add('hero');
    displayContent.classList.add('displayContent')
    content.appendChild(hero);
    content.appendChild(displayContent);

    let homeButton = element.newDiv();
    let menuButton = element.newDiv();
    let aboutButton = element.newDiv();


    homeButton.innerText = 'Home';
    homeButton.setAttribute('data-display',0);

    menuButton.innerText = 'Menu';
    menuButton.setAttribute('data-display',1);

    aboutButton.innerText = 'About';
    aboutButton.setAttribute('data-display',2);



    let buttonArray = [homeButton,menuButton,aboutButton];



    buttonArray.forEach((but) =>{
        let displayData = but.getAttribute('data-display');
        but.classList.add('button');
        hero.appendChild(but);

        but.addEventListener('click',(e)=>{
            element.delElem('.displayContent > div');
            let newDisplay = createDisplayFunctions[displayData]();
            displayContent.appendChild(newDisplay);

        });
    })



    let homeDisplay =  displayHome();
    

    displayContent.appendChild(homeDisplay);



    


}


loadPage();