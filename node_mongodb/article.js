db.article.drop();
db.authors.drop();

let date=(date)=>{
    let year=date.split(".")[2]
    let month=date.split(".")[1]
    let day=date.split(".")[0]
    return new Date(year+"-"+month+"-" + day+ "T16:00:00Z");
}

let author1 = db.authors.insertOne({
    name: "Иван Иванов"
});

let author2 = db.authors.insertOne({
    name: "Геннадий Пастухов"
});

let author3 = db.authors.insertOne({
    name: "Виталий Огнёв"
});

let author4 = db.authors.insertOne({
    name: "Сергей Моргунов"
});

let author5 = db.authors.insertOne({
    name: "Александр Андреев"
});

db.article.insertMany([
    {
        name: "Об идеальных газах",
        authors: [
            db.authors.findOne({ _id: author1.insertedId }),
            db.authors.findOne({ _id: author2.insertedId })
        ],
        datePublication: date("11.02.2018"),
        content: "В физике есть такое понятие, как модель. Модель — это что-то идеализированное, она нужна в случаях, когда можно пренебречь некоторыми параметрами объекта или процесса.Идеальный газ — это модель реального газа. Молекулы идеального газа представляют собой материальные точки, которые не взаимодействуют друг с другом на расстоянии, но взаимодействуют при столкновениях друг с другом или со стенками сосуда. При работе с идеальным газом можно пренебречь потенциальной энергией молекул (но не кинетической).",
        tags: [
            "физика",
            "газы"
        ],
        comments: [
            {
                nickname: "volodya",
                text: "Сойдёт",
                grade: 7
            },
            {
                nickname: "ggguider",
                text: "Очень помогло с моим докладом по физике!",
                grade: 10
            }
        ]
    },
    {
        name: "Вклад электромагнитных ускорителей",
        authors: [
            db.authors.findOne({ _id: author3.insertedId })
        ],
        datePublication: date("01.06.2020"),
        content: "Исследование космического пространства всегда завораживало человечество. От простого наблюдения за звездами до впечатляющих космических миссий, стремление понять и освоить космос стало двигателем научных и технологических достижений. Важной частью этой исследовательской работы являются двигательные установки, которые могут помочь нам перемещаться в космосе. Электромагнитные ускорители масс – это одно из перспективных направлений в упомянутой выше научной области, и в настоящем проекте автор постарается объяснить и изложить свою точку зрения по данному аспекту. Актуальность нашей темы заключается в том, что \"Электромагнитные массовые ускорители в космической физике\" чрезвычайно важно в современном мире. С космической деятельностью и технологическими достижениями, эти ускорители обещают улучшить наши возможности в космосе. Они могут использоваться для запуска объектов в космос и проведения исследований в невесомости. Однако с этим связаны важные вопросы безопасности и этики. Поэтому изучение электромагнитных массовых ускорителей несомненно важно для нашего понимания космической физики и обеспечения безопасности в этой области. Основная цель данного проекта – это погружение в мир электромагнитных ускорителей масс и их роли в космической физике. Эти устройства используют электромагнитные силы для ускорения масс до очень высоких скоростей и могут предоставить новые возможности для исследований и движения в космосе. Мотивацией послужило исследование электромагнитной индукции и эксперименты Николы Теслы. Тесла продемонстрировал потенциал электромагнитизма и открыл новые горизонты для научных исследований, что стало источником нашей страсти к изучению электромагнитных ускорителей масс. А так же, мы проводили исследования и эксперименты с электромагнитным поездом, что позволило нам углубить знания о принципах электромагнетизма и магнитной индукции, стимулировав интерес к электромагнитным ускорителям масс. История развития электромагнитных ускорителей масс в космической физике очень обширна и богата новыми идеями и достижениями. Начало истории ЭМУМ уходит корнями в XIX век, когда великие ученые, такие как Ампер, Фарадей и Максвелл изучали основы электромагнетизма и механики. Их теоретические работы стали фундаментом для будущих электромагнитных ускорителей масс, о которых в дальнейшем будет идти речь. Одной из важных моментов в развитии этой технологии была концепция и теория о создании рельсотрона, которая возникла в XIX веке. Она предполагала использовать электромагнитные силы для ускорения объектов. Однако только в середине XX-века ученым, таким как Р.Л. Бертон и Дж.Р. Вудьярд, удалось превратить эту идею в реальность. Они создали первые прототипы рельсовых пушек, которые, хоть и использовались в основном для военных целей, но заложили фундамент для будущего использования в космической физике.",
        tags: [
            "физика",
            "космос",
            "электричество"
        ],
        comments: [
            {
                nickname: "kostyan",
                text: "Потрясающая статья, опережающая своё время.",
                grade: 10
            },
            {
                nickname: "fooret",
                text: "Ну такое...",
                grade: 5
            },
            {
                nickname: "vladec123",
                text: "уснул.",
                grade: 2
            },
            {
                nickname: "greatMAN",
                text: "суперово",
                grade: 10
            }
        ]
    },
    {
        name: "Влияние рок-музыки на подростковую агрессивность с точки зрения психоанализа",
        authors: [
            db.authors.findOne({ _id: author5.insertedId })
        ],
        datePublication: date("22.03.2022"),
        content: "Музыка обладает уникальной способностью оказывать воздействие на физическое, моральное, эстетическое и культурно-нравственное развитие человека. Множество исследований, проведенных в сфере музыкального влияния на человека, подталкивает исследователей к поиску методов, которые позволили бы более глубоко изучить степень влияния разных видов музыки на поведение и состояние как отдельного индивида, так и группы людей. Неоспоримая актуальность данной проблемы заключается в необходимости объединения и упорядочения как теоретических, так и практических знаний о взаимосвязи между музыкой и человеком, а также в возможности достоверного прогнозирования ее воздействия. Огромный вклад в развитие музыкальной культуры внесли такие выдающиеся ученые, педагоги, музыканты и психологи, как Б.В. Асафьев, О.Ф. Сахалтуева, Н.И. Козлов, М.Ш. Бонфельд, Д.С. Мережковский, А.Л. Готсдинер, Л.С. Выготский, А.В. Мудрик, Д.Б. Эльконин и другие [5, с. 381]. В ходе исследований, посвященных восприятию музыки, ученые В.С. Марахасин и В.М. Цехановский отметили, что ритм произведения оказывает особое воздействие на организм слушателя. В результате проведенного исследования было обнаружено, что ритм сердечной деятельности меняется в зависимости от типа музыкального произведения. При помощи электрокардиограммы учеными было показано, что слушание музыки вызывает определенную доминирующую частоту сердечной активности [7, с. 85]. Фундаментально важной особенностью музыки является ее способность действовать напрямую на подсознание и бессознательное человека. Слушая музыку, человек часто не осознает, как она проникает внутрь сознания и вызывает реакции на уровне, которые не всегда можно объяснить словами. Именно поэтому психоанализ старается раскрыть тайну искренних эмоций, спрятанных в глубинах бессознательного [2, с. 60]. Согласно психоаналитическим концепциям, музыка может быть своего рода \"ключом\" к чувствам и эмоциям, которые люди не всегда осознают или не могут выразить обычным языком. Музыка может открыть подавленные желания, давно забытые воспоминания, скрытые страхи и раскрыть глубины нашего психического мира. Следует также отметить, что музыка способна снять психологический панцирь и позволить выразить свои чувства и эмоции более непосредственно. Снимая ограничивающие барьеры и позволяя человеку полностью интегрироваться в звуковой мир, музыка расширяет психологические границы и открывает путь к более глубокому пониманию эмоциональных потребностей [6, с. 111]. В целом, психоанализ утверждает, что музыка является мощным инструментом самоанализа, позволяющим раскрыться на новом уровне, осознать и прочувствовать свои внутренние мотивы и потребности. Рок-музыка – это уникальный музыкальный жанр, который сформировался в середине XX века и оказал огромное влияние на развитие музыкальной культуры и популярной музыки в целом. Рок-музыка обладает энергетикой и мощностью звучания, часто содержит яркие и динамичные мелодии, основанные на сильных ритмах и живых инструментах [3, с. 141]. Она разнообразна и многогранна, включая различные подстили и направления. Рок-музыка имеет социальное значение и влияние, выражает бунтарскую культуру и свободу самовыражения. Благодаря своей узнаваемости и воздействию на массы, рок-музыка продолжает оставаться одним из самых популярных и востребованных жанров в мировой музыкальной индустрии [9, с. 310]. Исходя из собранных статистических данных, можно утверждать, что большинство подростков и молодых людей увлечены рок-музыкой. Рок, как одна из наиболее популярных музыкальных жанров, является важным феноменом нашего времени [1]. Один из наиболее распространенных стереотипов связан с влиянием рок-музыки на человеческую агрессивность, утверждая, что она способна повышать ее. Естественно, музыка обладает силой воздействия на эмоциональное состояние человека, но может ли она действительно влиять на уровень агрессии? Насколько агрессивны фанаты рока на самом деле, и не является ли это всего лишь стереотипом, ошибочным мнением? Необходимо дать определения таким понятиям, как «агрессия», «агрессивность» и «агрессивное поведение». Агрессия – это мотивированное деструктивное поведение, противоречащее нормам сосуществования людей в обществе, которое причиняет вред объектам нападения, наносит физический ущерб или вызывает психологический дискомфорт у людей [8, с. 351].",
        tags: [
            "психология",
            "психоанализ",
            "музыка"
        ],
        comments: [
            {
                nickname: "ksuha",
                text: "То, что было описано в статье тронуло меня до глубины души. Мне и не верится, что я могу жить в одно время с такими светлыми умами, который выдают из своего разума великие идеи и мысли. Спасибо.",
                grade: 10
            }
        ]
    },
    {
        name: "Фотон. Строение, размеры.",
        authors: [
            db.authors.findOne({ _id: author2.insertedId }),
            db.authors.findOne({ _id: author3.insertedId })
        ],
        datePublication: date("17.11.2019"),
        content: "Фотон — элементарная частица, квант электромагнитного излучения в виде поперечных электромагнитных волн и переносчик электромагнитного взаимодействия. Это безмассовая частица, способная существовать в вакууме, только двигаясь со скоростью света. Фотон — самая распространённая по численности частица во Вселенной. На один нуклон приходится не менее 20 миллиардов фотонов [15]. В данной теории, на основе установленного в настоящее время фактического материала, и положений, обоснованных в работе «Квантовый микромир», принято иное понимание данного объекта микромира. В работе много новых положений, взятых из этой работы. Фактически, она является продолжением указанных работ, подтверждающих правильность и применимость сформулированных в них новых положений. Фотон - это элементарная частица, представляющая собой спиралеобразный вихрь электромагнитного поля (материи), образованного квантами поля (биполями в активном состоянии). Он представляет собой объект цилиндрической формы, длиной равной длине квантового движения и сечением, пропорциональным его энергии. Далее это будет обосновано. В отличие от электрона и протона, фотон не имеет энергетической оболочки, образованной квантомами энергии. Поэтому все акты его квантовых движений, с формированием нового квантома энергии и его активации, происходят по вектору его появления, и он всегда движется со скоростью света. Установлено, что в реакции аннигиляции электрона с позитроном образуется 2 Ү-фотона. Естественно принять, что между ними есть определенное соответствие. В первом приближении принято, что масса каждого фотона соответствует массе электрона. В «Квантовом микромире» обосновано, что электрон и позитрон - это вихри поля, свернутые в тор. У электрона правое направление закрутки, у позитрона - левая закрутка. Можно предположить, что в данной реакции, торы разрываются и превращаются в цилиндрические объекты, имеющие разное направление вращения электро-магнитного поля. Движение фотона, как и всех элементарных частиц, носит дискретный характер: движение на длину волны со скоростью света, остановка, новое движение. Каждый акт квантового движения обеспечивается функционированием квантома энергии (Ке), несущего квант действия h. Условием существования фотонов, как и всех остальных элементарных частиц, является постоянное взаимодействие с полем, с формированием нового квантома энергии.",
        tags: [
            "физика",
            "частицы"
        ],
        comments: [
            {
                nickname: "volodya",
                text: "Крутотатататататата",
                grade: 9
            },
            {
                nickname: "zonD",
                text: "я один ничего не понял?))))",
                grade: 10
            },
            {
                nickname: "olga199307",
                text: "Спасибо за проделанную работу!",
                grade: 10
            }
        ]
    },
    {
        name: "Энергия вселенной",
        authors: [
            db.authors.findOne({ _id: author2.insertedId })
        ],
        datePublication: date("14.05.2021"),
        content: "Термоядерный синтез – это сплавление, реакция, в которой два лёгких ядра соединяются, чтобы образовать более тяжёлое ядро. Во время этого высвобождается большое количество энергии, формы различные, таких как свет, тепло и жидкость. Водород – основа термоядерного синтеза. Изотопы водорода: дейтерий, в состав которого входит один протон и один нейтрон, и тритий, в состав которого уже входит один протон и два нейтрона. Взаимодействие этих изотопов, при высоких температурах и больших давлениях ядра, преодолевая при этом различные отталкивающие потенциалы, начинают взаимодействовать друг с другом. Когда ядра трития и дейтерия достигают определённого расстояния, где действует сильное ядерное взаимодействие, они объединяются в одно ядерное ядро гелия. В этот момент высвобождается колоссальное количество энергии, что делает термоядерный синтез таким важным и интересным процессом. Что является источником энергии внутри звёзд? На рубеже 19-20 веков физика столкнулась с рядом загадок, связанных с процессами внутри звёзд, в том числе и нашего Солнца. Одной из ключевых проблем было объяснение механизма, с помощью которого звёзды создают огромное количество энергии. Тогда ещё не было точных данных о структуре атомов и процессах, происходящих в их ядрах, но физики начали предлагать теории, которые позже сформировали основу для понимания термоядерного синтеза. Ханс Бете сыграл важную роль в разработке теоретических основ термоядерного синтеза. Его ключевая работа в этой области была опубликована в 1939 году. Он предложил, что процесс преобразования водорода в гелий, который происходит в ядрах звёзд, включает в себя серию ядерных реакций. Альберт Эйнштейн также внёс свой вклад в понимание энергетики звёзд. Его знаменитая формула E=mc² утверждает, что масса и энергия взаимосвязаны, и это понимание было крайне важным для теории термоядерного синтеза. Суть заключается в том, что в процессе синтеза новых ядер происходит небольшая потеря массы, которая освобождается в виде энергии в соответствии с формулой Эйнштейна. В 1939 году Генри Норрис Расселл совместно с физиком Фредериком Хойлем предложил идею, что ядерные синтезы, могут быть ключевым механизмом, обеспечивающим Солнце энергией. Идея заключалась в том, что высокие температуры и давление в центре Солнца создают условия, при которых протоны (ядра водорода) могут сталкиваться и объединяться в гелий. Этот процесс сопровождается высвобождением огромного количества энергии, в соответствии с известной формулой Эйнштейна, где масса преобразуется в энергию. Рассел и Хойль предположили, что термоядерные реакции в Солнце могут обеспечивать его долгосрочную энергетическую активность. Эта идея представляла собой значительное изменение в том, как мы понимаем источник солнечной энергии. До этого считалось, что Солнце могло быть просто горячим, огромным газовым шаром, который светился за счет высокой температуры и давления, но механизм, как именно это происходит, был мало известен. Концепция термоядерной энергии начала развиваться во время Второй мировой войны и продолжила своё развитие после неё. Суть термоядерной реакции заключается в объединении лёгких ядерных частиц в более тяжёлые при высоких температурах и давлениях, что освобождает колоссальное количество энергии. Исследования в этой области стали важными во время войны, особенно после того, как была разработана первая атомная бомба. В 1952 году в США был проведён первый успешный испытательный взрыв термоядерной бомбы под названием \"Майк\". Этот взрыв был частью проекта Иви (\"Ivy\"), который исследовал возможности использования термоядерной энергии для создания оружия. В дальнейшем разработка термоядерного оружия и технологий продолжала своё развитие в различных странах. Однако, помимо военных целей, термоядерные реакции также исследовались в рамках создания источников энергии. Разработка термоядерных реакторов для производства энергии является одной из перспективных областей энергетики, хотя и представляет собой огромные технические и инженерные вызовы. Исследования термоядерных реакций в космосе играют важную роль в нашем понимании солнечной активности и явлений, происходящих в ядре Солнца. Одним из ключевых инструментов для таких исследований была \"Орбитальная обсерватория динамического действия\" (Orbiting Solar Observatory, OSO), которая действовала с 1960 по 1970 годы. OSO была серией космических обсерваторий, предназначенных для изучения Солнца в различных диапазонах электромагнитного излучения. Эти обсерватории были разработаны для наблюдения за солнечной активностью, включая солнечные вспышки, солнечные пятна и другие явления, связанные с солнечной энергией. Также нельзя не упомянуть о двух ключевых проектах, связанных с этой областью, - это термоядерный эксперимент Токамак в СССР и Международный термоядерный экспериментальный реактор (ITER). После Великой Отечественной войны советские ученые активно разрабатывали термоядерный реактор. Изначально, в 1950 году, академик Игорь Тамм и Андрей Сахаров предложили концепцию токамака. Это система, в которой плазма изотропно нагревается и поддерживается с помощью магнитных полей. В середине 1960-х годов в СССР был создан первый токамак — Токамак Т-1. В последующие годы были созданы более совершенные установки, такие как Токамак Т-3 и Токамак Т-4. Эти эксперименты с токамаками в СССР внесли огромный вклад в развитие термоядерной науки и технологий. В конце 20 века, в 1985 году, представители Совета Европы, США, СССР, Японии и Южной Кореи подписали соглашение о создании совместного проекта – ITER. Этот проект представляет собой международный коллективный подход к созданию термоядерного реактора. Основная цель ITER – добиться самостоятельного сжигания термоядерного топлива и генерации значительного количества энергии. Реактор строится в Кадараше, Франция, и должен стать самым большим термоядерным реактором на Земле. В процессе строительства и эксплуатации ITER планируется получить ценные данные для развития термоядерной энергетики. Продолжаются работы по созданию установок, таких как ITER, в рамках международного сотрудничества, чтобы получить возможность контролировать термоядерный синтез для генерации энергии. Освоение и развитие теории термоядерного синтеза Россия продвинулась и опередила всех, наши ученые понимают физику того процесса, у нас существуют термоядерные реакторы, которые дают  энергию. Таким образом, термоядерный синтез играл важную роль в исследованиях и разработках не только в течение 20 века в военных и мирных направлениях, но и по сегодняшний день.",
        tags: [
            "физика",
            "космос",
            "вселенная"
        ],
        comments: [
            {
                nickname: "soldin",
                text: "Не понимаю хвалебных отзывов. Очень проходная работа, которая после прочтения ничего нового не оставляет. Ученики старших классов пишут такие доклады на обычные уроки, а тут ТАКОЕ на, казалось бы, авторитетном сайте. Жаль, что иногда выкладывается такая халтура.",
                grade: 3
            },
            {
                nickname: "bobs4443",
                text: "Всегда хотел узнать больше об этой теме. Спасибо!",
                grade: 10
            },
            {
                nickname: "filosofffff",
                text: "охх... тяжко тяжко.",
                grade: 6
            },
            {
                nickname: "portrkitasdfv",
                text: "В такие тяжёлые времена действительно хочется чего-то такого: высокого, космического. Это позволяет хотя бы на короткое время осознать насколько человек ничтожен и мал, по сравнению с бескончеными просторами космоса. Надеюсь много людей это прочитают, и сделают выводы",
                grade: 10
            },
            {
                nickname: "zanuda_loh",
                text: "Бред. Пусть автор закончит 10-ый класс, а после пишет статьи!",
                grade: 2
            },
            {
                nickname: "stud234172",
                text: "меня заставили написать этот комментарий. +20 рублей. спасибо за вниманеи!",
                grade: 10
            }
        ]
    }
]);