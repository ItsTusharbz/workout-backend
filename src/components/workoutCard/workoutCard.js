import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RepeatIcon from "@mui/icons-material/Repeat";
import {
    Checkbox,
    Divider,
    Grid,
    IconButton,
    ListItem, ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import React from "react";

export default function WorkoutCard({ workout, id, handleSecondaryAction }) {
  return (
    <React.Fragment>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton edge="end" aria-label="comments" onClick={()=> handleSecondaryAction(id)}>
            <DeleteForeverIcon fontSize="medium" color="danger" />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense disableRipple>
          <ListItemIcon>
            <Checkbox edge="start" disableRipple />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="span" component="div" gutterBottom>
                {workout.bodyPart}-{workout.name}
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Grid
                  container
                  sx={{ alignItems: "center", justifyContent: "space-betwen" }}
                  spacing={3}
                >
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <FitnessCenterIcon fontSize="small" />
                    {workout.weight} kg
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <RepeatIcon fontSize="small" />
                    {workout.reps}x{workout.sets}
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <AccessAlarmsIcon fontSize="small" />
                    {workout.duration} min
                  </Grid>
                </Grid>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}
