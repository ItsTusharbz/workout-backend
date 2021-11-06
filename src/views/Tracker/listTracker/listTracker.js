import React, { useEffect, useState } from "react";
import "./listTracker.scss";
import { DataGrid } from "@mui/x-data-grid";
import { getAllWorkouts } from "../../../services/services";
import { Grid } from "@mui/material";

const default_classname = "list-tracker";

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "bodyPart",
    type: "string",
    headerName: "Body Part",
    editable: true,
    minWidth: 120,
    flex: 1
  },
  {
    field: "name",
    type: "string",
    headerName: "Workout Name",
    editable: true,
    minWidth: 120,
    flex: 1
  },
  {
    field: "reps",
    type: "number",
    headerName: "Repetition",
    editable: true,
    minWidth: 120,
    flex: 1
  },
  {
    field: "weight",
    headerName: "Weight (kg)",
    type: "number",
    editable: true,
    minWidth: 120,
    flex: 1
  },
  {
    field: "duration",
    headerName: "Duration (Min)",
    type: "number",
    editable: true,
    minWidth: 120,
    flex: 1
  },
];

export default function ListTracker({ isReload }) {
  const [Trackers, setTrackers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const loadTrackers = () => {
    setisLoading(false);
    getAllWorkouts().then((response) => {
      const trackers =
        response && response.data.length > 0
          ? response.data.map((i) => ({ ...i, id: i._id }))
          : [];
      console.log(response);
      setTrackers(trackers);
      setisLoading(false);
    });
  };

  useEffect(() => {
    loadTrackers();
  }, []);

  useEffect(() => loadTrackers(), [isReload]);

  return (
    <div className={default_classname}>
      <Grid container sx={{ justifyContent: "center", marginTop: 2 }}>
        <Grid item xs={12} md={8}>
          <DataGrid
            autoHeight
            rows={Trackers ? Trackers : []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            loading={isLoading}
          />
        </Grid>
      </Grid>
    </div>
  );
}
