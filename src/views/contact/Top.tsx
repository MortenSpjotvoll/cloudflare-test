import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../../components/AppBar";
import Toolbar from "../../components/Toolbar";
import { Link as RouterLink, useLocation } from "react-router-dom";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function Top() {
  const location = useLocation();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: 24 }}
          >
            Dr Ezgi Dokuzlu Tezel
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {location.pathname === "/contactme/" ? (
              <Link
                variant="h6"
                underline="none"
                component={RouterLink}
                to="/"
                sx={{ ...rightLink, color: "secondary.main" }}
              >
                {"Home"}
              </Link>
            ) : (
              <Link
                variant="h6"
                underline="none"
                component={RouterLink}
                to="/contactme/"
                sx={{ ...rightLink, color: "secondary.main" }}
              >
                {"Contact me"}
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Top;
