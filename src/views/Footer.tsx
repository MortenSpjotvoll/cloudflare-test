import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Gavel, LinkedIn } from "@mui/icons-material";
import text from '../text/texts.json';

function Copyright() {
  return (
    <React.Fragment>
      {"© Ezgi Dokuzlu Tezel "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid sx={{ display: "flex" }}>
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/ezgi-dokuzlu-tezel-04945126a/"
                  sx={iconStyle}
                >
                  <LinkedIn color="action" />
                </Box>
                <Box
                  component="a"
                  href="https://www.ordinepsicologier.it/"
                  sx={iconStyle}
                >
                  <Gavel color="action" />
                </Box>
              </Grid>
              <Grid >
                <Copyright />
              </Grid>
            </Grid>
          </Grid>

          <Grid >
            <Typography variant="h6" marked="left" gutterBottom>
              {text.footer.header}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {text.footer.address}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {text.footer.businessid}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {text.contact.telephone_text}:
              <Link href={`tel:${text.contact.telephone_number.split(' ').join('')}`}>{text.contact.telephone_number}</Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {text.contact.email_text}:
              <Link href={`mailto:${text.contact.email_address}`}>
                {text.contact.email_address}
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {text.footer.extra.text}
              <Link href={text.footer.extra.link}>
                {text.footer.extra.link_text}
              </Link>
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
