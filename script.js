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
        image: "assets/examples/day1-prompt1.webp",
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
        image: "assets/examples/day1-prompt2.webp",
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
        image: "assets/examples/day1-prompt3.webp",
        text: `Создать изображение с 8 карточками для вырезания в стиле 3d Pixar формат вертикальный, на изображение поместить 8 вопросов про осень на Английском языке для малышей. (**Тему можно менять по себя**)`
      }
    ]
  },
  2: {
    title: "2 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day2-prompt1.webp",
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
        image: "assets/examples/day2-prompt2.webp",
        text: `Создай необычную фотореалистичную нейрофотографию человека с прикреплённой фотографии. Максимально точно сохрани внешность: лицо, возраст, волосы, форму лица, глаз, носа, губ, мимику и естественную узнаваемость. Не менять черты лица, не омолаживать, не делать человека слишком похожим на модель, сохранить реалистичность.

Сцена: красивый современный кинотеатр без зрителей. Человек сидит в центре ряда кресел с ноутбуком на коленях, блокнотом или чашкой кофе в руках. Возможен второй вариант: человек стоит перед большим экраном. На экране можно сделать минималистичную светлую надпись, например: “Lesson loading…” или “New ideas”. Визуально кадр должен выглядеть атмосферно, креативно и дорого.

Одежда: стильный современный smart casual — брючный костюм, жакет, блуза, рубашка, джемпер или лаконичное платье. Важно, чтобы образ был профессиональным, но не слишком официальным.

Композиция: вертикальный кадр, кинематографичный свет, мягкие тени, глубокая перспектива, лёгкий драматизм, но при этом дружелюбная атмосфера. Стиль: cinematic lifestyle portrait, premium quality, профессиональная съёмка, акцент на личности преподавателя и необычности локации.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day2-prompt3.webp",
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
        image: "assets/examples/day4-prompt1.webp",
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
        image: "assets/examples/day4-prompt2.webp",
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
        image: "assets/examples/day4-prompt3.webp",
        text: `Создать карточку изображение в горизонтальном формате на Английском языке по теме осень Would you rather`
      }
    ]
  },
  5: {
    title: "5 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day5-prompt1.webp",
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
        image: "assets/examples/day5-prompt2.webp",
        text: `Сгенерируй фотореалистичную нейрофотографию человека по прикреплённой фотографии. Очень важно сохранить полную идентичность внешности: лицо, форму глаз, носа, губ, причёску, цвет волос, возраст, натуральные пропорции и общее сходство. Не стилизовать лицо слишком сильно, не менять внешность, не добавлять искусственную кукольность.
Сцена: стильная городская автобусная остановка со стеклянными стенами. Человек сидит на скамейке на остановке или стоит рядом, в руках ноутбук или планшет, рядом большая сумка-шоппер, из которой видны блокнот, учебные материалы и книга. На заднем плане городской пейзаж, лёгкое вечернее освещение или мягкий дневной свет. Сцена должна выглядеть немного кинематографично и необычно.
Одежда: современный городской стиль — тренч, пальто или жакет, базовый топ, брюки или джинсы, аккуратная стильная обувь. Внешний вид должен быть эстетичным, интеллигентным и подходящим для учителя.
Композиция: вертикальный кадр, немного журнальная fashion/lifestyle эстетика, реалистичное освещение, глубокий городской фон с мягким боке. Настроение: уверенность, независимость, мобильность, современный преподаватель в ритме города.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day5-prompt3.webp",
        text: `Сделать задание по типу word formation (можно конкретную тему добавить) для ОГЭ уровень b1, задание на Английском языке, 15 предложений, в виде изображения вертикального, стиль Осень (можно любой другой), высокая точность, проверить на ошибки сразу Стиль можно менять`
      }
    ]
  }
  ,6: {
    title: "6 октября 2026",
    type: "drive-video",
    embed: "https://drive.google.com/file/d/1GwQ4xCnWEF4u2Zlc07OdvEMLBb6ddGkc/preview",
    driveLink: "https://drive.google.com/file/d/1GwQ4xCnWEF4u2Zlc07OdvEMLBb6ddGkc/view?usp=sharing"
  },
  7: {
    title: "7 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day7-prompt1.webp",
        text: `Ты — эксперт по speaking activities, task-based learning и classroom interaction.
Создай коллаж на 8 Halloween speaking cards для **[ВОЗРАСТ]**, уровень **[УРОВЕНЬ]**.
МЕХАНИКА:
Каждая карточка начинается как обычная ситуация, но содержит три последовательных TWIST-карточки.
Ученик сначала принимает решение и объясняет его.
После этого учитель или партнёр открывает Twist 1.
Ученик должен изменить или защитить своё решение.
Затем появляется Twist 2.
Затем Twist 3.
Пример:
START:
You and your friends find an old house. Do you go inside?
TWIST 1:
You hear your name from the second floor.
TWIST 2:
Your phone shows a message: “Don’t leave.”
TWIST 3:
Your friend says they have been here before.
После каждого изменения ученик должен говорить минимум 2–3 реплики.
Создай ситуации вокруг:
— Halloween party
— strange neighbour
— spooky hotel
— costume shop
— mysterious message
— pumpkin farm
— school Halloween night
— lost pet
— strange package
— haunted museum
ВАЖНО:
Не делай все повороты просто страшнее.
Используй неожиданные, смешные, странные и логические изменения обстоятельств.
Каждая карточка должна тренировать:
making decisions,
giving reasons,
changing your mind,
agreeing/disagreeing,
speculating.
OUTPUT:
CARD TITLE
START SITUATION
TWIST 1
TWIST 2
TWIST 3
SPEAKING CHALLENGE
USEFUL LANGUAGE — 3 фразы уровня **[УРОВЕНЬ]**.`
      },
      {
        label: "Промпт 2",
        image: "assets/examples/day7-prompt2.webp",
        text: `Создай реалистичную фотосессию человека с прикреплённой фотографии. Используй фото как главный референс внешности. Необходимо максимально точно сохранить лицо, возраст, черты лица, волосы, выражение лица, пропорции тела и общую узнаваемость человека. Не допускать искажений внешности, не менять пол, не менять возраст, не делать лицо другим.
Сцена: современный мини-офис прямо в парке. Небольшой стильный стол стоит среди зелени и деревьев, на столе лежат ноутбук, планшет, ежедневник, наушники, телефон и чашка кофе. Человек сидит за столом как будто работает над материалами для урока. Атмосфера необычная, свежая, креативная, но при этом профессиональная.
Одежда: smart casual — светлая рубашка или блуза, жакет или кардиган, брюки или джинсы, стильная и удобная обувь. Образ современного учителя, который совмещает творчество, технологии и профессию.
Композиция: фотореализм, профессиональная съёмка, естественный свет, фон с зеленью, мягкое размытие заднего плана. Поза уверенная, спокойная, лёгкая улыбка или задумчивый взгляд. Сделай кадр эстетичным, современным, как для личного бренда преподавателя.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day7-prompt3.webp",
        text: `🍂 Прыгать
Мультяшная иллюстрация: один весёлый ребёнок высоко прыгает в большую кучу разноцветных осенних листьев, вокруг золотые деревья, листья летят в воздухе, яркий добрый детский стиль.
🏃 Бежать
Мультяшная иллюстрация: трое детей бегут по осенней дорожке в парке, они смеются, вокруг падают жёлтые и красные листья, солнечная погода, красочный детский мультфильм.
🍁 Собирать
Мультяшная иллюстрация: маленькая девочка собирает красивые осенние листья в корзинку, рядом лежат жёлтые, оранжевые и красные листья, осенний парк, мягкий красочный стиль.
☔ Прыгать через лужу
Мультяшная иллюстрация: мальчик в жёлтом дождевике прыгает через лужу, на нём резиновые сапоги, вокруг мокрые осенние листья, после дождя, яркий детский мультфильм.
🎨 Рисовать
Мультяшная иллюстрация: четверо детей сидят на осенней поляне и рисуют мелками, перед ними большие листы бумаги, вокруг золотые деревья и разноцветные листья, уютная атмосфера.
🍎 Собирать яблоки
Мультяшная иллюстрация: один мальчик собирает яблоки в большую корзину в осеннем саду, на земле лежат красные яблоки, вокруг деревья с жёлтыми листьями, красочный мультяшный стиль.
🪁 Запускать
Мультяшная иллюстрация: двое детей запускают воздушного змея на осеннем поле, ветер раздувает их шарфы, вокруг летят листья, голубое небо, яркий добрый мультфильм.
🍃 Подбрасывать
Мультяшная иллюстрация: группа из пяти детей весело подбрасывает осенние листья вверх, вокруг целое облако разноцветных листьев, дети смеются, золотой парк, динамичная детская иллюстрация.
🚲 Кататься
Мультяшная иллюстрация: один ребёнок катается на велосипеде по осенней дорожке, вокруг золотые деревья, опавшие листья, маленькая корзинка на велосипеде, солнечный день, красочный мультяшный стиль.
🐿️ Кормить
Мультяшная иллюстрация: двое детей кормят белочку орешками в осеннем парке, белочка сидит рядом на пеньке, вокруг жёлтые и оранжевые листья, добрая и яркая детская мультяшная картинка.`
      }
    ]
  },
  8: {
    title: "8 октября 2026",
    prompts: [
      {
        label: "Промпт 1",
        image: "assets/examples/day8-prompt1.webp",
        text: `ROLE
Ты — специалист по guided discovery и преподаванию грамматики школьникам 10–13 лет, автор printable materials.
INPUT
Язык: **[ЯЗЫК]**
Уровень ученика: **[УРОВЕНЬ УЧЕНИКА]**
Грамматический материал / ключевые слова: **[КЛЮЧЕВЫЕ СЛОВА / МАТЕРИАЛ]**
Стиль рисовки: **[СТИЛЬ РИСОВКИ]**
Опционально: тема **[ТЕМА]**.
Целевая аудитория: школьники 10–13 лет.
TASK
Создай A4 worksheet «Grammar Repair Lab». Ученик видит 6–8 коротких примеров из одной знакомой ситуации: чат класса, подготовка проекта, клуб, поездка, школьное событие, домашнее хобби. Часть реплик правильные, часть содержит типичные для **[УРОВЕНЬ УЧЕНИКА]** ошибки.
STRUCTURE
1) NOTICE: 4 коротких пары; выбрать корректный вариант и подчеркнуть грамматический сигнал.
2) DIAGNOSE: 6 примеров с разными типами ошибок; ученик отмечает, что именно «сломалось».
3) REPAIR: переписать 4–5 реплик правильно.
4) TEST IT: новая мини-сцена, по которой ученик создаёт 3 собственных предложения с целевой грамматикой.
METHODOLOGY
Ошибки отражают реальные трудности изучающих **[ЯЗЫК]**, а не случайные опечатки. Не делай все примеры одинаковыми. Если две формы грамматически возможны, контекст должен ясно определять нужный смысл.
AGE FIT
Примеры должны звучать так, как могли бы звучать школьные сообщения или ситуации 10–13-летних: homework, project, club, game, hobby, pet, class trip, weekend plan. Не используй деловую переписку, офис, взрослые отношения или финансовые документы.
VISUAL DESIGN
**[СТИЛЬ РИСОВКИ]**, лёгкая метафора «repair lab»: scan / fix / test, 1–2 нейтральных персонажа, аккуратные карточки. Основное место — языку и полям для исправления; визуал современный, не дошкольный.
QUALITY CHECK
Все формы естественны для **[ЯЗЫК]**, соответствуют **[УРОВЕНЬ УЧЕНИКА]**, имеют однозначное исправление и подходят возрасту 10–13 лет. Ответы на лист не добавляй.`
      },
      {
        label: "Промпт 2",
        image: "assets/examples/day8-prompt2.webp",
        text: `Создай рабочий лист-раскраску по английскому языку для детей младшего школьного возраста.
