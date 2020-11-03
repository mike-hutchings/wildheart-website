const class_times1 = document.querySelector("#class-times1").childNodes;
const class_times2 = document.querySelector("#class-times2").childNodes;

const schedule_rows = [class_times1, class_times2];

schedule_rows.forEach(class_times => {
  
  class_times.forEach(class_time => {
    
    if (class_time.nodeType == 1) {
      
      const text = class_time.innerHTML;
      
      if (text != "") {
      
        const time = new Date("1/1/2000 " + text.substring(text.indexOf(">") + 1));
        let time_string = time.getHours() > 12 ? time.getHours() - 12: time.getHours();
        time_string += ":";
        time_string += time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        time_string += time.getHours() > 12 ? " pm": " am";
  
        class_time.innerHTML = `${text.substring(0, text.indexOf(">") + 1)} ${time_string}`;
      }
    }
  });
}); 