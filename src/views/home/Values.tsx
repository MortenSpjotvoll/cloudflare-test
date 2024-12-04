import type { Theme } from "@mui/material/styles";
import type { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import background from "@assets/curvylines.png";
import psychologist from "@assets/psychologist.png";
import pregnant from "@assets/pregnant.png";
import massage from "@assets/massage.png";
import family from "@assets/family.png";
import text from "../../text/texts.json";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden" /*, bgcolor: "secondary.light"*/,
      }}
    >
      <Container
        sx={{
          mt: 15,
          mb: 30,
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src={background}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={psychologist}
                alt="psychologist"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                {text.specialties.first.header}
              </Typography>
              {text.specialties.first.description}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={family}
                alt="family"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                {text.specialties.second.header}
              </Typography>
              {text.specialties.second.description}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={pregnant}
                alt="pregnant"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                {text.specialties.third.header}
              </Typography>
              {text.specialties.third.description}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={massage}
                alt="massage"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                {text.specialties.fourth.header}
              </Typography>
              {text.specialties.fourth.description}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