Формат: A4, портретная ориентация.
Тема: **[ВСТАВИТЬ ТЕМУ]**
Лексика:
**[ВСТАВИТЬ СПИСОК СЛОВ]**
В верхней и центральной части листа создай одну большую связанную сюжетную иллюстрацию в виде чёткой чёрно-белой раскраски. Все слова из списка должны быть представлены на картинке отдельными, хорошо узнаваемыми предметами или персонажами. Изображения должны быть крупными, понятными детям, без лишних мелких деталей и без подписей внутри картинки.
Внизу рабочего листа размести задания с инструкциями по раскрашиванию. Для каждого слова должно быть отдельное предложение по модели:
Colour the [предмет] [цвет].
Например:
Colour the apple red.
Colour the bag blue.
Colour the book green and yellow.
Цвета я задаю самостоятельно:
**[ВСТАВИТЬ: ПРЕДМЕТ — ЦВЕТ]**
Важно:
использовать британское написание Colour;
цвет должен быть написан прямо в предложении;
не добавлять цветные карандаши, цветные образцы, кружочки, плашки или любые визуальные подсказки цвета;
ребёнок должен прочитать инструкцию и самостоятельно определить, каким цветом раскрашивать предмет;
текст должен быть крупным, чётким и без ошибок;
все указанные предметы обязательно должны присутствовать на основной картинке;
не добавлять лишнюю лексику.
Оформление по краям листа сделай ярким, стильным, объёмным, в эстетике современной детской 3D-иллюстрации / Pixar-inspired, но центральная картинка для раскрашивания должна оставаться чёрно-белой контурной.
Рамка должна соответствовать теме **[ТЕМА]**: использовать тематические декоративные элементы, но не перегружать страницу.
Общий стиль: аккуратный, современный, детский, яркий, профессиональный учебный материал. Все элементы должны хорошо помещаться на одном листе A4 и быть пригодными для печати.`
      },
      {
        label: "Промпт 3",
        image: "assets/examples/day8-prompt3.webp",
        text: `A cozy autumn family gathering in a warm country house, vertical educational worksheet composition, 4:5 aspect ratio. A loving family spending an autumn evening together in a beautifully decorated living room. Grandmother is sitting in an armchair knitting a scarf, grandfather is reading a book near the fireplace, mother is pouring hot tea into cups, father is cutting a homemade apple pie on the table, a young girl is drawing autumn leaves, a boy is playing with a small toy train on the floor, and another child is looking through the window at the colorful autumn trees outside. A fluffy cat is sleeping on the sofa, another cat is playing with a ball of yarn. Large windows show a peaceful evening with orange and red autumn trees. The room has pumpkins, candles, warm lamps, autumn leaf garlands, cozy blankets, cushions, books, houseplants and wooden furniture. On the table are apple pie, cookies, apples, tea cups, a teapot and a bowl of autumn fruit. Warm golden lighting, charming expressive characters, cute family-friendly 3D animated movie aesthetic, high-quality detailed 3D render, soft cinematic lighting, rich autumn colors, cozy atmosphere, clear recognizable objects and actions, no text, no letters, no numbers, no watermark. Leave a clean light-colored area at the bottom for a True or False exercise. Portrait orientation, 4:5.
