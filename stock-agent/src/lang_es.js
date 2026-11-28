/* ============ Español ============ */
I18N.es = {
  "nav.label": "Secciones",
  badge: "Bolsa de práctica — dinero virtual",
  "tab.trade": "Operar", "tab.journal": "Diario", "tab.learn": "Aprender",
  cash: "Efectivo disponible",
  disclaimer: "<strong>Modo práctica:</strong> los precios y las noticias son simulados. Se comportan como un mercado real (tendencias, noticias, movimientos de todo el mercado), pero no son reales y todas las operaciones usan dinero virtual. El coach enseña reglas prácticas comunes; nadie puede predecir los mercados. Es una herramienta educativa, no un consejo financiero.",
  "wl.title": "Lista de seguimiento", "wl.filter": "Filtrar por mercado", "wl.all": "Todos", "wl.us": "EE. UU.", "wl.tw": "Taiwán",
  clock: v => `<b>Día ${v.d} · ${v.time}</b>`,
  stamp: v => `Día ${v.d} · ${v.time}`,
  "stat.30d": "Cambio a 30 días", "stat.high": "Máximo 90 días", "stat.low": "Mínimo 90 días", "stat.vol": "Volatilidad", "stat.own": "Tienes",
  shares: v => `${v.n} acc.`,
  "help.chart": "Aprende a leer gráficos de precios", "help.risk": "Aprende sobre la volatilidad", "help.coach": "Aprende cuándo comprar y vender",
  "help.news": "Aprende cómo las noticias mueven los precios", "help.pnl": "Aprende sobre ganancias y pérdidas", "help.ap": "Aprende sobre el tamaño de las posiciones",
  "coach.title": "🧭 Coach", "coach.sub": "· qué está pasando y qué considerar",
  "coach.h": "Lo que haría un inversor prudente", "coach.signals": "Ver las señales en las que se basa",
  "coach.note": "Son reglas prácticas comunes para practicar. Aquí los precios son en parte aleatorios, así que incluso las buenas reglas a veces pierden.",
  "qty.label": "Número de acciones", "btn.buy": "Comprar", "btn.sell": "Vender",
  "news.title": "📰 Noticias del mercado", "news.sub": "· titulares simulados",
  "pv.label": "Valor de la cartera (US$)", holdings: "Posiciones",
  "ap.title": "🤖 Piloto automático IA", "ap.sub": "· solo dinero virtual", "ap.label": "Dejar que la IA opere por mí",
  "ap.desc": "Cuando está activado, la IA compra sus opciones de \"Compra\" más fuertes (máximo 15% de la cartera cada una, siempre con un 10% en efectivo) y vende las posiciones que califica como \"Venta\". Cada acción se registra abajo y se revisa en el Diario.",
  "hist.title": "Historial de operaciones", reset: "Reiniciar cuenta", "reset.confirm": "Haz clic otra vez para volver a $100.000", "reset.done": "La cuenta volvió a $100.000.",
  "j.title": "Diario de operaciones", "j.filter": "De quién son las operaciones", "j.mine": "Mis operaciones", "j.auto": "Piloto automático", "j.all": "Todas",
  "j.sub": "Cada compra y venta se guarda con lo que podías ver en ese momento y se compara con las reglas de las lecciones. Juzga cada paso por sus razones, no solo por si ganó dinero.",
  "l.sections": "Secciones de aprendizaje", "l.lessons": "Lecciones", "l.vocab": "Vocabulario",
  "l.title": "Lo básico de la bolsa", "l.progress": "Tu progreso", "l.progressAria": "Lecciones completadas",
  "v.search": "Buscar palabras…", "v.cats": "Categorías de palabras",
  footer: "StockPilot AI · simulador para practicar · precios y noticias simulados", "footer.back": "volver a CoachStat",

  "mkt.US": "EE. UU.", "mkt.TW": "Taiwán",
  "limit.up": "LÍMITE ARRIBA", "limit.down": "LÍMITE ABAJO",
  "chg.today": v => `${v.p} hoy`, "chg.last": v => `${v.p} última sesión`,
  "fx.closed": v => `Mercado cerrado · último cierre ${v.pc}`,
  "fx.tw": v => `Bolsa de Taiwán · ≈ ${v.usd} por acción a NT$${v.rate} = US$1 (tipo simulado) · límite de hoy ${v.lo} a ${v.hi}`,
  "fx.us": v => `Cierre anterior ${v.pc}`,
  "chart.legend": "— precio   - - media de 20 días", "chart.today": "hoy", "chart.days": v => `${v.d}d`,
  "chart.aria": v => `Precio de ${v.sym} en los últimos 90 días, con su media de 20 días`,
  "tip.today": "Hoy (en vivo)", "tip.yday": "Cierre de ayer", "tip.ago": v => `hace ${v.d} días`,
  "rec.BUY": "COMPRAR", "rec.SELL": "VENDER", "rec.HOLD": "MANTENER",
  signals: v => `Señales: ${v.rec}`, strength: v => `fuerza de la señal ${v.c}%`,
  "r.trendUp": v => `Tendencia al alza: la media de 20 días (${v.a}) está por encima de la de 50 días (${v.b}).`,
  "r.trendDown": v => `Tendencia a la baja: la media de 20 días (${v.a}) está por debajo de la de 50 días (${v.b}).`,
  "r.momUp": v => `Impulso fuerte: sube ${v.p} en los últimos 30 días.`,
  "r.momDown": v => `Impulso débil: baja ${v.p} en los últimos 30 días.`,
  "r.momFlat": v => `Impulso plano (${v.p} en 30 días).`,
  "r.rsiLow": v => `El RSI es ${v.r}: la acción parece sobrevendida, lo que puede anticipar un rebote.`,
  "r.rsiHigh": v => `El RSI es ${v.r}: la acción parece sobrecomprada y podría retroceder.`,
  "r.rsiMid": v => `El RSI es ${v.r}, en un rango normal.`,
  "r.volHigh": v => `Volatilidad alta (${v.p} al año): oscilaciones más grandes, más riesgo.`,

  "verb.buy": "Compraste", "verb.sell": "Vendiste",
  "msg.nocash": "No tienes suficiente efectivo para esa orden.", "msg.noshares": "No tienes tantas acciones.",
  "msg.done": v => `${v.verb} ${v.n} acciones de ${v.sym} a ${v.px}.`,
  "msg.journal": "Diario:", "msg.why": "Ver por qué",
  hist: v => `${v.ai}<b>${v.verb} ${v.n} ${v.sym}</b> @ ${v.px}`,
  "th.sym": "Símbolo", "th.shares": "Acciones", "th.price": "Precio", "th.pl": "G/P (US$)",
  "hold.empty": "Todavía no tienes posiciones: compra tu primera acción o activa el piloto automático.",
  "pv.delta": v => `${v.arrow} ${v.amt} (${v.p}) en total`,
  "ap.empty": "Aquí aparecerán las acciones del piloto automático.", "hist.empty": "Todavía no hay operaciones.", "news.empty": "Los titulares aparecerán aquí cuando haya noticias.",
  "ap.on": "Piloto automático <b>activado</b>: la IA gestionará ahora esta cartera de práctica.", "ap.off": "Piloto automático <b>desactivado</b>.",
  "ap.sold": v => `Vendió todo <b>${v.sym}</b> — ${v.reason}`,
  "ap.bought": v => `Compró ${v.n} <b>${v.sym}</b> (señal ${v.c}%) — ${v.reason}`,

  "news.pos": ["{n} supera las previsiones de beneficios", "{n} gana un gran contrato nuevo", "Los analistas suben su precio objetivo para {n}", "{n} lanza un producto nuevo muy popular", "{n} eleva su previsión de ventas"],
  "news.neg": ["{n} no alcanza las previsiones de beneficios", "{n} rebaja su previsión de ventas", "Los reguladores abren una investigación a {n}", "{n} pierde un cliente importante", "Los analistas rebajan la recomendación de {n}"],
  "news.secPos": { chips: "Se dispara la demanda de chips de IA", shipping: "Suben las tarifas del transporte marítimo", finance: "Los bancos informan de préstamos sólidos", tech: "Repunta el gasto en tecnología", consumer: "Los consumidores gastan más de lo esperado", telecom: "Crecen las suscripciones de telecomunicaciones" },
  "news.secNeg": { chips: "Se frenan los pedidos de chips", shipping: "Bajan las tarifas del transporte marítimo", finance: "Aumentan los impagos de préstamos", tech: "Las empresas recortan el gasto en tecnología", consumer: "Los consumidores reducen su gasto", telecom: "Se intensifica la guerra de precios en telecomunicaciones" },
  "news.mktPos": { US: ["La Reserva Federal apunta a bajar los tipos de interés", "Un buen informe de empleo impulsa las acciones de EE. UU."], TW: ["Se disparan los pedidos de exportación de Taiwán", "Los inversores extranjeros compran acciones de Taiwán"] },
  "news.mktNeg": { US: ["La inflación de EE. UU. supera lo esperado", "El temor a una desaceleración de EE. UU. golpea a la bolsa"], TW: ["Caen los pedidos de exportación de Taiwán", "Los inversores extranjeros venden acciones de Taiwán"] },
  "news.industry": "Sector:", "news.market": v => `Mercado de ${v.m}:`,
  "news.yday": "Ayer", "news.ago": v => `hace ${v.d} días`,
  "recap.t": v => `Cierre del día ${v.d}`,
  recap: v => `📊 <b>Resumen del día ${v.d}:</b> acciones de EE. UU. ${v.us}, Taiwán ${v.tw} de media. Tu cartera ${v.pd} hoy. Mayor movimiento: <b>${v.sym}</b> ${v.c}.`,

  why: "¿Por qué?",
  "c.trend": v => `${v.name} está en ${v.up ? "tendencia alcista" : "tendencia bajista"}: ${v.pos ? "sube" : "baja"} un ${v.mom}% en 30 días, con la media de 20 días ${v.up ? "por encima" : "por debajo"} de la de 50 días.`,
  "c.rsiHigh": v => ` El RSI es ${v.r}, así que ha subido rápido y puede estar sobrecomprada.`,
  "c.rsiLow": v => ` El RSI es ${v.r}, así que ha bajado rápido y puede estar sobrevendida.`,
  "c.rsiMid": v => ` El RSI es ${v.r}, en un rango normal.`,
  "c.vol": v => ` Sus oscilaciones de precio son ${["pequeñas", "medianas", "grandes"][v.w]} (${v.p}% al año).`,
  "c.limit": v => ` Está en el límite diario ${v.up ? "superior" : "inferior"} de Taiwán, así que hoy no puede ${v.up ? "subir" : "bajar"} más.`,
  "c.news": v => ` Noticia reciente: “${v.h}” (${v.c}).`,
  "a.stop": v => `Pierdes un ${v.p}% en esta acción. Muchos inversores usan un <b>stop-loss</b>: venden si una acción cae un 7–10% por debajo de lo que pagaron, para que una pérdida pequeña no se convierta en una grande.`,
  "a.profit": v => `Ganas un ${v.p}%. Vender una parte te permitiría <b>asegurar algo de beneficio</b> y quedarte con el resto por si sigue subiendo.`,
  "a.big": v => `Esta acción es el ${v.p}% de tu cartera. Es mucho en un solo lugar; reducirla bajaría tu riesgo.`,
  "a.hold": "La tendencia sigue al alza mientras la tienes. <b>Mantenerla</b> y dejar correr a una ganadora es razonable. Ten presente tu stop-loss.",
  "a.exit": "La tendencia ha girado a la baja mientras la tienes. Pregúntate si tu razón para comprar sigue en pie. Si no, <b>vender</b> es razonable.",
  "a.buy": "La tendencia y el RSI apuntan a una <b>compra</b>. Un inversor prudente empezaría con poco (un 5–10% de la cartera) y decidiría de antemano a qué precio vendería si se equivoca.",
  "a.chase": "Ha subido rápido. En lugar de <b>perseguirla</b>, un inversor prudente esperaría un retroceso antes de comprar.",
  "a.knife": "Ha caído mucho y parece sobrevendida. Los rebotes ocurren, pero comprar una acción que se desploma es arriesgado (se dice \"atrapar un cuchillo que cae\"). Es más seguro <b>esperar</b> a que la tendencia gire al alza.",
  "a.wait": "La tendencia es bajista. A la mayoría de principiantes les va mejor <b>esperar</b> a que la tendencia gire al alza antes de comprar.",
  "a.vol": "Esta acción oscila mucho, así que si la operas usa una <b>cantidad menor</b> de lo habitual.",
  "a.news": "No operes solo por un titular: los precios reaccionan en segundos, así que normalmente el movimiento ya ocurrió.",
  "pc.prefix": "Coach:",
  "pc.none": "todavía no has comprado nada. Busca una acción con tendencia alcista, empieza con poco y decide de antemano cuándo venderías.",
  "pc.big": v => `${v.sym} es el ${v.p}% de tu cartera. Si cayera un 20%, toda tu cuenta bajaría alrededor de un ${v.d}%. Piensa en reducirla.`,
  "pc.loser": v => `${v.sym} está un ${v.p}% por debajo de lo que pagaste. Revisa tu plan de stop-loss para ella.`,
  "pc.few": v => `tienes ${v.n} acción${v.n === 1 ? "" : "es"}. Repartir tu dinero en 5 o más reduce el riesgo.`,
  "pc.oneMkt": v => `todas tus acciones están en el mercado de ${v.m}. Añadir algunas del otro mercado reparte el riesgo.`,
  "pc.cash": v => `el ${v.p}% de tu dinero sigue en efectivo. El efectivo es seguro, pero no crece.`,
  "pc.good": v => `tu dinero está repartido en ${v.n} acciones de dos mercados. Mantén cada posición pequeña y respeta tus reglas de venta.`,

  "g.good": "Buen paso", "g.mixed": "Paso mixto", "g.risky": "Paso arriesgado",
  "js.trades": "Operaciones", "js.tradesHint": v => `${v.b} compras · ${v.s} ventas`,
  "js.good": "Buenos pasos", "js.goodHint": "siguieron las reglas",
  "js.mixed": "Pasos mixtos", "js.mixedHint": "algo bueno, algo arriesgado",
  "js.risky": "Pasos arriesgados", "js.riskyHint": "rompieron reglas clave",
  "js.score": "Puntuación de reglas", "js.scoreHint": "de las reglas cumplidas",
  "jh.well": "Lo que haces bien", "jh.work": "Lo que debes mejorar", "jh.title": "Tus hábitos",
  "jh.noWell": "Todavía nada. Sigue la lista de compra y aquí aparecerán tus puntos fuertes.",
  "jh.noWork": "Por ahora no hay errores. ¡Sigue así!",
  "jh.empty": "Tras unas cuantas operaciones, aquí verás lo que haces bien y lo que debes mejorar.",
  "jh.times": v => `(${v.n}×)`, lesson: "Lección", "lesson.named": v => `Lección: ${v.t}`,
  "who.you": "Tú", "who.auto": "🤖 Piloto automático",
  "seen.you": "Lo que podías ver:", "seen.auto": "Lo que podía ver:",
  "seen.trend": v => `tendencia ${v.up ? "al alza" : "a la baja"}`, "seen.rsi": v => `RSI ${v.r}`, "seen.mom": v => `30 días ${v.p}`,
  "seen.day": v => `hoy ${v.p}`, "seen.vol": v => `oscila ${v.p}/año`,
  "seen.posAfter": v => `posición después ${v.p} de la cartera`, "seen.posBefore": v => `posición antes ${v.p} de la cartera`,
  "seen.pl": v => `tu ganancia/pérdida ${v.p}`, "seen.holding": v => `ya la tenías ${v.p}`, "seen.news": v => `noticia “${v.h}”`,
  "o.title": "Qué pasó después:", "o.early": "Todavía es pronto. Vuelve después de una sesión completa.",
  "o.who.you": "tú", "o.who.auto": "el piloto automático",
  "o.buy": v => `Desde la compra, ${v.sym} va ${v.p} (${v.move}): ${v.win ? "una ganancia" : "una pérdida"} de unos ${v.amt} en estas acciones.`,
  "o.sellWin": v => `Desde la venta, ${v.sym} cayó ${v.p} (${v.move}). Vender ahorró unos ${v.amt}.`,
  "o.sellLoss": v => `Desde la venta, ${v.sym} subió ${v.p} (${v.move}). Mantenerla habría dado unos ${v.amt} más.`,
  "vd.gg": "Buen paso, buen resultado: las razones y el resultado coincidieron.",
  "vd.gb": "Buen paso, mala suerte. Sigue las reglas: los buenos pasos a veces también pierden.",
  "vd.bg": "Esta vez hubo suerte. Pasos así pierden más veces de las que ganan, que no te engañe un solo resultado.",
  "vd.bb": "Los riesgos de este paso aparecieron. Usa los consejos de arriba la próxima vez.",
  "j.emptyTitle": v => `Todavía no hay operaciones${v.auto ? " del piloto automático" : ""}.`,
  "j.emptyYou": "Haz tu primera compra en la pestaña Operar. Aparecerá aquí con una revisión de cada regla que cumplió o rompió.",
  "j.emptyAuto": "Activa el piloto automático en la pestaña Operar y sus operaciones se revisarán aquí.",
  "j.go": "Ir a Operar",
  "ck.buy-knife.t": "Intentaste atrapar un cuchillo que cae",
  "ck.buy-knife.w": v => `La tendencia era bajista y el RSI era ${v.r}. Las acciones sobrevendidas pueden seguir cayendo mucho tiempo. La próxima vez, espera a que la tendencia gire al alza.`,
  "ck.buy-downtrend.t": "Compraste con la tendencia a la baja",
  "ck.buy-downtrend.w": "La media de 20 días estaba por debajo de la de 50 días. Las acciones en tendencia bajista suelen seguir cayendo. La próxima vez, espera a que la media de 20 días vuelva a superar la de 50.",
  "ck.buy-uptrend.t": "Compraste con tendencia alcista",
  "ck.buy-uptrend.w": "La media de 20 días estaba por encima de la de 50 días, así que fuiste a favor de la tendencia.",
  "ck.buy-chase.t": v => `Perseguiste una acción que ya había subido mucho (RSI ${v.r})`,
  "ck.buy-chase.w": "Tras una subida rápida, los precios suelen retroceder. La próxima vez, espera a que el RSI baje de 70 para conseguir mejor precio.",
  "ck.buy-nochase.t": v => `No la perseguiste (RSI ${v.r})`,
  "ck.buy-nochase.w": "El RSI estaba en un rango normal, así que no compraste en lo alto de un pico repentino.",
  "ck.buy-avgdown.t": "Compraste más de una acción que cae",
  "ck.buy-avgdown.w": v => `Ya perdías un ${v.p} en ella. Añadir a una perdedora para \"recuperar\" puede convertir una pérdida pequeña en una grande.`,
  "ck.buy-big.t": v => `Pusiste el ${v.p} de tu cartera en una sola acción`,
  "ck.buy-big.w": v => `Si cayera un 20%, toda tu cuenta perdería alrededor de un ${v.d}%. La próxima vez, mantén cada acción por debajo del 10%.`,
  "ck.buy-large.t": v => `Posición bastante grande (${v.p} de tu cartera)`,
  "ck.buy-large.w": "Por encima del 10%, tu cuenta empieza a depender mucho de una sola empresa.",
  "ck.buy-small.t": v => `Mantuviste la posición pequeña (${v.p} de tu cartera)`,
  "ck.buy-small.w": "Con posiciones pequeñas, una mala acción no puede hundir tu cuenta.",
  "ck.buy-nocash.t": v => `Te quedaste casi sin efectivo (${v.p})`,
  "ck.buy-nocash.w": "Sin efectivo no tienes colchón y no puedes actuar cuando surge una oportunidad mejor.",
  "ck.buy-news.t": "Compraste justo después de una buena noticia",
  "ck.buy-news.w": v => `“${v.h}” acababa de salir. Los precios saltan segundos después de un titular, así que comprar después suele ser comprar en lo alto del salto.`,
  "ck.buy-jumpy.t": "Gran apuesta en una acción muy volátil",
  "ck.buy-jumpy.w": v => `Oscila alrededor de un ${v.p} al año. Usa una cantidad menor con acciones tan volátiles.`,
  "ck.sell-stoploss.t": v => `Cortaste una posición perdedora (pierde ${v.p})`,
  "ck.sell-stoploss.w": "Vender una perdedora evita que se convierta en una pérdida mayor. Para eso sirve un stop-loss.",
  "ck.sell-late.t": "Esperaste mucho para vender",
  "ck.sell-late.w": "Un stop-loss un 8% por debajo del precio de compra habría limitado el daño. La próxima vez, decide tu precio de salida antes de comprar.",
  "ck.sell-profit.t": v => `Aseguraste una gran ganancia (gana ${v.p})`,
  "ck.sell-profit.w": "Recoger beneficios tras una gran subida convierte una ganancia en papel en dinero real.",
  "ck.sell-trend.t": "Vendiste cuando la tendencia giró a la baja",
  "ck.sell-trend.w": "La media de 20 días había caído por debajo de la de 50, una señal común para salir.",
  "ck.sell-trim.t": "Redujiste una posición demasiado grande",
  "ck.sell-trim.w": v => `Esa acción era el ${v.p} de tu cartera. Reducirla baja tu riesgo.`,
  "ck.sell-strength.t": v => `Vendiste en un momento de fuerza (RSI ${v.r})`,
  "ck.sell-strength.w": "Vender tras una subida rápida suele dar un buen precio antes de un retroceso.",
  "ck.sell-panic.t": "Vendiste tras un mal día con la tendencia aún al alza",
  "ck.sell-panic.w": v => `Bajaba un ${v.p} hoy, pero la tendencia de fondo era alcista. Un mal día suele ser ruido, y vender por pánico fija la caída.`,
  "ck.sell-early.t": "Vendiste una ganadora demasiado pronto",
  "ck.sell-early.w": "La tendencia seguía al alza y nada había ido mal. Dejar correr a las ganadoras es como se acumulan las ganancias. Vender pronto las ganadoras y quedarse con las perdedoras es un error común.",
  "ck.sell-news.t": "Vendiste justo después de una mala noticia",
  "ck.sell-news.w": v => `“${v.h}” acababa de salir. Los precios caen segundos después de un titular, así que vender después suele ser vender cerca del mínimo. Pregúntate si la noticia cambia de verdad la historia de la empresa.`,
  "ck.sell-noreason.t": "Sin una razón clara para esta venta",
  "ck.sell-noreason.w": "Antes de vender, di tu razón: se alcanzó el stop-loss, la tendencia giró a la baja, la posición es demasiado grande o quieres recoger beneficios.",

  "l.of": v => `${v.a} de ${v.b}`, "l.lessonN": v => `Lección ${v.i} de ${v.n}`, "l.completed": " · completada",
  "l.done": " (completada)", "l.live": "En el simulador ahora mismo", "l.key": "Idea clave:",
  "l.check": "Comprobación rápida", "l.next": "Siguiente lección", "l.correct": "¡Correcto!", "l.wrong": "No exactamente.",
  "l.wrongMsg": "Vuelve a mirar la lección e inténtalo otra vez.",
  "l.allDone": v => `<b>Has terminado las ${v.n} lecciones.</b> Pruébalas en la práctica en la pestaña Operar.`,
  "v.count": v => `${v.n} palabra${v.n === 1 ? "" : "s"}`, "v.all": "Todas", "v.ex": "Ejemplo:", "v.none": "Ninguna palabra coincide con tu búsqueda.",
  "cat.basics": "Básico", "cat.trading": "Operar", "cat.analysis": "Análisis", "cat.risk": "Riesgo", "cat.economy": "Economía",

  "chart.zoom": "Ampliar gráfico", "chart.close": "Cerrar", "chart.rangeAria": "Periodo del gráfico",
  "range.1m": "1M", "range.3m": "3M", "range.6m": "6M", "range.all": "Todo",
  "chart.legendBig": "— precio   - - media de 20 días   ··· media de 50 días",
  "chart.markers": "▲ tus compras   ▼ tus ventas",
  "chart.dialog": v => `Gráfico de precio de ${v.sym}`,
  "cm.change": "Cambio", "cm.high": "Máximo", "cm.low": "Mínimo", "cm.ma20": "Media 20 días", "cm.ma50": "Media 50 días",
  "cm.hint": "Pasa el cursor por el gráfico para ver el precio de cualquier día. Los triángulos marcan tus operaciones en esta acción.",
  "zone.aria": "Zona de práctica", "zone.practice": "Zona de práctica", "zone.real": "Zona de horario real",
  "mode.realHint": "Zona de horario real: cada mercado solo se mueve durante su horario real (con los principales festivos de EE. UU., Europa y Japón). Los precios siguen siendo simulados. Esta zona tiene su propia cuenta de $100.000 y su diario.",
  "mode.fastHint": "Zona de práctica: los precios se mueven todo el tiempo y cada sesión dura alrededor de 1 minuto. Esta zona tiene su propia cuenta de $100.000 y su diario.",
  "tz.TW": "hora de Taipéi", "tz.US": "hora de Nueva York",
  "ms.open": v => `${v.flag} ${v.m}: <b class="pos">abierto</b> · cierra a las ${v.close} ${v.tz}${v.local}`,
  "ms.closed": v => `${v.flag} ${v.m}: <b>cerrado</b> · abre ${v.when} ${v.tz}${v.local}`,
  "ms.local": v => ` (tu hora: ${v.t})`,
  "ms.closedTrade": v => `El mercado de ${v.m} está cerrado ahora. Abre ${v.hours}. Para operar en cualquier momento, cambia a la zona de práctica.`,
  "hours.TW": "de lunes a viernes, 9:00–13:30 hora de Taipéi", "hours.US": "de lunes a viernes, 9:30–16:00 hora de Nueva York",
  "recap.mkt": v => `📊 <b>Cierre del mercado de ${v.m}:</b> media ${v.avg}. Mayor movimiento: <b>${v.sym}</b> ${v.c}.`,
  "u.1": "Unidad 1 · Lo básico", "u.2": "Unidad 2 · Leer el mercado", "u.3": "Unidad 3 · Riesgo y mentalidad",
  "u.4": "Unidad 4 · Invertir a largo plazo", "u.5": "Unidad 5 · El mundo y tu plan",
  "vid.watch": v => `Ver el vídeo (${v.s} s)`, "vid.replay": "Ver otra vez", "vid.play": "Reproducir", "vid.pause": "Pausa",
  "vid.prev": "Escena anterior", "vid.next": "Escena siguiente", "vid.sound": "Narración activada", "vid.mute": "Narración desactivada",
  "lvl.1": "Novato", "lvl.2": "Aprendiz", "lvl.3": "Lector de gráficos", "lvl.4": "Cazador de tendencias", "lvl.5": "Gestor de riesgos",
  "lvl.6": "Estratega", "lvl.7": "Profesional del mercado", "lvl.8": "Maestro del mercado",
  "xp.of": v => `${v.a} / ${v.b} XP`, "xp.max": v => `${v.a} XP · nivel máximo`, "xp.streak": v => `🔥 racha de ${v.n} días`,
  "xp.first": "Correcto al primer intento", "xp.correct": "Respuesta correcta", "xp.lesson": "Lección completada", "xp.video": "Vídeo visto",
  "xp.mission": v => `Misión cumplida: ${v.m}`, "lv.up": v => `🎉 ¡Subes de nivel! Nv ${v.n} · ${v.name}`, "badge.got": v => `Nueva insignia: ${v.name}`,
  "b.title": v => `Insignias ${v.a}/${v.b}`, "b.locked": "(bloqueada)",
  "b.first.n": "Primera lección", "b.first.d": "Termina tu primera lección",
  "b.perfect.n": "Test perfecto", "b.perfect.d": "Acierta las 3 preguntas de una lección al primer intento",
  "b.video5.n": "Cinéfilo", "b.video5.d": "Mira 5 vídeos de lecciones",
  "b.unit.n": "Maestro de unidad", "b.unit.d": "Termina todas las lecciones de una unidad",
  "b.mission5.n": "Cazamisiones", "b.mission5.d": "Completa 5 misiones",
  "b.streak3.n": "En racha", "b.streak3.d": "Aprende 3 días seguidos",
  "b.vocab.n": "Mago de las palabras", "b.vocab.d": "Acierta 10 tarjetas",
  "b.all.n": "Graduado", "b.all.d": "Termina las 20 lecciones",
  "m.title": "Misión", "m.done": "Hecho ✓", "m.go": "Ir a hacerlo",
  "q.n": v => `Pregunta ${v.i} de ${v.n}`,
  "fc.open": "🃏 Juego de tarjetas", "fc.back": "Volver a la lista de palabras", "fc.show": "Ver la respuesta", "fc.knew": "Lo sabía ✓", "fc.not": "Todavía no ✗",
  "fc.score": v => `Sabidas ${v.k} · Vistas ${v.s}`, "fc.prompt": "¿Sabes qué significa esto?",
  "punct.stop": ".", "marker.buy": v => `Compraste ${v.n} @ ${v.px}`, "marker.sell": v => `Vendiste ${v.n} @ ${v.px}`,
};

