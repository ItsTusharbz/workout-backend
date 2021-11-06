import Instance from "./base";

export const getAllWorkouts = () => {
  return Instance.get("/workout");
};

export const saveWorkout = (payload) => {
  return Instance.post("/workout", payload);
};
