const calendarDiv = document.getElementById("calendar");
const yearInput = document.getElementById("year");

// 香港 2025 年公眾假期清單
const holidays = {
  "2025-01-01": "元旦",
  "2025-01-29": "農曆年初一",
  "2025-01-30": "農曆年初二",
  "2025-01-31": "農曆年初三",
  "2025-04-04": "清明節",
  "2025-04-18": "耶穌受難節",
  "2025-04-19": "耶穌受難節翌日",
  "2025-04-21": "復活節星期一",
  "2025-05-01": "勞動節",
  "2025-05-05": "佛誕",
  "2025-05-31": "端午節",
  "2025-07-01": "香港回歸紀念日",
  "2025-10-01": "國慶日",
  "2025-10-07": "中秋節翌日",
  "2025-10-29": "重陽節",
  "2025-12-25": "聖誕節",
  "2025-12-26": "聖誕節後第一個周日"
};

// 當年份改變時重新生成日曆
yearInput.addEventListener("input", () => {
  generateCalendar(parseInt(yearInput.value));
});

// 生成整年度日曆
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

      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      if (holidays[dateStr]) {
        dayDiv.style.color = "red";
        dayDiv.title = holidays[dateStr];
      }

      daysDiv.appendChild(dayDiv);
    }

    monthDiv.appendChild(daysDiv);
    calendarDiv.appendChild(monthDiv);
  }
}

// 初始載入
generateCalendar(parseInt(yearInput.value));
