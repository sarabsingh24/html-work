function pagination(newData,totalPages, count) {
    
    let pagination = Array.from({ length: totalPages }, (_, i) => {
        let counter = i * count;
        return newData.slice(counter, counter + count);
    });
    return pagination;

}

export default pagination;