import * as React from "react";
import Index from "../Index";


const data = [
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
  {
    src: Index.img,
    title: "Nanopass #2135",
  },
];

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Img = Index.styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const StyledCard = Index.styled(Index.Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: "8px",
  maxWidth: "250px",
  objectFit: "contain",
  border: "1px #EBEBEB solid",
}));

const Collections = () => {
  const [currency, setCurrency] = React.useState("EUR");
  const navigate = Index.useNavigate();
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <>
      <Index.Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          padding: "25px",
        }}
      >
        <Index.Grid container>
          <Index.Grid item xs={12} md={8}>
            <Index.Box
              borderRight={2}
              borderColor="black"
              component="span"
              sx={{
                color: "#1F1F1F",
                padding: "10px 21px 10px 0px",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              Collections
            </Index.Box>
            <Index.Box
              component="span"
              sx={{
                color: "#6C6C6C",
                fontSize: "10px",
                margin: "0px 0px 0px 15px",
              }}
            >
              See the top collections in the NFT space aggregated into one
              place.{" "}
            </Index.Box>
          </Index.Grid>
          <Index.Grid item xs={12} md={3.5}>
            <Index.TextField
              fullWidth
              size="small"
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <Index.MenuItem key={option.value} value={option.value}>
                  {option.label}
                </Index.MenuItem>
              ))}
            </Index.TextField>
          </Index.Grid>
        </Index.Grid>
      </Index.Box>
      <br />

      <br />
      <Index.Container maxWidth="false">
        <Index.Grid container spacing={5}>
          {data.map((item) => (
            <Index.Grid item xs={6} lg={2.4} md={5}>
              <StyledCard elevation={0}>
                <Index.Grid container spacing={0.5}>
                  <Index.Grid item xs={12}>
                    <Index.ButtonBase
                      onClick={() => {
                        navigate("/users/collectionsindividual");
                      }}
                    >
                      <Img src={item.src} />
                    </Index.ButtonBase>
                  </Index.Grid>
                  <Index.Grid container spacing={0.5}>
                    <Index.Grid item xs={10} md={9}>
                      <Index.Typography
                        variant="span"
                        sx={{ fontSize: "13px", fontWeight: "bold" }}
                      >
                        {item.title}
                      </Index.Typography>
                    </Index.Grid>
                    <Index.Grid item xs={10} md={3}>
                      <Index.Typography variant="span" sx={{ fontSize: "13px" }}>
                        #27
                      </Index.Typography>
                    </Index.Grid>
                  </Index.Grid>
                  <Index.Grid container spacing={0.5}>
                    <Index.Grid item xs={10} md={9}></Index.Grid>
                    <Index.Grid item xs={10} md={3}>
                      <Index.Typography variant="span" sx={{ fontSize: "13px" }}>
                        3.8
                      </Index.Typography>
                    </Index.Grid>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      items
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      owners
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px", color: "#939393" }}
                    >
                      Floor
                    </Index.Typography>
                  </Index.Grid>

                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      5.6K
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      3.9K
                    </Index.Typography>
                  </Index.Grid>
                  <Index.Grid item xs={4}>
                    <Index.Typography
                      variant="span"
                      align="center"
                      sx={{ fontSize: "13px" }}
                    >
                      3.9
                    </Index.Typography>
                  </Index.Grid>
                </Index.Grid>
              </StyledCard>
            </Index.Grid>
          ))}
        </Index.Grid>
      </Index.Container>
    </>
  );
};
export default Collections;