addLanguage("es", {
  lessons: {
    basics: {
      title: "¿Qué es una acción?", try: "Explorar la lista",
      body: d => `
        <p>Una empresa pertenece a sus <b>accionistas</b>. Una <b>acción</b> es una pequeña parte de esa propiedad. Apple tiene unos 15.000 millones de acciones, así que tener una significa ser dueño de una parte diminuta de Apple.</p>
        <p>Las empresas venden acciones primero para conseguir dinero. Después, la gente compra y vende acciones entre sí en una <b>bolsa de valores</b>, como el Nasdaq y la Bolsa de Nueva York en EE. UU., o la Bolsa de Taiwán.</p>
        <p>El precio cambia todo el día porque compradores y vendedores acuerdan precios nuevos sin parar. Cuando más gente quiere comprar que vender, el precio sube. Cuando más gente quiere vender, baja.</p>
        ${key("el precio de una acción es lo que compradores y vendedores acuerdan que vale ahora esa parte de la empresa.")}
        ${live(`La lista tiene <b>${d.n} acciones</b> de ${d.mk} mercados, entre ellas ${d.us} de EE. UU. y ${d.tw} de Taiwán. Cada una tiene un código corto llamado <b>ticker</b>: AAPL es Apple y 2330 es TSMC.`)}`,
      quiz: [
        ["¿Qué significa tener una acción de una empresa?", ["Eres dueño de una pequeña parte de la empresa", "Le prestaste dinero a la empresa y te lo devuelve con intereses", "Trabajas para la empresa"], "Una acción es una parte de la propiedad. Prestar dinero a una empresa se llama bono, que es otro tipo de inversión."],
        ["¿Dónde compra y vende acciones la gente entre sí?", ["En una bolsa de valores", "Solo en la oficina de la empresa", "En la cámara acorazada de un banco"], "Las bolsas como el Nasdaq o la Bolsa de Taiwán ponen en contacto a compradores y vendedores."],
        ["Más gente quiere comprar una acción que venderla. ¿Qué suele pasar con el precio?", ["Sube", "Baja", "Se queda exactamente igual"], "Cuando hay más compradores que vendedores, empujan el precio hacia arriba."],
      ],
      mission: "Abre 3 acciones distintas de la lista",
      video: [
        ["Una empresa puede dividirse en millones de pequeñas partes llamadas acciones."],
        ["Si tienes una acción, eres dueño de un pequeño trozo de la empresa.", { you: "Tu parte" }],
        ["Cuando más gente quiere comprar que vender, el precio sube.", { l: "Compradores", r: "Vendedores", arrow: "Precio" }],
        ["Cuando más gente quiere vender, el precio baja.", { l: "Compradores", r: "Vendedores", arrow: "Precio" }],
      ],
    },
    buysell: {
      title: "Comprar y vender acciones", try: "Comprar 1 acción",
      body: d => `
        <p>Para comprar, eliges una acción y cuántas quieres. El coste es el número de acciones por el precio.</p>
        <p>Ganas dinero si luego vendes por <b>más</b> de lo que pagaste, y pierdes si vendes por <b>menos</b>. Hasta que vendes, cualquier ganancia o pérdida es solo sobre el papel y todavía puede cambiar.</p>
        ${key("coste = acciones × precio. Beneficio = (precio de venta − precio de compra) × acciones.")}
        ${live(`${d.s} cuesta <b>${d.p}</b> por acción, así que 10 acciones costarían <b>${d.p10}</b>.${d.usd10 ? ` Eso son unos <b>${d.usd10}</b> en dólares.` : ""}`)}`,
      quiz: [
        ["Compras 5 acciones a $100 cada una y luego las vendes a $120. ¿Cuánto ganas?", ["$20", "$100", "$600"], "Cada acción ganó $20 y tenías 5: (120 − 100) × 5 = $100. Los $600 son el total que recibes al vender."],
        ["Compras 20 acciones a $10 cada una. ¿Cuánto pagas?", ["$200", "$30", "$2"], "20 × $10 = $200."],
        ["Compraste a $50, ahora el precio es $45 y no has vendido. ¿Qué es cierto?", ["Tienes una pérdida sobre el papel que todavía puede cambiar", "El dinero se ha perdido para siempre", "Has ganado dinero"], "Hasta que vendes, la ganancia o pérdida es solo sobre el papel."],
      ],
      mission: "Compra cualquier acción",
      video: [
        ["Comprar una acción es como ir de compras: eliges qué quieres y cuántas."],
        ["El coste es el número de acciones por el precio.", { lines: ["10 acciones × $50", "= $500"] }],
        ["Si vendes por más de lo que pagaste, ganas dinero.", { tag: "Vendí más caro → gano" }],
        ["Si vendes por menos, pierdes dinero. Hasta que vendes, es solo sobre el papel.", { tag: "Vendí más barato → pierdo" }],
      ],
    },
    pnl: {
      title: "Ganancias, pérdidas y valor de la cartera", try: "Ver tus posiciones",
      body: d => `
        <p>Tu <b>cartera</b> es todo lo que hay en tu cuenta: tu efectivo más todas las acciones que tienes.</p>
        <p><b>G/P</b> significa ganancias y pérdidas. La tabla de posiciones compara el valor actual de cada acción con tu <b>coste medio</b>, que es lo que pagaste de media por acción en todas tus compras.</p>
        <ul>
          <li>La G/P <b>no realizada</b> es la ganancia o pérdida de acciones que aún tienes. Cambia cada vez que se mueve el precio.</li>
          <li>La G/P <b>realizada</b> queda fijada cuando vendes.</li>
        </ul>
        ${key("valor de la cartera = efectivo + valor actual de cada acción que tienes.")}
        ${live(`Tienes <b>${d.cash}</b> en efectivo y <b>${d.mv}</b> en ${d.n} acción${d.n === 1 ? "" : "es"}, en total <b>${d.total}</b>. Eso es ${B(d.up ? "pos" : "neg", `${d.up ? "+" : "−"}${d.amt}`)} respecto a los $100.000 con los que empezaste.`)}`,
      quiz: [
        ["Compras el mismo número de acciones dos veces: una a $50 y otra a $70. ¿Cuál es tu coste medio por acción?", ["$50", "$60", "$70"], "Cantidades iguales a $50 y $70 dan una media de $60 por acción."],
        ["Tienes $30.000 en efectivo y acciones por valor de $70.000. ¿Cuánto vale tu cartera?", ["$100.000", "$70.000", "$40.000"], "Efectivo más acciones: $30.000 + $70.000 = $100.000."],
        ["¿Qué ganancia ya está asegurada?", ["La ganancia realizada, después de vender", "La ganancia no realizada, mientras tienes la acción", "Ninguna"], "Cuando vendes, la ganancia queda realizada y ya no puede cambiar."],
      ],
      mission: "Vende una acción que tengas",
      video: [
        ["Tu cartera es tu efectivo más el valor de todas tus acciones.", { lines: ["Efectivo $60.000", "+ Acciones $40.000", "= Cartera $100.000"] }],
        ["Tu coste medio es lo que pagaste de media por acción.", { lines: ["Compra 1 @ $50", "Compra 1 @ $70", "Coste medio = $60"] }],
        ["Mientras tengas la acción, tu ganancia o pérdida no está realizada: cambia con el precio.", { tag: "No realizada" }],
        ["Cuando vendes, la ganancia o pérdida queda realizada y fijada.", { text: "Realizada" }],
      ],
    },
    orders: {
      title: "Tipos de órdenes: de mercado, limitada y stop", try: "Ir a Operar",
      body: d => `
        <p>Una <b>orden</b> es tu instrucción para comprar o vender. El tipo de orden decide <i>cuándo</i> ocurre y <i>a qué precio</i>.</p>
        <ul>
          <li><b>Orden de mercado:</b> compra o vende ahora mismo al precio actual. Es rápida, pero el precio puede moverse un poco antes de ejecutarse.</li>
          <li><b>Orden limitada:</b> solo compra a tu precio o más barato, o solo vende a tu precio o más caro. Tú controlas el precio, pero puede que nunca se ejecute.</li>
          <li><b>Orden stop:</b> se convierte en orden de mercado cuando el precio llega al nivel que fijaste. Un <b>stop-loss</b> es una orden stop que vende para limitar una pérdida.</li>
        </ul>
        <p>Tampoco tienes que venderlo todo de una vez. Vender <b>parte</b> de una posición es una forma común de asegurar algo de beneficio o reducir el riesgo.</p>
        ${key("mercado = ahora, limitada = tu precio, stop = una salida automática.")}
        ${live(`En StockPilot puedes usar las tres: elige Mercado, Limitada o Stop-loss encima de los botones Comprar y Vender. ${d.s} está a <b>${d.p}</b> ahora, así que una orden de mercado de 10 acciones costaría unos <b>${d.p10}</b>.`)}`,
      quiz: [
        ["Quieres comprar una acción, pero solo si baja a $95. Ahora está a $100. ¿Qué orden encaja?", ["Una orden limitada a $95", "Una orden de mercado", "Una orden stop a $105"], "Una orden limitada a $95 solo se ejecuta a $95 o menos."],
        ["¿Cuál es el principal riesgo de una orden limitada?", ["Que nunca se ejecute si el precio no llega a tu límite", "Que siempre se ejecute a peor precio", "Que solo sirva para acciones de Taiwán"], "Tú controlas el precio, pero si la acción nunca llega, no pasa nada."],
        ["Tienes 100 acciones que han subido mucho. ¿Qué te permite asegurar algo de beneficio y quedarte con algunas?", ["Vender parte de la posición, por ejemplo 50 acciones", "No vender nunca nada", "Comprar 100 más"], "Vender una parte asegura algo de ganancia y te quedas con el resto por si sigue subiendo."],
      ],
      mission: "Vende parte de una posición y quédate con algunas acciones",
      video: [
        ["Toda operación empieza con una orden: tu instrucción para comprar o vender."],
        ["Una orden limitada espera tu precio. Aquí solo se ejecuta cuando el precio baja hasta la línea discontinua.", { limit: "Límite $95", done: "Ejecutada ✓" }],
        ["Las órdenes de mercado se ejecutan ya, las limitadas esperan tu precio y las stop son una salida automática.", { lines: ["De mercado → ahora", "Limitada → tu precio", "Stop → salida automática"] }],
        ["También puedes vender parte de una posición: aseguras algo de beneficio y te quedas el resto.", { lines: ["Tienes 100 acciones", "Vendes 50 → aseguras beneficio", "Te quedas 50 → sigues en juego"] }],
      ],
    },
    chart: {
      title: "Leer un gráfico de precios", try: "Pasar el cursor por el gráfico",
      body: d => `
        <p>El gráfico de la pestaña Operar muestra el precio de las últimas 90 sesiones. La izquierda es lo más antiguo y el punto del borde derecho es el precio actual.</p>
        <p>Mira la dirección durante semanas, no días sueltos. Una línea que sube de izquierda a derecha es una <b>tendencia alcista</b>. Una que baja es una <b>tendencia bajista</b>. Los precios se mueven cada día, así que un mal día por sí solo dice muy poco.</p>
        <p>El <b>máximo y mínimo de 90 días</b> muestran el rango en el que se ha movido el precio. Un precio cerca del máximo ha estado subiendo; uno cerca del mínimo, bajando.</p>
        ${key("aleja la vista. La tendencia de varias semanas importa más que el movimiento de hoy.")}
        ${live(`${d.s} va ${B(d.pos ? "pos" : "neg", d.c30)} en 30 días. Su rango de 90 días va de ${d.lo} a ${d.hi}, y hoy está al <b>${d.where}%</b> del camino desde el mínimo.`)}`,
      quiz: [
        ["Una acción ha caído un 2% hoy, pero ha subido un 15% en los últimos tres meses. ¿Cuál es la imagen general?", ["Está en tendencia alcista y hoy es una pequeña bajada", "Se está hundiendo y hay que venderla ya", "Los gráficos no dicen nada"], "Una bajada del 2% dentro de una subida del 15% es ruido normal. La tendencia de fondo sigue siendo alcista."],
        ["En un gráfico de precios, ¿dónde está hoy?", ["En el borde derecho", "En el borde izquierdo", "En el centro"], "Los gráficos se leen de izquierda (pasado) a derecha (ahora)."],
        ["¿Qué muestra una línea que sube de izquierda a derecha durante meses?", ["Una tendencia alcista", "Una tendencia bajista", "Un dividendo"], "Subir durante semanas y meses es una tendencia alcista."],
      ],
      mission: "Abre el gráfico ampliado",
      video: [
        ["Un gráfico muestra cómo se movió el precio. La izquierda es el pasado; el borde derecho es hoy.", { tag: "Hoy" }],
        ["Mira la dirección durante semanas: subir de izquierda a derecha es una tendencia alcista.", { tag: "Alcista ↗" }],
        ["Bajar es una tendencia bajista.", { tag: "Bajista ↘" }],
        ["Un mal día dentro de una subida larga suele ser solo ruido. ¡Aleja la vista!", { tag: "Solo un mal día" }],
      ],
    },
    news: {
      title: "Cómo las noticias mueven los precios", try: "Leer las noticias del mercado",
      body: d => `
        <p>Los precios se mueven más cuando hay noticias. Hay tres tipos principales:</p>
        <ul>
          <li><b>Noticias de una empresa</b>, como resultados, productos nuevos o demandas. Mueven una acción, a veces mucho en un solo día.</li>
          <li><b>Noticias de un sector</b>: afectan juntas a empresas parecidas. Cuando se dispara la demanda de chips de IA, NVIDIA, TSMC y MediaTek suelen subir a la vez.</li>
          <li><b>Noticias de todo el mercado</b>, como tipos de interés, inflación o la economía. Mueven casi todas las acciones a la vez.</li>
        </ul>
        <p>Los precios reaccionan en segundos, así que cuando lees un titular normalmente el movimiento ya ha ocurrido. Comprar <i>por</i> un titular que acabas de ver es un error típico de principiante.</p>
        ${key("las noticias mueven los precios rápido. Cuando te enteras, normalmente ya están en el precio.")}
        ${live(`${d.latest ? `Último titular: <b>${d.latest}</b> (${d.chg}). ` : ""}Ahora mismo <b>${d.ups} de ${d.n}</b> acciones suben hoy. Mira la tarjeta de noticias en la pestaña Operar para ver cómo los titulares mueven los precios.`)}`,
      quiz: [
        ["El banco central sube los tipos de interés por sorpresa. ¿Qué suele pasar?", ["La mayoría de las acciones se mueven a la vez, a menudo a la baja", "Solo se mueven las acciones de bancos", "Nada; a las acciones no les afectan los tipos"], "Los tipos de interés afectan a toda la economía, así que una noticia así mueve casi todas las acciones. Unos tipos más altos suelen empujar los precios a la baja."],
        ["Se dispara la demanda de chips de IA. ¿Qué acciones probablemente se moverán juntas?", ["Fabricantes de chips como NVIDIA, TSMC y MediaTek", "Solo los bancos", "Solo las telecos"], "Las noticias de un sector mueven juntas a empresas parecidas."],
        ["Una acción subió un 5% hace un minuto por una buena noticia. ¿Cuál es el principal riesgo de comprar ahora?", ["Que la noticia ya esté en el precio", "No hay ningún riesgo", "Las noticias nunca mueven los precios"], "Los precios reaccionan en segundos, así que quien compra tarde suele comprar en lo alto del salto."],
      ],
      mission: "Toca el botón de una acción en las noticias del mercado",
      video: [
        ["Las noticias mueven los precios, a veces mucho en un solo día.", { h: "Se dispara la demanda de chips de IA" }],
        ["Hay tres tipos de noticias y cada uno mueve a un grupo distinto de acciones.", { items: ["Empresa → una acción", "Sector → empresas parecidas", "Mercado → casi todo"] }],
        ["Los precios reaccionan en segundos. Cuando lees el titular, normalmente el movimiento ya ocurrió.", { tag: "¡Ya se movió!" }],
        ["Así que no compres solo por un titular que acabas de ver.", { text: "No persigas titulares" }],
      ],
    },
    ma: {
      title: "Tendencias y medias móviles", try: "Ver la tendencia en el gráfico",
      body: d => `
        <p>Una <b>media móvil</b> es el precio medio de cierre de los últimos días. Suaviza los vaivenes diarios para que la tendencia se vea mejor. La línea discontinua del gráfico es la media de 20 días.</p>
        <ul>
          <li>La <b>media de 20 días</b> muestra la tendencia reciente.</li>
          <li>La <b>media de 50 días</b> muestra la tendencia más larga.</li>
        </ul>
        <p>Cuando la media de 20 días está por encima de la de 50, los precios recientes son más altos que los anteriores, lo que sugiere una tendencia alcista. Cuando está por debajo, sugiere una bajista. En los mercados reales las tendencias suelen durar semanas, por eso los inversores las vigilan.</p>
        ${key("20 días por encima de 50 sugiere una tendencia alcista hasta ahora. No promete lo que vendrá.")}
        ${live(`En ${d.s}, la media de 20 días es <b>${d.a}</b> y la de 50 días es <b>${d.b}</b>, así que la tendencia parece ${B(d.up ? "pos" : "neg", d.up ? "alcista" : "bajista")}.`)}`,
      quiz: [
        ["La media de 20 días de una acción es $105 y la de 50 días es $98. ¿Qué sugiere?", ["Los precios recientes son más altos: tendencia alcista", "Los precios recientes son más bajos: tendencia bajista", "Que la acción seguirá subiendo seguro"], "La media reciente es más alta que la larga, así que la tendencia ha sido alcista. Describe el pasado, no es una garantía."],
        ["¿Para qué sirve una media móvil?", ["Suaviza los vaivenes diarios para ver mejor la tendencia", "Predice exactamente el precio de mañana", "Muestra el beneficio de la empresa"], "Promedia los precios recientes para que la tendencia sea más clara."],
        ["La media de 20 días acaba de caer por debajo de la de 50. ¿Qué sugiere?", ["Que la tendencia puede estar girando a la baja", "Que la acción subirá mañana seguro", "Nada"], "Los precios recientes ya son más bajos que los anteriores, señal de que la tendencia puede estar debilitándose."],
      ],
      mission: "Compra una acción que esté en tendencia alcista",
      video: [
        ["Una media móvil es el precio medio de los últimos días. Suaviza los vaivenes.", { tag: "Media de 20 días" }],
        ["Cuando la media de 20 días está por encima de la de 50, la tendencia ha sido alcista.", { tag: "20 > 50 ↗" }],
        ["Cuando está por debajo, la tendencia ha sido bajista.", { tag: "20 < 50 ↘" }],
        ["Describe el pasado. Es una pista, no una promesa.", { text: "Pista, no promesa" }],
      ],
    },
    rsi: {
      title: "Impulso y RSI", try: "Abrir las señales del coach",
      body: d => `
        <p>El <b>impulso</b> es la fuerza con la que se ha movido un precio recientemente. El coach mira el cambio de los últimos 30 días.</p>
        <p>El <b>RSI</b> (índice de fuerza relativa) compara el tamaño de los días de subida y de bajada recientes durante 14 días y lo convierte en un número de 0 a 100.</p>
        <ul>
          <li><b>Por encima de 70:</b> el precio ha subido rápido y puede estar <b>sobrecomprado</b>, así que podría retroceder.</li>
          <li><b>Por debajo de 30:</b> el precio ha bajado rápido y puede estar <b>sobrevendido</b>, así que podría rebotar.</li>
          <li><b>Entre 30 y 70:</b> neutral.</li>
        </ul>
        <p>Son avisos, no reglas. Una acción fuerte puede seguir sobrecomprada durante meses.</p>
        ${key("el RSI te dice lo rápido que se ha movido un precio, no hacia dónde irá.")}
        ${live(`${d.s} tiene un RSI de <b>${d.r}</b> (${["sobrevendida", "neutral", "sobrecomprada"][d.zone]}) y un impulso de ${B(d.pos ? "pos" : "neg", d.mom)} en 30 días.`)}`,
      quiz: [
        ["El RSI de una acción es 82. ¿Qué suele significar?", ["Ha subido rápido y puede estar sobrecomprada", "Está barata y tiene que subir", "La empresa está perdiendo dinero"], "Un RSI por encima de 70 significa que las subidas recientes han sido muy fuertes. No dice nada del beneficio de la empresa."],
        ["El RSI de una acción es 25. ¿En qué zona está?", ["Sobrevendida", "Sobrecomprada", "Neutral"], "Por debajo de 30 es la zona de sobreventa."],
        ["¿Un RSI de 80 significa que el precio tiene que caer mañana?", ["No, es un aviso, no una regla", "Sí, siempre", "Solo los lunes"], "Las acciones fuertes pueden seguir sobrecompradas mucho tiempo."],
      ],
      mission: "Compra una acción sin perseguirla (RSI por debajo de 70)",
      video: [
        ["El RSI es una puntuación de 0 a 100 que muestra lo rápido que se ha movido un precio.", { zone: "Neutral" }],
        ["Por encima de 70, el precio ha subido rápido y puede estar sobrecomprado.", { zone: "Sobrecomprada" }],
        ["Por debajo de 30, ha bajado rápido y puede estar sobrevendido.", { zone: "Sobrevendida" }],
        ["Son avisos, no reglas: las acciones fuertes pueden seguir sobrecompradas mucho tiempo.", { tag: "RSI 85… y sigue subiendo" }],
      ],
    },
    risk: {
      title: "Riesgo y volatilidad", try: "Ver la acción más volátil",
      body: d => `
        <p>La <b>volatilidad</b> mide cuánto oscila un precio arriba y abajo. Esta app la muestra como porcentaje anual. Un número más alto significa oscilaciones más grandes.</p>
        <p>Las oscilaciones grandes funcionan en los dos sentidos: posibles ganancias mayores y posibles pérdidas mayores. Una buena pregunta antes de comprar es: <i>si cayera un 30%, ¿podría mantener la calma y no vender por pánico?</i></p>
        ${key("más volatilidad significa un viaje más movido, en las dos direcciones.")}
        ${live(`La acción más volátil ahora mismo es <b>${d.hi}</b>, con un ${d.hiV} al año. La más tranquila es <b>${d.lo}</b>, con un ${d.loV}.`)}`,
      quiz: [
        ["La acción A tiene un 12% de volatilidad y la B un 45%. ¿Cuál suele oscilar más?", ["La acción B", "La acción A", "Oscilan más o menos igual"], "Un 45% de volatilidad significa movimientos típicos mucho mayores que un 12%."],
        ["¿Por qué usar una cantidad menor con una acción muy volátil?", ["Para que una gran caída no dañe demasiado toda tu cuenta", "Porque las acciones volátiles siempre son malas", "Para pagar menos comisiones"], "Las posiciones pequeñas evitan que las grandes oscilaciones dañen toda tu cartera."],
        ["¿Qué suele oscilar más: una gran teleco o una joven empresa de coches eléctricos?", ["La joven empresa de coches eléctricos", "La gran teleco", "Oscilan igual"], "Las empresas jóvenes y cambiantes suelen ser mucho más volátiles que las empresas de servicios estables."],
      ],
      mission: "Abre una acción con volatilidad superior al 40%",
      video: [
        ["La volatilidad mide cuánto oscila un precio.", { a: "Acción tranquila", b: "Acción nerviosa" }],
        ["Las grandes oscilaciones significan posibles ganancias mayores y posibles pérdidas mayores.", { tag: "+30% … −30%" }],
        ["Antes de comprar, pregúntate: ¿podría aguantar una gran caída sin entrar en pánico?", { lines: ["Pregúntate:", "Si cayera un 30%…", "¿mantendría la calma?"] }],
        ["Con acciones nerviosas, usa una cantidad menor.", { lines: ["Acción nerviosa", "→ cantidad menor"] }],
      ],
    },
    diversify: {
      title: "No pongas todos los huevos en la misma cesta", try: "Ver el ETF 0050",
      body: d => `
        <p><b>Diversificar</b> es repartir tu dinero entre muchas empresas, sectores e incluso países. Si una empresa tiene malas noticias, las demás amortiguan el golpe.</p>
        <p>El <b>tamaño de la posición</b> es decidir cuánto dinero va a cada acción. Aquí el piloto automático nunca pone más del 15% de la cartera en una sola acción.</p>
        <p>Un fondo como un <b>ETF</b> tiene muchas acciones a la vez. El <b>0050</b> de la lista es un ETF con unas 50 de las mayores empresas de Taiwán, así que con una compra tienes un trozo de todas.</p>
        ${key("ninguna acción por sí sola debería poder hundir toda tu cartera.")}
        ${live(d.n ? `Tienes <b>${d.n}</b> acción${d.n === 1 ? "" : "es"} en <b>${d.mk}</b> mercado${d.mk === 1 ? "" : "s"}. Tu mayor posición, <b>${d.big}</b>, es el <b>${d.bigP}</b> de tu cartera.` : "Todavía no tienes acciones. Cuando las tengas, aquí verás lo repartido que está tu dinero.")}`,
      quiz: [
        ["¿Qué cartera está más diversificada?", ["10 acciones de tecnología, banca y telecos en dos países", "Todo tu dinero en una acción que te gusta mucho", "Dos fabricantes de chips"], "Sectores y países distintos no suelen caer a la vez, y eso reparte el riesgo."],
        ["Una acción es el 5% de tu cartera y cae un 20%. ¿Cuánto cae aproximadamente toda tu cartera?", ["Alrededor de un 1%", "Alrededor de un 20%", "Alrededor de un 5%"], "5% × 20% = 1%."],
        ["¿Qué es un ETF?", ["Un fondo que tiene muchas acciones y cotiza como una sola", "La acción de una sola empresa", "Un tipo de cuenta bancaria"], "Con una compra de un ETF tienes un trozo de muchas empresas."],
      ],
      mission: "Ten acciones de EE. UU. y de Taiwán a la vez",
      video: [
        ["Poner todos los huevos en una cesta es arriesgado: una caída y se rompen todos.", { l: "Una cesta", r: "Muchas cestas" }],
        ["Reparte tu dinero entre muchas empresas, sectores y países.", { main: "Muchos trozos pequeños" }],
        ["Si cada acción es una parte pequeña de tu cartera, una mala no puede hundirte.", { lines: ["Una acción −20%", "en una posición del 5%", "= solo −1% para ti"] }],
        ["Un ETF reúne muchas acciones en una sola compra: una forma fácil de diversificar."],
      ],
    },
    psychology: {
      title: "Tus emociones: miedo, codicia y FOMO", try: "Abrir el Diario",
      body: d => `
        <p>Lo más difícil de invertir a menudo no son las matemáticas. Eres <b>tú</b>. Dos sentimientos causan la mayoría de los errores:</p>
        <ul>
          <li><b>La codicia y el FOMO</b> (miedo a perderse algo): comprar algo solo porque ha subido y todo el mundo habla de ello.</li>
          <li><b>El miedo y el pánico:</b> vender tras una caída repentina, a menudo justo en el mínimo.</li>
        </ul>
        <p>Otras trampas comunes: aguantar demasiado una acción perdedora porque vender parece admitir un error, y operar demasiado porque hacer algo se siente mejor que esperar.</p>
        <p>La solución es un <b>plan escrito antes de operar</b>, más la costumbre de revisar tus operaciones. Para eso sirve la pestaña Diario.</p>
        ${key("haz el plan cuando estés tranquilo y síguelo cuando no lo estés.")}
        ${live(d.n ? `Tu Diario tiene <b>${d.n}</b> operaciones tuyas en esta zona, y <b>${d.r}</b> se calificaron como pasos arriesgados. Abre el Diario para ver qué mejorar.` : "Todavía no has hecho operaciones en esta zona. Cuando las hagas, el Diario te mostrará qué hábitos mejorar.")}`,
      quiz: [
        ["Una acción ha subido un 40% este mes y todo el mundo habla de ella en internet. ¿Qué sentimiento podría empujarte a comprar sin un plan?", ["El FOMO, el miedo a perderse algo", "La paciencia", "La diversificación"], "El FOMO hace que una acción que sube parezca un tren que no puedes perder. Un plan te ayuda a ver si de verdad encaja."],
        ["Tu acción cae un 3% en un día, pero su tendencia sigue al alza. ¿Qué es vender por pánico?", ["Vender solo por la caída que asusta, sin mirar tu plan", "Seguir tu regla de stop-loss", "Comprar más porque la tendencia es alcista"], "Vender por pánico es dejar que decida el miedo. Un mal día suele ser solo ruido."],
        ["¿Qué ayuda más contra las decisiones emocionales?", ["Un plan escrito antes de operar y revisar tus operaciones", "Mirar los precios cada minuto", "Operar más a menudo"], "Un plan hecho con calma y una revisión honesta impiden que los sentimientos tomen el control."],
      ],
      mission: "Abre la pestaña Diario y lee tu revisión",
      video: [
        ["Los precios suben y bajan, y nuestros sentimientos también."],
        ["Cuando una acción se dispara y todo el mundo habla de ella, el FOMO nos empuja a entrar en lo más alto.", { tag: "¡Todo el mundo compra!" }],
        ["Cuando cae de repente, el miedo nos empuja a vender, a menudo justo en el mínimo.", { tag: "¡Pánico!" }],
        ["La cura: planifica con calma, sigue el plan y revisa cada operación.", { items: ["Escribe tu plan antes", "Síguelo", "Revisa en el Diario"] }],
      ],
    },
    whenact: {
      title: "Cuándo comprar y cuándo vender", try: "Leer la tarjeta del coach",
      body: d => `
        <p>Los buenos inversores deciden sus reglas <b>antes</b> de operar, para que el miedo y la emoción no decidan por ellos. Aquí tienes un plan sencillo. El coach de la pestaña Operar lo sigue y el Diario compara cada operación con él.</p>
        <div class="checklist">
          <div><h4>Piensa en comprar cuando…</h4><ul>
            <li>La tendencia es alcista (media de 20 días por encima de la de 50).</li>
            <li>No está sobrecomprada (RSI por debajo de 70).</li>
            <li>Puedes decir <i>por qué</i> compras en una frase.</li>
            <li>La cantidad es pequeña: un 5–10% de tu cartera.</li>
            <li>Ya sabes a qué precio venderías si te equivocas.</li></ul></div>
          <div><h4>Piensa en vender cuando…</h4><ul>
            <li>Toca tu <b>stop-loss</b>, por ejemplo un 8% por debajo de lo que pagaste.</li>
            <li>La tendencia gira a la baja y tu razón para comprar ya no se cumple.</li>
            <li>Ha crecido hasta ser una parte demasiado grande de tu cartera.</li>
            <li>Ha subido mucho y quieres asegurar parte del beneficio.</li></ul></div>
          <div><h4>Intenta no…</h4><ul>
            <li>Comprar solo porque todo el mundo habla de ello (FOMO).</li>
            <li>Vender por pánico tras un mal día.</li>
            <li>Comprar más de una acción que cae solo para \"recuperar\".</li>
            <li>Ponerlo todo en una sola acción.</li></ul></div>
        </div>
        ${key("planifica la salida antes de entrar. Sabe por qué compras, cuánto y cuándo venderías.")}
        ${live(`La opinión del coach sobre <b>${d.s}</b>: ${d.sum}<br><br><b>Su sugerencia:</b> ${d.first}`)}`,
      quiz: [
        ["Compraste una acción a $100 con la regla de vender si cae un 8%. Ahora está a $91. ¿Qué dice tu plan?", ["Vender, porque está por debajo de tu stop-loss de $92", "Comprar más para bajar el coste medio", "Ignorarlo; ya volverá"], "Un 8% por debajo de $100 son $92, y $91 ya ha pasado esa línea. Seguir la regla evita que una pérdida pequeña crezca."],
        ["¿Cuál de estas NO está en una buena lista de compra?", ["Todo el mundo en internet está entusiasmado", "La tendencia es alcista", "Sabes dónde venderías si te equivocas"], "El entusiasmo en internet es FOMO, no una razón."],
        ["Una acción que tienes ha crecido hasta ser el 30% de tu cartera. ¿Qué es razonable?", ["Reducirla para bajar el riesgo", "Comprar más", "Ignorarlo"], "Reducir una posición demasiado grande evita que una sola acción controle tus resultados."],
      ],
      mission: "Haz una operación que el Diario califique como Buen paso",
      video: [
        ["Antes de comprar, repasa una lista.", { items: ["La tendencia es alcista", "RSI por debajo de 70", "Una razón clara", "Una cantidad pequeña", "Precio de salida listo"] }],
        ["Decide tu stop-loss de antemano, por ejemplo un 8% por debajo de lo que pagaste.", { limit: "Stop-loss −8%", done: "Vendida ✓" }],
        ["Conoce también tus razones para vender.", { items: ["Se tocó el stop-loss", "La tendencia giró a la baja", "Posición demasiado grande", "Recoger algo de beneficio"] }],
        ["Planifica la salida antes de entrar, y el Diario comprobará lo bien que lo seguiste.", { text: "Primero la salida" }],
      ],
    },
    compound: {
      title: "El tiempo y el interés compuesto", try: "Ir a Operar",
      body: d => `
        <p>El <b>interés compuesto</b> significa que tus ganancias empiezan a generar sus propias ganancias. Si ganas un 8% en un año, al año siguiente ganas un 8% sobre una cantidad mayor, y así sucesivamente.</p>
        <p>Cuanto más esperas, más rápido crece. Por eso el tiempo es uno de los mejores amigos de un inversor, y empezar pronto importa más que empezar con mucho.</p>
        <ul>
          <li>$1.000 creciendo un 8% al año se convierten en unos <b>$1.469</b> en 5 años, <b>$2.159</b> en 10 y <b>$4.661</b> en 20.</li>
          <li>Las pérdidas también se acumulan: tras perder un 50% necesitas ganar un 100% solo para volver al punto de partida.</li>
        </ul>
        <p>Los mercados reales no crecen lo mismo cada año, y algunos años bajan. El 8% es solo un ejemplo.</p>
        ${key("tiempo × crecimiento constante es mejor que intentar hacerse rico rápido.")}
        ${live(`Si pusieras <b>$1.000</b> en un fondo que creciera un 8% al año, tendrías unos <b>${d.v}</b> tras 30 años, sin añadir nada.`)}`,
      quiz: [
        ["$1.000 crecen un 10% al año. ¿Cuánto hay aproximadamente tras 2 años?", ["$1.210", "$1.200", "$1.100"], "Año 1: $1.100. Año 2: el 10% de $1.100 son $110, así que $1.210. Los $10 de más son el interés compuesto."],
        ["¿Por qué ayuda tanto empezar a invertir pronto?", ["Las ganancias tienen más años para generar sus propias ganancias", "Las acciones son más baratas para los jóvenes", "No se pagan comisiones"], "Más tiempo significa más rondas de interés compuesto."],
        ["Una acción cae un 50%. ¿Cuánto tiene que subir para volver a su precio anterior?", ["Un 100%", "Un 50%", "Un 25%"], "$100 bajan a $50. Para pasar de $50 a $100 hay que duplicar: subir un 100%."],
      ],
      mission: "Mantén una acción que compraste durante 3 sesiones",
      video: [
        ["Interés compuesto: tus ganancias empiezan a generar sus propias ganancias."],
        ["Cada año se suma un 8% sobre una cantidad mayor, así que las barras crecen cada vez más rápido.", { unit: "años" }],
        ["Tras 20 años al 8% anual, $1.000 se convierten en unos $4.661.", { unit: "años" }],
        ["Las pérdidas también se acumulan: tras una caída del 50% hace falta un 100% para recuperarse. Proteger tu dinero importa.", { lines: ["−50%: $100 → $50", "+100%: $50 → $100", "¡Evita grandes pérdidas!"] }],
      ],
    },
    dividends: {
      title: "Dividendos: cobrar por tener una acción", try: "Ver Chunghwa Telecom (2412)",
      body: d => `
        <p>Algunas empresas reparten parte de sus beneficios con los accionistas en efectivo. Ese dinero es un <b>dividendo</b>, que suele pagarse de una a cuatro veces al año.</p>
        <p>La <b>rentabilidad por dividendo</b> compara el dividendo anual con el precio de la acción. Una acción de $100 que paga $4 al año tiene una rentabilidad del 4%.</p>
        <ul>
          <li>Las empresas estables y maduras, como telecos y bancos, suelen pagar dividendos. Las que crecen rápido suelen pagar poco o nada y reinvierten en crecer.</li>
          <li>Muchos inversores <b>reinvierten</b> los dividendos para comprar más acciones, lo que hace más fuerte el interés compuesto.</li>
          <li>Una rentabilidad muy alta puede ser una señal de alarma: a veces el precio ha caído porque el negocio tiene problemas, y el dividendo puede recortarse.</li>
        </ul>
        <p>Los inversores de Taiwán son famosos por adorar los dividendos, y la temporada anual de dividendos (除權息) es todo un acontecimiento.</p>
        ${key("un dividendo es efectivo de los beneficios; rentabilidad = dividendo anual ÷ precio.")}
        ${live(`Chunghwa Telecom (2412) está a <b>${d.p}</b> por acción en el simulador. Si pagara NT$5 al año, su rentabilidad sería de un <b>${d.y}</b>. StockPilot todavía no paga dividendos; es solo un ejemplo.`)}`,
      quiz: [
        ["Una acción de $50 paga $2 de dividendo al año. ¿Cuál es su rentabilidad por dividendo?", ["4%", "2%", "25%"], "$2 ÷ $50 = 0,04, es decir, un 4%."],
        ["¿Qué tipo de empresa es más probable que pague un dividendo estable?", ["Una empresa madura con beneficios estables, como una teleco", "Una startup recién creada que pierde dinero", "Cualquier empresa cuya acción subió esta semana"], "Unos beneficios estables hacen posible un dividendo estable."],
        ["Una acción muestra de repente una rentabilidad por dividendo del 15%. ¿Qué deberías pensar?", ["Cuidado: el precio puede haberse desplomado por problemas", "Es dinero gratis sin riesgo", "Las rentabilidades nunca cambian"], "Rentabilidad = dividendo ÷ precio. Un precio que se desploma hace que la rentabilidad parezca enorme, y el dividendo puede recortarse."],
      ],
      mission: "Compra acciones de Chunghwa Telecom (2412)",
      video: [
        ["Algunas empresas reparten sus beneficios con los accionistas en efectivo: un dividendo.", { t: "Dividendos" }],
        ["La rentabilidad por dividendo compara el dividendo anual con el precio.", { lines: ["Dividendo anual $4", "Precio de la acción $100", "Rentabilidad = 4 ÷ 100 = 4%"] }],
        ["Reinvertir los dividendos compra más acciones, y esas acciones también pagan dividendos.", { unit: "años" }],
        ["Cuidado: una rentabilidad enorme puede significar que el precio se hundió porque el negocio tiene problemas.", { tag: "¿¡15% de rentabilidad!? 🚩" }],
      ],
    },
    valuation: {
      title: "¿Barata o cara? El PER", try: "Buscar PER en el vocabulario",
      body: () => `
        <p>El precio de una acción por sí solo no dice si es barata. Una acción de $1.000 puede ser una ganga y una de $10 puede estar cara. Lo que importa es el precio comparado con lo que la empresa <b>gana</b>.</p>
        <p>El <b>PER</b> (relación precio-beneficio, en inglés P/E) divide el precio de la acción entre el beneficio anual por acción, llamado <b>BPA</b>. Un PER de 20 significa que los inversores pagan $20 por cada $1 de beneficio anual.</p>
        <ul>
          <li>Un <b>PER alto</b> suele significar que los inversores esperan un crecimiento rápido. Si ese crecimiento no llega, el precio puede caer con fuerza.</li>
          <li>Un <b>PER bajo</b> puede significar una ganga, o un negocio que preocupa a la gente.</li>
          <li>Compara el PER con empresas parecidas del mismo sector, no entre empresas muy distintas.</li>
        </ul>
        ${key("el precio solo dice muy poco; compáralo con los beneficios.")}
        ${live("StockPilot no muestra beneficios, así que prueba con un ejemplo: una acción de $60 que gana $3 por acción tiene un PER de <b>20</b>. Si el precio sube a $90 y los beneficios siguen en $3, el PER pasa a <b>30</b>: la acción se ha encarecido.")}`,
      quiz: [
        ["Una acción cuesta $40 y gana $2 por acción al año. ¿Cuál es su PER?", ["20", "80", "2"], "$40 ÷ $2 = 20."],
        ["La acción A cuesta $500 y la B cuesta $20. ¿Cuál es más barata?", ["No se sabe solo por el precio; compara el precio con los beneficios", "La A, porque es más famosa", "La B, porque el número es más pequeño"], "Que sea barata o cara depende del precio comparado con los beneficios."],
        ["¿Por qué una tecnológica que crece rápido puede tener un PER alto?", ["Los inversores esperan que sus beneficios crezcan mucho", "No tiene accionistas", "Un PER alto siempre es una ganga"], "La gente paga más hoy por los beneficios que espera mañana."],
      ],
      mission: "Encuentra \"P/E\" (PER) en el vocabulario",
      video: [
        ["¿Es cara una acción de $1.000? No necesariamente. El precio solo dice muy poco."],
        ["El PER divide el precio entre el beneficio anual por acción.", { lines: ["Precio $60", "Beneficio por acción $3", "PER = 60 ÷ 3 = 20"] }],
        ["Si el precio sube pero los beneficios no, la acción se encarece.", { lines: ["Precio $90", "Beneficio sigue en $3", "PER = 30 → más cara"] }],
        ["Usa el PER para comparar empresas parecidas, y recuerda que es una pista, no toda la historia.", { items: ["PER alto: grandes esperanzas", "PER bajo: ganga o preocupación", "Compara dentro de un sector"] }],
      ],
    },
    cycles: {
      title: "Mercados alcistas, bajistas y ciclos", try: "Ver todo el historial del gráfico",
      body: d => `
        <p>Los mercados se mueven en olas largas. Un <b>mercado alcista</b> es un periodo largo de subidas. Un <b>mercado bajista</b> es una caída del 20% o más desde un máximo reciente.</p>
        <p>Las caídas menores, de alrededor del 10%, se llaman <b>correcciones</b>. Ocurren con bastante frecuencia, incluso dentro de mercados alcistas.</p>
        <ul>
          <li>Los mercados bajistas dan miedo, pero hasta ahora la bolsa de EE. UU. se ha recuperado de todos ellos, aunque algunos tardaron años.</li>
          <li>Nadie puede acertar de forma fiable el máximo o el mínimo. A los inversores diversificados y pacientes suele irles mejor que a los que entran y salen.</li>
        </ul>
        ${key("las subidas y bajadas son normales; el tiempo y la diversificación te ayudan a superarlas.")}
        ${live(`${d.s} está un <b>${d.dd}</b> por debajo de su máximo de 6 meses. ${["Es un vaivén normal.", "Eso ya es territorio de corrección.", "Una caída así se llamaría mercado bajista para esta acción."][d.zone]}`)}`,
      quiz: [
        ["El mercado cae un 25% desde su máximo. ¿Cómo se llama eso?", ["Un mercado bajista", "Un mercado alcista", "Un dividendo"], "Una caída del 20% o más desde un máximo reciente es un mercado bajista."],
        ["¿Qué es una corrección?", ["Una caída de alrededor del 10%, bastante frecuente", "Una caída de más del 50%", "Una subida del 20%"], "Las correcciones son comunes, incluso en mercados alcistas."],
        ["¿Qué ha funcionado mejor normalmente a lo largo de los ciclos?", ["Mantenerse diversificado y paciente", "Venderlo todo en cada caída", "Adivinar el máximo y el mínimo exactos"], "Nadie acierta los ciclos de forma fiable; la paciencia y la diversificación hacen el trabajo."],
      ],
      mission: "Pon el periodo del gráfico en Todo",
      video: [
        ["Un mercado alcista es una subida larga. Uno bajista es una caída del 20% o más.", { bull: "Alcista", bear: "Bajista" }],
        ["Las caídas menores, de alrededor del 10%, llamadas correcciones, son frecuentes incluso con la tendencia al alza.", { tag: "Corrección −10%" }],
        ["Hasta ahora, la bolsa de EE. UU. se ha recuperado de todos los mercados bajistas, aunque algunos tardaron años.", { tag: "Recuperación" }],
        ["Nadie puede acertar el ciclo de forma fiable. La diversificación y la paciencia te ayudan a superarlo.", { items: ["Diversifica", "Ten paciencia", "No adivines máximos ni mínimos"] }],
      ],
    },
    taiwan: {
      title: "Invertir en acciones de Taiwán", try: "Ver TSMC (2330)",
      body: d => `
        <p>La <b>Bolsa de Taiwán</b> (臺灣證券交易所, TWSE) usa números en lugar de letras como tickers: <b>2330</b> es TSMC y <b>2317</b> es Hon Hai, también llamada Foxconn. Los ETF suelen empezar por 00, como el <b>0050</b>.</p>
        <p>Los precios están en <b>nuevos dólares taiwaneses (NT$)</b>. Esta app guarda tu efectivo en dólares estadounidenses y convierte a un tipo fijo de NT$${d.rate} = US$1. En la vida real el tipo de cambio se mueve cada día, así que una acción de Taiwán puede subir en NT$ y aun así perder valor en US$. Eso es el <b>riesgo de divisa</b>.</p>
        <div class="facts">
          <div class="fact"><div class="fact-k">Horario</div><div class="fact-v">De 9:00 a 13:30, de lunes a viernes, hora de Taiwán</div></div>
          <div class="fact"><div class="fact-k">Lote (一張)</div><div class="fact-v">1.000 acciones. La negociación de lotes sueltos (零股) permite comprar menos.</div></div>
          <div class="fact"><div class="fact-k">Límite diario</div><div class="fact-v">Como mucho un 10% arriba o abajo respecto al cierre anterior en un día. Esta app lo aplica y muestra una etiqueta.</div></div>
          <div class="fact"><div class="fact-k">Saltos de precio</div><div class="fact-v">Los precios se mueven en saltos fijos. Por encima de NT$1.000 el salto es de NT$5, así que TSMC no puede cotizar a NT$1.083.</div></div>
          <div class="fact"><div class="fact-k">Colores</div><div class="fact-v"><b>El rojo significa subida</b> y el verde bajada, al revés que en esta app y en las apps de EE. UU.</div></div>
        </div>
        <p>TSMC es con diferencia la mayor empresa de la bolsa, así que su precio influye mucho en todo el mercado de Taiwán.</p>
        ${key("las acciones de Taiwán cotizan en NT$, en lotes de 1.000 acciones, con un límite diario del 10%, y el rojo significa subida.")}
        ${live(`TSMC (2330) está a <b>${d.p}</b> por acción, unos <b>${d.usd}</b>. Un lote completo de 1.000 acciones costaría <b>${d.lot}</b>. En esta app puedes comprar acciones sueltas, como en la negociación de lotes sueltos.`)}`,
      quiz: [
        ["En una app de bolsa taiwanesa, un precio en rojo significa…", ["Que el precio subió", "Que el precio bajó", "Que la negociación está pausada"], "En Taiwán, como en China continental, Hong Kong y Japón, el rojo marca una subida. En EE. UU. y Europa suele ser al revés."],
        ["¿Cuántas acciones tiene un lote (一張) en Taiwán?", ["1.000", "100", "10"], "Un lote son 1.000 acciones."],
        ["Una acción de Taiwán cerró ayer a NT$100. ¿Cuál es el precio más alto al que puede cotizar hoy?", ["NT$110", "NT$150", "NT$200"], "El límite diario es un 10% por encima o por debajo del cierre anterior."],
      ],
      mission: "Compra una acción de Taiwán",
      video: [
        ["Las acciones de Taiwán cotizan en la Bolsa de Taiwán, en nuevos dólares taiwaneses.", { mid: "NT$ ⇄ US$", l: "Taiwán", r: "Estados Unidos" }],
        ["Taiwán cotiza de 9:00 a 13:30. EE. UU. cotiza de 9:30 a 16:00 hora de Nueva York.", { tw: "Taiwán 9:00–13:30", us: "EE. UU. 9:30–16:00" }],
        ["Un lote son 1.000 acciones, y los precios pueden moverse como mucho un 10% al día.", { lines: ["1 lote = 1.000 acciones", "Lotes sueltos: menos acciones", "Límite diario: ±10%"] }],
        ["Y recuerda: en Taiwán, ¡el rojo significa subida!", { lines: ["🔴 Rojo = sube en Taiwán", "🟢 Verde = baja"] }],
      ],
    },
    economy: {
      title: "Tipos de interés, inflación y economía", try: "Abrir las palabras de economía",
      body: d => `
        <p>Las acciones no viven en una burbuja. Toda la economía les afecta, y tres cosas importan sobre todo:</p>
        <ul>
          <li>Los <b>tipos de interés</b> son el coste de pedir dinero prestado, fijados sobre todo por el banco central (la Reserva Federal en EE. UU., el Banco Central en Taiwán). Unos tipos más altos encarecen los préstamos y hacen el ahorro más atractivo, lo que a menudo empuja las acciones a la baja. Unos tipos más bajos suelen ayudarlas.</li>
          <li>La <b>inflación</b> significa que suben los precios de las cosas cotidianas. Una inflación alta suele llevar a los bancos centrales a subir los tipos.</li>
          <li>El <b>crecimiento económico</b> (PIB), el empleo y las exportaciones. Una economía que crece suele significar beneficios empresariales que crecen. Las exportaciones importan mucho para Taiwán, sobre todo los chips.</li>
        </ul>
        <p>Por eso las noticias de todo el mercado en StockPilot mueven casi todas las acciones a la vez.</p>
        ${key("los tipos de interés son como la gravedad para los precios de las acciones.")}
        ${live(`Hasta ahora ha habido <b>${d.n}</b> titulares de todo el mercado en esta zona.${d.h ? ` El último: <b>${d.h}</b> (${d.c}).` : ""}`)}`,
      quiz: [
        ["El banco central sube mucho los tipos de interés. ¿Qué suele pasar con las acciones?", ["A menudo bajan", "Siempre suben", "Nada en absoluto"], "Unos tipos más altos encarecen los préstamos y hacen el ahorro más atractivo, lo que a menudo baja las acciones."],
        ["¿Qué es la inflación?", ["La subida de los precios de bienes y servicios con el tiempo", "Una acción que sube rápido", "Una empresa que paga dividendos"], "La inflación trata de los precios cotidianos, no de una acción."],
        ["¿Por qué importan tanto las cifras de exportación de Taiwán para sus acciones?", ["Muchas grandes empresas de Taiwán, como las de chips, venden sobre todo a otros países", "Las exportaciones deciden el color de los precios", "No importan"], "Las mayores empresas de Taiwán ganan gran parte de su dinero en el extranjero."],
      ],
      mission: "Abre las palabras de economía en el vocabulario",
      video: [
        ["Toda la economía mueve las acciones, y el banco central está en el centro."],
        ["Cuando suben los tipos de interés, las acciones suelen bajar, como un balancín.", { l: "Tipos de interés ↑", r: "Acciones ↓", arrow: "Acciones" }],
        ["Una inflación alta suele llevar a tipos de interés más altos.", { lines: ["Inflación ↑", "→ el banco central sube tipos", "→ las acciones suelen ↓"] }],
        ["El crecimiento, el empleo y las exportaciones también importan. Para Taiwán, exportar chips es enorme.", { mid: "Chips →", l: "Taiwán", r: "El mundo" }],
      ],
    },
    plan: {
      title: "Crea tu primer plan de inversión", try: "Ir a Operar",
      body: d => `
        <p>Ya conoces las piezas. Ahora únelas en un plan sencillo que puedas seguir de verdad:</p>
        <ul>
          <li><b>Objetivo y plazo:</b> ¿para qué es el dinero y cuándo lo necesitarás? El dinero que necesites en pocos años no debería estar en acciones.</li>
          <li><b>Núcleo:</b> un fondo amplio y barato (como un ETF indexado) como base, para tener muchas empresas a la vez.</li>
          <li><b>Satélites:</b> si quieres elegir acciones, que cada una sea pequeña, un 5% o menos.</li>
          <li><b>Reglas:</b> tu lista de compra, tu stop-loss y cada cuánto revisarás.</li>
          <li><b>Sigue aprendiendo:</b> revisa tus operaciones, lee y ajusta poco a poco.</li>
        </ul>
        ${key("objetivo → fondo núcleo → pequeñas apuestas → reglas escritas → revisión regular.")}
        ${live(`En esta zona tienes <b>${d.n}</b> acción${d.n === 1 ? "" : "es"}, con un <b>${d.cash}</b> de tu cartera en efectivo.`)}`,
      quiz: [
        ["Necesitarás dinero para tus estudios dentro de 1 año. ¿Dónde NO debería ir?", ["A unas pocas acciones arriesgadas", "A una cuenta de ahorro", "A un sitio seguro y fácil de retirar"], "Las acciones pueden caer mucho en un solo año. El dinero que necesitas pronto debe estar seguro."],
        ["¿Qué es una posición \"núcleo\" en un plan sencillo?", ["Un fondo amplio y barato con muchas empresas", "Tu única acción favorita", "Una acción de la que oíste hablar en internet"], "El núcleo es la base diversificada alrededor de la que se coloca todo lo demás."],
        ["¿Qué tamaño debería tener cada acción elegida en el plan de un principiante?", ["Pequeño, un 5% o menos de la cartera", "La mitad de la cartera", "Todo"], "Las apuestas pequeñas te dejan aprender sin arriesgar toda tu cuenta."],
      ],
      mission: "Ten 5 o más acciones distintas a la vez",
      video: [
        ["Es hora de unirlo todo en un plan que puedas seguir."],
        ["Un fondo amplio como núcleo, y unas pocas acciones pequeñas alrededor.", { main: "Fondo núcleo 80% · acciones 5% cada una" }],
        ["Escribe tus reglas antes de operar.", { items: ["Objetivo y plazo", "Lista de compra", "Stop-loss", "Revisión mensual"] }],
        ["Y sigue aprendiendo: revisa, lee y ajusta poco a poco. ¡Buena suerte!"],
      ],
    },
    predict: {
      title: "Por qué nadie puede predecir el mercado", try: "Probar el piloto automático",
      body: d => `
        <p>Cada señal de estas lecciones es una <b>pista, no una promesa</b>. Los precios reaccionan a noticias que nadie conoce de antemano: unos resultados sorpresa, una ley nueva, un incendio en una fábrica.</p>
        <p>Este simulador funciona igual. Las tendencias suelen durar un tiempo, así que las señales ayudan un poco, pero las noticias sorpresa y los movimientos aleatorios a menudo las superan. Activa el piloto automático y observa: gana unas operaciones y pierde otras.</p>
        <p>Incluso a los profesionales les cuesta. En periodos largos, la mayoría de los gestores profesionales no consigue batir a un fondo sencillo que simplemente tiene todo el mercado.</p>
        <p>Si algún día inviertes dinero real, algunos hábitos ayudan:</p>
        <ul>
          <li>Aprende primero y piensa en años, no en días.</li>
          <li>Reparte tu dinero, por ejemplo con un fondo de todo el mercado.</li>
          <li>Invierte solo dinero que no vayas a necesitar pronto.</li>
          <li>Vigila las comisiones y desconfía de quien prometa ganancias garantizadas.</li>
          <li>Háblalo con alguien de confianza antes de empezar.</li>
        </ul>
        ${key("quien dice que puede predecir el mercado con seguridad se equivoca, o te quiere vender algo.")}
        ${live(`Tu cuenta simulada va ${B(d.up ? "pos" : "neg", `${d.up ? "+" : "−"}${d.amt} (${d.p})`)} desde que empezaste.`)}`,
      quiz: [
        ["¿Puede alguna IA o algún experto predecir de forma fiable los precios de mañana?", ["No. Las señales ayudan a pensar, pero nadie predice los precios de forma fiable", "Sí, con suficientes datos", "Solo los de las grandes empresas famosas"], "Los mercados reaccionan a información nueva que nadie tiene todavía. Por eso controlar el riesgo y diversificar importa más que predecir."],
        ["Alguien en internet te promete que duplicarás tu dinero en un mes, garantizado. ¿Qué deberías pensar?", ["Es una señal de alarma; nadie puede garantizar eso", "Gran oferta, invierte todo", "Las garantías son normales en bolsa"], "Las grandes ganancias garantizadas son una señal clásica de estafa."],
        ["¿Cuál de estas cosas puedes controlar de verdad como inversor?", ["Tu diversificación, tus costes y cuánto riesgo asumes", "Las noticias de mañana", "El precio exacto de la semana que viene"], "Céntrate en lo que controlas: repartir el riesgo, mantener bajos los costes y el tamaño de las posiciones."],
      ],
      mission: "Activa el piloto automático",
      video: [
        ["Cada señal es una pista, no una promesa. Noticias que nadie espera pueden mover los precios en cualquier momento.", { tag: "?" }],
        ["A largo plazo, incluso la mayoría de los profesionales no bate a un fondo sencillo que tiene todo el mercado.", { lines: ["La mayoría de fondos profesionales", "no consigue batir", "a un simple fondo indexado"] }],
        ["Así que céntrate en lo que puedes controlar: tiempo, diversificación, riesgo y costes.", { items: ["Piensa en años", "Reparte", "Solo dinero que te sobre", "Vigila las comisiones"] }],
        ["Y desconfía de cualquiera que prometa ganancias garantizadas.", { text: "¿Garantizado? 🚩" }],
      ],
    },
  },
  glossary: [
    ["Acción", "Una pequeña parte de la propiedad de una empresa.", "Tener 1 acción de Apple te convierte en uno de sus muchos dueños."],
    ["Accionista", "Una persona o grupo que tiene acciones de una empresa.", "Los accionistas pueden votar algunas decisiones de la empresa."],
    ["Bolsa de valores", "Un mercado donde se compran y venden acciones, como el Nasdaq o la Bolsa de Taiwán.", "TSMC cotiza en la Bolsa de Taiwán."],
    ["Ticker", "El código corto de una acción.", "AAPL es el ticker de Apple; 2330 es el de TSMC."],
    ["Bróker", "Una empresa que da las órdenes de compra y venta por ti.", "Necesitas una cuenta en un bróker para operar con acciones reales."],
    ["Capitalización bursátil", "El valor total de una empresa: precio de la acción × número de acciones.", "Una acción de $100 con 1.000 millones de acciones tiene una capitalización de $100.000 millones."],
    ["Dividendo", "Efectivo que una empresa paga a sus accionistas de sus beneficios.", "Chunghwa Telecom es conocida por pagar dividendos estables."],
    ["ETF (fondo cotizado)", "Un fondo que tiene muchas acciones y cotiza como una sola.", "El 0050 tiene unas 50 de las mayores empresas de Taiwán."],
    ["Índice", "Un número que sigue a un grupo de acciones para mostrar cómo va el mercado.", "El S&P 500 sigue a 500 grandes empresas de EE. UU."],
    ["Cartera", "Todas las inversiones que tienes, más el efectivo.", "Su cartera tiene 6 acciones y algo de efectivo."],
    ["Orden de mercado", "Una orden para comprar o vender ya, al precio actual.", "En StockPilot, pulsar Comprar con «Mercado» elegido envía una orden de mercado."],
    ["Orden limitada", "Una orden que solo se ejecuta a tu precio o a uno mejor.", "Una orden limitada de compra a $95 no se ejecuta mientras el precio esté en $100."],
    ["Stop-loss", "Un plan u orden para vender si el precio cae a un nivel fijado, para limitar una pérdida.", "Comprar a $100 con un stop-loss del 8% significa vender a $92."],
    ["Recoger beneficios", "Vender parte o toda una acción ganadora para asegurar la ganancia.", "Tras subir un 20%, vendió la mitad para recoger beneficios."],
    ["Posición", "Cuánto tienes de una acción.", "Una posición de $5.000 en una cartera de $100.000 es un 5%."],
    ["Lote", "La unidad estándar de negociación en Taiwán: 1.000 acciones.", "Un lote de una acción de NT$200 cuesta NT$200.000."],
    ["Lote suelto", "Menos acciones que un lote completo.", "La negociación de lotes sueltos te permite comprar solo 5 acciones de TSMC."],
    ["Límite de precio", "Lo máximo que puede moverse un precio en un día. En Taiwán es un 10%.", "Una acción que cerró a NT$100 puede cotizar entre NT$90 y NT$110 al día siguiente."],
    ["Liquidez", "Lo fácil que es comprar o vender algo sin mover mucho su precio.", "Las grandes empresas como Apple tienen mucha liquidez."],
    ["Bolsa de práctica", "Practicar inversiones con dinero ficticio.", "StockPilot es una app de bolsa de práctica."],
    ["Tendencia", "La dirección general de un precio durante semanas o meses.", "Máximos y mínimos cada vez más altos indican una tendencia alcista."],
    ["Media móvil", "El precio medio de los últimos días, para ver la tendencia con más claridad.", "La media móvil de 20 días es el cierre medio de los últimos 20 días."],
    ["Impulso", "La fuerza con la que se ha movido un precio recientemente.", "Subir un 12% en un mes es un impulso fuerte."],
    ["RSI (índice de fuerza relativa)", "Una puntuación de 0 a 100 de lo rápido que un precio ha subido o bajado en 14 días.", "Un RSI por encima de 70 se llama sobrecompra."],
    ["Sobrecompra / sobreventa", "Un precio que ha subido (o bajado) tan rápido que podría retroceder (o rebotar).", "Tras cinco días seguidos de subidas, la acción parecía sobrecomprada."],
    ["Volatilidad", "Cuánto oscila un precio arriba y abajo.", "Tesla es más volátil que Visa."],
    ["Beneficios", "Lo que gana una empresa, normalmente publicado cada tres meses.", "La acción saltó tras unos buenos resultados."],
    ["PER (precio-beneficio)", "El precio de la acción dividido entre el beneficio anual por acción; muestra lo cara que es una acción respecto a sus beneficios.", "Un PER de 30 significa que los inversores pagan $30 por cada $1 de beneficio anual."],
    ["Mercado alcista", "Un periodo largo de subidas de precios.", "Muchas acciones se duplicaron durante el mercado alcista."],
    ["Mercado bajista", "Una caída del 20% o más desde un máximo reciente.", "Los precios cayeron un 25%, así que fue un mercado bajista."],
    ["Retroceso / corrección", "Una caída breve dentro de una tendencia alcista más larga. Una corrección es una caída de alrededor del 10%.", "Esperar un retroceso puede darte un mejor precio."],
    ["Diversificación", "Repartir el dinero entre muchas acciones, sectores y países.", "Tener 10 acciones de sectores distintos está más diversificado que tener 1."],
    ["Riesgo", "La posibilidad de perder dinero, o de que los resultados sean distintos de lo esperado.", "Las ganancias posibles más altas suelen venir con más riesgo."],
    ["Caída máxima (drawdown)", "Cuánto ha caído tu cuenta o una acción desde su punto más alto.", "Pasar de $120.000 a $90.000 es una caída del 25%."],
    ["Tipo de cambio / riesgo de divisa", "El precio de una moneda en otra, y el riesgo de que cambie.", "Si el NT$ se debilita, las acciones de Taiwán valen menos dólares."],
    ["FOMO", "Miedo a perderse algo: comprar porque todos los demás lo hacen.", "Comprar una acción solo porque es tendencia en internet es FOMO."],
    ["Venta por pánico", "Vender por miedo tras una caída repentina.", "Venderlo todo tras un mal día es vender por pánico."],
    ["Promediar a la baja", "Comprar más de una acción que ha caído para bajar tu coste medio.", "Promediar a la baja en una acción que sigue cayendo puede agrandar las pérdidas."],
    ["Tipo de interés", "El coste de pedir dinero prestado, fijado sobre todo por el banco central.", "Unos tipos de interés más altos suelen empujar las acciones a la baja."],
    ["Inflación", "La subida de los precios de bienes y servicios con el tiempo.", "Con un 3% de inflación, $100 de compra cuestan $103 un año después."],
    ["Banco central", "El banco que gestiona el dinero y los tipos de interés de un país, como la Reserva Federal de EE. UU. o el Banco Central de Taiwán.", "La Reserva Federal subió los tipos para combatir la inflación."],
    ["Recesión", "Un periodo en el que la economía se contrae y se pierden empleos.", "Las acciones suelen caer cuando la gente espera una recesión."],
    ["PIB (producto interior bruto)", "El valor total de todo lo que un país produce en un año.", "Un fuerte crecimiento del PIB significa que la economía se expande."],
    ["Exportaciones", "Bienes que un país vende a otros países. Muy importantes para Taiwán.", "Unas fuertes exportaciones de chips ayudan a la economía de Taiwán."],
    ["Tasa de desempleo", "La proporción de personas que quieren un trabajo pero no lo encuentran.", "Una tasa de desempleo baja es señal de una economía fuerte."],
  ],
});
