import { ReactElement } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";

export const SideNavBar = (props: {
  open: boolean;
  navItems: ReactElement[];
  toggleDrawerCallback: () => void;
}): ReactElement => {
  const DrawerHeader = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    padding: "30px",
    justifyContent: "flex-end",
  }));

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={props.toggleDrawerCallback}
      sx={{
        width: "250px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "250px",
          boxSizing: "border-box",
          backgroundColor: "lightblue",
        },
      }}
      variant="persistent"
    >
      <DrawerHeader>
        <IconButton onClick={props.toggleDrawerCallback}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={props.toggleDrawerCallback}
        onKeyDown={props.toggleDrawerCallback}
      >
        <List>
          {props.navItems.map((item: ReactElement, index: number) => (
            <ListItem button key={index.toString()}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* <ListItemText primary={item} /> */}
              {item}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
