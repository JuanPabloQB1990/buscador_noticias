import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item sm={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component={"img"}
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage }
            height={"250"}
          ></CardMedia>
        )}
      </Card>
      <CardContent>
        <Typography variant="body1" color={"error"}>
          {source.name}
        </Typography>
        <Typography variant="h5" component={"div"}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link
          href={url}
          target="_blank"
          variant="button"
          width={"100%"}
          textAlign={"center"}
          sx={{ textDecoration: "none" }}
        >
          Leer Noticia
        </Link>
      </CardActions>
    </Grid>
  );
};

export default Noticia;
