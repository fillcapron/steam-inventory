type IPagination = {
    currentPage: number;
    itemsPerPage: number;
    countItems: number;
    paginate: any;
    resultSearchNum: any;
}

const Pagination: React.FC<IPagination> = ({ currentPage, itemsPerPage, countItems, paginate, resultSearchNum }) => {

    const { indexOfFirstItem, indexOfLastItem } = resultSearchNum;
    const pageNumbers: number[] = [];
    const lastPage = Math.ceil(countItems / itemsPerPage);

    for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(i);
    }

    const prevPage = () => {
        if (currentPage !== 1) paginate(currentPage - 1);
    }

    const nextPage = () => {
        if (currentPage !== pageNumbers[pageNumbers.length - 1]) paginate(currentPage + 1);
    }

    if (!countItems) return <p>Сбросьте поиск</p>;

    return (
        <div className="paging">
            <div className="paging-result">
                Результаты {indexOfFirstItem}-{indexOfLastItem <= countItems ? indexOfLastItem : countItems} из {countItems}
            </div>
            <nav>
                <ul className="paging-controls">
                    <span className={currentPage !== 1 ? 'pagebtn' : 'pagebtn disabled'} onClick={prevPage}>&#60;</span>
                    {pageNumbers.length < 20 ?
                        pageNumbers.map(num => (
                            <span key={num} className={currentPage === num ? 'paging-link active' : 'paging-link'}>
                                <span onClick={() => paginate(num)}>
                                    {num}
                                </span>
                            </span>
                        )
                        )
                        : pageNumbers.slice(currentPage - 1, currentPage + 14).map(num => (
                            <span key={num} className={currentPage === num ? 'paging-link active' : 'paging-link'}>
                                <span onClick={() => paginate(num)}>
                                    {num}
                                </span>
                            </span>
                        )
                        )}
                    <span className={currentPage !== pageNumbers[pageNumbers.length - 1] ? 'pagebtn' : 'pagebtn disabled'} onClick={nextPage}>&#62;</span>
                </ul>
            </nav>
        </div>

    )
}

export default Pagination