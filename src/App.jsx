import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Formulario from "./components/Formulario.";
import NoticiasProvider from "./context/NoticiasProvider";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <Typography align="center" marginY={5} component={"h1"} variant="h3">
          Buscador de Noticias
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={12} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
