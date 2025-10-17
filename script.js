const calendarDiv = document.getElementById("calendar");
const yearInput = document.getElementById("year");

yearInput.addEventListener("input", () => {
  generateCalendar(parseInt(yearInput.value));
});

function generateCalendar(year) {
  calendarDiv.innerHTML = "";
  const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
                      "七月", "八月", "九月", "十月", "十一月", "十二月"];
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  for (let month = 0; month < 12; month++) {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const title = document.createElement("h2");
    title.textContent = `${monthNames[month]} ${year}`;
    monthDiv.appendChild(title);

    const weekdaysDiv = document.createElement("div");
    weekdaysDiv.className = "weekdays";
    weekdays.forEach(day => {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;
      weekdaysDiv.appendChild(dayDiv);
    });
    monthDiv.appendChild(weekdaysDiv);

    const daysDiv = document.createElement("div");
    daysDiv.className = "days";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement("div");
      daysDiv.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;
      daysDiv.appendChild(dayDiv);
    }

    monthDiv.appendChild(daysDiv);
    calendarDiv.appendChild(monthDiv);
  }
}

// 初始載入
generateCalendar(parseInt(yearInput.value));