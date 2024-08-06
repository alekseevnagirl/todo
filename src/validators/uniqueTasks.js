export function isUniqueTask(value, tasks) {
  const findTask = tasks.find(element => element.title === value);
  if (findTask !== undefined) {
    return '';
  }
  return value;
}
