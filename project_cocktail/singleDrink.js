import loadDrinks from './fetchApi.js';
import { getElement } from './getElement.js';
import { loader } from './loader.js';

const singleDrink = async (url) => {

    const data = await loadDrinks(url);

    console.log(data);
    loader.classList.add('hideLoader');

   
   

    const drinkDetail = data[0];
    const { strDrink: name, strCategory: Category, strDrinkThumb: image   } = drinkDetail;
    const list = [drinkDetail.strIngredient1, drinkDetail.strIngredient2, drinkDetail.strIngredient3, drinkDetail.strIngredient4
    ]

    const img = getElement('.picture');
    const information = getElement('.information');
    document.title = `${name}`

    img.innerHTML = `  <img src="${image}" alt="${name}" />`
    information.innerHTML = `   <div class="information">
        <h4>${name}</h4>
        <div>Category ${Category}</div>
        <ul> ${
            list.map(item => {

                if(!item){
                    return
                }

                return `<li><span class="check-icon"><i class="far fa-check-circle"></i></span>${item}</li>`
            }).join('')
        }
        </ul>
        <div class="back">Back to home</div>
        
      </div>`
   


    loader.classList.add('hideLoader');
    // localStorage.removeItem("drinkId");

 
     const back = getElement(".back");
    back.addEventListener('click', function (){
        window.location.replace("main.html");
     })
}
 
export default singleDrink;