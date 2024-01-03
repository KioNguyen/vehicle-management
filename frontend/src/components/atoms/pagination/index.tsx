import ReactPaginate from 'react-paginate';
import style from './style.module.scss';

type PaginationProps = {
  itemsPerPage: number
  page: number
  totalPage: number
  onPageClick: (event: { selected: number }) => void
}

export function PaginatedItems({ itemsPerPage = 5, page = 0, totalPage = 0, onPageClick }: PaginationProps) {
  const handlePageClick = (event: { selected: number }) => {
    onPageClick(event)
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={itemsPerPage}
        pageCount={totalPage}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName={style["page-item"]}
        pageLinkClassName={style["page-link"]}
        previousClassName={style["page-item"]}
        previousLinkClassName={style["page-link"]}
        nextClassName={style["page-item"]}
        disabledClassName={style["page-disabled"]}
        nextLinkClassName={style["page-link"]}
        breakClassName={style["page-item"]}
        breakLinkClassName={style["page-link"]}
        containerClassName={style["pagination"]}
        activeClassName={style["active"]}
        disabledLinkClassName={style["page-disabled"]}
      />
    </>
  );
}
