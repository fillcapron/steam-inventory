

type TProps = {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    paginate: any;
    resultSearchNum: any;
}

//можно попробовать сделать как компонент

const Pagination: React.FC<TProps> = ({currentPage, itemsPerPage, totalItems, paginate, resultSearchNum}) => {

    const {indexOfFirstItem, indexOfLastItem} = resultSearchNum
    const pageNumbers:number[] = []


    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i)
    }

    const prevPage = () => {
        if (currentPage!==1) paginate(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage!== pageNumbers[pageNumbers.length - 1]) paginate(currentPage + 1)
    }
    
    return (
        <div className="paging">
            <div className="paging-result">
                Результаты {indexOfFirstItem}-{indexOfLastItem <= totalItems?indexOfLastItem:totalItems} из {totalItems}
            </div>
            <nav>
            <ul className="paging-controls">
                <span className={currentPage!==1?'pagebtn':'pagebtn disabled'} onClick={prevPage}>&#60;</span>
                {pageNumbers.map(num =>{
                    
                    return (
                        <span key={num} className={currentPage===num? 'paging-link active':'paging-link'}>
                            <span onClick={() => paginate(num)}>
                                {num}
                            </span>
                        </span>
                    )
                } )}
                <span className={currentPage!==pageNumbers[pageNumbers.length-1]?'pagebtn':'pagebtn disabled'} onClick={nextPage}>&#62;</span>
            </ul>
            </nav>
        </div>
       
    )
}

export default Pagination