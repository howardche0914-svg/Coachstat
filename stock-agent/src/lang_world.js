/* ============ Lesson "Stock markets around the world" in es, fr, hi, ar, bn ============ */
addLanguage("es", { lessons: { world: {
  title: "Las bolsas del mundo", try: "Ver Toyota (7203)",
  body: d => `
    <p>Cada país tiene su propia bolsa, y cada una funciona un poco distinto. StockPilot tiene ${d.n} mercados: EE. UU., Taiwán, Japón, India, Hong Kong, Europa y Arabia Saudí.</p>
    <ul>
      <li><b>Relojes distintos.</b> Cada mercado abre en su propia zona horaria, así que cuando abre Nueva York, Tokio ya cerró por la noche. Tokio y Hong Kong incluso paran para <b>comer</b>, y Arabia Saudí opera de <b>domingo a jueves</b>.</li>
      <li><b>Reglas distintas.</b> Taiwán y Arabia Saudí limitan cuánto puede moverse un precio en un día (±10 %). EE. UU., Europa y Hong Kong no tienen límite diario, así que los precios pueden saltar mucho más.</li>
      <li><b>Dinero distinto.</b> Cada mercado usa su moneda: yenes, rupias, euros, riales y más. Aquí tu efectivo está en dólares, así que el valor de una acción extranjera también se mueve con el tipo de cambio. Es el <b>riesgo de divisa</b>.</li>
    </ul>
    <p>Tener acciones de varios países reparte el riesgo, porque las economías no suben y bajan a la vez. Pero añade riesgo de divisa, por eso muchos inversores tienen casi todo en su mercado local y una parte menor fuera.</p>
    ${key("cada mercado tiene su reloj, su moneda y sus reglas. Repartir entre países reparte el riesgo, pero añade riesgo de divisa.")}
    ${live(d.open ? `Abiertos ahora en tiempo real: <b>${d.open}</b>. Tienes acciones de <b>${d.held}</b> mercado${d.held === 1 ? "" : "s"}.` : `En tiempo real, los ${d.n} mercados están cerrados ahora. Tienes acciones de <b>${d.held}</b> mercado${d.held === 1 ? "" : "s"}.`)}`,
  quiz: [
    ["¿Qué mercado opera de domingo a jueves?", ["Arabia Saudí", "Japón", "Estados Unidos"], "La semana de la bolsa saudí va de domingo a jueves, como la semana laboral allí."],
    ["Compras una acción japonesa. Sube un 10 % en yenes, pero el yen cae un 10 % frente al dólar. ¿Cómo te fue en dólares, más o menos?", ["Cerca de −1 %: casi sin ganancia", "+10 %", "+20 %"], "1,10 × 0,90 = 0,99: la caída de la moneda se comió la ganancia. Eso es riesgo de divisa."],
    ["¿Qué dos mercados de StockPilot tienen un límite diario de ±10 %?", ["Taiwán y Arabia Saudí", "EE. UU. y Europa", "Japón y Hong Kong"], "Taiwán y Arabia Saudí limitan el movimiento diario al 10 % desde el cierre anterior."],
  ],
  mission: "Ten acciones de 3 o más mercados distintos a la vez",
  video: [
    ["Cada país tiene su propia bolsa, su moneda y sus reglas.", { mid: "7 mercados", l: "Asia", r: "Europa y América" }],
    ["Cuando abre Nueva York, Tokio ya cerró, y algunos mercados incluso paran para comer.", { lines: ["Tokio: comida 11:30–12:30", "Hong Kong: comida 12:00–13:00", "Arabia Saudí: domingo a jueves"] }],
    ["Algunos mercados limitan cuánto puede moverse un precio en un día. Otros no.", { lines: ["Taiwán, Arabia Saudí: ±10 % al día", "EE. UU., Europa, Hong Kong: sin límite"] }],
    ["Las acciones extranjeras añaden riesgo de divisa: una moneda que cae puede comerse tu ganancia.", { lines: ["Acción +10 % en yenes", "Yen −10 % frente al dólar", "≈ −1 % en dólares"] }],
  ],
} } });

