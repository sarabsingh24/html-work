
import { featchData, getElement}  from './fetch-data.js'

const img = getElement(".image", 0);
const title = getElement(".title", 0);
const value = getElement(".value", 0);
const btn = getElement(".random-user",  0);
const icinBtn = [...getElement(".icon",1)]; // quaryselactorAll = 1



const showUser = async () => {

    const person = await featchData();

    img.src = person.image;
    title.textContent = "My name is";
    value.textContent = person.name;
    icinBtn.forEach(btn => btn.classList.remove('active'));
    icinBtn[0].classList.add('active');

    icinBtn.forEach(btn => {
      
        let lable = btn.dataset.lable;
        btn.addEventListener('click', (e) => {
          
            let currentTar = e.currentTarget;

            title.textContent = `My ${lable} is`;
            value.textContent = person[lable];

            icinBtn.forEach(btn => btn.classList.remove('active'));
            currentTar.classList.add('active')

        })
    })

}


window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);