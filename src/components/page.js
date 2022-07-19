export default function PageNumber(props) {
    let current = props.currentPage
    let setCurrentPage = props.setCurrentPage
    let totalPage = props.totalPage

    let minPage = (current <= 3) ? 1 : current - 2;
    let maxPage = (totalPage <= 5) ? totalPage :
        (current >= totalPage - 2) ? totalPage : current + 2;
    let pages = []

    for (let i = minPage; i <= maxPage; i++) {
        pages.push(i)
    }


    return (
        <>
            {(current === 1) ?

                <></> : <li className="pagination-previous button backward">
                    <a onClick={()=>setCurrentPage(current-1)}>
                        <span className="icon--chevron-left"></span>
                        Previous
                    </a>
                </li>}

            {
                [...pages].map((item, i) => {
                    return (
                        <li className={(item === current) ? "current" : ""} key={i}>
                            <a
                                onClick={() => { setCurrentPage(parseInt(item)) }}
                            >{item}</a>
                        </li>
                    )

                })
            }

            {(current === totalPage) ?
                <></> :
                <li className="pagination-next button">
                    <a onClick={()=>setCurrentPage(current+1)}>
                        Next<span className="icon--chevron-right"></span>
                    </a>
                </li>
            }

        </>
    )
}