addLanguage("fr", { lessons: { world: {
  title: "Les Bourses du monde", try: "Voir Toyota (7203)",
  body: d => `
    <p>Chaque pays a sa propre Bourse, et chacune fonctionne un peu différemment. StockPilot compte ${d.n} marchés : les États-Unis, Taïwan, le Japon, l’Inde, Hong Kong, l’Europe et l’Arabie saoudite.</p>
    <ul>
      <li><b>Des horloges différentes.</b> Chaque marché ouvre dans son fuseau horaire : quand New York ouvre, Tokyo est déjà fermé pour la nuit. Tokyo et Hong Kong font même une <b>pause déjeuner</b>, et l’Arabie saoudite échange du <b>dimanche au jeudi</b>.</li>
      <li><b>Des règles différentes.</b> Taïwan et l’Arabie saoudite limitent la variation d’un prix sur une journée (±10 %). Les États-Unis, l’Europe et Hong Kong n’ont pas de limite quotidienne : les prix peuvent bondir bien plus.</li>
      <li><b>Des monnaies différentes.</b> Chaque marché a sa monnaie : yen, roupie, euro, riyal… Ici, vos liquidités restent en dollars : la valeur d’une action étrangère suit donc aussi le taux de change. C’est le <b>risque de change</b>.</li>
    </ul>
    <p>Détenir des actions de plusieurs pays répartit le risque, car les économies ne montent et ne baissent pas toutes en même temps. Mais cela ajoute un risque de change : beaucoup d’investisseurs gardent l’essentiel dans leur marché national et une plus petite part à l’étranger.</p>
    ${key("chaque marché a son horloge, sa monnaie et ses règles. Se répartir entre pays répartit le risque, mais ajoute un risque de change.")}
    ${live(d.open ? `Ouverts en ce moment, en temps réel : <b>${d.open}</b>. Vous détenez des actions de <b>${d.held}</b> marché${d.held === 1 ? "" : "s"}.` : `En temps réel, les ${d.n} marchés sont fermés en ce moment. Vous détenez des actions de <b>${d.held}</b> marché${d.held === 1 ? "" : "s"}.`)}`,
  quiz: [
    ["Quel marché échange du dimanche au jeudi ?", ["L’Arabie saoudite", "Le Japon", "Les États-Unis"], "La semaine de la Bourse saoudienne va du dimanche au jeudi, comme la semaine de travail là-bas."],
    ["Vous achetez une action japonaise. Elle gagne 10 % en yens, mais le yen perd 10 % face au dollar. Environ combien gagnez-vous en dollars ?", ["Environ −1 % : presque rien", "+10 %", "+20 %"], "1,10 × 0,90 = 0,99 : la baisse de la monnaie a effacé le gain. C’est le risque de change."],
    ["Quels deux marchés de StockPilot ont une limite quotidienne de ±10 % ?", ["Taïwan et l’Arabie saoudite", "Les États-Unis et l’Europe", "Le Japon et Hong Kong"], "Taïwan et l’Arabie saoudite limitent la variation quotidienne à 10 % par rapport à la clôture précédente."],
  ],
  mission: "Détenez des actions de 3 marchés différents ou plus en même temps",
  video: [
    ["Chaque pays a sa propre Bourse, sa monnaie et ses règles.", { mid: "7 marchés", l: "Asie", r: "Europe et Amériques" }],
    ["Quand New York ouvre, Tokyo est déjà fermé, et certains marchés font même une pause déjeuner.", { lines: ["Tokyo : déjeuner 11h30–12h30", "Hong Kong : déjeuner 12h00–13h00", "Arabie saoudite : dimanche–jeudi"] }],
    ["Certains marchés limitent la variation d’un prix sur une journée. D’autres non.", { lines: ["Taïwan, Arabie saoudite : ±10 % par jour", "États-Unis, Europe, Hong Kong : aucune limite"] }],
    ["Les actions étrangères ajoutent un risque de change : une monnaie qui baisse peut effacer votre gain.", { lines: ["Action +10 % en yens", "Yen −10 % face au dollar", "≈ −1 % en dollars"] }],
  ],
} } });

