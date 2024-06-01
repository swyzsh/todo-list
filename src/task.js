let taskArray = [];

export function task() {
  let taskCount = 0;

  function newTask(taskName, description, dueDate, label) {
    function parseDate(date) {
      toString(date);
      // date format: DD-MM-YYYY
      let dd = date.slice(0, 2);
      let mm = date.slice(2, 4);
      let yy = date.slice(4);
      return(`${dd}-${mm}-${yy}`);
    }
    const f_date = parseDate(dueDate); 

    function CreateTask(name, desc, date, label) {
      this.name = name;

      this.desc = desc;

      this.dueDate = date;

      this.label = label;
    }

    const newTask = new CreateTask(taskName, description, f_date, label);
    taskArray.push(newTask);
    taskCount++;
  }

  // some default tasks added to fill up screen
  newTask(`Meditate`, `do some yoga after waking up`, `20072024`, `purple`);
  newTask(`Read`, `King Arthur & The Knights of The Round Table`, `31052024`, `red`);
  newTask(`Wash`, `Bike and Car`, `03062024`, `purple`);

  console.log(`Total Tasks are: ${taskCount}`);
}
export { taskArray };