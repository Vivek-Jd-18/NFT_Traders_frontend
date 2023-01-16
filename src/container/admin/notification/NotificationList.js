import React, { useState, useEffect } from "react";
import Index from "../Index";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = Index.styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = Index.styled(Index.TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const NotificationList = () => {
//#region States
  const navigate = Index.useNavigate();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
// #endregion

//#region Methods
  const getList = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("perPage", perPage);
    urlencoded.append("page", page);
    const list = await Index.DataService.post(
      Index.Api.Admin.notificationList,
      urlencoded
    );
    if (list.data.status === 1) {
      setCount(list.data.count);
      setList(list.data.data);
    }
  };
  const handleChangePage = (event, newPage) => {
    getList();
    setPage(newPage);
  };
  const formatDate = (date) => {
    const myArray = date.split("T");
    return myArray[0];
  };
  const handleChangeRowsPerPage = (event) => {
    setPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getList();
  }, [page]);
  
// #endregion

  return (
    <>
      <Index.Container maxWidth="false">
        <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Typography
              sx={{ margin: "22px 22px 22px 0px" }}
              variant="h5"
              noWrap
              component="div"
            >
              Notificaton List
            </Index.Typography>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              sx={{ margin: "22px 22px 22px 0px" }}
              variant="contained"
              onClick={() => {
                navigate("/admin/notifications");
              }}
            >
              Send Notification
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
        <Index.TableContainer component={Index.Paper}>
          <Index.Table
            sx={{ minWidth: 550 }}
            size="small"
            aria-label="customized table"
          >
            <Index.TableHead>
              <Index.TableRow>
                <StyledTableCell>Notification Message</StyledTableCell>
                <StyledTableCell>Date(YY-MM-DD)</StyledTableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {list.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell
                    sx={{
                      width: "200px",
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.NotificationMessage}
                  </StyledTableCell>
                  <StyledTableCell>{formatDate(row.createdAt)}</StyledTableCell>
                </StyledTableRow>
              ))}
            </Index.TableBody>
          </Index.Table>
        </Index.TableContainer>
        <Index.TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={count}
          rowsPerPage={perPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Index.Container>
    </>
  );
};
export default NotificationList;