addLanguage("hi", { lessons: { world: {
  title: "दुनिया भर के शेयर बाज़ार", try: "Toyota (7203) देखें",
  body: d => `
    <p>हर देश का अपना स्टॉक एक्सचेंज है, और हर एक थोड़ा अलग तरीके से चलता है। StockPilot में ${d.n} बाज़ार हैं: अमेरिका, ताइवान, जापान, भारत, हांगकांग, यूरोप और सऊदी अरब।</p>
    <ul>
      <li><b>अलग घड़ियाँ।</b> हर बाज़ार अपने टाइम ज़ोन में खुलता है, इसलिए जब न्यूयॉर्क खुलता है, टोक्यो रात के लिए बंद हो चुका होता है। टोक्यो और हांगकांग में <b>लंच ब्रेक</b> भी होता है, और सऊदी अरब <b>रविवार से गुरुवार</b> ट्रेड करता है।</li>
      <li><b>अलग नियम।</b> ताइवान और सऊदी अरब एक दिन में कीमत की चाल सीमित करते हैं (±10%)। अमेरिका, यूरोप और हांगकांग में कोई दैनिक सीमा नहीं, इसलिए कीमतें कहीं ज़्यादा उछल सकती हैं।</li>
      <li><b>अलग पैसा।</b> हर बाज़ार की अपनी मुद्रा है: येन, रुपया, यूरो, रियाल वगैरह। यहाँ आपका नकद अमेरिकी डॉलर में है, इसलिए विदेशी शेयर का मूल्य विनिमय दर के साथ भी बदलता है। इसे <b>मुद्रा जोखिम</b> कहते हैं।</li>
    </ul>
    <p>कई देशों के शेयर रखने से जोखिम बँटता है, क्योंकि सभी अर्थव्यवस्थाएँ एक साथ ऊपर-नीचे नहीं होतीं। लेकिन इससे मुद्रा जोखिम जुड़ता है, इसलिए कई निवेशक ज़्यादातर पैसा अपने देश के बाज़ार में और छोटा हिस्सा विदेश में रखते हैं।</p>
    ${key("हर बाज़ार की अपनी घड़ी, मुद्रा और नियम हैं। देशों में बाँटने से जोखिम बँटता है, पर मुद्रा जोखिम जुड़ता है।")}
    ${live(d.open ? `असली समय में अभी खुले हैं: <b>${d.open}</b>। आपके पास <b>${d.held}</b> बाज़ारों के शेयर हैं।` : `असली समय में अभी सभी ${d.n} बाज़ार बंद हैं। आपके पास <b>${d.held}</b> बाज़ारों के शेयर हैं।`)}`,
  quiz: [
    ["कौन-सा बाज़ार रविवार से गुरुवार ट्रेड करता है?", ["सऊदी अरब", "जापान", "अमेरिका"], "सऊदी एक्सचेंज का हफ़्ता रविवार से गुरुवार चलता है, वहाँ के कामकाजी हफ़्ते की तरह।"],
    ["आप एक जापानी शेयर ख़रीदते हैं। वह येन में 10% बढ़ता है, लेकिन येन डॉलर के मुक़ाबले 10% गिरता है। डॉलर में मोटे तौर पर क्या हुआ?", ["लगभग −1%: लगभग कोई फ़ायदा नहीं", "+10%", "+20%"], "1.10 × 0.90 = 0.99, यानी मुद्रा की गिरावट ने मुनाफ़ा मिटा दिया। यही मुद्रा जोखिम है।"],
    ["StockPilot के किन दो बाज़ारों में ±10% की दैनिक सीमा है?", ["ताइवान और सऊदी अरब", "अमेरिका और यूरोप", "जापान और हांगकांग"], "ताइवान और सऊदी अरब दैनिक चाल को पिछले बंद भाव से 10% तक सीमित रखते हैं।"],
  ],
  mission: "एक साथ 3 या ज़्यादा अलग-अलग बाज़ारों के शेयर रखें",
  video: [
    ["हर देश का अपना स्टॉक एक्सचेंज, मुद्रा और नियम होते हैं।", { mid: "7 बाज़ार", l: "एशिया", r: "यूरोप और अमेरिका" }],
    ["जब न्यूयॉर्क खुलता है, टोक्यो बंद हो चुका होता है, और कुछ बाज़ार लंच के लिए रुकते भी हैं।", { lines: ["टोक्यो: लंच 11:30–12:30", "हांगकांग: लंच 12:00–13:00", "सऊदी अरब: रविवार–गुरुवार"] }],
    ["कुछ बाज़ार एक दिन में कीमत की चाल सीमित करते हैं। कुछ नहीं करते।", { lines: ["ताइवान, सऊदी अरब: रोज़ ±10%", "अमेरिका, यूरोप, हांगकांग: कोई सीमा नहीं"] }],
    ["विदेशी शेयर मुद्रा जोखिम जोड़ते हैं: गिरती मुद्रा आपका मुनाफ़ा खा सकती है।", { lines: ["शेयर येन में +10%", "येन डॉलर के मुक़ाबले −10%", "डॉलर में ≈ −1%"] }],
  ],
} } });

