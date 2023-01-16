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

const NftMinting = () => {
//#region States
  const navigate = Index.useNavigate();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
// #endregion

//#region Methods
  const getProjectCategoryList = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("perPage", perPage);
    urlencoded.append("page", page);
    const list = await Index.DataService.post(
      Index.Api.Admin.ProjectCategoryList,
      urlencoded
    );
    if (list.data.status === 1) {
      setCount(list.data.count);
      // setList(list.data.data);
      setList([]);
    }
  };

  const handleChangePage = (event, newPage) => {
    getProjectCategoryList();
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
    getProjectCategoryList();
    console.log("page running--------");
  }, [page]);

  const DeleteProjectCategory = async (id) => {
    Index.Swal.fire({
      title: "",
      text: "Are you sure you want to delete NFT ?",
      icon: "",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let urlencoded = new URLSearchParams();
        urlencoded.append("id", id);
        await Index.DataService
          .post(Index.Api.Admin.DeleteProjectCategory, urlencoded)
          .then((data) => {
            if (data.data.status === 1) {
              setCount((prevState) => prevState + 1);
              Index.toast.success("NFT deleted successfully", { theme: "dark" });
              getProjectCategoryList();
            }
          });
      }
    });
  };
// #endregion

  return (
    <>
      <Index.Container maxWidth="false">
        {/* <Index.Grid container justify="flex-end">
          <Index.Grid item xs>
            <Index.Typography
              sx={{ margin: "-5px 0px 12px 0px" }}
              variant="h6"
              noWrap
              component="div"
            >
              NFT Minting List
            </Index.Typography>
          </Index.Grid>
        </Index.Grid> */}
        <Index.TableContainer component={Index.Paper}>
          <Index.Table
            sx={{ minWidth: 550 }}
            size="small"
            aria-label="customized table"
          >
            <Index.TableHead>
              <Index.TableRow>
                <StyledTableCell>NFT</StyledTableCell>
                {/* <StyledTableCell>Sold NFT For Free</StyledTableCell>
                <StyledTableCell>Sold NFT For Purchase</StyledTableCell> */}
                <StyledTableCell>Date(YY-MM-DD)</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {list.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell>{row.categoryId?.title}</StyledTableCell>
                  {/* <StyledTableCell>{row.slug}</StyledTableCell>
                  <StyledTableCell>{row.slug}</StyledTableCell> */}
                  <StyledTableCell>{formatDate(row.createdAt)}</StyledTableCell>
                  <StyledTableCell>
                    <Index.Button
                      onClick={() =>
                        navigate(`/admin/nftMinting/${row._id}`)
                      }
                      sx={{
                        marginRight: "10px",
                        padding: "0",
                        minWidth: "auto",
                        "& svg": { fill: "#009688" },
                      }}
                    >
                      <Index.EditIcon />
                    </Index.Button>
                    <Index.Button
                      onClick={() => DeleteProjectCategory(row._id)}
                      sx={{
                        padding: "0",
                        minWidth: "auto",
                        "& svg": { fill: "red" },
                      }}
                    >
                      <Index.DeleteIcon />
                    </Index.Button>
                  </StyledTableCell>
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
        <Index.ToastContainer />
      </Index.Container>
    </>
  );
};
export default NftMinting;
