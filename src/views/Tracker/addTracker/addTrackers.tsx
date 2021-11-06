import React from "react";
import {
  Autocomplete,
  Button, Grid,
  InputAdornment, TextField
} from "@mui/material";
import { Box } from "@mui/system";
import { saveWorkout } from "../../../services/services";

const default_classname = "tracker";

interface workout {
  bodyPart: string,
  reps: number,
  workoutName: string,
  time: number,
  weight: number
}

const bodyParts = [{
  label: "Chest", id: "chest"
}, {
  label: "Shoulder", id: "shoulder"
}, {
  label: "Bicep", id: "bicep"
}, {
  label: "Tricep", id: "tricep"
}, {
  label: "Legs", id: "legs"
}, {
  label: "Back", id: "back"
},]



export default function AddTracker({ onWorkoutCreate }: any) {
  const [Program, setProgram] = React.useState({
    bodyPart: "",
    reps: 0,
    name: "",
    duration: 0,
    weight: 0
  });


  const handleSubmite = async () => {
    try {
      const res = await saveWorkout(Program)
      if (res) {
        onWorkoutCreate()
      }

    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e: any, type: string) => {
    if (type === "bodyPart") {
      setProgram((program) => ({ ...program, [type]: e.label }))
    } else {
      const value = e.target.value;
      setProgram((program) => ({ ...program, [type]: value }))
    }
  }


  return (
    <div className={default_classname}>
      <Box>
        <h3>Today's workout</h3>
        <Grid container sx={{ justifyContent: "center", position: "relative" }}>
          <Grid
            item
            container
            spacing={2}
            md={12}
            sx={{ flexGrow: 1, padding: 1, justifyContent: "center" }}
          >
            <Grid item xs={6} md={2}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={bodyParts}
                onChange={(e, newVal) => handleChange(newVal, "bodyPart")}
                renderInput={(params) => <TextField {...params} label="Body Part" variant="standard" InputLabelProps={{ shrink: true }} />}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Workout Name"
                type="text"
                variant="standard"
                onChange={(e) => handleChange(e, "name")}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Repetition"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, "reps")}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Weight"
                type="number"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                fullWidth
                onChange={(e) => handleChange(e, "weight")}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Time"
                type="number"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                fullWidth
                onChange={(e) => handleChange(e, "duration")}
                InputProps={{
                  endAdornment: <InputAdornment position="end">Min</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid container md={10} sx={{ justifyContent: "end", marginTop: "18px" }}>
              <Button onClick={handleSubmite} type="submit" variant="contained">Add</Button>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </div >
  );
}
