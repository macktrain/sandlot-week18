const API = {
  //Retrieves all workouts but only returns the last workuot in the return stmt

  async getLastWorkout() {
    try {
      const res = await fetch("/api/workouts");

      const json = await res.json();
      return json[json.length - 1];

    } catch (err) {
      console.log(err)
    }
  },
  async addExercise(data) {
    console.log ("CHECKPOINT 2");
    const id = location.search.split("=")[1];
    console.log("HERE IS THE NEW EXERCISE DATA");
    console.log (data);
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    console.log("HERE IS THE NEW EXERCISE LOGS");
    console.log (res);
    console.log (id);
    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    console.log ("CHECKPOINT 3");
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    console.log ("CHECKPOINT 4");
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
