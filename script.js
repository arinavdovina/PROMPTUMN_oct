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
  },
  3: {
    title: "3 октября 2026",
    type: "drive-video",
    embed: "https://drive.google.com/file/d/1rJK_y5NzAip6bnXqksM6Q3tM67atV4cP/preview",
    driveLink: "https://drive.google.com/file/d/1rJK_y5NzAip6bnXqksM6Q3tM67atV4cP/view?usp=sharing",
    link: "https://arinavdovina.github.io/oct_pictures/"
  },
  4: {
    title: "4 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day4-prompt1.png",
        thumb: "assets/examples/day4-prompt1-thumb.webp",
        text: `ROLE
Ты — instructional designer, специалист по gamification и языковым заданиям для учеников 10–13 лет.
INPUT
Язык: **[ЯЗЫК]**
Уровень ученика: **[УРОВЕНЬ УЧЕНИКА]**
Ключевая лексика: **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**
Стиль рисовки: **[СТИЛЬ РИСОВКИ]**
Опционально: тема/мир квеста **[ТЕМА]**.
Целевая аудитория: школьники 10–13 лет.
TASK
Создай одностраничный A4 worksheet в виде игрового маршрута с 10–14 точками от START к FINISH. Ученик проходит путь, выбирая следующую точку не по стрелке или цвету, а по языковому условию.
MECHANICS
На каждом шаге предложи 2–3 возможных направления, но только одно отвечает текущему условию. Чередуй правила: «найди слово той же категории», «перейди к подходящей коллокации», «заверши мини-фразу», «найди близкое/противоположное по смыслу», «выбери то, что логично понадобится в ситуации». Не повторяй одно правило больше двух раз подряд.
SCAFFOLDING
Первый шаг — демонстрационный. Затем постепенно сокращай подсказки. Финальный challenge: ученик выбирает 3–4 точки своего маршрута и создаёт из них короткое сообщение, историю, план или ответ на **[ЯЗЫК]**.
AGE FIT
Визуальная логика должна напоминать карту квеста/уровня в игре, а не настольную игру для малышей. Подходящие сеттинги: school quest, camp challenge, city park mission, school festival, hobby club, mystery room, weekend challenge. Не используй опасные или взрослые сценарии.
VISUAL DESIGN
Используй **[СТИЛЬ РИСОВКИ]**. Карта чистая: линии не пересекаются хаотично, узлы крупные, мини-иллюстрации легко различимы. Никакой цветовой кодировки правильного пути.
QUALITY CONTROL
Используй всю или почти всю лексику из **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**. Каждая развилка имеет единственный обоснованный ответ. Уровень языка соответствует **[УРОВЕНЬ УЧЕНИКА]**, а механика остаётся достаточно интересной для 10–13 лет.`
      },
      {
        label: "Промпт 2",
        image: "assets/examples/day4-prompt2.png",
        thumb: "assets/examples/day4-prompt2-thumb.webp",
        text: `Создай яркий учебный рабочий лист по английскому языку для детей начальной школы в формате A4, **[альбомная/портретная ориентация]**.
Тема грамматики: **[УКАЖИ ГРАММАТИЧЕСКУЮ ТЕМУ]**.
Рабочий лист представляет собой задание-сортер.
В верхней части листа размести заголовок “Sort and Write” и короткую понятную инструкцию на английском языке, соответствующую заданию.
Ниже расположи **[КОЛИЧЕСТВО]** крупных объектов в форме **[РЫБКИ / КОСТОЧКИ / ЯБЛОКИ / ЛИСТЬЯ / ЗВЁЗДОЧКИ / ПЕЧЕНЬЕ / ДРУГОЕ]**.
На каждом объекте напиши по одному короткому предложению или примеру по теме **[ГРАММАТИКА]**.
Используй следующие предложения:
**[ВСТАВИТЬ НУЖНЫЕ ПРЕДЛОЖЕНИЯ]**
Перемешай примеры так, чтобы ответы разных категорий располагались в случайном порядке.
В нижней части листа размести **[КОЛИЧЕСТВО КАТЕГОРИЙ]** милых персонажей: **[УКАЗАТЬ ПЕРСОНАЖЕЙ — например, пингвины / собаки / котята / медвежата / лисы / монстрики]**.
Каждый персонаж отвечает за свою категорию:
**[ПЕРСОНАЖ 1]** — **[КАТЕГОРИЯ 1]**
**[ПЕРСОНАЖ 2]** — **[КАТЕГОРИЯ 2]**
**[ПЕРСОНАЖ 3]** — **[КАТЕГОРИЯ 3]**
Название каждой категории должно быть написано крупно и очень хорошо читаться рядом с соответствующим персонажем.
Под каждым персонажем сделай большую светлую область для записи ответов: пронумерованные строки, куда ребёнок сможет переписать подходящие предложения из верхней части листа.
Оформление яркое, современное, стильное, детское, качественный объёмный 3D-мультяшный стиль, сочные цвета, мягкие тени, аккуратные детали. Персонажи милые, дружелюбные, без чрезмерно выпуклых глаз. Композиция симметричная, чистая, без визуальной перегрузки. Все элементы достаточно крупные для печати.
Фон связан с выбранными персонажами и объектами, но остаётся ненавязчивым и не мешает выполнению задания.
Очень важно: весь английский текст должен быть написан без ошибок, предложения не повторять, ничего лишнего не добавлять. Рабочий лист должен быть полностью готов к печати и использованию на уроке.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day4-prompt3.png",
        thumb: "assets/examples/day4-prompt3-thumb.webp",
        text: `Создать карточку изображение в горизонтальном формате на Английском языке по теме осень Would you rather`
      }
    ]
  },
  5: {
    title: "5 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day5-prompt1.png",
        thumb: "assets/examples/day5-prompt1-thumb.webp",
        text: `ROLE
Ты — автор task-based worksheets для школьников 10–13 лет и визуальный дизайнер учебных материалов.
INPUT
Язык: **[ЯЗЫК]**
Уровень ученика: **[УРОВЕНЬ УЧЕНИКА]**
Целевые слова/чанки: **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**
Стиль рисовки: **[СТИЛЬ РИСОВКИ]**
Опционально: тема миссии **[ТЕМА]**.
Целевая аудитория: школьники 10–13 лет.
TASK
Создай A4 worksheet в формате «Mission Pack»: ученику нужно собрать ограниченный набор предметов/идей для понятной школьнику миссии. Подходящие сценарии: школьная поездка, sleepover, школьный фестиваль, спортивный день, клуб по интересам, пикник, классный проект, мини-поход, украшение учебного пространства, подготовка игрового вечера.
ACTIVITIES
1) CHOOSE: покажи 12–16 визуальных вариантов, среди них целевая лексика и 3–5 правдоподобных дистракторов. Выбрать можно только 6–8.
2) CHANGE OF PLAN: добавь 4 карточки-условия, например: «места стало меньше», «начался дождь», «одна вещь потерялась», «к вам присоединился ещё один человек», «правила мероприятия изменились». После каждой карты ученик пересматривает выбор.
3) EXPLAIN: ученик пишет или говорит 3–5 предложений и использует минимум 4 единицы из **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**.
METHOD
Задание должно требовать понимать значения, сравнивать варианты и аргументировать решение. Не делай один «идеальный» набор. Несколько решений могут быть разумными, если ученик способен их объяснить.
AGE FIT
Все ситуации безопасные и узнаваемые для 10–13 лет. Не используй работу, аренду, банковские темы, алкоголь, вождение, взрослые путешествия в одиночку или романтические сценарии. Не делай визуал слишком малышовым.
VISUAL DESIGN
Оформи как mission board в **[СТИЛЬ РИСОВКИ]**. Карточки объектов визуально равноценны, без подсказки размером, яркостью или позицией.
CHECK
Ключевая лексика действительно нужна для выбора и объяснения; язык соответствует **[УРОВЕНЬ УЧЕНИКА]**; условия создают повод повторно использовать те же слова в новом контексте.`
      },
      {
        label: "Промпт 2",
        image: "assets/examples/day5-prompt2.png",
        thumb: "assets/examples/day5-prompt2-thumb.webp",
        text: `Сгенерируй фотореалистичную нейрофотографию человека по прикреплённой фотографии. Очень важно сохранить полную идентичность внешности: лицо, форму глаз, носа, губ, причёску, цвет волос, возраст, натуральные пропорции и общее сходство. Не стилизовать лицо слишком сильно, не менять внешность, не добавлять искусственную кукольность.