addLanguage("ar", { lessons: { world: {
  title: "أسواق الأسهم حول العالم", try: "شاهد تويوتا (7203)",
  body: d => `
    <p>لكل دولة بورصتها الخاصة، وكل واحدة تعمل بطريقة مختلفة قليلًا. في StockPilot يوجد ${d.n} أسواق: أمريكا وتايوان واليابان والهند وهونغ كونغ وأوروبا والسعودية.</p>
    <ul>
      <li><b>ساعات مختلفة.</b> كل سوق يفتح في منطقته الزمنية، لذا عندما تفتح نيويورك تكون طوكيو قد أغلقت ليلًا. وتتوقف طوكيو وهونغ كونغ أيضًا من أجل <b>استراحة الغداء</b>، وتتداول السعودية من <b>الأحد إلى الخميس</b>.</li>
      <li><b>قواعد مختلفة.</b> تحدّ تايوان والسعودية من تحرك السعر في يوم واحد (±10%). أما أمريكا وأوروبا وهونغ كونغ فلا حد يوميًا فيها، لذا قد تقفز الأسعار أكثر بكثير.</li>
      <li><b>عملات مختلفة.</b> لكل سوق عملته: الين والروبية واليورو والريال وغيرها. نقدك هنا بالدولار الأمريكي، لذا تتحرك قيمة السهم الأجنبي أيضًا مع سعر الصرف. هذا هو <b>خطر العملة</b>.</li>
    </ul>
    <p>امتلاك أسهم من عدة دول يوزع المخاطر، لأن الاقتصادات لا ترتفع وتنخفض معًا. لكنه يضيف خطر العملة، لذا يحتفظ كثير من المستثمرين بمعظم أموالهم في سوقهم المحلية وبجزء أصغر في الخارج.</p>
    ${key("لكل سوق ساعته وعملته وقواعده. التوزيع بين الدول يوزع المخاطر، لكنه يضيف خطر العملة.")}
    ${live(d.open ? `المفتوحة الآن بالوقت الحقيقي: <b>${d.open}</b>. تملك أسهمًا من <b>${d.held}</b> سوق.` : `بالوقت الحقيقي، كل الأسواق الـ ${d.n} مغلقة الآن. تملك أسهمًا من <b>${d.held}</b> سوق.`)}`,
  quiz: [
    ["أي سوق يتداول من الأحد إلى الخميس؟", ["السعودية", "اليابان", "الولايات المتحدة"], "أسبوع السوق المالية السعودية من الأحد إلى الخميس، مثل أسبوع العمل هناك."],
    ["تشتري سهمًا يابانيًا. يرتفع 10% بالين، لكن الين يهبط 10% أمام الدولار. كيف كانت نتيجتك بالدولار تقريبًا؟", ["نحو −1%: لا ربح تقريبًا", "+10%", "+20%"], "1.10 × 0.90 = 0.99، أي أن هبوط العملة محا الربح. هذا هو خطر العملة."],
    ["أي سوقين في StockPilot لديهما حد يومي ±10%؟", ["تايوان والسعودية", "أمريكا وأوروبا", "اليابان وهونغ كونغ"], "تحد تايوان والسعودية التحرك اليومي بـ 10% من سعر الإغلاق السابق."],
  ],
  mission: "امتلك أسهمًا من 3 أسواق مختلفة أو أكثر في الوقت نفسه",
  video: [
    ["لكل دولة بورصتها وعملتها وقواعدها.", { mid: "7 أسواق", l: "آسيا", r: "أوروبا والأمريكتان" }],
    ["عندما تفتح نيويورك تكون طوكيو قد أغلقت، وبعض الأسواق تتوقف حتى للغداء.", { lines: ["طوكيو: غداء 11:30–12:30", "هونغ كونغ: غداء 12:00–13:00", "السعودية: الأحد–الخميس"] }],
    ["بعض الأسواق تحد من تحرك السعر في اليوم، وبعضها لا.", { lines: ["تايوان، السعودية: ±10% يوميًا", "أمريكا، أوروبا، هونغ كونغ: بلا حد"] }],
    ["الأسهم الأجنبية تضيف خطر العملة: العملة الهابطة قد تأكل ربحك.", { lines: ["السهم +10% بالين", "الين −10% أمام الدولار", "≈ −1% بالدولار"] }],
  ],
} } });

