const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');


resBtn.addEventListener('click', () => {

    getAdvice();
});

window.onload = () => {

    getAdvice();
};


function getAdvice(){

    fetch('https://api.adviceslip.com/advice').then(response =>{

        return response.json();
     }).then(adviceData => {
         const advObject = adviceData.slip;
         
         

         resDiv.innerHTML = `
            
            <div><h4>Advice #${advObject.id}</h4></div>
            <div><p>"${advObject.advice}"</p></div>
            <img src="./images/pattern-divider-desktop.svg" alt="">

        `
     
         
     }).catch(error => {
         console.log(error);
     })

};

