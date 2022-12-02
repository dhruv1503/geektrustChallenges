import { Pagination } from "@mui/material";

const PaginationBar = ({
  userDataPerPage,
  totalData,
  handlePaginationClick,
}) => {
  const pageNumbers = Math.ceil(totalData / userDataPerPage);

  return (
    <>
      <Pagination
        color={"primary"}
        count={pageNumbers}
        onChange={(event, value) => handlePaginationClick(event, value)}
      />
    </>
  );
};

export {PaginationBar};
