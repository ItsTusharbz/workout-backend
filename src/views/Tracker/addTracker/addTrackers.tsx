import React, { useState } from "react";
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
  sets: number,
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
  const [isDisabled, setisDisabled] = useState(true)
  const [Program, setProgram] = useState({
    bodyPart: { label: "", id: "" },
    reps: 0,
    sets: 0,
    name: "",
    duration: 0,
    weight: 0
  });

  const resetForm = () => {
    setProgram((p) => ({
      ...p, reps: 0, sets: 0, name: "", duration: 0, weight: 0
    }))
  }

  const handleFocus = (e: any) => {
    e.target.select();
  }

  const handleSubmite = async () => {
    try {
      const res = await saveWorkout(Program)
      if (res) {
        onWorkoutCreate()
        resetForm();
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e: any, type: string) => {
    if (e) {
      if (type === "bodyPart") {
        setProgram((program) => ({ ...program, [type]: e.label }));
        setisDisabled(false);
      } else {
        const value = e.target.value;
        setProgram((program) => ({ ...program, [type]: value }))
      }
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
                disableClearable
                id="combo-box-demo"
                options={bodyParts}
                value={Program.bodyPart}
                onChange={(e, newVal) => handleChange(newVal, "bodyPart")}
                renderInput={(params) => <TextField {...params} label="Body Part" variant="standard" InputLabelProps={{ shrink: true }} />}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Workout Name"
                required
                type="text"
                variant="standard"
                value={Program.name}
                onChange={(e) => handleChange(e, "name")}
                InputLabelProps={{ shrink: true }}
                fullWidth
                disabled={isDisabled}
                onFocus={handleFocus}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Repetition Per Set"
                required
                type="number"
                variant="standard"
                value={Program.reps}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, "reps")}
                fullWidth
                disabled={isDisabled}
                onFocus={handleFocus}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Sets"
                required
                type="number"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                value={Program.sets}
                fullWidth
                disabled={isDisabled}
                onFocus={handleFocus}
                onChange={(e) => handleChange(e, "sets")}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Weight"
                required
                type="number"
                InputLabelProps={{ shrink: true }}
                variant="standard"
                value={Program.weight}
                fullWidth
                disabled={isDisabled}
                onFocus={handleFocus}
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
                disabled={isDisabled}
                value={Program.duration}
                onFocus={handleFocus}
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
