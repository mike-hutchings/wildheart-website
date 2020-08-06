const class_times = document.querySelector("#class-times").childNodes;

class_times.forEach(class_time => {
  if (class_time.nodeType == 1) {
    const text = class_time.innerHTML;
    const time = new Date("1/1/2000 " + text.substring(text.indexOf(">") + 1));
    let time_string = time.getHours() > 12 ? time.getHours() - 12: time.getHours();
    time_string += ":";
    time_string += time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    time_string += time.getHours() > 12 ? " pm": " am";

    class_time.innerHTML = `${text.substring(0, text.indexOf(">") + 1)} ${time_string}`;
  }
});