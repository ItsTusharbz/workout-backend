import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./MainHeader.scss";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { menuList } from "../../utils/util";
import InboxIcon from '@mui/icons-material/Inbox';
import { useHistory } from 'react-router';
interface event {
  type: string, key: string
}

export default function MainHeader() {
  const history = useHistory();

  const anchor = "left";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleRoute = (path: any) => {
    history.push(path);
  }

  const list = () => {
    return (
      <List>
        {menuList.map(i => (
          <ListItem key={`menu-${i}`}disablePadding>
            <ListItemButton onClick={() => handleRoute(i.path)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>
                {i.label}

              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>);
  };

  return (
    <div>
      <React.Fragment key={anchor}>
        <div className="navbar">
          <div className="menu" onClick={toggleDrawer(anchor, true)}>
            <DehazeIcon color="primary" />
          </div>
        </div>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
