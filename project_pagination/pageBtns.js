
function pageBtns(totalPages, pageIndex, btnContainer){
    let allBtns = Array.from({ length: totalPages }, (_, i) => {
      
        return `<button class="page-btn comm-btn ${i == pageIndex ? "active-btn" : ""}"   data-index="${i }">${i + 1}</button>`
    });

    allBtns.unshift(`<button class="page-btn prev">Prev</button>`);
    allBtns.push(`<button class="page-btn next"  >Next</button>`);
    btnContainer.innerHTML += allBtns.join('');

  

    return allBtns
}


export default pageBtns;