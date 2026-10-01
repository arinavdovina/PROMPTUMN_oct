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

const DAY_CONTENT = {
  1: {
    title: "1 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day1-prompt1.png",
        thumb: "assets/examples/day1-prompt1-thumb.webp",
        text: `**ROLE**

Ты — опытный методист по преподаванию языков детям и подросткам 10–13 лет, автор printable materials и арт-директор учебных рабочих листов. Ты проектируешь задания так, чтобы ученик действительно читал и использовал язык, а не угадывал ответ по позиции, цвету, размеру картинки или повторяющемуся шаблону.

**INPUT**

Язык материала: **[ЯЗЫК]**

Уровень ученика: **[УРОВЕНЬ УЧЕНИКА]**

Ключевые слова/словосочетания: **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**

Стиль рисовки: **[СТИЛЬ РИСОВКИ]**

Опционально: тема/сеттинг **[ТЕМА]**.

Целевая аудитория: школьники 10–13 лет.

**TASK**

Создай один вертикальный printable worksheet A4 в формате визуального мини-расследования. В центре — насыщенная, но читаемая сцена из мира 10–13-летнего ученика: школьный коридор, комната, клуб по интересам, школьная поездка, игровая зона, парк, лагерь, школьный фестиваль или другой возрастно уместный сеттинг по **[ТЕМА]**. В сцене естественно присутствуют объекты, связанные с целевой лексикой.

**MECHANICS**

1) FIND THE CLUES: ученик находит 5–8 объектов по коротким описаниям, определениям или контекстным подсказкам.

2) NAME THE EVIDENCE: сопоставляет найденные объекты с целевыми словами/чанками. Порядок слов и объектов обязательно перемешан.

3) SOLVE THE MINI-CASE: использует 4–6 единиц из **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]** в коротких ответах, подписях или объяснении того, что произошло.

**METHODOLOGY**

Выстрой путь от узнавания к извлечению из памяти и затем к продуктивному использованию. Не подписывай нужные объекты прямо в сцене. Для каждого ответа добавь хотя бы один правдоподобный дистрактор. Для **[УРОВЕНЬ УЧЕНИКА]** регулируй длину инструкций и степень опоры, но не упрощай механику до «посмотри на картинку и назови слово».

**AGE FIT**

Сюжет должен быть интересен 10–13-летним: тайна, потерянный предмет, перепутанные вещи, подготовка к событию, странная деталь, ошибка в плане. Не используй рабочие офисные ситуации, взрослые покупки/услуги, романтические сюжеты или дошкольную стилистику.

**VISUAL DESIGN**

Используй **[СТИЛЬ РИСОВКИ]**. Сцена занимает около 55–60% листа, остальные блоки — задания. Визуал современный, динамичный, но не «для малышей»: никаких чрезмерно детских рамочек, алфавитных украшений и случайного декора.

**QUALITY CHECK**

Проверь: все ключевые единицы реально отрабатываются; ответы нельзя вычислить по расположению; у закрытых заданий один логичный ответ; язык соответствует **[УРОВЕНЬ УЧЕНИКА]**; материал выглядит уместно для 10–13 лет. Ответы на лист не добавляй.`
      },
      {
        label: "Промпт 2",
        image: "assets/examples/day1-prompt2.png",
        thumb: "assets/examples/day1-prompt2-thumb.webp",
        text: `**Создай рабочий лист по английскому языку для детей в формате A4, портретная ориентация.**

Вверху крупный заголовок: **“Write the missing words”**. Весь заголовок одного цвета, хорошо читаемый.

Ниже размести **[КОЛИЧЕСТВО] заданий** вертикально друг под другом.

Для каждого слова или словосочетания:

слева — яркая понятная 3D-иллюстрация, точно передающая значение слова;

справа — **только первая буква слова или словосочетания**;

после первой буквы — **одна длинная сплошная линия для записи ответа**;

НЕ делить линию на отдельные чёрточки по количеству букв;

ребёнок должен сам вспомнить слово и его длину.

Например:

**B __________**

**S __________**

**P __________**

Если ответ состоит из двух или нескольких слов, например *playing soccer*, всё равно написать только первую букву **P** и одну длинную линию.

**Лексика для задания:**

**[ВСТАВИТЬ НУЖНЫЕ СЛОВА ИЛИ СЛОВОСОЧЕТАНИЯ]**

**Оформление:** яркое, стильное, современное, качественный объёмный **3D cartoon / Pixar-style**, приятное для детей. Белый или очень светлый фон. По краям — красивая объёмная **деревянная 3D-рамка**. Иллюстрации красочные, аккуратные, с мягким объёмом и тенями.

Все задания должны быть одинакового размера и располагаться ровно, с одинаковыми интервалами. Не перегружать лист декоративными элементами.

**Важно:**

никаких подписей под картинками;

никаких готовых слов;

никаких переводов и подсказок;

никаких логотипов, водяных знаков, авторских подписей и лишних надписей;

никаких лиц и глаз на неодушевлённых предметах;

изображение должно точно соответствовать каждому слову.

Проверь, чтобы **первая буква каждого ответа была правильной** и картинка однозначно соответствовала заданному слову.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day1-prompt3.png",
        thumb: "assets/examples/day1-prompt3-thumb.webp",
        text: `Создать изображение с 8 карточками для вырезания в стиле 3d Pixar формат вертикальный, на изображение поместить 8 вопросов про осень на Английском языке для малышей. (**Тему можно менять по себя**)`
      }
    ]
  },
  2: {
    title: "2 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day2-prompt1.png",
        thumb: "assets/examples/day2-prompt1-thumb.webp",
        text: `**ROLE**

Ты — методист по лексическому подходу и дизайнер визуальных материалов для школьников 10–13 лет.

**INPUT**

Язык: **[ЯЗЫК]**

Уровень ученика: **[УРОВЕНЬ УЧЕНИКА]**

Целевая лексика: **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**

Стиль рисовки: **[СТИЛЬ РИСОВКИ]**

Опционально: тема **[ТЕМА]**.

Целевая аудитория: школьники 10–13 лет.

**TASK**

Создай A4 worksheet как «Word Collection Lab» — коллекцию из 4 небольших секций, где одна и та же лексика рассматривается с разных сторон: значение, категория, сочетаемость и использование в реальной подростковой ситуации.

**ACTIVITY MECHANICS**

SECTION 1 — SORT IT: распределить слова/изображения по 2–4 смысловым категориям. Категории не должны совпадать с очевидным цветом, формой или расположением.

SECTION 2 — ODD ONE OUT: в 4 наборах выбрать лишнее слово и коротко объяснить выбор на **[ЯЗЫК]**. В части наборов допустимы два аргументируемых ответа — явно обозначь это только там, где задача открытая.

SECTION 3 — MAKE A MATCH: соединить естественные коллокации или смысловые пары. Добавь 2–3 лишних варианта.

SECTION 4 — USE IT FOR REAL: 3–5 мини-ситуаций, связанных со школой, хобби, друзьями, играми, поездками или повседневной жизнью; ученик выбирает и вставляет подходящую лексику, при необходимости изменяя форму слова.

**LEVEL CONTROL**

Для **[УРОВЕНЬ УЧЕНИКА]** настрой длину фраз, количество опор и степень перефразирования. Даже на A1 не своди весь лист к прямому «картинка = слово»: минимум два задания должны требовать понимания смысла и контекста.

**AGE FIT**

Примеры должны звучать естественно для 10–13 лет: school project, club, game night, weekend plan, sports practice, pet, class trip, room/desk, favourite app without brand names. Не используй офис, аренду, карьеру, взрослые финансы или слишком инфантильные сюжеты.

**VISUAL DESIGN**

Оформи как современную коллекционную доску/альбом в **[СТИЛЬ РИСОВКИ]**: четыре чётких блока, крупные номера, небольшие стикеры/бейджи, достаточно места для письма. Визуал стильный и игровой, но не дошкольный.

**ANTI-GUESSING CHECK**

Перемешай ответы и количество элементов; не ставь правильный вариант постоянно первым; не делай длину карточки подсказкой. Ученик должен опираться на значение и сочетаемость.`
      },
      {
        label: "Промпт 2",
        image: "assets/examples/day2-prompt2.png",
        thumb: "assets/examples/day2-prompt2-thumb.webp",
        text: `Создай необычную фотореалистичную нейрофотографию человека с прикреплённой фотографии. Максимально точно сохрани внешность: лицо, возраст, волосы, форму лица, глаз, носа, губ, мимику и естественную узнаваемость. Не менять черты лица, не омолаживать, не делать человека слишком похожим на модель, сохранить реалистичность.

Сцена: красивый современный кинотеатр без зрителей. Человек сидит в центре ряда кресел с ноутбуком на коленях, блокнотом или чашкой кофе в руках. Возможен второй вариант: человек стоит перед большим экраном. На экране можно сделать минималистичную светлую надпись, например: “Lesson loading…” или “New ideas”. Визуально кадр должен выглядеть атмосферно, креативно и дорого.

Одежда: стильный современный smart casual — брючный костюм, жакет, блуза, рубашка, джемпер или лаконичное платье. Важно, чтобы образ был профессиональным, но не слишком официальным.

Композиция: вертикальный кадр, кинематографичный свет, мягкие тени, глубокая перспектива, лёгкий драматизм, но при этом дружелюбная атмосфера. Стиль: cinematic lifestyle portrait, premium quality, профессиональная съёмка, акцент на личности преподавателя и необычности локации.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day2-prompt3.png",
        thumb: "assets/examples/day2-prompt3-thumb.webp",
        text: `Создай милый детский образовательный рабочий лист на тему «Осень» в стиле высококачественной 3D-анимации Pixar. Формат A4 вертикальный, красочный printable worksheet для дошкольников.

В верхней части большой объёмный 3D заголовок «AUTUMN» с мягкими округлыми буквами, каждая буква разного осеннего цвета: оранжевый, жёлтый, красный, зелёный. Под заголовком коричневая 3D лента с надписью «WORKSHEET FOR KIDS». Рядом милый 3D ребёнок в осенней одежде: жёлтая шапка, зелёный шарф, оранжевая куртка, улыбается и держит кленовый лист.

Весь лист разделён на 7 аккуратных блоков с закруглёнными рамками, выполненных как объёмные игровые панели:

1. **Trace the Words** — пунктирные слова autumn, pumpkin, acorn, leaves, scarecrow, рядом маленькие 3D осенние предметы: тыква, лист, желудь, пугало.
2. **Count and Write** — ряды объёмных 3D объектов: золотые листья, оранжевые тыквы, коричневые желуди, красные кленовые листья, маленькие пугала, рядом белые поля для записи числа.
3. **Circle the Odd One Out** — группы милых 3D осенних предметов, один предмет отличается: листья разных цветов, яблоки, тыквы, сапоги, зонтик, подсолнух.
4. **Fill in the Missing Letters** — слова с пропущенными буквами, рядом объёмные картинки-подсказки.
5. **Match the Picture to the Word** — соединение 3D картинок с названиями: pumpkin, acorn, leaf, tree, scarecrow.
6. **Color by Number** — большая 3D раскраска: пушистое осеннее дерево, тыква, листья, холмы, с цифрами внутри элементов и легендой цветов.
7. **Read and Answer** — нижний блок с коротким детским текстом про осень и вопросами.

Стиль изображения: Pixar-inspired 3D cartoon style, Disney-like cute characters, мягкие округлые формы, реалистичное освещение, объёмные материалы, яркие осенние цвета, дружелюбная атмосфера детского сада, высокое качество рендера, 3D clay style, glossy textures, depth of field, clean educational layout, professional children’s workbook design, ultra detailed, 8K.`
      }
    ]
  }
};

