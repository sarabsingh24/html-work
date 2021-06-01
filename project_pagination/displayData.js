
const displayData = (data, container, loader) => {
    

        const list = data
            .map((person) => {
                const { login: name, avatar_url: image, id, html_url } = person;
                return `
          <article class="card">
        <img src="${image}" alt="${name}">
        <p class="name">${name}</p>
       
        <a href="${html_url}" class="view-btn comm-btn" > View Detail Info</a>
    </article>
        `;
                // <button class="view-btn comm-btn" data-id="${id}">Click To view</button>
            })
            .join("");

        container.innerHTML = list;
        loader.classList.add('hide');


        const popup = document.querySelector('.popup');
        const popupContent = document.querySelector('.popup-content');
        // const viewBtn = [...document.querySelectorAll('.view-btn')];

        // viewBtn.forEach(btn => {
        //     btn.addEventListener('click', function(e){
        //         const tarID = e.target.dataset.id * 1;
        //         const selectedData = data.find(person => person.id === tarID);

        //         const { login: name, avatar_url: image } = selectedData;

        //         popup.classList.add('show');
        //         popupContent.innerHTML = ` <article class="img-card">
        //     <img src="${image}" alt="${name}">
        //     <h4 class="name">${name}</h4>

        // </article>`



        //     })
        // })

        const close = document.querySelector('.close');
        close.addEventListener('click', function () {

            popup.classList.remove('show');
            popupContent.innerHTML = "";
        })


    };


export default displayData;