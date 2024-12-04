import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import dots from '@assets/dots.png';
import background from '@assets/sky.jpg';
import { styled } from "@mui/material/styles";
import text from '../../text/texts.json';

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

export default function ProductHero() {
  return (
    <ParallaxBanner
      layers={[{ image: background, speed: -20, style: { zIndex: "-2" } }]}
      className="aspect-[2/1]"
    >
      <ProductHeroLayoutRoot>
        <Container
          sx={{
            mt: 3,
            mb: 14,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={dots}
            alt="wonder"
            width="147"
            height="80"
          />
          <Typography
            color="inherit"
            align="center"
            component="h1"
            variant="h2"
          >
            {text.top.header}
            <span />
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            component="h2"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            {text.top.description}
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component={Link}
            to="/contactme/"
            sx={{ minWidth: 200 }}
          >
            {text.top.button}
          </Button>
          <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
            {text.top.bottom}
          </Typography>
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "common.black",
              opacity: 0.5,
              zIndex: -1,
            }}
          />
        </Container>
      </ProductHeroLayoutRoot>
    </ParallaxBanner>
  );
}
