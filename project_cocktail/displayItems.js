import loadDrinks from './fetchApi.js';
import {getElement} from './getElement.js';
import {loader} from './loader.js';

const showDrinks = async (list) => {
    const imgsContainer = getElement('.imgs-container');
    const data = await loadDrinks(list);

    if (!data) {
        loader.classList.add('hideLoader');
        imgsContainer.innerHTML = "Sorry, No drinks matched your search."
        return;
    }

    const drinkList = data.map(item => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = item;

        let list = `<a href="detailInfo.html" class="image-box" data-id="${id}">
                            <img src="${image}" alt="">
                            <div class="drink-name">${name}  </div>
                        </a>` ;
        return list;
    }).join('')
        ;
    loader.classList.add('hideLoader')
    imgsContainer.innerHTML = drinkList;

    const imageList = getElement('.image-box', 1);
   
    imageList.forEach(drink => {

        drink.addEventListener('click', function (e) {
            
            const id = e.currentTarget.dataset.id;
            localStorage.setItem("drinkId", id)

        })

    });

}


export default showDrinks;