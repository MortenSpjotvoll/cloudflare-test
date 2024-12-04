import * as React from "react";
import Typography from "../components/Typography";
import AppFooter from "../views/Footer";
import AppAppBar from "../views/contact/Top";
import Body from "../views/contact/Body";
import withRoot from "../withRoot";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Call, EmailRounded } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import text from '../text/texts.json';

function Contact() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Body>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            {text.contact.header}
          </Typography>
          <Typography variant="body2" align="center">
            {text.contact.description}
          </Typography>
          <br />
        </React.Fragment>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemButton component="a" href={`mailto:${text.contact.email_address}`}>
              <ListItemAvatar>
                <Avatar>
                  <EmailRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={text.contact.email_text} secondary={text.contact.email_address} />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemButton component="a" href={`tel:${text.contact.telephone_number.split(' ').join('')}`}>
              <ListItemAvatar>
                <Avatar>
                  <Call />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={text.contact.telephone_text} secondary={text.contact.telephone_number} />
            </ListItemButton>
          </ListItem>
        </List>
      </Body>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);