const grid = document.getElementById("calendarGrid");
const modal = document.getElementById("dayModal");
const modalContent = document.getElementById("modalContent");
const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
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

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function markdownToHtml(str) {
  return escapeHtml(str)
    .replace(/\*\*(.+?)\*\*/gs, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
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

function renderPromptCard(prompt, index) {
  return `
    <article class="prompt-card">
      <div class="prompt-card-head">
        <div class="prompt-label">${prompt.label || `Промпт ${index + 1}`}</div>
        <button class="copy-one prompt-copy-btn" type="button" data-copy-text="${encodeURIComponent(prompt.text)}">Скопировать</button>
      </div>
      <div class="prompt-card-body">
        <div class="prompt-text">${markdownToHtml(prompt.text)}</div>
        ${prompt.thumb ? `
          <button class="example-preview" type="button" data-full-image="${prompt.image}" aria-label="Открыть пример работы в полном размере">
            <img src="${prompt.thumb}" alt="Пример работы для ${prompt.label || `промпта ${index + 1}`}" loading="lazy">
            <span>Пример работы · открыть</span>
          </button>` : ""}
      </div>
    </article>
  `;
}

function renderDayModal(day) {
  const content = DAY_CONTENT[day];
  if (!content) {
    modalContent.innerHTML = `
      <section class="blank-modal">
        <div class="blank-modal-date">${day}</div>
        <div class="modal-empty" aria-hidden="true"></div>
      </section>
    `;
    return;
  }

  modalContent.innerHTML = `
    <section class="day-modal-content">
      <div class="modal-head modal-head--prompt">
        <div class="modal-date">${day}</div>
        <div>
          <h2>${content.title}</h2>
        </div>
      </div>
      <div class="prompt-list">
        ${content.prompts.map(renderPromptCard).join("")}
      </div>
    </section>
  `;

  modalContent.querySelectorAll(".prompt-copy-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = decodeURIComponent(btn.dataset.copyText || "");
      try {
        await navigator.clipboard.writeText(text);
        showToast("Промпт скопирован");
      } catch (err) {
        showToast("Не удалось скопировать");
      }
    });
  });

  modalContent.querySelectorAll(".example-preview").forEach(btn => {
    btn.addEventListener("click", () => openImageLightbox(btn.dataset.fullImage));
  });
}

function openImageLightbox(src) {
  if (!src) return;
  lightboxImage.src = src;
  imageLightbox.classList.add("open");
  imageLightbox.setAttribute("aria-hidden", "false");
}

function closeImageLightbox() {
  imageLightbox.classList.remove("open");
  imageLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
}

document.querySelectorAll("[data-close-lightbox]").forEach(el => el.addEventListener("click", closeImageLightbox));

function openModal(day, trigger) {
  previousFocus = trigger;
  renderDayModal(day);
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
  if (e.key === "Escape" && imageLightbox.classList.contains("open")) {
    closeImageLightbox();
    return;
  }
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
