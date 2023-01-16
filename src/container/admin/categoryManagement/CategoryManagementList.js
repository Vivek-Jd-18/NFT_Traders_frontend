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

const CategoryManagementList = () => {
//#region States
  const navigate = Index.useNavigate();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
// #endregion

//#region Methods
  const getCategoryList = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("perPage", perPage);
    urlencoded.append("page", page);
    const list = await Index.DataService.post(
      Index.Api.Admin.CategoryManagementList,
      urlencoded
    );
    if (list.data.status === 1) {
      setCount(list.data.count);
      setList(list.data.data);
    }
  };
  const handleChangePage = (event, newPage) => {
    getCategoryList();
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
    getCategoryList();
  }, [page]);

  const DeleteCategory = async (id) => {
    Index.Swal.fire({
      title: "",
      text: "Are you sure you want to delete category ?",
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
          .post(Index.Api.Admin.DeleteCategory, urlencoded)
          .then((data) => {
            if (data.data.status === 1) {
              setCount((prevState) => prevState + 1);
              Index.toast.success("Category deleted successfully", { theme: "dark" });
              getCategoryList();
            }
          });
      }
    });
  };
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
              Category Management List
            </Index.Typography>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              sx={{ margin: "22px 22px 22px 0px" }}
              variant="contained"
              onClick={() => {
                navigate("/admin/categoryManagement");
              }}
            >
              Add Category
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
                <StyledTableCell  sx={{width: "50px" }}>Image</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell sx={{width: "200px" }}>Date(YY-MM-DD)</StyledTableCell>
                <StyledTableCell sx={{width: "100px" }}>Action</StyledTableCell>
              </Index.TableRow>
            </Index.TableHead>
            <Index.TableBody>
              {list.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell>                  
                  <img src={row.image} alt="" height="50px" width="50px"></img> 
                  </StyledTableCell>
                  <StyledTableCell >
                   {row.title}
                  </StyledTableCell>
                  <StyledTableCell>{formatDate(row.createdAt)}</StyledTableCell>
                  <StyledTableCell>
                    <Index.Button
                      onClick={() =>
                        navigate(`/admin/categoryManagement/${row._id}`)
                      }
                      sx={{marginRight: "10px",padding: "0",minWidth: "auto",'& svg': {fill: "#009688"}}}
                    >
                     <Index.EditIcon/>
                    </Index.Button>
                    <Index.Button onClick={() => DeleteCategory(row._id)} sx={{padding: "0",minWidth: "auto", '& svg': {fill: "red"}}}>
                      <Index.DeleteIcon/>
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
export default CategoryManagementList;
