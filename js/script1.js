function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line

  let newTask = {
    text: data.text,
    category: data.category || category,
    priority: data.priority || priority,
    completed,
  };

  return newTask;
  // Change code above this line
}
