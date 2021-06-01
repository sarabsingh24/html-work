

function getElement(section, all = 0) {
    let element;
    if (all) {
        element = document.querySelectorAll(section);
    } else {
        element = document.querySelector(section);
    }

    if (element) {
        return element;
    }
    throw new Error(`This ${section} is not available`)

}



export {getElement};