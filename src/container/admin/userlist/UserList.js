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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const drawerWidth = 240;
//const menuId = "primary-search-account-menu";
const Main = Index.styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const UserList = () => {

  //setting contract address into the localstorage

  const NFTMarketPlaceAddress = '0x71D473b6e3B0C7809436D7c66141a7483328661b'
  const NFTErc721aAddress = '0xeA9644dB153759d82Cc15b1fc43048E2725c9f72'
  
  localStorage.setItem("NFTMarketPlaceAddress", NFTMarketPlaceAddress)
  localStorage.setItem("NFTErc721aAddress", NFTErc721aAddress)

  //#region States
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(true);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  // #endregion

  //#region Methods
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPerPage(+event.target.value);
    setPage(0);
  };

  const getUser = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("perPage", perPage);
    urlencoded.append("page", page);
    const user = await Index.DataService.post(Index.Api.Admin.userList, urlencoded)
    if (user.data.status === 1) {
      setUsers(user.data.data);
      setCount(user.data.count);
    }
  };

  useEffect(() => {
    getUser();
  }, [page]);
  // #endregion

  return (
    <>
      <Main open={open}>
        <Index.Container maxWidth="false">
          <Index.Typography variant="h5" noWrap component="div">
            Invite List
          </Index.Typography>
          <br />
          <Index.TableContainer component={Index.Paper}>
            <Index.Table size="small" aria-label="customized table">
              <Index.TableHead>
                <Index.TableRow>
                  {/* <StyledTableCell align="left">S.No</StyledTableCell> */}
                  <StyledTableCell align="left">DeviceName</StyledTableCell>
                  <StyledTableCell align="left">Model</StyledTableCell>
                  <StyledTableCell align="left">Platform</StyledTableCell>
                  <StyledTableCell align="left">Version</StyledTableCell>
                  {/* <StyledTableCell align="left">Action</StyledTableCell> */}
                </Index.TableRow>
              </Index.TableHead>
              <Index.TableBody>
                {users?.length > 0 ? users
                  .map((row, index) => (
                    <StyledTableRow key={index}>
                      {/* <StyledTableCell scope="row" align="left">
                      {index + 1}
                    </StyledTableCell> */}
                      <StyledTableCell scope="row" align="left">
                        {row.DeviceName.length === 0 ? row.DeviceName = <>&mdash;</> : row.DeviceName}
                      </StyledTableCell>
                      <StyledTableCell scope="row" align="left">
                        {row.Model.length === 0 ? row.Model = <>&mdash;</> : row.Model}
                      </StyledTableCell>
                      <StyledTableCell scope="row" align="left">
                        {row.Platform.length === 0 ? row.Platform = <>&mdash;</> : row.Platform}
                      </StyledTableCell>
                      <StyledTableCell scope="row" align="left">
                        {row.Version.length === 0 ? row.Version = <>&mdash;</> : row.Version}
                      </StyledTableCell>
                      {/* <StyledTableCell align="left">{<EditIcon sx={{ color: "#1976d2" }} />}{<DeleteIcon />}</TableCell> */}
                    </StyledTableRow>
                  )) : <StyledTableCell align='center' colSpan={5}>No Data Found</StyledTableCell>}
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
      </Main>
    </>
  );
};
export default UserList;
