import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import text from '../../text/texts.json';
import profile from '@assets/stick.png';
import background from '@assets/curvylinesflipped.png';

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "inherit"
}));

const StyledImage = styled("img")(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transitionProperty: "opacity",
  transitionDuration: "1500ms",
  transitionTimingFunction: "cubic-bezier(0.7, 0, 0.6, 1)",
  opacity: 1,
  animation: "3000ms cubic-bezier(0.7, 0, 0.6, 1) 0s 1 normal none running materialize",
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
  },
  "&:hover": {
    zIndex: 2,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

function Biography() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Box
          component="img"
          src={background}
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, alignSelf: "center" }}>
          {text.biography.header}
        </Typography>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageIconButton
              key={"Ezgi"}
              style={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <ImageWrapper>
                  <StyledImage
                    src={profile}
                    alt="Dr Ezgi Dokuzlu Tezel"
                  />
                </ImageWrapper>
              </Box>
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {"Ezgi"}
                  <div className={"imageMarked"} />
                </Typography>
              </Box>
            </ImageIconButton>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="div" sx={number}>
              {text.biography.secondary_header}
            </Box>
            {text.biography.description}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Biography;
