const arg = parseInt(process.argv.splice(2));

function formatDate(pDate) {
  let formatted = [];
  const date = pDate === 0 ? new Date() : new Date(pDate);

  this.getFullYear = date.getFullYear();
  this.getMonth = date.getMonth();
  this.getDays = date.getDate();
  this.getHours = date.getHours();
  this.getMinutes = date.getMinutes();
  this.getSeconds = date.getSeconds();

  const fullYear = this.getFullYear > 0 ? this.getFullYear + " years" : 0;
  const months = this.getMonth + 1 > 0 ? this.getMonth + 1 + " months" : 0;
  const days = this.getDays > 0 ? this.getDays + " days" : 0;
  const hours = this.getHours > 0 ? this.getHours + " hours" : 0;
  const minutes = this.getMinutes > 0 ? this.getMinutes + " minutes" : 0;
  const seconds = this.getSeconds > 0 ? this.getSeconds + " seconds" : 0;

  if (fullYear !== 0) formatted.push(fullYear);
  if (months !== 0) formatted.push(months);
  if (days !== 0) formatted.push(days);
  if (hours !== 0) formatted.push(hours);
  if (minutes !== 0) formatted.push(minutes);
  if (seconds !== 0) formatted.push(seconds);

  return JSON.stringify(formatted.join(", "));
}

function formatDuration(arg) {
  let fDate = "";

  if (arg === 0 || arg > 0) {
    fDate = formatDate(arg);
    console.log("now/formated date:", fDate);
  } else {
    console.log("wrong number");
  }

  return fDate;
}

formatDuration(arg);