📝 Задание True or False
Look at the picture. Write T or F. Correct the false sentences.
1. There are seven people in the room.
2. It is autumn outside.
3. The grandfather is reading a book.
4. The grandmother is playing the piano.
5. The mother is pouring tea.
6. The father is cutting a pie.
7. A girl is drawing autumn leaves.
8. A boy is playing with a toy train.
9. There is a dog sleeping on the sofa.
10. There are pumpkins in the room.
11. Two cats are in the room.
12. One cat is playing with a ball of yarn.
13. There are cookies on the table.
14. The family is having an autumn evening together.
15. The grandfather is standing by the window.`
      },
      {
        label: "Промпт 4",
        text: `A cozy autumn family walk in a beautiful city park, vertical educational worksheet illustration, 4:5 portrait format. A happy family spending a lovely autumn day together in a colorful park. The mother is sitting on a wooden bench holding a cup of hot tea, the father is taking photos with a camera, a little girl is collecting colorful autumn leaves, and a young boy is crouching near a pond and watching ducks. A friendly golden retriever sits beside the children. Several ducks are swimming in the pond, squirrels are gathering acorns near the trees, and a small squirrel is sitting on a tree branch. The park is filled with golden, orange, red and brown autumn trees, fallen leaves, pumpkins, baskets of apples, cozy benches, vintage street lamps, a beautiful stone bridge and a small gazebo in the background. Warm golden afternoon sunlight, peaceful family atmosphere, expressive cute characters, charming faces, detailed clothing, soft cinematic lighting, rich autumn colors, cozy and cheerful mood, high-quality 3D animated family movie style, polished 3D render, soft volumetric lighting, depth of field, whimsical, detailed, adorable, realistic textures.
