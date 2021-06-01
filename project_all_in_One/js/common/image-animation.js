const imageAnimation = () => {

    const imageContainer = [...document.querySelectorAll(".img-container")];

    imageContainer.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.classList.add('animation');
        });
        item.addEventListener('mouseout', function () {
            item.classList.remove('animation');
        })
    })


}


export default imageAnimation;