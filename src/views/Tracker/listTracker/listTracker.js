import DeleteIcon from "@mui/icons-material/Delete";
import {
  Grid,
  IconButton,
  List
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkoutCard from "../../../components/workoutCard/workoutCard";
import { deleteWorkout, getAllWorkouts } from "../../../services/services";
import "./listTracker.scss";

const default_classname = "list-tracker";

export default function ListTracker({ isReload }) {
  const [Trackers, setTrackers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const columns = [
    { field: "id", width: 90, hide: true },
    {
      field: "bodyPart",
      type: "string",
      editable: true,
      minWidth: 120,
      flex: 1,
      renderHeader: (params) => <strong>Body Part</strong>,
    },
    {
      field: "name",
      type: "string",
      editable: true,
      minWidth: 120,
      flex: 1,
      renderHeader: (params) => <strong>Workout Name</strong>,
    },
    {
      field: "reps",
      type: "number",
      editable: true,
      minWidth: 120,
      flex: 1,
      renderHeader: (params) => <strong>Repetition</strong>,
    },
    {
      field: "weight",
      type: "number",
      editable: true,
      minWidth: 120,
      flex: 1,
      renderHeader: (params) => <strong>Weight (kg)</strong>,
    },
    {
      field: "duration",
      type: "number",
      editable: true,
      minWidth: 120,
      flex: 1,
      renderHeader: (params) => <strong>Duration (Min)</strong>,
    },
    {
      field: " ",
      minWidth: 50,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDelete(params)}
          aria-label="delete"
          color="danger"
        >
          <DeleteIcon />
        </IconButton>
      ),
      renderHeader: (params) => <strong>{params.value}</strong>,
    },
  ];

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

  const handleDelete = (id) => {
    console.log(id)
    deleteWorkout(id).then((r) => loadTrackers());
  };

  useEffect(() => loadTrackers(), [isReload]);

  return (
    <div className={default_classname}>
      <Grid container sx={{ justifyContent: "center", marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <h4>Loaded workout</h4>
          {/* <DataGrid
            autoHeight
            rows={Trackers ? Trackers : []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            loading={isLoading}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(e) => console.log(e)}
          /> */}
          <List sx={{ width: "100%", maxWidth: 1000 }}>
            {Trackers &&
              Trackers.map((workout) => (
                <WorkoutCard workout={workout} id={workout.id} handleSecondaryAction={handleDelete}/>
              ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