Composition: the main family scene occupies the upper 65% of the page, while the lower 35% is a clean light cream educational worksheet area decorated with small autumn leaves, acorns and pumpkins. Leave enough empty space in the lower section for a True or False exercise. No text, no letters, no numbers, no watermark. Vertical 4:5 composition.`
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
        <img class="day-image" src="assets/calendar/${item.day}-color.webp" alt="" loading="lazy">
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
        ${prompt.image ? `
          <button class="example-preview" type="button" data-full-image="${prompt.image}" aria-label="Открыть пример работы в полном размере">
            <img src="${prompt.image}" alt="Пример работы для ${prompt.label || `промпта ${index + 1}`}" loading="lazy">
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
          <iframe class="drive-video-embed" src="${content.embed}" title="Видео ${day} октября" allow="autoplay" allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="day-resource-actions">
          <a class="day-resource-link secondary-link" href="${content.driveLink}" target="_blank" rel="noopener noreferrer">Открыть видео в Google Drive →</a>
          <a class="day-resource-link" href="${content.link}" target="_blank" rel="noopener noreferrer">Открыть материалы →</a>
        </div>
      </section>
    `;
    return;
  }

  if (content.type === "yandex-video") {
    modalContent.innerHTML = `
      <section class="day-modal-content day-media-content">
        <div class="modal-head modal-head--prompt">
          <div class="modal-date">${day}</div>
          <div><h2>${content.title}</h2></div>
        </div>
        <div class="day-video-card" id="yandexVideoMount">
          <div class="video-loading">Загружаю видео…</div>
        </div>
        <a class="day-resource-link" href="${content.yandexLink}" target="_blank" rel="noopener noreferrer">Открыть видео в Яндекс Диске →</a>
      </section>
    `;
    loadYandexVideo(content.publicKey, day);
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


async function loadYandexVideo(publicKey, day) {
  const mount = document.getElementById("yandexVideoMount");
  if (!mount) return;

  try {
    const apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${encodeURIComponent(publicKey)}`;
    const response = await fetch(apiUrl, { method: "GET" });
    if (!response.ok) throw new Error(`Yandex API: ${response.status}`);
    const data = await response.json();
    if (!data.href) throw new Error("No video URL");

    mount.innerHTML = `
      <video class="day-video" controls playsinline preload="metadata">
        <source src="${data.href}">
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    `;

    const video = mount.querySelector("video");
    if (video) {
      video.addEventListener("error", () => {
        mount.innerHTML = `<div class="video-fallback">Видео не удалось воспроизвести внутри страницы. Нажмите кнопку ниже, чтобы открыть его в Яндекс Диске.</div>`;
      }, { once: true });
    }
  } catch (error) {
    mount.innerHTML = `<div class="video-fallback">Видео не удалось загрузить внутри страницы. Нажмите кнопку ниже, чтобы открыть его в Яндекс Диске.</div>`;
  }
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
