const DAYS = Array.from({ length: 31 }, (_, i) => ({ day: i + 1 }));

const MOSCOW_OFFSET = "+03:00";
const MONTH_LABEL = "окт";
const WEEKDAYS = {
  "1":"четверг","2":"пятница","3":"суббота","4":"воскресенье","5":"понедельник","6":"вторник","7":"среда",
  "8":"четверг","9":"пятница","10":"суббота","11":"воскресенье","12":"понедельник","13":"вторник","14":"среда",
  "15":"четверг","16":"пятница","17":"суббота","18":"воскресенье","19":"понедельник","20":"вторник","21":"среда",
  "22":"четверг","23":"пятница","24":"суббота","25":"воскресенье","26":"понедельник","27":"вторник","28":"среда",
  "29":"четверг","30":"пятница","31":"суббота"
};

// Для проверки всех дней до октября добавьте ?preview=1 к адресу сайта.
const PREVIEW_MODE = new URLSearchParams(window.location.search).get("preview") === "1";

const grid = document.getElementById("calendarGrid");
const modal = document.getElementById("dayModal");
const modalDate = document.getElementById("modalDate");
const toast = document.getElementById("toast");
let previousFocus = null;
let toastTimer = null;

function unlockTime(day) {
  return new Date(`2026-10-${String(day).padStart(2, "0")}T10:00:00${MOSCOW_OFFSET}`).getTime();
}

function isUnlocked(day) {
  return PREVIEW_MODE || Date.now() >= unlockTime(day);
}

function moscowParts() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  return Object.fromEntries(parts.map(p => [p.type, p.value]));
}

function isToday(day) {
  if (PREVIEW_MODE) return false;
  const p = moscowParts();
  return p.year === "2026" && p.month === "10" && Number(p.day) === day;
}

function formatUnlock(day) {
  return `${day} октября, 10:00 МСК`;
}

function renderCalendar() {
  grid.innerHTML = "";

  DAYS.forEach(item => {
    const unlocked = isUnlocked(item.day);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `calendar-card ${unlocked ? "unlocked" : "locked"}${isToday(item.day) ? " today" : ""}`;
    card.dataset.day = item.day;
    card.setAttribute("aria-label", unlocked
      ? `${item.day} октября. Открыть.`
      : `${item.day} октября. Закрыто до 10:00 по Москве.`);

    card.innerHTML = `
      <div class="date-badge"><b>${item.day}</b><span>${MONTH_LABEL}</span></div>
      <div class="day-image-wrap">
        <img class="day-image" src="assets/calendar/${item.day}-${unlocked ? "color" : "locked"}.webp" alt="" loading="lazy">
      </div>
      <div class="day-meta">
        <div class="day-meta-copy">
          <div class="day-week">${WEEKDAYS[item.day]}</div>
          <div class="day-title">${unlocked ? "Открыть" : "Скоро"}</div>
        </div>
        <div class="lock-status" aria-hidden="true">${unlocked ? "→" : "●"}</div>
      </div>`;

    card.addEventListener("click", () => {
      if (unlocked) {
        openModal(item.day, card);
      } else {
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
        showToast(`Откроется ${formatUnlock(item.day)}`);
      }
    });

    grid.appendChild(card);
  });

  updateStatus();
}

function updateStatus() {
  const unlocked = DAYS.filter(d => isUnlocked(d.day)).length;
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");
  const nextUnlock = document.getElementById("nextUnlock");

  progressText.textContent = PREVIEW_MODE
    ? "Предпросмотр: открыты все дни"
    : `Открыто ${unlocked} из ${DAYS.length}`;

  progressBar.style.width = `${(unlocked / DAYS.length) * 100}%`;

  const next = DAYS.find(d => !isUnlocked(d.day));
  if (PREVIEW_MODE) {
    nextUnlock.textContent = "";
  } else if (!next) {
    nextUnlock.textContent = "Все дни открыты ✦";
  } else {
    nextUnlock.textContent = `Следующий — ${formatUnlock(next.day)}`;
  }
}

function openModal(day, trigger) {
  previousFocus = trigger;
  modalDate.textContent = day;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => modal.querySelector(".modal-close").focus(), 20);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (previousFocus) previousFocus.focus();
}

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  if (e.key === "Tab" && modal.classList.contains("open")) {
    const focusable = [...modal.querySelectorAll('button:not([disabled])')].filter(x => x.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

renderCalendar();
setInterval(renderCalendar, 60000);
