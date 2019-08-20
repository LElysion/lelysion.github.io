let now = document.getElementById('now');
count();
function count() {
  now.innerHTML = dateTime();
  return setTimeout(() => { count() }, 1000);
}

function dateTime() {
  let d = new Date();
  let is0 = v => v > 9 ? v : '0' + v;
  return `${is0(d.getFullYear())}-${is0(d.getMonth() + 1)}-${is0(d.getDate())} ${is0(d.getHours())}:${is0(d.getMinutes())}:${is0(d.getSeconds())}`
}