Сцена: стильная городская автобусная остановка со стеклянными стенами. Человек сидит на скамейке на остановке или стоит рядом, в руках ноутбук или планшет, рядом большая сумка-шоппер, из которой видны блокнот, учебные материалы и книга. На заднем плане городской пейзаж, лёгкое вечернее освещение или мягкий дневной свет. Сцена должна выглядеть немного кинематографично и необычно.
Одежда: современный городской стиль — тренч, пальто или жакет, базовый топ, брюки или джинсы, аккуратная стильная обувь. Внешний вид должен быть эстетичным, интеллигентным и подходящим для учителя.
Композиция: вертикальный кадр, немного журнальная fashion/lifestyle эстетика, реалистичное освещение, глубокий городской фон с мягким боке. Настроение: уверенность, независимость, мобильность, современный преподаватель в ритме города.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day5-prompt3.png",
        thumb: "assets/examples/day5-prompt3-thumb.webp",
        text: `Сделать задание по типу word formation (можно конкретную тему добавить) для ОГЭ уровень b1, задание на Английском языке, 15 предложений, в виде изображения вертикального, стиль Осень (можно любой другой), высокая точность, проверить на ошибки сразу Стиль можно менять`
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

  if (content.type === "drive-video") {
    modalContent.innerHTML = `
      <section class="day-modal-content day-media-content">
        <div class="modal-head modal-head--prompt">
          <div class="modal-date">${day}</div>
          <div><h2>${content.title}</h2></div>
        </div>
        <div class="day-video-card drive-embed-card">
          <iframe class="drive-video-embed" src="${content.embed}" title="Видео 3 октября" allow="autoplay" allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="day-resource-actions">
          <a class="day-resource-link secondary-link" href="${content.driveLink}" target="_blank" rel="noopener noreferrer">Открыть видео в Google Drive →</a>
          <a class="day-resource-link" href="${content.link}" target="_blank" rel="noopener noreferrer">Открыть материалы →</a>
        </div>
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
  modal.querySelectorAll("video").forEach(video => video.pause());
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
