import { Drawer } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./MainHeader.scss";
import DehazeIcon from '@mui/icons-material/Dehaze';

interface event {
  type: string, key: string
}

export default function MainHeader() {
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

  const list = () => {
    return (
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>two</li>
        <li>three</li>
      </ul>
    );
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
