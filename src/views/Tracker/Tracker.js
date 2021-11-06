import { Grid } from "@mui/material";
import React, { useState } from "react";
import AddTracker from "./addTracker/addTrackers";
import ListTracker from "./listTracker/listTracker";

export default function Tracker() {
  const [toggleReload, settoggleReload] = useState(false);

  const reloadTrackerList = () => {
    settoggleReload((prev) => !prev);
  };

  return (
    <React.Fragment>
      <AddTracker onWorkoutCreate={reloadTrackerList} />
      <ListTracker isReload={toggleReload} relaodTracker={reloadTrackerList} />
    </React.Fragment>
  );
}