addLanguage("bn", { lessons: { world: {
  title: "বিশ্বের শেয়ারবাজার", try: "Toyota (7203) দেখুন",
  body: d => `
    <p>প্রতিটি দেশের নিজস্ব স্টক এক্সচেঞ্জ আছে, আর প্রতিটি একটু আলাদাভাবে চলে। StockPilot-এ ${d.n}টি বাজার আছে: যুক্তরাষ্ট্র, তাইওয়ান, জাপান, ভারত, হংকং, ইউরোপ ও সৌদি আরব।</p>
    <ul>
      <li><b>আলাদা ঘড়ি।</b> প্রতিটি বাজার নিজের টাইম জোনে খোলে, তাই নিউ ইয়র্ক খুললে টোকিও রাতের জন্য বন্ধ হয়ে গেছে। টোকিও ও হংকং-এ <b>দুপুরের বিরতিও</b> হয়, আর সৌদি আরব <b>রবিবার থেকে বৃহস্পতিবার</b> ট্রেড করে।</li>
      <li><b>আলাদা নিয়ম।</b> তাইওয়ান ও সৌদি আরব এক দিনে দামের নড়াচড়া সীমিত রাখে (±10%)। যুক্তরাষ্ট্র, ইউরোপ ও হংকং-এ কোনো দৈনিক সীমা নেই, তাই দাম অনেক বেশি লাফাতে পারে।</li>
      <li><b>আলাদা টাকা।</b> প্রতিটি বাজারের নিজস্ব মুদ্রা: ইয়েন, রুপি, ইউরো, রিয়াল ইত্যাদি। এখানে আপনার নগদ মার্কিন ডলারে, তাই বিদেশি শেয়ারের মূল্য বিনিময় হারের সঙ্গেও বদলায়। একে <b>মুদ্রা ঝুঁকি</b> বলে।</li>
    </ul>
    <p>কয়েকটি দেশের শেয়ার রাখলে ঝুঁকি ছড়িয়ে যায়, কারণ সব অর্থনীতি একসঙ্গে ওঠানামা করে না। তবে এতে মুদ্রা ঝুঁকি যোগ হয়, তাই অনেক বিনিয়োগকারী বেশিরভাগ টাকা নিজের দেশের বাজারে আর ছোট অংশ বিদেশে রাখেন।</p>
    ${key("প্রতিটি বাজারের নিজস্ব ঘড়ি, মুদ্রা ও নিয়ম আছে। দেশে দেশে ছড়ালে ঝুঁকি ছড়ায়, তবে মুদ্রা ঝুঁকি যোগ হয়।")}
    ${live(d.open ? `আসল সময়ে এখন খোলা: <b>${d.open}</b>। আপনার কাছে <b>${d.held}</b>টি বাজারের শেয়ার আছে।` : `আসল সময়ে এখন ${d.n}টি বাজারই বন্ধ। আপনার কাছে <b>${d.held}</b>টি বাজারের শেয়ার আছে।`)}`,
  quiz: [
    ["কোন বাজার রবিবার থেকে বৃহস্পতিবার ট্রেড করে?", ["সৌদি আরব", "জাপান", "যুক্তরাষ্ট্র"], "সৌদি এক্সচেঞ্জের সপ্তাহ রবিবার থেকে বৃহস্পতিবার, সেখানকার কাজের সপ্তাহের মতো।"],
    ["আপনি একটি জাপানি শেয়ার কিনলেন। ইয়েনে এটি 10% বাড়ল, কিন্তু ডলারের বিপরীতে ইয়েন 10% কমল। ডলারে মোটামুটি কী হলো?", ["প্রায় −1%: প্রায় কোনো লাভ নেই", "+10%", "+20%"], "1.10 × 0.90 = 0.99, অর্থাৎ মুদ্রার পতন লাভ মুছে দিয়েছে। এটাই মুদ্রা ঝুঁকি।"],
    ["StockPilot-এর কোন দুটি বাজারে ±10% দৈনিক সীমা আছে?", ["তাইওয়ান ও সৌদি আরব", "যুক্তরাষ্ট্র ও ইউরোপ", "জাপান ও হংকং"], "তাইওয়ান ও সৌদি আরব দৈনিক নড়াচড়া আগের বন্ধ দামের 10%-এ সীমিত রাখে।"],
  ],
  mission: "একসঙ্গে 3টি বা তার বেশি আলাদা বাজারের শেয়ার রাখুন",
  video: [
    ["প্রতিটি দেশের নিজস্ব স্টক এক্সচেঞ্জ, মুদ্রা ও নিয়ম আছে।", { mid: "7টি বাজার", l: "এশিয়া", r: "ইউরোপ ও আমেরিকা" }],
    ["নিউ ইয়র্ক খুললে টোকিও বন্ধ হয়ে গেছে, আর কিছু বাজার দুপুরে বিরতিও নেয়।", { lines: ["টোকিও: বিরতি 11:30–12:30", "হংকং: বিরতি 12:00–13:00", "সৌদি আরব: রবিবার–বৃহস্পতিবার"] }],
    ["কিছু বাজার এক দিনে দামের নড়াচড়া সীমিত রাখে। কিছু রাখে না।", { lines: ["তাইওয়ান, সৌদি আরব: দিনে ±10%", "যুক্তরাষ্ট্র, ইউরোপ, হংকং: কোনো সীমা নেই"] }],
    ["বিদেশি শেয়ারে মুদ্রা ঝুঁকি যোগ হয়: পড়ন্ত মুদ্রা আপনার লাভ খেয়ে ফেলতে পারে।", { lines: ["শেয়ার ইয়েনে +10%", "ডলারের বিপরীতে ইয়েন −10%", "ডলারে ≈ −1%"] }],
  ],
} } });
