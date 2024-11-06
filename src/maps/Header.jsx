import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Header({ setMinMag, setTimespan, timespan, minMag }) {
  const Magnitude = (e) => {
    setMinMag(e.target.value);
    const a = e.target.value;
    console.log(a);
  };
  const timespan_ = (e) => {
    setTimespan(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "#000000" }}>
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            USGS Earthquakes
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar elevation={0} position="static" sx={{ backgroundColor: "white" }}>
        <Box sx={{ p: 1 }}>
          <Grid2 container spacing={4}>
            <Grid2 item xs={12} sm={6}>
              <Box fontSize={20}>
                <Typography color="black" component="div">
                  Select Magnitude
                </Typography>
              </Box>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={0}>
                <Button
                  variant={minMag === "all" ? "contained" : "outlined"}
                  size="large"
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="all"
                  onClick={Magnitude} // Ruft eine Funktion in Header.jsx auf, die mit setMagnitude, den State-Hook in QuakesMap.jsx abfüllt.
                  // Dabei ist es wichtig, dass die Setter-Komponeten in der zu exportierenden Funktion enthalten sind.
                >
                  ALL
                </Button>
                <Button
                  size="large"
                  variant={minMag === "1.0" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="1.0"
                  onClick={Magnitude}
                >
                  M1.0+
                </Button>
                <Button
                  size="large"
                  variant={minMag === "2.5" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="2.5"
                  onClick={Magnitude}
                >
                  M2.5+
                </Button>
                <Button
                  size="large"
                  variant={minMag === "4.5" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  onClick={Magnitude}
                  value="4.5"
                >
                  M4.5+
                </Button>
                <Button
                  size="large"
                  variant={minMag === "significant" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="significant"
                  onClick={Magnitude}
                >
                  SIGNIFICANT
                </Button>
              </Stack>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <Box fontSize={20}>
                <Typography color="black" component="div">
                  Select Time Period
                </Typography>
              </Box>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={0}>
                <Button
                  size="large"
                  variant={timespan === "hour" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="hour"
                  onClick={timespan_}
                >
                  LAST HOUR
                </Button>
                <Button
                  size="large"
                  variant={timespan === "day" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="day"
                  onClick={timespan_}
                >
                  LAST DAY
                </Button>
                <Button
                  size="large"
                  variant={timespan === "week" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="week"
                  onClick={timespan_}
                >
                  LAST 7 DAYS
                </Button>
                <Button
                  size="large"
                  variant={timespan === "month" ? "contained" : "outlined"}
                  sx={{
                    color: "black",
                    borderRadius: 0,
                    border: "0.5px solid grey",
                  }}
                  value="month"
                  onClick={timespan_}
                  disabled={minMag === "all"} //Zusätzlich muss die Variable minMag mittels der Funktion Header als Props in das Header.jsx übernommen werden um die links stehende Bedingung aufzubauen
                >
                  LAST 30 DAYS
                </Button>
              </Stack>
            </Grid2>
          </Grid2>
        </Box>
      </AppBar>
    </Box>
  );
}
