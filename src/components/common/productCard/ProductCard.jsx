import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card
      sx={{
        width: 240,
        minHeight: 450,
        backgroundColor: "#fff",
        borderRadius: 4,
        boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 24px 55px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 230, objectFit: "cover" }}
        image={elemento.img}
        alt={elemento.title}
      />
      <CardContent sx={{ minHeight: 170 }}>
        <Typography
          gutterBottom
          variant="caption"
          component="div"
          textAlign="center"
          sx={{
            textTransform: "uppercase",
            letterSpacing: 1.2,
            color: "#6b7280",
          }}
        >
          {elemento.category}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign="center"
          sx={{ fontWeight: 700, color: "#111827" }}
        >
          {elemento.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ display: "block", mb: 1, lineHeight: 1.6, minHeight: 56 }}
        >
          {elemento.description}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ fontWeight: 700, color: "#2563eb" }}
        >
          ${elemento.price}.-
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        <Button
          component={Link}
          to={`/itemDetail/${elemento.id}`}
          variant="contained"
          size="small"
          sx={{
            textTransform: "none",
            px: 3,
            py: 1.1,
            bgcolor: "#2563eb",
            color: "#ffffff",
            "&:hover": { bgcolor: "#1d4ed8" },
          }}
        >
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
