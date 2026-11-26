/* ============ Français ============ */
I18N.fr = {
  "nav.label": "Sections",
  badge: "Bourse d’entraînement — argent virtuel",
  "tab.trade": "Trader", "tab.journal": "Journal", "tab.learn": "Apprendre",
  cash: "Liquidités disponibles",
  disclaimer: "<strong>Mode entraînement :</strong> les prix et les actualités sont simulés. Ils se comportent comme un vrai marché (tendances, actualités, mouvements de tout le marché), mais ils ne sont pas réels et chaque transaction utilise de l’argent virtuel. Le coach enseigne des règles pratiques courantes ; personne ne peut prédire les marchés. C’est un outil pédagogique, pas un conseil financier.",
  "wl.title": "Liste de suivi", "wl.filter": "Filtrer par marché", "wl.all": "Tous", "wl.us": "États-Unis", "wl.tw": "Taïwan",
  clock: v => `<b>Jour ${v.d} · ${v.time}</b>`,
  stamp: v => `Jour ${v.d} · ${v.time}`,
  "stat.30d": "Variation 30 jours", "stat.high": "Plus haut 90 jours", "stat.low": "Plus bas 90 jours", "stat.vol": "Volatilité", "stat.own": "Vous détenez",
  shares: v => `${v.n} act.`,
  "help.chart": "Apprendre à lire un graphique", "help.risk": "Apprendre la volatilité", "help.coach": "Apprendre quand acheter et vendre",
  "help.news": "Apprendre comment l’actualité fait bouger les prix", "help.pnl": "Apprendre les gains et pertes", "help.ap": "Apprendre la taille des positions",
  "coach.title": "🧭 Coach", "coach.sub": "· ce qui se passe et ce qu’il faut envisager",
  "coach.h": "Ce que ferait un investisseur prudent", "coach.signals": "Voir les signaux utilisés",
  "coach.note": "Ce sont des règles pratiques courantes pour s’entraîner. Ici, les prix sont en partie aléatoires : même de bonnes règles perdent parfois.",
  "qty.label": "Nombre d’actions", "btn.buy": "Acheter", "btn.sell": "Vendre",
  "news.title": "📰 Actualités du marché", "news.sub": "· titres simulés",
  "pv.label": "Valeur du portefeuille (US$)", holdings: "Positions",
  "ap.title": "🤖 Pilote automatique IA", "ap.sub": "· argent virtuel uniquement", "ap.label": "Laisser l’IA trader à ma place",
  "ap.desc": "Une fois activée, l’IA achète ses meilleurs choix « Acheter » (15 % du portefeuille maximum chacun, en gardant toujours 10 % en liquidités) et vend les positions qu’elle note « Vendre ». Chaque action est notée ci-dessous et analysée dans le Journal.",
  "hist.title": "Historique des transactions", reset: "Réinitialiser le compte", "reset.confirm": "Cliquez encore pour revenir à 100 000 $", "reset.done": "Le compte est revenu à 100 000 $.",
  "j.title": "Journal de trading", "j.filter": "Transactions de qui", "j.mine": "Mes transactions", "j.auto": "Pilote automatique", "j.all": "Toutes",
  "j.sub": "Chaque achat et chaque vente sont enregistrés avec ce que vous pouviez voir à ce moment-là, puis comparés aux règles des leçons. Jugez chaque décision sur ses raisons, pas seulement sur le gain.",
  "l.sections": "Rubriques d’apprentissage", "l.lessons": "Leçons", "l.vocab": "Vocabulaire",
  "l.title": "Les bases de la Bourse", "l.progress": "Votre progression", "l.progressAria": "Leçons terminées",
  "v.search": "Chercher un mot…", "v.cats": "Catégories de mots",
  footer: "StockPilot AI · simulateur d’entraînement · prix et actualités simulés", "footer.back": "retour à CoachStat",

  "mkt.US": "États-Unis", "mkt.TW": "Taïwan",
  "limit.up": "LIMITE HAUTE", "limit.down": "LIMITE BASSE",
  "chg.today": v => `${v.p} aujourd’hui`, "chg.last": v => `${v.p} dernière séance`,
  "fx.closed": v => `Marché fermé · dernière clôture ${v.pc}`,
  "fx.tw": v => `Bourse de Taïwan · ≈ ${v.usd} par action à NT$${v.rate} = 1 US$ (taux simulé) · limites du jour ${v.lo} à ${v.hi}`,
  "fx.us": v => `Clôture précédente ${v.pc}`,
  "chart.legend": "— prix   - - moyenne 20 jours", "chart.today": "auj.", "chart.days": v => `${v.d} j`,
  "chart.aria": v => `Prix de ${v.sym} sur les 90 derniers jours, avec sa moyenne sur 20 jours`,
  "tip.today": "Aujourd’hui (en direct)", "tip.yday": "Clôture d’hier", "tip.ago": v => `il y a ${v.d} jours`,
  "rec.BUY": "ACHETER", "rec.SELL": "VENDRE", "rec.HOLD": "CONSERVER",
  signals: v => `Signaux : ${v.rec}`, strength: v => `force du signal ${v.c} %`,
  "r.trendUp": v => `Tendance haussière : la moyenne 20 jours (${v.a}) est au-dessus de la moyenne 50 jours (${v.b}).`,
  "r.trendDown": v => `Tendance baissière : la moyenne 20 jours (${v.a}) est sous la moyenne 50 jours (${v.b}).`,
  "r.momUp": v => `Élan fort : en hausse de ${v.p} sur 30 jours.`,
  "r.momDown": v => `Élan faible : en baisse de ${v.p} sur 30 jours.`,
  "r.momFlat": v => `Élan plat (${v.p} sur 30 jours).`,
  "r.rsiLow": v => `Le RSI est à ${v.r} : l’action semble survendue, ce qui peut précéder un rebond.`,
  "r.rsiHigh": v => `Le RSI est à ${v.r} : l’action semble surachetée et pourrait reculer.`,
  "r.rsiMid": v => `Le RSI est à ${v.r}, dans une zone normale.`,
  "r.volHigh": v => `Forte volatilité (${v.p} par an) : de plus grands écarts, plus de risque.`,

  "verb.buy": "Acheté", "verb.sell": "Vendu",
  "msg.nocash": "Pas assez de liquidités pour cet ordre.", "msg.noshares": "Vous ne détenez pas autant d’actions.",
  "msg.done": v => `${v.verb} : ${v.n} actions ${v.sym} à ${v.px}.`,
  "msg.journal": "Journal :", "msg.why": "Voir pourquoi",
  hist: v => `${v.ai}<b>${v.verb} ${v.n} ${v.sym}</b> @ ${v.px}`,
  "th.sym": "Symbole", "th.shares": "Actions", "th.price": "Prix", "th.pl": "G/P (US$)",
  "hold.empty": "Pas encore de positions : achetez votre première action ou activez le pilote automatique.",
  "pv.delta": v => `${v.arrow} ${v.amt} (${v.p}) au total`,
  "ap.empty": "Les actions du pilote automatique apparaîtront ici.", "hist.empty": "Pas encore de transactions.", "news.empty": "Les titres apparaîtront ici dès qu’il y aura des actualités.",
  "ap.on": "Pilote automatique <b>activé</b> : l’IA gère maintenant ce portefeuille d’entraînement.", "ap.off": "Pilote automatique <b>désactivé</b>.",
  "ap.sold": v => `Tout vendu <b>${v.sym}</b> — ${v.reason}`,
  "ap.bought": v => `Acheté ${v.n} <b>${v.sym}</b> (signal ${v.c} %) — ${v.reason}`,

  "news.pos": ["{n} dépasse les prévisions de bénéfices", "{n} décroche un gros contrat", "Les analystes relèvent leur objectif de cours pour {n}", "{n} lance un nouveau produit à succès", "{n} relève ses prévisions de ventes"],
  "news.neg": ["{n} manque les prévisions de bénéfices", "{n} abaisse ses prévisions de ventes", "Les régulateurs ouvrent une enquête sur {n}", "{n} perd un client important", "Les analystes dégradent {n}"],
  "news.secPos": { chips: "La demande de puces IA s’envole", shipping: "Les tarifs du transport maritime grimpent", finance: "Les banques annoncent des prêts solides", tech: "Les dépenses technologiques repartent", consumer: "Les consommateurs dépensent plus que prévu", telecom: "Les abonnements télécoms progressent" },
  "news.secNeg": { chips: "Les commandes de puces ralentissent", shipping: "Les tarifs du transport maritime baissent", finance: "Les défauts de paiement augmentent", tech: "Les entreprises réduisent leurs dépenses technologiques", consumer: "Les consommateurs réduisent leurs dépenses", telecom: "La guerre des prix s’intensifie dans les télécoms" },
  "news.mktPos": { US: ["La Réserve fédérale laisse entrevoir une baisse des taux", "De bons chiffres de l’emploi portent les actions américaines"], TW: ["Les commandes à l’export de Taïwan s’envolent", "Les investisseurs étrangers achètent des actions taïwanaises"] },
  "news.mktNeg": { US: ["L’inflation américaine plus forte que prévu", "Les craintes de ralentissement américain pèsent sur la Bourse"], TW: ["Les commandes à l’export de Taïwan reculent", "Les investisseurs étrangers vendent des actions taïwanaises"] },
  "news.industry": "Secteur :", "news.market": v => `Marché ${v.m} :`,
  "news.yday": "Hier", "news.ago": v => `il y a ${v.d} jours`,
  "recap.t": v => `Clôture du jour ${v.d}`,
  recap: v => `📊 <b>Bilan du jour ${v.d} :</b> actions américaines ${v.us}, Taïwan ${v.tw} en moyenne. Votre portefeuille ${v.pd} aujourd’hui. Plus forte variation : <b>${v.sym}</b> ${v.c}.`,

  why: "Pourquoi ?",
  "c.trend": v => `${v.name} est en ${v.up ? "tendance haussière" : "tendance baissière"} : ${v.pos ? "hausse" : "baisse"} de ${v.mom} % sur 30 jours, avec la moyenne 20 jours ${v.up ? "au-dessus" : "en dessous"} de la moyenne 50 jours.`,
  "c.rsiHigh": v => ` Le RSI est à ${v.r} : elle a monté vite et peut être surachetée.`,
  "c.rsiLow": v => ` Le RSI est à ${v.r} : elle a baissé vite et peut être survendue.`,
  "c.rsiMid": v => ` Le RSI est à ${v.r}, dans une zone normale.`,
  "c.vol": v => ` Ses variations de prix sont ${["faibles", "moyennes", "fortes"][v.w]} (${v.p} % par an).`,
  "c.limit": v => ` Elle est à la limite quotidienne ${v.up ? "haute" : "basse"} de Taïwan : elle ne peut plus ${v.up ? "monter" : "baisser"} aujourd’hui.`,
  "c.news": v => ` Actualité récente : « ${v.h} » (${v.c}).`,
  "a.stop": v => `Vous perdez ${v.p} % sur cette action. Beaucoup d’investisseurs utilisent un <b>stop-loss</b> : ils vendent si l’action tombe d’environ 7 à 10 % sous leur prix d’achat, pour qu’une petite perte ne devienne pas grande.`,
  "a.profit": v => `Vous gagnez ${v.p} %. En vendre une partie permettrait de <b>sécuriser un gain</b> tout en gardant le reste si elle continue de monter.`,
  "a.big": v => `Cette action représente ${v.p} % de votre portefeuille. C’est beaucoup au même endroit ; l’alléger réduirait votre risque.`,
  "a.hold": "La tendance reste haussière depuis que vous la détenez. <b>Conserver</b> et laisser courir un gagnant est raisonnable. Gardez votre stop-loss en tête.",
  "a.exit": "La tendance est devenue baissière depuis que vous la détenez. Votre raison d’acheter tient-elle toujours ? Sinon, <b>vendre</b> est raisonnable.",
  "a.buy": "La tendance et le RSI vont dans le sens d’un <b>achat</b>. Un investisseur prudent commencerait petit (environ 5 à 10 % du portefeuille) et déciderait à l’avance à quel prix il vendrait s’il se trompe.",
  "a.chase": "Elle a grimpé vite. Plutôt que de <b>courir après</b>, un investisseur prudent attendrait un repli avant d’acheter.",
  "a.knife": "Elle a beaucoup chuté et semble survendue. Les rebonds existent, mais acheter une action qui s’effondre est risqué (on dit « attraper un couteau qui tombe »). Il est plus sûr d’<b>attendre</b> que la tendance se retourne.",
  "a.wait": "La tendance est baissière. La plupart des débutants font mieux d’<b>attendre</b> qu’elle se retourne avant d’acheter.",
  "a.vol": "Cette action bouge beaucoup : si vous la tradez, utilisez un <b>montant plus petit</b> que d’habitude.",
  "a.news": "Ne tradez pas juste à cause d’un titre : les prix réagissent en quelques secondes, le mouvement a donc souvent déjà eu lieu.",
  "pc.prefix": "Coach :",
  "pc.none": "vous n’avez encore rien acheté. Cherchez une action en tendance haussière, commencez petit et décidez à l’avance quand vous vendriez.",
  "pc.big": v => `${v.sym} représente ${v.p} % de votre portefeuille. Si elle chutait de 20 %, tout votre compte baisserait d’environ ${v.d} %. Pensez à l’alléger.`,
  "pc.loser": v => `${v.sym} est ${v.p} % sous votre prix d’achat. Vérifiez votre plan de stop-loss pour elle.`,
  "pc.few": v => `vous détenez ${v.n} action${v.n === 1 ? "" : "s"}. Répartir sur 5 ou plus réduit votre risque.`,
  "pc.oneMkt": v => `toutes vos actions sont sur le marché ${v.m}. En ajouter de l’autre marché répartit votre risque.`,
  "pc.cash": v => `${v.p} % de votre argent est encore en liquidités. Les liquidités sont sûres, mais elles ne grandissent pas.`,
  "pc.good": v => `votre argent est réparti sur ${v.n} actions de deux marchés. Gardez chaque position petite et respectez vos règles de vente.`,

  "g.good": "Bonne décision", "g.mixed": "Décision mitigée", "g.risky": "Décision risquée",
  "js.trades": "Transactions", "js.tradesHint": v => `${v.b} achats · ${v.s} ventes`,
  "js.good": "Bonnes décisions", "js.goodHint": "règles respectées",
  "js.mixed": "Décisions mitigées", "js.mixedHint": "du bon et du risqué",
  "js.risky": "Décisions risquées", "js.riskyHint": "règles clés enfreintes",
  "js.score": "Score des règles", "js.scoreHint": "des règles respectées",
  "jh.well": "Ce que vous faites bien", "jh.work": "Ce qu’il faut améliorer", "jh.title": "Vos habitudes",
  "jh.noWell": "Rien pour l’instant. Suivez la liste d’achat et vos points forts apparaîtront ici.",
  "jh.noWork": "Aucune erreur pour l’instant. Continuez !",
  "jh.empty": "Après quelques transactions, vous verrez ici ce que vous faites bien et ce qu’il faut améliorer.",
  "jh.times": v => `(${v.n}×)`, lesson: "Leçon", "lesson.named": v => `Leçon : ${v.t}`,
  "who.you": "Vous", "who.auto": "🤖 Pilote automatique",
  "seen.you": "Ce que vous pouviez voir :", "seen.auto": "Ce qu’il pouvait voir :",
  "seen.trend": v => `tendance ${v.up ? "haussière" : "baissière"}`, "seen.rsi": v => `RSI ${v.r}`, "seen.mom": v => `30 jours ${v.p}`,
  "seen.day": v => `aujourd’hui ${v.p}`, "seen.vol": v => `variations ${v.p}/an`,
  "seen.posAfter": v => `position après ${v.p} du portefeuille`, "seen.posBefore": v => `position avant ${v.p} du portefeuille`,
  "seen.pl": v => `votre gain/perte ${v.p}`, "seen.holding": v => `déjà détenue ${v.p}`, "seen.news": v => `actualité « ${v.h} »`,
  "o.title": "Ce qui s’est passé ensuite :", "o.early": "Trop tôt pour le dire. Revenez après une séance complète.",
  "o.who.you": "vous", "o.who.auto": "le pilote automatique",
  "o.buy": v => `Depuis l’achat, ${v.sym} est à ${v.p} (${v.move}), soit ${v.win ? "un gain" : "une perte"} d’environ ${v.amt} sur ces actions.`,
  "o.sellWin": v => `Depuis la vente, ${v.sym} a baissé de ${v.p} (${v.move}). Vendre a évité une perte d’environ ${v.amt}.`,
  "o.sellLoss": v => `Depuis la vente, ${v.sym} a monté de ${v.p} (${v.move}). Garder l’action aurait rapporté environ ${v.amt} de plus.`,
  "vd.gg": "Bonne décision, bon résultat : les raisons et le résultat concordent.",
  "vd.gb": "Bonne décision, résultat malchanceux. Continuez à suivre les règles : les bonnes décisions perdent parfois aussi.",
  "vd.bg": "Chanceux cette fois. Ce genre de décision perd plus souvent qu’elle ne gagne : ne vous laissez pas tromper par un seul résultat.",
  "vd.bb": "Les risques de cette décision se sont concrétisés. Suivez les conseils ci-dessus la prochaine fois.",
  "j.emptyTitle": v => `Pas encore de transactions${v.auto ? " du pilote automatique" : ""}.`,
  "j.emptyYou": "Faites votre premier achat dans l’onglet Trader. Il apparaîtra ici avec l’analyse de chaque règle respectée ou enfreinte.",
  "j.emptyAuto": "Activez le pilote automatique dans l’onglet Trader : ses transactions seront analysées ici.",
  "j.go": "Aller à Trader",
  "ck.buy-knife.t": "Vous avez tenté d’attraper un couteau qui tombe",
  "ck.buy-knife.w": v => `La tendance était baissière et le RSI à ${v.r}. Les actions survendues peuvent continuer de chuter longtemps. La prochaine fois, attendez d’abord que la tendance se retourne.`,
  "ck.buy-downtrend.t": "Achat en tendance baissière",
  "ck.buy-downtrend.w": "La moyenne 20 jours était sous la moyenne 50 jours. Les actions en tendance baissière continuent souvent de baisser. La prochaine fois, attendez que la moyenne 20 jours repasse au-dessus.",
  "ck.buy-uptrend.t": "Achat en tendance haussière",
  "ck.buy-uptrend.w": "La moyenne 20 jours était au-dessus de la moyenne 50 jours : vous êtes allé dans le sens de la tendance.",
  "ck.buy-chase.t": v => `Vous avez couru après une action déjà très montée (RSI ${v.r})`,
  "ck.buy-chase.w": "Après une montée rapide, les prix reculent souvent. La prochaine fois, attendez que le RSI repasse sous 70 pour un meilleur prix.",
  "ck.buy-nochase.t": v => `Vous n’avez pas couru après (RSI ${v.r})`,
  "ck.buy-nochase.w": "Le RSI était dans une zone normale : vous n’avez pas acheté au sommet d’un pic soudain.",
  "ck.buy-avgdown.t": "Vous avez renforcé une action en baisse",
  "ck.buy-avgdown.w": v => `Vous perdiez déjà ${v.p} dessus. Renforcer une perdante pour « se refaire » peut transformer une petite perte en grosse perte.`,
  "ck.buy-big.t": v => `Vous avez mis ${v.p} de votre portefeuille sur une seule action`,
  "ck.buy-big.w": v => `Si elle chutait de 20 %, tout votre compte perdrait environ ${v.d} %. La prochaine fois, gardez chaque action sous 10 % environ.`,
  "ck.buy-large.t": v => `Position assez grosse (${v.p} de votre portefeuille)`,
  "ck.buy-large.w": "Au-delà de 10 % environ, votre compte dépend beaucoup d’une seule entreprise.",
  "ck.buy-small.t": v => `Position gardée petite (${v.p} de votre portefeuille)`,
  "ck.buy-small.w": "Avec de petites positions, une mauvaise action ne peut pas couler votre compte.",
  "ck.buy-nocash.t": v => `Presque plus de liquidités (${v.p})`,
  "ck.buy-nocash.w": "Sans liquidités, vous n’avez plus de coussin et ne pouvez pas saisir une meilleure occasion.",
  "ck.buy-news.t": "Achat juste après une bonne nouvelle",
  "ck.buy-news.w": v => `« ${v.h} » venait de sortir. Les prix bondissent quelques secondes après un titre : acheter après revient souvent à acheter au sommet du bond.`,
  "ck.buy-jumpy.t": "Gros pari sur une action très agitée",
  "ck.buy-jumpy.w": v => `Elle varie d’environ ${v.p} par an. Utilisez un montant plus petit pour des actions aussi volatiles.`,
  "ck.sell-stoploss.t": v => `Position perdante coupée (perte de ${v.p})`,
  "ck.sell-stoploss.w": "Vendre une perdante l’empêche de devenir une perte plus grande. C’est exactement le rôle d’un stop-loss.",
  "ck.sell-late.t": "Vous avez attendu longtemps pour vendre",
  "ck.sell-late.w": "Un stop-loss environ 8 % sous votre prix d’achat aurait limité les dégâts. La prochaine fois, fixez votre prix de sortie avant d’acheter.",
  "ck.sell-profit.t": v => `Gros gain sécurisé (gain de ${v.p})`,
  "ck.sell-profit.w": "Prendre des bénéfices après une forte hausse transforme un gain sur le papier en argent réel.",
  "ck.sell-trend.t": "Vente après le retournement de tendance",
  "ck.sell-trend.w": "La moyenne 20 jours était passée sous la moyenne 50 jours, un signal de sortie courant.",
  "ck.sell-trim.t": "Position trop grosse allégée",
  "ck.sell-trim.w": v => `Cette action représentait ${v.p} de votre portefeuille. L’alléger réduit votre risque.`,
  "ck.sell-strength.t": v => `Vente dans la force (RSI ${v.r})`,
  "ck.sell-strength.w": "Vendre après une montée rapide donne souvent un bon prix avant un repli.",
  "ck.sell-panic.t": "Vente après une mauvaise journée alors que la tendance restait haussière",
  "ck.sell-panic.w": v => `Elle baissait de ${v.p} aujourd’hui, mais la tendance de fond était haussière. Une mauvaise journée n’est souvent que du bruit, et vendre dans la panique fige la baisse.`,
  "ck.sell-early.t": "Gagnant vendu trop tôt",
  "ck.sell-early.w": "La tendance restait haussière et rien n’allait mal. Laisser courir ses gagnants, c’est ainsi que les gains s’accumulent. Vendre tôt ses gagnants en gardant ses perdants est une erreur classique.",
  "ck.sell-news.t": "Vente juste après une mauvaise nouvelle",
  "ck.sell-news.w": v => `« ${v.h} » venait de sortir. Les prix chutent quelques secondes après un titre : vendre après revient souvent à vendre près du plus bas. Demandez-vous si la nouvelle change vraiment l’histoire de l’entreprise.`,
  "ck.sell-noreason.t": "Pas de raison claire pour cette vente",
  "ck.sell-noreason.w": "Avant de vendre, nommez votre raison : stop-loss atteint, tendance retournée, position trop grosse ou prise de bénéfices.",

  "l.of": v => `${v.a} sur ${v.b}`, "l.lessonN": v => `Leçon ${v.i} sur ${v.n}`, "l.completed": " · terminée",
  "l.done": " (terminée)", "l.live": "Dans le simulateur en ce moment", "l.key": "À retenir :",
  "l.check": "Petit quiz", "l.next": "Leçon suivante", "l.correct": "Bonne réponse !", "l.wrong": "Pas tout à fait.",
  "l.wrongMsg": "Relisez la leçon et réessayez.",
  "l.allDone": v => `<b>Vous avez terminé les ${v.n} leçons.</b> Mettez-les en pratique dans l’onglet Trader.`,
  "v.count": v => `${v.n} mot${v.n === 1 ? "" : "s"}`, "v.all": "Tous", "v.ex": "Exemple :", "v.none": "Aucun mot ne correspond à votre recherche.",
  "cat.basics": "Bases", "cat.trading": "Trading", "cat.analysis": "Analyse", "cat.risk": "Risque", "cat.economy": "Économie",

  "chart.zoom": "Agrandir le graphique", "chart.close": "Fermer", "chart.rangeAria": "Période du graphique",
  "range.1m": "1M", "range.3m": "3M", "range.6m": "6M", "range.all": "Tout",
  "chart.legendBig": "— prix   - - moyenne 20 jours   ··· moyenne 50 jours",
  "chart.markers": "▲ vos achats   ▼ vos ventes",
  "chart.dialog": v => `Graphique du prix de ${v.sym}`,
  "cm.change": "Variation", "cm.high": "Plus haut", "cm.low": "Plus bas", "cm.ma20": "Moyenne 20 j", "cm.ma50": "Moyenne 50 j",
  "cm.hint": "Survolez le graphique pour voir le prix de n’importe quel jour. Les triangles marquent vos transactions sur cette action.",
  "zone.aria": "Zone d’entraînement", "zone.practice": "Zone d’entraînement", "zone.real": "Zone heures réelles",
  "mode.realHint": "Zone heures réelles : chaque marché ne bouge que pendant ses vraies heures d’ouverture (jours fériés non comptés). Les prix restent simulés. Cette zone a son propre compte de 100 000 $ et son journal.",
  "mode.fastHint": "Zone d’entraînement : les prix bougent tout le temps et chaque séance dure environ 1 minute. Cette zone a son propre compte de 100 000 $ et son journal.",
  "tz.TW": "heure de Taipei", "tz.US": "heure de New York",
  "ms.open": v => `${v.flag} ${v.m} : <b class="pos">ouvert</b> · ferme à ${v.close} ${v.tz}${v.local}`,
  "ms.closed": v => `${v.flag} ${v.m} : <b>fermé</b> · ouvre ${v.when} ${v.tz}${v.local}`,
  "ms.local": v => ` (votre heure : ${v.t})`,
  "ms.closedTrade": v => `Le marché ${v.m} est fermé en ce moment. Il est ouvert ${v.hours}. Pour trader à tout moment, passez à la zone d’entraînement.`,
  "hours.TW": "du lundi au vendredi, 9h00–13h30 heure de Taipei", "hours.US": "du lundi au vendredi, 9h30–16h00 heure de New York",
  "recap.mkt": v => `📊 <b>Clôture du marché ${v.m} :</b> moyenne ${v.avg}. Plus forte variation : <b>${v.sym}</b> ${v.c}.`,
  "u.1": "Unité 1 · Les bases", "u.2": "Unité 2 · Lire le marché", "u.3": "Unité 3 · Risque et état d’esprit",
  "u.4": "Unité 4 · Investir sur le long terme", "u.5": "Unité 5 · Le monde et votre plan",
  "vid.watch": v => `Regarder la vidéo (${v.s} s)`, "vid.replay": "Revoir", "vid.play": "Lecture", "vid.pause": "Pause",
  "vid.prev": "Scène précédente", "vid.next": "Scène suivante", "vid.sound": "Narration activée", "vid.mute": "Narration coupée",
  "lvl.1": "Débutant", "lvl.2": "Apprenti", "lvl.3": "Lecteur de graphiques", "lvl.4": "Chasseur de tendances", "lvl.5": "Gestionnaire de risques",
  "lvl.6": "Stratège", "lvl.7": "Pro du marché", "lvl.8": "Maître du marché",
  "xp.of": v => `${v.a} / ${v.b} XP`, "xp.max": v => `${v.a} XP · niveau maximum`, "xp.streak": v => `🔥 série de ${v.n} jours`,
  "xp.first": "Juste du premier coup", "xp.correct": "Bonne réponse", "xp.lesson": "Leçon terminée", "xp.video": "Vidéo regardée",
  "xp.mission": v => `Mission accomplie : ${v.m}`, "lv.up": v => `🎉 Niveau supérieur ! Niv. ${v.n} · ${v.name}`, "badge.got": v => `Nouveau badge : ${v.name}`,
  "b.title": v => `Badges ${v.a}/${v.b}`, "b.locked": "(verrouillé)",
  "b.first.n": "Première leçon", "b.first.d": "Terminer votre première leçon",
  "b.perfect.n": "Quiz parfait", "b.perfect.d": "Réussir les 3 questions d’une leçon du premier coup",
  "b.video5.n": "Cinéphile", "b.video5.d": "Regarder 5 vidéos de leçons",
  "b.unit.n": "Maître d’unité", "b.unit.d": "Terminer toutes les leçons d’une unité",
  "b.mission5.n": "As des missions", "b.mission5.d": "Accomplir 5 missions",
  "b.streak3.n": "En feu", "b.streak3.d": "Apprendre 3 jours de suite",
  "b.vocab.n": "Magicien des mots", "b.vocab.d": "Connaître 10 cartes",
  "b.all.n": "Diplômé", "b.all.d": "Terminer les 20 leçons",
  "m.title": "Mission", "m.done": "Fait ✓", "m.go": "C’est parti",
  "q.n": v => `Question ${v.i} sur ${v.n}`,
  "fc.open": "🃏 Jeu de cartes", "fc.back": "Retour à la liste de mots", "fc.show": "Voir la réponse", "fc.knew": "Je savais ✓", "fc.not": "Pas encore ✗",
  "fc.score": v => `Connus ${v.k} · Vus ${v.s}`, "fc.prompt": "Savez-vous ce que cela veut dire ?",
  "punct.stop": ".", "marker.buy": v => `Vous avez acheté ${v.n} @ ${v.px}`, "marker.sell": v => `Vous avez vendu ${v.n} @ ${v.px}`,
};

addLanguage("fr", {
  lessons: {
    basics: {
      title: "Qu’est-ce qu’une action ?", try: "Parcourir la liste",
      body: d => `
        <p>Une entreprise appartient à ses <b>actionnaires</b>. Une <b>action</b> est une petite part de cette propriété. Apple compte environ 15 milliards d’actions : en posséder une, c’est posséder un tout petit morceau d’Apple.</p>
        <p>Les entreprises vendent d’abord des actions pour lever de l’argent. Ensuite, les gens s’échangent les actions entre eux sur une <b>Bourse</b>, comme le Nasdaq et la Bourse de New York aux États-Unis, ou la Bourse de Taïwan.</p>
        <p>Le prix change toute la journée, car acheteurs et vendeurs se mettent sans cesse d’accord sur de nouveaux prix. Quand il y a plus d’acheteurs que de vendeurs, le prix monte. Quand il y a plus de vendeurs, il baisse.</p>
        ${key("le prix d’une action, c’est ce qu’acheteurs et vendeurs s’accordent à payer pour une part de l’entreprise, maintenant.")}
        ${live(`La liste contient <b>${d.n} actions</b> : ${d.us} américaines et ${d.tw} taïwanaises. Chacune a un code court appelé <b>ticker</b> : AAPL pour Apple, 2330 pour TSMC.`)}`,
      quiz: [
        ["Que signifie posséder une action d’une entreprise ?", ["Vous possédez une petite part de l’entreprise", "Vous avez prêté de l’argent à l’entreprise, qui vous rembourse avec intérêts", "Vous travaillez pour l’entreprise"], "Une action est une part de propriété. Prêter de l’argent à une entreprise, c’est une obligation, un autre type de placement."],
        ["Où les gens s’échangent-ils des actions ?", ["Sur une Bourse", "Seulement au siège de l’entreprise", "Dans le coffre-fort d’une banque"], "Les Bourses comme le Nasdaq ou la Bourse de Taïwan mettent en relation acheteurs et vendeurs."],
        ["Il y a plus de gens qui veulent acheter une action que la vendre. Que fait généralement le prix ?", ["Il monte", "Il baisse", "Il ne bouge pas du tout"], "Quand les acheteurs sont plus nombreux que les vendeurs, ils font monter le prix."],
      ],
      mission: "Ouvrez 3 actions différentes de la liste",
      video: [
        ["Une entreprise peut être divisée en millions de petites parts appelées actions."],
        ["Avec une action, vous possédez une petite part de l’entreprise.", { you: "Votre part" }],
        ["Quand plus de gens veulent acheter que vendre, le prix monte.", { l: "Acheteurs", r: "Vendeurs", arrow: "Prix" }],
        ["Quand plus de gens veulent vendre, le prix baisse.", { l: "Acheteurs", r: "Vendeurs", arrow: "Prix" }],
      ],
    },
    buysell: {
      title: "Acheter et vendre des actions", try: "Acheter 1 action",
      body: d => `
        <p>Pour acheter, vous choisissez une action et combien vous en voulez. Le coût est le nombre d’actions multiplié par le prix.</p>
        <p>Vous gagnez de l’argent si vous revendez <b>plus cher</b> que votre prix d’achat, et vous en perdez si vous revendez <b>moins cher</b>. Tant que vous n’avez pas vendu, le gain ou la perte n’existe que sur le papier et peut encore changer.</p>
        ${key("coût = actions × prix. Gain = (prix de vente − prix d’achat) × actions.")}
        ${live(`${d.s} coûte <b>${d.p}</b> par action : 10 actions coûteraient donc <b>${d.p10}</b>.${d.usd10 ? ` Soit environ <b>${d.usd10}</b> en dollars américains.` : ""}`)}`,
      quiz: [
        ["Vous achetez 5 actions à 100 $ et les revendez à 120 $. Quel est votre gain ?", ["20 $", "100 $", "600 $"], "Chaque action a gagné 20 $ et vous en aviez 5 : (120 − 100) × 5 = 100 $. Les 600 $ sont le total encaissé à la vente."],
        ["Vous achetez 20 actions à 10 $. Combien payez-vous ?", ["200 $", "30 $", "2 $"], "20 × 10 $ = 200 $."],
        ["Vous avez acheté à 50 $, le prix est à 45 $ et vous n’avez pas vendu. Qu’est-ce qui est vrai ?", ["Vous avez une perte sur le papier qui peut encore changer", "L’argent est perdu pour de bon", "Vous avez gagné de l’argent"], "Tant que vous ne vendez pas, le gain ou la perte reste sur le papier."],
      ],
      mission: "Achetez n’importe quelle action",
      video: [
        ["Acheter une action, c’est comme faire des courses : vous choisissez quoi et combien."],
        ["Le coût est le nombre d’actions multiplié par le prix.", { lines: ["10 actions × 50 $", "= 500 $"] }],
        ["Revendez plus cher que votre prix d’achat et vous gagnez de l’argent.", { tag: "Vendu plus cher → gain" }],
        ["Revendez moins cher et vous perdez. Tant que vous ne vendez pas, c’est seulement sur le papier.", { tag: "Vendu moins cher → perte" }],
      ],
    },
    pnl: {
      title: "Gains, pertes et valeur du portefeuille", try: "Voir vos positions",
      body: d => `
        <p>Votre <b>portefeuille</b>, c’est tout ce qu’il y a sur votre compte : vos liquidités plus toutes vos actions.</p>
        <p><b>G/P</b> signifie gains et pertes. Le tableau des positions compare la valeur actuelle de chaque action à votre <b>prix de revient moyen</b>, c’est-à-dire ce que vous avez payé en moyenne par action sur tous vos achats.</p>
        <ul>
          <li>Le G/P <b>latent</b> est le gain ou la perte sur les actions que vous détenez encore. Il change à chaque mouvement de prix.</li>
          <li>Le G/P <b>réalisé</b> est figé au moment où vous vendez.</li>
        </ul>
        ${key("valeur du portefeuille = liquidités + valeur actuelle de chaque action détenue.")}
        ${live(`Vous avez <b>${d.cash}</b> en liquidités et <b>${d.mv}</b> en ${d.n} action${d.n === 1 ? "" : "s"}, soit <b>${d.total}</b> au total. C’est ${B(d.up ? "pos" : "neg", `${d.up ? "+" : "−"}${d.amt}`)} par rapport aux 100 000 $ de départ.`)}`,
      quiz: [
        ["Vous achetez le même nombre d’actions deux fois : à 50 $ puis à 70 $. Quel est votre prix de revient moyen ?", ["50 $", "60 $", "70 $"], "Des quantités égales à 50 $ et 70 $ donnent une moyenne de 60 $ par action."],
        ["Vous avez 30 000 $ en liquidités et 70 000 $ d’actions. Quelle est la valeur de votre portefeuille ?", ["100 000 $", "70 000 $", "40 000 $"], "Liquidités plus actions : 30 000 $ + 70 000 $ = 100 000 $."],
        ["Quel gain est définitivement acquis ?", ["Le gain réalisé, après la vente", "Le gain latent, tant que vous détenez l’action", "Aucun"], "Une fois que vous vendez, le gain est réalisé et ne peut plus changer."],
      ],
      mission: "Vendez une action que vous détenez",
      video: [
        ["Votre portefeuille, ce sont vos liquidités plus la valeur de toutes vos actions.", { lines: ["Liquidités 60 000 $", "+ Actions 40 000 $", "= Portefeuille 100 000 $"] }],
        ["Votre prix de revient moyen est ce que vous avez payé en moyenne par action.", { lines: ["Achat 1 @ 50 $", "Achat 1 @ 70 $", "Prix moyen = 60 $"] }],
        ["Tant que vous détenez l’action, votre gain ou perte est latent : il suit le prix.", { tag: "Latent" }],
        ["Une fois vendu, le gain ou la perte est réalisé et figé.", { text: "Réalisé" }],
      ],
    },
    orders: {
      title: "Types d’ordres : au marché, à cours limité et stop", try: "Aller à Trader",
      body: d => `
        <p>Un <b>ordre</b> est votre instruction d’acheter ou de vendre. Le type d’ordre décide <i>quand</i> il s’exécute et <i>à quel prix</i>.</p>
        <ul>
          <li><b>Ordre au marché :</b> acheter ou vendre tout de suite au prix actuel. Rapide, mais le prix peut un peu bouger avant l’exécution.</li>
          <li><b>Ordre à cours limité :</b> acheter seulement à votre prix ou moins cher, ou vendre seulement à votre prix ou plus cher. Vous maîtrisez le prix, mais il peut ne jamais s’exécuter.</li>
          <li><b>Ordre stop :</b> devient un ordre au marché quand le prix atteint le niveau choisi. Un <b>stop-loss</b> est un ordre stop qui vend pour limiter une perte.</li>
        </ul>
        <p>Rien n’oblige non plus à tout vendre d’un coup. Vendre <b>une partie</b> d’une position est une façon courante de sécuriser un gain ou de réduire son risque.</p>
        ${key("au marché = maintenant, limité = votre prix, stop = une sortie automatique.")}
        ${live(`Chaque transaction dans StockPilot est un ordre au marché. ${d.s} vaut <b>${d.p}</b> en ce moment : un ordre au marché de 10 actions coûterait environ <b>${d.p10}</b>.`)}`,
      quiz: [
        ["Vous voulez acheter une action, mais seulement si elle baisse à 95 $. Elle vaut 100 $. Quel ordre convient ?", ["Un ordre à cours limité à 95 $", "Un ordre au marché", "Un ordre stop à 105 $"], "Un ordre à cours limité à 95 $ ne s’exécute qu’à 95 $ ou moins."],
        ["Quel est le principal risque d’un ordre à cours limité ?", ["Il peut ne jamais s’exécuter si le prix n’atteint pas votre limite", "Il s’exécute toujours à un moins bon prix", "Il ne marche que pour les actions taïwanaises"], "Vous maîtrisez le prix, mais si l’action n’y arrive jamais, il ne se passe rien."],
        ["Vous détenez 100 actions qui ont beaucoup monté. Comment sécuriser un gain tout en gardant des actions ?", ["Vendre une partie de la position, par exemple 50 actions", "Ne jamais rien vendre", "En acheter 100 de plus"], "Vendre une partie sécurise un gain, et vous gardez le reste au cas où ça continue de monter."],
      ],
      mission: "Vendez une partie d’une position en gardant des actions",
      video: [
        ["Chaque transaction commence par un ordre : votre instruction d’acheter ou de vendre."],
        ["Un ordre à cours limité attend votre prix. Ici, il s’exécute seulement quand le prix descend jusqu’à la ligne pointillée.", { limit: "Limite 95 $", done: "Exécuté ✓" }],
        ["L’ordre au marché s’exécute tout de suite, le limité attend votre prix et le stop est une sortie automatique.", { lines: ["Au marché → maintenant", "Limité → votre prix", "Stop → sortie automatique"] }],
        ["Vous pouvez aussi vendre une partie : sécuriser un gain et garder le reste.", { lines: ["100 actions détenues", "Vendre 50 → gain sécurisé", "Garder 50 → toujours dans la course"] }],
      ],
    },
    chart: {
      title: "Lire un graphique de prix", try: "Survoler le graphique",
      body: d => `
        <p>Le graphique de l’onglet Trader montre le prix sur les 90 dernières séances. La gauche est plus ancienne et le point au bord droit est le prix actuel.</p>
        <p>Regardez la direction sur plusieurs semaines, pas jour par jour. Une ligne qui monte de gauche à droite est une <b>tendance haussière</b>. Une ligne qui descend est une <b>tendance baissière</b>. Les prix bougent chaque jour : une mauvaise journée seule ne dit presque rien.</p>
        <p>Le <b>plus haut et le plus bas sur 90 jours</b> montrent la fourchette du prix. Un prix proche du plus haut a monté ; un prix proche du plus bas a baissé.</p>
        ${key("prenez du recul. La tendance sur plusieurs semaines compte plus que le mouvement du jour.")}
        ${live(`${d.s} est à ${B(d.pos ? "pos" : "neg", d.c30)} sur 30 jours. Sa fourchette sur 90 jours va de ${d.lo} à ${d.hi}, et aujourd’hui il est à <b>${d.where} %</b> du chemin depuis le plus bas.`)}`,
      quiz: [
        ["Une action a perdu 2 % aujourd’hui mais gagné 15 % en trois mois. Quelle est la vue d’ensemble ?", ["Elle est en tendance haussière et c’est une petite baisse", "Elle s’effondre, il faut vendre tout de suite", "Les graphiques ne disent rien"], "Une baisse de 2 % dans une hausse de 15 % est du bruit normal. La tendance de fond reste haussière."],
        ["Sur un graphique de prix, où est aujourd’hui ?", ["Au bord droit", "Au bord gauche", "Au milieu"], "Un graphique se lit de gauche (le passé) à droite (maintenant)."],
        ["Que montre une ligne qui monte de gauche à droite pendant des mois ?", ["Une tendance haussière", "Une tendance baissière", "Un dividende"], "Monter pendant des semaines et des mois, c’est une tendance haussière."],
      ],
      mission: "Ouvrez le graphique agrandi",
      video: [
        ["Un graphique montre comment le prix a bougé. La gauche est le passé, le bord droit est aujourd’hui.", { tag: "Aujourd’hui" }],
        ["Regardez la direction sur plusieurs semaines : monter de gauche à droite, c’est une tendance haussière.", { tag: "Hausse ↗" }],
        ["Descendre, c’est une tendance baissière.", { tag: "Baisse ↘" }],
        ["Une mauvaise journée au milieu d’une longue hausse n’est souvent que du bruit. Prenez du recul !", { tag: "Juste une mauvaise journée" }],
      ],
    },
    news: {
      title: "Comment l’actualité fait bouger les prix", try: "Lire les actualités du marché",
      body: d => `
        <p>Les prix bougent surtout quand il y a des nouvelles. Il y en a trois grands types :</p>
        <ul>
          <li><b>Les nouvelles d’entreprise</b>, comme les résultats, les nouveaux produits ou les procès. Elles font bouger une action, parfois beaucoup en une journée.</li>
          <li><b>Les nouvelles de secteur</b> touchent ensemble des entreprises similaires. Quand la demande de puces IA s’envole, NVIDIA, TSMC et MediaTek montent souvent ensemble.</li>
          <li><b>Les nouvelles de tout le marché</b>, comme les taux d’intérêt, l’inflation ou l’économie. Elles font bouger presque toutes les actions en même temps.</li>
        </ul>
        <p>Les prix réagissent en quelques secondes : quand vous lisez un titre, le mouvement a généralement déjà eu lieu. Acheter <i>à cause</i> d’un titre qu’on vient de voir est une erreur classique de débutant.</p>
        ${key("l’actualité fait bouger les prix très vite. Quand vous l’apprenez, elle est souvent déjà dans le prix.")}
        ${live(`${d.latest ? `Dernier titre : <b>${d.latest}</b> (${d.chg}). ` : ""}En ce moment, <b>${d.ups} actions sur ${d.n}</b> sont en hausse aujourd’hui. Regardez la carte des actualités dans l’onglet Trader pour voir comment les titres font bouger les prix.`)}`,
      quiz: [
        ["La banque centrale relève ses taux par surprise. Que se passe-t-il généralement ?", ["La plupart des actions bougent en même temps, souvent à la baisse", "Seules les actions bancaires bougent", "Rien ; les actions ignorent les taux"], "Les taux d’intérêt touchent toute l’économie : une telle nouvelle fait bouger presque toutes les actions. Des taux plus hauts font généralement baisser les prix."],
        ["La demande de puces IA s’envole. Quelles actions risquent de bouger ensemble ?", ["Les fabricants de puces comme NVIDIA, TSMC et MediaTek", "Seulement les banques", "Seulement les opérateurs télécoms"], "Les nouvelles de secteur font bouger ensemble des entreprises similaires."],
        ["Une action a bondi de 5 % il y a une minute sur une bonne nouvelle. Quel est le principal risque d’acheter maintenant ?", ["La nouvelle est peut-être déjà dans le prix", "Il n’y a aucun risque", "L’actualité ne fait jamais bouger les prix"], "Les prix réagissent en quelques secondes : ceux qui achètent tard achètent souvent au sommet du bond."],
      ],
      mission: "Touchez le bouton d’une action dans les actualités du marché",
      video: [
        ["L’actualité fait bouger les prix, parfois beaucoup en une seule journée.", { h: "La demande de puces IA s’envole" }],
        ["Il y a trois types de nouvelles, et chacun fait bouger un groupe d’actions différent.", { items: ["Entreprise → une action", "Secteur → entreprises similaires", "Marché → presque tout"] }],
        ["Les prix réagissent en quelques secondes. Quand vous lisez le titre, le mouvement a souvent déjà eu lieu.", { tag: "Déjà monté !" }],
        ["Alors n’achetez pas juste à cause d’un titre que vous venez de voir.", { text: "Ne courez pas après les titres" }],
      ],
    },
    ma: {
      title: "Tendances et moyennes mobiles", try: "Voir la tendance sur le graphique",
      body: d => `
        <p>Une <b>moyenne mobile</b> est le prix de clôture moyen des derniers jours. Elle lisse les petites variations quotidiennes pour que la tendance soit plus lisible. La ligne pointillée du graphique est la moyenne sur 20 jours.</p>
        <ul>
          <li>La <b>moyenne 20 jours</b> montre la tendance récente.</li>
          <li>La <b>moyenne 50 jours</b> montre la tendance plus longue.</li>
        </ul>
        <p>Quand la moyenne 20 jours est au-dessus de la moyenne 50 jours, les prix récents sont plus hauts que les anciens : cela suggère une tendance haussière. En dessous, cela suggère une tendance baissière. Sur les vrais marchés, les tendances durent souvent des semaines, c’est pourquoi les investisseurs les suivent.</p>
        ${key("20 jours au-dessus de 50 jours suggère une tendance haussière jusqu’ici. Cela ne promet rien pour la suite.")}
        ${live(`Pour ${d.s}, la moyenne 20 jours est à <b>${d.a}</b> et la moyenne 50 jours à <b>${d.b}</b> : la tendance semble ${B(d.up ? "pos" : "neg", d.up ? "haussière" : "baissière")}.`)}`,
      quiz: [
        ["La moyenne 20 jours d’une action est à 105 $ et sa moyenne 50 jours à 98 $. Que cela suggère-t-il ?", ["Les prix récents sont plus hauts : tendance haussière", "Les prix récents sont plus bas : tendance baissière", "L’action va forcément continuer de monter"], "La moyenne récente dépasse la longue : la tendance a été haussière. Cela décrit le passé, ce n’est pas une garantie."],
        ["À quoi sert une moyenne mobile ?", ["À lisser les variations quotidiennes pour mieux voir la tendance", "À prédire exactement le prix de demain", "À montrer le bénéfice de l’entreprise"], "Elle fait la moyenne des prix récents pour rendre la tendance plus claire."],
        ["La moyenne 20 jours vient de passer sous la moyenne 50 jours. Que cela suggère-t-il ?", ["La tendance est peut-être en train de se retourner à la baisse", "L’action va forcément monter demain", "Rien du tout"], "Les prix récents sont maintenant plus bas que les anciens : un signe que la tendance faiblit peut-être."],
      ],
      mission: "Achetez une action en tendance haussière",
      video: [
        ["Une moyenne mobile est le prix moyen des derniers jours. Elle lisse les variations.", { tag: "Moyenne 20 jours" }],
        ["Quand la moyenne 20 jours est au-dessus de la 50 jours, la tendance a été haussière.", { tag: "20 > 50 ↗" }],
        ["En dessous, la tendance a été baissière.", { tag: "20 < 50 ↘" }],
        ["Elle décrit le passé. C’est un indice, pas une promesse.", { text: "Indice, pas promesse" }],
      ],
    },
    rsi: {
      title: "Élan et RSI", try: "Ouvrir les signaux du coach",
      body: d => `
        <p>L’<b>élan</b> (momentum) mesure la force avec laquelle un prix a bougé récemment. Le coach regarde la variation des 30 derniers jours.</p>
        <p>Le <b>RSI</b> (indice de force relative) compare la taille des jours de hausse et de baisse récents sur 14 jours et la transforme en un nombre de 0 à 100.</p>
        <ul>
          <li><b>Au-dessus de 70 :</b> le prix a monté vite et peut être <b>suracheté</b> ; il pourrait reculer.</li>
          <li><b>En dessous de 30 :</b> le prix a baissé vite et peut être <b>survendu</b> ; il pourrait rebondir.</li>
          <li><b>Entre 30 et 70 :</b> neutre.</li>
        </ul>
        <p>Ce sont des avertissements, pas des règles. Une action forte peut rester surachetée pendant des mois.</p>
        ${key("le RSI dit à quelle vitesse un prix a bougé, pas où il va aller.")}
        ${live(`${d.s} a un RSI de <b>${d.r}</b> (${["survendue", "neutre", "surachetée"][d.zone]}) et un élan de ${B(d.pos ? "pos" : "neg", d.mom)} sur 30 jours.`)}`,
      quiz: [
        ["Le RSI d’une action est à 82. Que cela signifie-t-il généralement ?", ["Elle a monté vite et peut être surachetée", "Elle est bon marché et va forcément monter", "L’entreprise perd de l’argent"], "Un RSI au-dessus de 70 signifie que les hausses récentes ont été particulièrement fortes. Cela ne dit rien des bénéfices de l’entreprise."],
        ["Le RSI d’une action est à 25. Dans quelle zone est-elle ?", ["Survendue", "Surachetée", "Neutre"], "En dessous de 30, c’est la zone de survente."],
        ["Un RSI de 80 veut-il dire que le prix va forcément baisser demain ?", ["Non, c’est un avertissement, pas une règle", "Oui, toujours", "Seulement le lundi"], "Les actions fortes peuvent rester surachetées longtemps."],
      ],
      mission: "Achetez une action sans courir après (RSI sous 70)",
      video: [
        ["Le RSI est un score de 0 à 100 qui montre à quelle vitesse un prix a bougé.", { zone: "Neutre" }],
        ["Au-dessus de 70, le prix a monté vite et peut être suracheté.", { zone: "Surachetée" }],
        ["En dessous de 30, il a baissé vite et peut être survendu.", { zone: "Survendue" }],
        ["Ce sont des avertissements, pas des règles : les actions fortes peuvent rester surachetées longtemps.", { tag: "RSI 85… et ça monte encore" }],
      ],
    },
    risk: {
      title: "Risque et volatilité", try: "Voir l’action la plus volatile",
      body: d => `
        <p>La <b>volatilité</b> mesure à quel point un prix fait des montagnes russes. Cette app l’affiche en pourcentage annuel : plus le nombre est élevé, plus les variations sont fortes.</p>
        <p>Les grandes variations marchent dans les deux sens : des gains possibles plus grands et des pertes possibles plus grandes. Une bonne question avant d’acheter : <i>si elle chutait de 30 %, pourrais-je rester calme et ne pas vendre dans la panique ?</i></p>
        ${key("plus de volatilité, c’est un trajet plus agité, dans les deux sens.")}
        ${live(`L’action la plus volatile en ce moment est <b>${d.hi}</b>, à ${d.hiV} par an. La plus calme est <b>${d.lo}</b>, à ${d.loV}.`)}`,
      quiz: [
        ["L’action A a une volatilité de 12 % et l’action B de 45 %. Laquelle bouge généralement le plus ?", ["L’action B", "L’action A", "Elles bougent à peu près autant"], "Une volatilité de 45 % signifie des mouvements typiques bien plus grands que 12 %."],
        ["Pourquoi mettre un montant plus petit sur une action très volatile ?", ["Pour qu’une grosse chute n’abîme pas trop tout votre compte", "Parce que les actions volatiles sont toujours mauvaises", "Pour payer moins de frais"], "De petites positions empêchent les grosses variations de nuire à tout votre portefeuille."],
        ["Qu’est-ce qui bouge généralement le plus : un grand opérateur télécom ou un jeune constructeur de voitures électriques ?", ["Le jeune constructeur de voitures électriques", "Le grand opérateur télécom", "Ils bougent pareil"], "Les jeunes entreprises en pleine évolution sont généralement bien plus volatiles que les services stables."],
      ],
      mission: "Ouvrez une action dont la volatilité dépasse 40 %",
      video: [
        ["La volatilité mesure l’ampleur des variations d’un prix.", { a: "Action calme", b: "Action nerveuse" }],
        ["De grandes variations, ce sont des gains possibles plus grands, et des pertes possibles plus grandes.", { tag: "+30 % … −30 %" }],
        ["Avant d’acheter, demandez-vous : pourrais-je supporter une grosse chute sans paniquer ?", { lines: ["Demandez-vous :", "si elle chutait de 30 %…", "resterais-je calme ?"] }],
        ["Pour les actions nerveuses, utilisez un montant plus petit.", { lines: ["Action nerveuse", "→ montant plus petit"] }],
      ],
    },
    diversify: {
      title: "Ne mettez pas tous vos œufs dans le même panier", try: "Voir l’ETF 0050",
      body: d => `
        <p><b>Diversifier</b>, c’est répartir son argent entre beaucoup d’entreprises, de secteurs et même de pays. Si une entreprise a de mauvaises nouvelles, les autres amortissent le choc.</p>
        <p>La <b>taille des positions</b>, c’est décider combien d’argent va dans chaque action. Ici, le pilote automatique ne met jamais plus de 15 % du portefeuille dans une seule action.</p>
        <p>Un fonds comme un <b>ETF</b> détient beaucoup d’actions à la fois. Le <b>0050</b> de la liste est un ETF qui contient environ 50 des plus grandes entreprises de Taïwan : en un achat, vous avez un morceau de toutes.</p>
        ${key("aucune action seule ne devrait pouvoir couler tout votre portefeuille.")}
        ${live(d.n ? `Vous détenez <b>${d.n}</b> action${d.n === 1 ? "" : "s"} sur <b>${d.mk}</b> marché${d.mk === 1 ? "" : "s"}. Votre plus grosse position, <b>${d.big}</b>, représente <b>${d.bigP}</b> de votre portefeuille.` : "Vous ne détenez encore aucune action. Ensuite, cette case montrera à quel point votre argent est réparti.")}`,
      quiz: [
        ["Quel portefeuille est le plus diversifié ?", ["10 actions dans la tech, la banque et les télécoms, sur deux pays", "Tout votre argent sur une action que vous adorez", "Deux fabricants de puces"], "Des secteurs et des pays différents ne baissent généralement pas en même temps, ce qui répartit le risque."],
        ["Une action représente 5 % de votre portefeuille et chute de 20 %. De combien baisse environ tout votre portefeuille ?", ["Environ 1 %", "Environ 20 %", "Environ 5 %"], "5 % × 20 % = 1 %."],
        ["Qu’est-ce qu’un ETF ?", ["Un fonds qui détient beaucoup d’actions et se négocie comme une seule", "L’action d’une seule entreprise", "Une sorte de compte bancaire"], "En un seul achat d’ETF, vous avez un morceau de beaucoup d’entreprises."],
      ],
      mission: "Détenez en même temps des actions américaines et taïwanaises",
      video: [
        ["Mettre tous ses œufs dans le même panier est risqué : une chute et tout se casse.", { l: "Un panier", r: "Plusieurs paniers" }],
        ["Répartissez votre argent entre beaucoup d’entreprises, de secteurs et de pays.", { main: "Beaucoup de petites parts" }],
        ["Si chaque action est une petite part de votre portefeuille, une mauvaise ne peut pas vous couler.", { lines: ["Une action −20 %", "sur une position de 5 %", "= seulement −1 % pour vous"] }],
        ["Un ETF regroupe beaucoup d’actions en un seul achat : un moyen simple de diversifier."],
      ],
    },
    psychology: {
      title: "Vos émotions : peur, avidité et FOMO", try: "Ouvrir le Journal",
      body: d => `
        <p>Le plus dur en Bourse, ce ne sont souvent pas les calculs. C’est <b>vous</b>. Deux sentiments causent la plupart des erreurs :</p>
        <ul>
          <li><b>L’avidité et le FOMO</b> (la peur de rater quelque chose) : acheter juste parce que ça a monté et que tout le monde en parle.</li>
          <li><b>La peur et la panique :</b> vendre après une chute soudaine, souvent pile au plus bas.</li>
        </ul>
        <p>Autres pièges courants : garder trop longtemps une action perdante parce que vendre revient à admettre une erreur, et trader trop souvent parce qu’agir semble mieux qu’attendre.</p>
        <p>La solution : un <b>plan écrit avant de trader</b>, et l’habitude de revoir ses transactions. C’est à ça que sert l’onglet Journal.</p>
        ${key("faites votre plan quand vous êtes calme, puis suivez-le quand vous ne l’êtes plus.")}
        ${live(d.n ? `Votre Journal contient <b>${d.n}</b> de vos transactions dans cette zone, dont <b>${d.r}</b> notées comme décisions risquées. Ouvrez le Journal pour voir quoi améliorer.` : "Vous n’avez encore fait aucune transaction dans cette zone. Ensuite, le Journal vous montrera les habitudes à améliorer.")}`,
      quiz: [
        ["Une action a pris 40 % ce mois-ci et tout le monde en parle en ligne. Quel sentiment pourrait vous pousser à acheter sans plan ?", ["Le FOMO, la peur de rater quelque chose", "La patience", "La diversification"], "Le FOMO donne l’impression qu’une action qui monte est un train à ne pas rater. Un plan aide à vérifier si elle vous convient vraiment."],
        ["Votre action perd 3 % en un jour, mais sa tendance reste haussière. Qu’est-ce que vendre dans la panique ?", ["Vendre juste à cause de la baisse qui fait peur, sans regarder son plan", "Suivre sa règle de stop-loss", "Acheter plus parce que la tendance est haussière"], "Vendre dans la panique, c’est laisser la peur décider. Une mauvaise journée n’est souvent que du bruit."],
        ["Qu’est-ce qui aide le plus contre les décisions émotionnelles ?", ["Un plan écrit avant de trader, et revoir ses transactions", "Regarder les prix chaque minute", "Trader plus souvent"], "Un plan fait au calme et une revue honnête empêchent les émotions de prendre le dessus."],
      ],
      mission: "Ouvrez l’onglet Journal et lisez votre analyse",
      video: [
        ["Les prix montent et descendent, et nos émotions aussi."],
        ["Quand une action s’envole et que tout le monde en parle, le FOMO nous donne envie de sauter dedans au sommet.", { tag: "Tout le monde achète !" }],
        ["Quand elle chute soudain, la peur nous donne envie de vendre, souvent pile au plus bas.", { tag: "Panique !" }],
        ["Le remède : planifier au calme, suivre le plan et revoir chaque transaction.", { items: ["Écrire son plan d’abord", "Le suivre", "Revoir dans le Journal"] }],
      ],
    },
    whenact: {
      title: "Quand acheter et quand vendre", try: "Lire la carte du coach",
      body: d => `
        <p>Les bons investisseurs fixent leurs règles <b>avant</b> de trader, pour que la peur et l’excitation ne décident pas à leur place. Voici un plan simple. Le coach de l’onglet Trader le suit, et le Journal compare chacune de vos transactions à ce plan.</p>
        <div class="checklist">
          <div><h4>Envisagez d’acheter quand…</h4><ul>
            <li>La tendance est haussière (moyenne 20 jours au-dessus de la 50 jours).</li>
            <li>Elle n’est pas surachetée (RSI sous 70).</li>
            <li>Vous pouvez dire <i>pourquoi</i> vous achetez en une phrase.</li>
            <li>Le montant est petit : environ 5 à 10 % du portefeuille.</li>
            <li>Vous savez déjà à quel prix vous vendriez si vous vous trompez.</li></ul></div>
          <div><h4>Envisagez de vendre quand…</h4><ul>
            <li>Elle touche votre <b>stop-loss</b>, par exemple 8 % sous votre prix d’achat.</li>
            <li>La tendance se retourne et votre raison d’acheter ne tient plus.</li>
            <li>Elle est devenue une trop grosse part de votre portefeuille.</li>
            <li>Elle a beaucoup monté et vous voulez sécuriser une partie du gain.</li></ul></div>
          <div><h4>Évitez de…</h4><ul>
            <li>Acheter juste parce que tout le monde en parle (FOMO).</li>
            <li>Vendre dans la panique après une mauvaise journée.</li>
            <li>Renforcer une action en baisse juste pour « se refaire ».</li>
            <li>Tout miser sur une seule action.</li></ul></div>
        </div>
        ${key("prévoyez la sortie avant d’entrer. Sachez pourquoi vous achetez, combien, et quand vous vendriez.")}
        ${live(`L’avis du coach sur <b>${d.s}</b> : ${d.sum}<br><br><b>Sa suggestion :</b> ${d.first}`)}`,
      quiz: [
        ["Vous avez acheté une action à 100 $ avec la règle de vendre si elle perd 8 %. Elle vaut 91 $. Que dit votre plan ?", ["Vendre, car elle est sous votre stop-loss de 92 $", "Acheter plus pour baisser le prix moyen", "Ignorer, elle va remonter"], "8 % sous 100 $ font 92 $, et 91 $ a franchi cette ligne. Suivre la règle empêche une petite perte de grossir."],
        ["Lequel de ces points ne fait PAS partie d’une bonne liste d’achat ?", ["Tout le monde en ligne s’enthousiasme", "La tendance est haussière", "Vous savez où vendre si vous vous trompez"], "L’enthousiasme en ligne, c’est du FOMO, pas une raison."],
        ["Une action que vous détenez représente maintenant 30 % de votre portefeuille. Que faire de raisonnable ?", ["L’alléger pour réduire le risque", "En acheter plus", "Ne rien faire"], "Alléger une position trop grosse évite qu’une seule action contrôle vos résultats."],
      ],
      mission: "Faites une transaction que le Journal note Bonne décision",
      video: [
        ["Avant d’acheter, parcourez une liste.", { items: ["Tendance haussière", "RSI sous 70", "Une raison claire", "Un petit montant", "Prix de sortie prêt"] }],
        ["Fixez votre stop-loss à l’avance, par exemple 8 % sous votre prix d’achat.", { limit: "Stop-loss −8 %", done: "Vendu ✓" }],
        ["Connaissez aussi vos raisons de vendre.", { items: ["Stop-loss touché", "Tendance retournée", "Position trop grosse", "Prendre une partie du gain"] }],
        ["Prévoyez la sortie avant d’entrer, et le Journal vérifiera si vous l’avez bien suivie.", { text: "La sortie d’abord" }],
      ],
    },
    compound: {
      title: "Le temps et les intérêts composés", try: "Aller à Trader",
      body: d => `
        <p>Les <b>intérêts composés</b>, c’est quand vos gains commencent à rapporter leurs propres gains. Si vous gagnez 8 % en un an, l’année suivante vous gagnez 8 % sur un montant plus grand, et ainsi de suite.</p>
        <p>Plus vous attendez, plus ça grossit vite. C’est pour ça que le temps est l’un des meilleurs amis de l’investisseur, et que commencer tôt compte plus que commencer gros.</p>
        <ul>
          <li>1 000 $ qui grandissent de 8 % par an deviennent environ <b>1 469 $</b> en 5 ans, <b>2 159 $</b> en 10 ans et <b>4 661 $</b> en 20 ans.</li>
          <li>Les pertes se composent aussi : après une perte de 50 %, il faut un gain de 100 % juste pour revenir au point de départ.</li>
        </ul>
        <p>Les vrais marchés ne grandissent pas du même montant chaque année, et certaines années sont en baisse. Les 8 % ne sont qu’un exemple.</p>
        ${key("le temps × une croissance régulière bat l’envie de s’enrichir vite.")}
        ${live(`Si vous placiez <b>1 000 $</b> dans un fonds qui grandit de 8 % par an, vous auriez environ <b>${d.v}</b> après 30 ans, sans rien ajouter.`)}`,
      quiz: [
        ["1 000 $ grandissent de 10 % par an. Combien y a-t-il environ après 2 ans ?", ["1 210 $", "1 200 $", "1 100 $"], "Année 1 : 1 100 $. Année 2 : 10 % de 1 100 $ font 110 $, donc 1 210 $. Les 10 $ en plus, ce sont les intérêts composés."],
        ["Pourquoi commencer à investir tôt aide-t-il autant ?", ["Les gains ont plus d’années pour rapporter leurs propres gains", "Les actions sont moins chères pour les jeunes", "On ne paie pas de frais"], "Plus de temps, c’est plus de tours d’intérêts composés."],
        ["Une action chute de 50 %. De combien doit-elle monter pour retrouver son ancien prix ?", ["100 %", "50 %", "25 %"], "100 $ tombent à 50 $. Pour repasser de 50 $ à 100 $, il faut doubler : une hausse de 100 %."],
      ],
      mission: "Gardez une action achetée pendant 3 séances",
      video: [
        ["Intérêts composés : vos gains commencent à rapporter leurs propres gains."],
        ["Chaque année, 8 % s’ajoutent sur un montant plus grand : les barres grandissent de plus en plus vite.", { unit: "ans" }],
        ["Après 20 ans à 8 % par an, 1 000 $ deviennent environ 4 661 $.", { unit: "ans" }],
        ["Les pertes se composent aussi : après une chute de 50 %, il faut +100 % pour revenir. Protéger son argent compte.", { lines: ["−50 % : 100 $ → 50 $", "+100 % : 50 $ → 100 $", "Évitez les grosses pertes !"] }],
      ],
    },
    dividends: {
      title: "Les dividendes : être payé pour détenir une action", try: "Voir Chunghwa Telecom (2412)",
      body: d => `
        <p>Certaines entreprises reversent une partie de leurs bénéfices aux actionnaires en argent. Cet argent, c’est un <b>dividende</b>, généralement versé une à quatre fois par an.</p>
        <p>Le <b>rendement du dividende</b> compare le dividende annuel au prix de l’action. Une action à 100 $ qui verse 4 $ par an a un rendement de 4 %.</p>
        <ul>
          <li>Les entreprises stables et matures, comme les télécoms et les banques, versent souvent des dividendes. Celles qui grandissent vite versent souvent peu ou rien et réinvestissent dans leur croissance.</li>
          <li>Beaucoup d’investisseurs <b>réinvestissent</b> leurs dividendes pour acheter plus d’actions, ce qui renforce les intérêts composés.</li>
          <li>Un rendement très élevé peut être un signal d’alarme : parfois le prix a chuté parce que l’entreprise va mal, et le dividende risque d’être réduit.</li>
        </ul>
        <p>Les investisseurs taïwanais sont connus pour adorer les dividendes, et la saison annuelle de détachement (除權息) est un grand événement.</p>
        ${key("un dividende, c’est de l’argent issu des bénéfices ; rendement = dividende annuel ÷ prix.")}
        ${live(`Chunghwa Telecom (2412) vaut <b>${d.p}</b> par action dans le simulateur. Si elle versait NT$5 par an, son rendement serait d’environ <b>${d.y}</b>. StockPilot ne verse pas encore de dividendes ; c’est juste un exemple.`)}`,
      quiz: [
        ["Une action à 50 $ verse 2 $ de dividende par an. Quel est son rendement ?", ["4 %", "2 %", "25 %"], "2 $ ÷ 50 $ = 0,04, soit 4 %."],
        ["Quel type d’entreprise a le plus de chances de verser un dividende régulier ?", ["Une entreprise mature aux bénéfices stables, comme un opérateur télécom", "Une toute jeune start-up qui perd de l’argent", "N’importe quelle entreprise dont l’action a monté cette semaine"], "Des bénéfices stables rendent possible un dividende régulier."],
        ["Une action affiche soudain un rendement de 15 %. Que faut-il en penser ?", ["Prudence : le prix s’est peut-être effondré à cause de problèmes", "C’est de l’argent gratuit sans risque", "Les rendements ne changent jamais"], "Rendement = dividende ÷ prix. Un prix qui s’effondre gonfle le rendement, et le dividende risque d’être réduit."],
      ],
      mission: "Achetez des actions Chunghwa Telecom (2412)",
      video: [
        ["Certaines entreprises reversent leurs bénéfices aux actionnaires en argent : un dividende.", { t: "Dividendes" }],
        ["Le rendement du dividende compare le dividende annuel au prix.", { lines: ["Dividende annuel 4 $", "Prix de l’action 100 $", "Rendement = 4 ÷ 100 = 4 %"] }],
        ["Réinvestir les dividendes achète plus d’actions, qui versent elles aussi des dividendes.", { unit: "ans" }],
        ["Attention : un rendement énorme peut signifier que le prix s’est effondré parce que l’entreprise va mal.", { tag: "Rendement de 15 % ?! 🚩" }],
      ],
    },
    valuation: {
      title: "Bon marché ou chère ? Le PER", try: "Chercher P/E dans le vocabulaire",
      body: () => `
        <p>Le prix seul ne dit pas si une action est bon marché. Une action à 1 000 $ peut être une bonne affaire, et une action à 10 $ peut être trop chère. Ce qui compte, c’est le prix comparé à ce que l’entreprise <b>gagne</b>.</p>
        <p>Le <b>PER</b> (price-earnings ratio, P/E en anglais) divise le prix de l’action par le bénéfice annuel par action, appelé <b>BPA</b>. Un PER de 20 signifie que les investisseurs paient 20 $ pour chaque dollar de bénéfice annuel.</p>
        <ul>
          <li>Un <b>PER élevé</b> signifie souvent que les investisseurs attendent une croissance rapide. Si elle ne vient pas, le prix peut chuter fortement.</li>
          <li>Un <b>PER bas</b> peut signifier une bonne affaire, ou une entreprise qui inquiète.</li>
          <li>Comparez le PER avec des entreprises similaires du même secteur, pas entre des entreprises très différentes.</li>
        </ul>
        ${key("le prix seul dit très peu ; comparez-le aux bénéfices.")}
        ${live("StockPilot n’affiche pas les bénéfices, alors essayez avec un exemple : une action à 60 $ qui gagne 3 $ par action a un PER de <b>20</b>. Si le prix monte à 90 $ alors que le bénéfice reste à 3 $, le PER passe à <b>30</b> : l’action est devenue plus chère.")}`,
      quiz: [
        ["Une action coûte 40 $ et gagne 2 $ par action chaque année. Quel est son PER ?", ["20", "80", "2"], "40 $ ÷ 2 $ = 20."],
        ["L’action A coûte 500 $ et l’action B 20 $. Laquelle est la moins chère ?", ["Impossible à dire avec le prix seul ; il faut comparer le prix aux bénéfices", "A, parce qu’elle est plus connue", "B, parce que le nombre est plus petit"], "Bon marché ou cher dépend du prix comparé aux bénéfices."],
        ["Pourquoi une entreprise tech à forte croissance peut-elle avoir un PER élevé ?", ["Les investisseurs s’attendent à ce que ses bénéfices augmentent beaucoup", "Elle n’a pas d’actionnaires", "Un PER élevé est toujours une bonne affaire"], "On paie plus aujourd’hui pour des bénéfices attendus demain."],
      ],
      mission: "Trouvez « P/E » (PER) dans le vocabulaire",
      video: [
        ["Une action à 1 000 $ est-elle chère ? Pas forcément. Le prix seul dit très peu."],
        ["Le PER divise le prix par le bénéfice annuel par action.", { lines: ["Prix 60 $", "Bénéfice par action 3 $", "PER = 60 ÷ 3 = 20"] }],
        ["Si le prix monte mais pas les bénéfices, l’action devient plus chère.", { lines: ["Prix 90 $", "Bénéfice toujours 3 $", "PER = 30 → plus chère"] }],
        ["Utilisez le PER pour comparer des entreprises similaires, et souvenez-vous que c’est un indice, pas toute l’histoire.", { items: ["PER élevé : grands espoirs", "PER bas : affaire ou inquiétude", "Comparer dans un même secteur"] }],
      ],
    },
    cycles: {
      title: "Marchés haussiers, baissiers et cycles", try: "Voir tout l’historique du graphique",
      body: d => `
        <p>Les marchés avancent par grandes vagues. Un <b>marché haussier</b> est une longue période de hausse. Un <b>marché baissier</b> est une chute de 20 % ou plus depuis un sommet récent.</p>
        <p>Les baisses plus petites, d’environ 10 %, s’appellent des <b>corrections</b>. Elles arrivent assez souvent, même en marché haussier.</p>
        <ul>
          <li>Les marchés baissiers font peur, mais jusqu’ici la Bourse américaine s’est toujours fini par se redresser après chacun d’eux, même si certains ont pris des années.</li>
          <li>Personne ne peut deviner de façon fiable le sommet ou le creux. Les investisseurs diversifiés et patients s’en sortent généralement mieux que ceux qui entrent et sortent sans cesse.</li>
        </ul>
        ${key("les hausses et les baisses sont normales ; le temps et la diversification aident à les traverser.")}
        ${live(`${d.s} est <b>${d.dd}</b> sous son plus haut sur 6 mois. ${["C’est une variation normale.", "C’est déjà une zone de correction.", "Une chute pareille serait un marché baissier pour cette action."][d.zone]}`)}`,
      quiz: [
        ["Le marché chute de 25 % depuis son sommet. Comment appelle-t-on cela ?", ["Un marché baissier", "Un marché haussier", "Un dividende"], "Une chute de 20 % ou plus depuis un sommet récent est un marché baissier."],
        ["Qu’est-ce qu’une correction ?", ["Une baisse d’environ 10 %, assez fréquente", "Une chute de plus de 50 %", "Une hausse de 20 %"], "Les corrections sont courantes, même en marché haussier."],
        ["Qu’est-ce qui a généralement le mieux marché au fil des cycles ?", ["Rester diversifié et patient", "Tout vendre à chaque baisse", "Deviner le sommet et le creux exacts"], "Personne ne prévoit les cycles de façon fiable ; patience et diversification font l’essentiel."],
      ],
      mission: "Réglez la période du graphique sur Tout",
      video: [
        ["Un marché haussier est une longue hausse. Un marché baissier est une chute de 20 % ou plus.", { bull: "Haussier", bear: "Baissier" }],
        ["Les baisses plus petites, d’environ 10 %, appelées corrections, sont fréquentes, même quand la grande tendance monte.", { tag: "Correction −10 %" }],
        ["Jusqu’ici, la Bourse américaine s’est toujours redressée après chaque marché baissier, même si certains ont pris des années.", { tag: "Reprise" }],
        ["Personne ne peut prévoir le cycle de façon fiable. Diversification et patience aident à le traverser.", { items: ["Rester diversifié", "Être patient", "Ne pas deviner sommets et creux"] }],
      ],
    },
    taiwan: {
      title: "Investir dans les actions taïwanaises", try: "Voir TSMC (2330)",
      body: d => `
        <p>La <b>Bourse de Taïwan</b> (臺灣證券交易所, TWSE) utilise des chiffres au lieu de lettres comme tickers : <b>2330</b> est TSMC et <b>2317</b> est Hon Hai, aussi appelé Foxconn. Les ETF commencent généralement par 00, comme le <b>0050</b>.</p>
        <p>Les prix sont en <b>nouveaux dollars de Taïwan (NT$)</b>. Cette app garde vos liquidités en dollars américains et convertit à un taux fixe de NT$${d.rate} = 1 US$. Dans la réalité, le taux de change bouge chaque jour : une action taïwanaise peut monter en NT$ et quand même perdre de la valeur en US$. C’est le <b>risque de change</b>.</p>
        <div class="facts">
          <div class="fact"><div class="fact-k">Horaires</div><div class="fact-v">De 9h00 à 13h30, du lundi au vendredi, heure de Taïwan</div></div>
          <div class="fact"><div class="fact-k">Lot (一張)</div><div class="fact-v">1 000 actions. Les lots fractionnés (零股) permettent d’en acheter moins.</div></div>
          <div class="fact"><div class="fact-k">Limite quotidienne</div><div class="fact-v">Au maximum 10 % de hausse ou de baisse par rapport à la clôture précédente en un jour. Cette app l’applique et affiche une étiquette.</div></div>
          <div class="fact"><div class="fact-k">Échelons de prix</div><div class="fact-v">Les prix bougent par échelons fixes. Au-dessus de NT$1 000, l’échelon est de NT$5 : TSMC ne peut pas coter NT$1 083.</div></div>
          <div class="fact"><div class="fact-k">Couleurs</div><div class="fact-v"><b>Le rouge signifie la hausse</b> et le vert la baisse, l’inverse de cette app et des apps américaines.</div></div>
        </div>
        <p>TSMC est de loin la plus grande entreprise de la Bourse : son prix pèse beaucoup sur tout le marché taïwanais.</p>
        ${key("les actions taïwanaises se négocient en NT$, par lots de 1 000 actions, avec une limite quotidienne de 10 %, et le rouge signifie la hausse.")}
        ${live(`TSMC (2330) vaut <b>${d.p}</b> par action, soit environ <b>${d.usd}</b>. Un lot complet de 1 000 actions coûterait <b>${d.lot}</b>. Dans cette app, vous pouvez acheter des actions à l’unité, comme avec les lots fractionnés.`)}`,
      quiz: [
        ["Sur une app boursière taïwanaise, un prix affiché en rouge signifie…", ["Que le prix a monté", "Que le prix a baissé", "Que la cotation est suspendue"], "À Taïwan, comme en Chine continentale, à Hong Kong et au Japon, le rouge signale une hausse. Aux États-Unis et en Europe, c’est généralement l’inverse."],
        ["Combien d’actions compte un lot (一張) à Taïwan ?", ["1 000", "100", "10"], "Un lot compte 1 000 actions."],
        ["Une action taïwanaise a clôturé hier à NT$100. Quel est le prix le plus haut possible aujourd’hui ?", ["NT$110", "NT$150", "NT$200"], "La limite quotidienne est de 10 % au-dessus ou en dessous de la clôture précédente."],
      ],
      mission: "Achetez une action taïwanaise",
      video: [
        ["Les actions taïwanaises se négocient à la Bourse de Taïwan, en nouveaux dollars de Taïwan.", { mid: "NT$ ⇄ US$", l: "Taïwan", r: "États-Unis" }],
        ["Taïwan cote de 9h00 à 13h30. Les États-Unis cotent de 9h30 à 16h00, heure de New York.", { tw: "Taïwan 9h00–13h30", us: "États-Unis 9h30–16h00" }],
        ["Un lot compte 1 000 actions, et les prix peuvent bouger au maximum de 10 % par jour.", { lines: ["1 lot = 1 000 actions", "Lots fractionnés : moins d’actions", "Limite quotidienne : ±10 %"] }],
        ["Et souvenez-vous : à Taïwan, le rouge signifie la hausse !", { lines: ["🔴 Rouge = hausse à Taïwan", "🟢 Vert = baisse"] }],
      ],
    },
    economy: {
      title: "Taux d’intérêt, inflation et économie", try: "Ouvrir les mots d’économie",
      body: d => `
        <p>Les actions ne vivent pas dans une bulle. Toute l’économie les influence, et trois choses comptent le plus :</p>
        <ul>
          <li>Les <b>taux d’intérêt</b> sont le coût de l’emprunt, fixés surtout par la banque centrale (la Réserve fédérale aux États-Unis, la Banque centrale à Taïwan). Des taux plus hauts rendent l’emprunt plus cher et l’épargne plus attirante, ce qui fait souvent baisser les actions. Des taux plus bas les aident souvent.</li>
          <li>L’<b>inflation</b>, c’est la hausse des prix des choses du quotidien. Une forte inflation pousse généralement les banques centrales à relever leurs taux.</li>
          <li>La <b>croissance économique</b> (PIB), l’emploi et les exportations. Une économie qui grandit signifie généralement des bénéfices qui grandissent. Les exportations comptent beaucoup pour Taïwan, surtout les puces.</li>
        </ul>
        <p>C’est pourquoi les nouvelles de tout le marché dans StockPilot font bouger presque toutes les actions à la fois.</p>
        ${key("les taux d’intérêt sont comme la gravité pour les prix des actions.")}
        ${live(`Il y a eu jusqu’ici <b>${d.n}</b> titres concernant tout le marché dans cette zone.${d.h ? ` Le dernier : <b>${d.h}</b> (${d.c}).` : ""}`)}`,
      quiz: [
        ["La banque centrale relève fortement ses taux. Que font généralement les actions ?", ["Elles baissent souvent", "Elles montent toujours", "Rien du tout"], "Des taux plus hauts rendent l’emprunt plus cher et l’épargne plus attirante, ce qui fait souvent baisser les actions."],
        ["Qu’est-ce que l’inflation ?", ["La hausse des prix des biens et services au fil du temps", "Une action qui monte vite", "Une entreprise qui verse des dividendes"], "L’inflation concerne les prix du quotidien, pas une action."],
        ["Pourquoi les chiffres d’exportation de Taïwan comptent-ils autant pour ses actions ?", ["Beaucoup de grandes entreprises taïwanaises, comme les fabricants de puces, vendent surtout à l’étranger", "Les exportations décident de la couleur des prix", "Ils ne comptent pas"], "Les plus grandes entreprises de Taïwan gagnent une grande partie de leur argent à l’étranger."],
      ],
      mission: "Ouvrez les mots d’économie dans le vocabulaire",
      video: [
        ["Toute l’économie fait bouger les actions, et la banque centrale est au centre."],
        ["Quand les taux d’intérêt montent, les actions baissent souvent, comme une balançoire.", { l: "Taux d’intérêt ↑", r: "Actions ↓", arrow: "Actions" }],
        ["Une forte inflation mène généralement à des taux plus hauts.", { lines: ["Inflation ↑", "→ la banque centrale relève ses taux", "→ les actions baissent souvent"] }],
        ["La croissance, l’emploi et les exportations comptent aussi. Pour Taïwan, les exportations de puces sont énormes.", { mid: "Puces →", l: "Taïwan", r: "Le monde" }],
      ],
    },
    plan: {
      title: "Construire votre premier plan d’investissement", try: "Aller à Trader",
      body: d => `
        <p>Vous connaissez les pièces. Assemblez-les maintenant en un plan simple que vous pourriez vraiment suivre :</p>
        <ul>
          <li><b>Objectif et horizon :</b> à quoi sert cet argent, et quand en aurez-vous besoin ? L’argent dont vous aurez besoin d’ici quelques années ne devrait pas être en actions.</li>
          <li><b>Cœur :</b> un fonds large et peu coûteux (comme un ETF indiciel) comme base, pour détenir beaucoup d’entreprises à la fois.</li>
          <li><b>Satellites :</b> si vous voulez choisir des actions, gardez chacune petite, environ 5 % ou moins.</li>
          <li><b>Règles :</b> votre liste d’achat, votre stop-loss et la fréquence de vos revues.</li>
          <li><b>Continuer d’apprendre :</b> revoyez vos transactions, lisez et ajustez lentement.</li>
        </ul>
        ${key("objectif → fonds cœur → petits choix → règles écrites → revue régulière.")}
        ${live(`Dans cette zone, vous détenez <b>${d.n}</b> action${d.n === 1 ? "" : "s"}, avec <b>${d.cash}</b> de votre portefeuille en liquidités.`)}`,
      quiz: [
        ["Vous aurez besoin d’argent pour vos études dans 1 an. Où ne devrait-il PAS aller ?", ["Dans quelques actions risquées", "Sur un compte d’épargne", "Dans un endroit sûr et facile à retirer"], "Les actions peuvent beaucoup baisser en un an. L’argent dont vous aurez bientôt besoin doit rester en sécurité."],
        ["Qu’est-ce qu’une position « cœur » dans un plan simple ?", ["Un fonds large et peu coûteux qui détient beaucoup d’entreprises", "Votre action préférée", "Une action dont vous avez entendu parler en ligne"], "Le cœur est la base diversifiée autour de laquelle tout le reste s’organise."],
        ["Quelle taille devrait avoir chaque action choisie dans le plan d’un débutant ?", ["Petite, environ 5 % ou moins du portefeuille", "La moitié du portefeuille", "Tout"], "De petits choix permettent d’apprendre sans risquer tout son compte."],
      ],
      mission: "Détenez 5 actions différentes ou plus en même temps",
      video: [
        ["Il est temps d’assembler le tout en un plan que vous pouvez suivre."],
        ["Un fonds large comme cœur, et quelques petites actions choisies autour.", { main: "Fonds cœur 80 % · actions 5 % chacune" }],
        ["Écrivez vos règles avant de trader.", { items: ["Objectif et horizon", "Liste d’achat", "Stop-loss", "Revue mensuelle"] }],
        ["Puis continuez d’apprendre : revoyez, lisez et ajustez lentement. Bonne chance !"],
      ],
    },
    predict: {
      title: "Pourquoi personne ne peut prédire le marché", try: "Essayer le pilote automatique",
      body: d => `
        <p>Chaque signal de ces leçons est un <b>indice, pas une promesse</b>. Les prix réagissent à des nouvelles que personne ne connaît à l’avance : des résultats surprises, une nouvelle loi, un incendie dans une usine.</p>
        <p>Ce simulateur fonctionne de la même façon. Les tendances durent souvent un moment, donc les signaux aident un peu, mais les nouvelles surprises et les mouvements aléatoires les dépassent souvent. Activez le pilote automatique et observez : il gagne certaines transactions et en perd d’autres.</p>
        <p>Même les professionnels ont du mal. Sur de longues périodes, la plupart des gérants professionnels ne parviennent pas à battre un simple fonds qui détient tout le marché.</p>
        <p>Si un jour vous investissez de l’argent réel, quelques habitudes aident :</p>
        <ul>
          <li>Apprenez d’abord, et pensez en années plutôt qu’en jours.</li>
          <li>Répartissez votre argent, par exemple avec un fonds sur tout le marché.</li>
          <li>N’investissez que de l’argent dont vous n’aurez pas besoin bientôt.</li>
          <li>Surveillez les frais, et méfiez-vous de quiconque promet des gains garantis.</li>
          <li>Parlez-en à quelqu’un de confiance avant de commencer.</li>
        </ul>
        ${key("celui qui dit pouvoir prédire le marché à coup sûr se trompe, ou veut vous vendre quelque chose.")}
        ${live(`Votre compte simulé est à ${B(d.up ? "pos" : "neg", `${d.up ? "+" : "−"}${d.amt} (${d.p})`)} depuis le début.`)}`,
      quiz: [
        ["Une IA ou un expert peut-il prédire de façon fiable les prix de demain ?", ["Non. Les signaux aident à réfléchir, mais personne ne prédit les prix de façon fiable", "Oui, avec assez de données", "Seulement pour les grandes entreprises connues"], "Les marchés réagissent à des informations nouvelles que personne n’a encore. C’est pourquoi maîtriser le risque et diversifier compte plus que prédire."],
        ["Quelqu’un en ligne vous promet de doubler votre argent en un mois, garanti. Que faut-il en penser ?", ["C’est un signal d’alarme : personne ne peut garantir ça", "Super affaire, j’investis tout", "Les garanties sont normales en Bourse"], "Des gains élevés garantis sont un signe classique d’arnaque."],
        ["Laquelle de ces choses pouvez-vous vraiment contrôler en tant qu’investisseur ?", ["Votre diversification, vos frais et le risque que vous prenez", "Les nouvelles de demain", "Le prix exact de la semaine prochaine"], "Concentrez-vous sur ce que vous contrôlez : répartir le risque, garder des frais bas et la taille des positions."],
      ],
      mission: "Activez le pilote automatique",
      video: [
        ["Chaque signal est un indice, pas une promesse. Des nouvelles que personne n’attend peuvent faire bouger les prix à tout moment.", { tag: "?" }],
        ["Sur le long terme, même la plupart des professionnels ne battent pas un simple fonds qui détient tout le marché.", { lines: ["La plupart des fonds pros", "ne parviennent pas à battre", "un simple fonds indiciel"] }],
        ["Concentrez-vous donc sur ce que vous contrôlez : le temps, la diversification, le risque et les frais.", { items: ["Penser en années", "Répartir", "Seulement l’argent disponible", "Surveiller les frais"] }],
        ["Et méfiez-vous de quiconque promet des gains garantis.", { text: "Garanti ? 🚩" }],
      ],
    },
  },
  glossary: [
    ["Action", "Une petite part de propriété d’une entreprise.", "Posséder 1 action Apple fait de vous l’un de ses nombreux propriétaires."],
    ["Actionnaire", "Une personne ou un groupe qui possède des actions d’une entreprise.", "Les actionnaires peuvent voter sur certaines décisions de l’entreprise."],
    ["Bourse", "Un marché où l’on achète et vend des actions, comme le Nasdaq ou la Bourse de Taïwan.", "TSMC est cotée à la Bourse de Taïwan."],
    ["Ticker", "Le code court d’une action.", "AAPL est le ticker d’Apple ; 2330 celui de TSMC."],
    ["Courtier", "Une entreprise qui passe les ordres d’achat et de vente pour vous.", "Il faut un compte chez un courtier pour acheter de vraies actions."],
    ["Capitalisation boursière", "La valeur totale d’une entreprise : prix de l’action × nombre d’actions.", "Une action à 100 $ avec 1 milliard d’actions a une capitalisation de 100 milliards de dollars."],
    ["Dividende", "L’argent qu’une entreprise verse à ses actionnaires sur ses bénéfices.", "Chunghwa Telecom est connue pour verser des dividendes réguliers."],
    ["ETF (fonds indiciel coté)", "Un fonds qui détient beaucoup d’actions et se négocie comme une seule.", "Le 0050 détient environ 50 des plus grandes entreprises de Taïwan."],
    ["Indice", "Un nombre qui suit un groupe d’actions pour montrer comment va le marché.", "Le S&P 500 suit 500 grandes entreprises américaines."],
    ["Portefeuille", "Tous vos placements, plus vos liquidités.", "Son portefeuille compte 6 actions et un peu de liquidités."],
    ["Ordre au marché", "Un ordre d’achat ou de vente immédiat au prix actuel.", "Chaque transaction dans StockPilot est un ordre au marché."],
    ["Ordre à cours limité", "Un ordre qui ne s’exécute qu’à votre prix ou mieux.", "Un ordre d’achat limité à 95 $ ne s’exécute pas tant que le prix est à 100 $."],
    ["Stop-loss", "Un plan ou un ordre de vente si le prix tombe à un niveau fixé, pour limiter une perte.", "Acheter à 100 $ avec un stop-loss de 8 % signifie vendre à 92 $."],
    ["Prise de bénéfices", "Vendre tout ou partie d’une action gagnante pour sécuriser le gain.", "Après une hausse de 20 %, il a vendu la moitié pour prendre ses bénéfices."],
    ["Position", "La quantité d’une action que vous détenez.", "Une position de 5 000 $ dans un portefeuille de 100 000 $ représente 5 %."],
    ["Lot", "L’unité de négociation standard à Taïwan : 1 000 actions.", "Un lot d’une action à NT$200 coûte NT$200 000."],
    ["Lot fractionné", "Moins d’actions qu’un lot complet.", "Les lots fractionnés permettent d’acheter seulement 5 actions TSMC."],
    ["Limite de variation", "Le mouvement maximal d’un prix en un jour. À Taïwan, c’est 10 %.", "Une action clôturée à NT$100 peut coter entre NT$90 et NT$110 le lendemain."],
    ["Liquidité", "La facilité à acheter ou vendre quelque chose sans trop faire bouger son prix.", "Les grandes entreprises comme Apple sont très liquides."],
    ["Trading simulé", "S’entraîner à investir avec de l’argent fictif.", "StockPilot est une app de trading simulé."],
    ["Tendance", "La direction générale d’un prix sur des semaines ou des mois.", "Des sommets et des creux de plus en plus hauts indiquent une tendance haussière."],
    ["Moyenne mobile", "Le prix moyen des derniers jours, pour voir la tendance plus clairement.", "La moyenne mobile 20 jours est la clôture moyenne des 20 derniers jours."],
    ["Élan (momentum)", "La force avec laquelle un prix a bougé récemment.", "Gagner 12 % en un mois, c’est un élan fort."],
    ["RSI (indice de force relative)", "Un score de 0 à 100 indiquant à quelle vitesse un prix a monté ou baissé sur 14 jours.", "Un RSI au-dessus de 70 signale un surachat."],
    ["Surachat / survente", "Un prix qui a monté (ou baissé) si vite qu’il pourrait reculer (ou rebondir).", "Après cinq jours de hausse d’affilée, l’action semblait surachetée."],
    ["Volatilité", "L’ampleur des variations d’un prix.", "Tesla est plus volatile que Visa."],
    ["Bénéfices", "Ce que gagne une entreprise, généralement publié tous les trois mois.", "L’action a bondi après de bons résultats."],
    ["PER (price-earnings ratio)", "Le prix de l’action divisé par le bénéfice annuel par action ; il montre si une action est chère par rapport à ses bénéfices.", "Un PER de 30 signifie que les investisseurs paient 30 $ par dollar de bénéfice annuel."],
    ["Marché haussier", "Une longue période de hausse des prix.", "Beaucoup d’actions ont doublé pendant le marché haussier."],
    ["Marché baissier", "Une chute de 20 % ou plus depuis un sommet récent.", "Les prix ont chuté de 25 % : c’était un marché baissier."],
    ["Repli / correction", "Une courte baisse au sein d’une tendance haussière plus longue. Une correction est une baisse d’environ 10 %.", "Attendre un repli permet d’obtenir un meilleur prix."],
    ["Diversification", "Répartir son argent entre beaucoup d’actions, de secteurs et de pays.", "Détenir 10 actions de secteurs différents est plus diversifié qu’en détenir 1."],
    ["Risque", "La possibilité de perdre de l’argent, ou d’obtenir des résultats différents de ceux attendus.", "Des gains possibles plus élevés vont généralement avec plus de risque."],
    ["Perte maximale (drawdown)", "La baisse de votre compte ou d’une action depuis son point le plus haut.", "Passer de 120 000 $ à 90 000 $, c’est une baisse de 25 %."],
    ["Taux de change / risque de change", "Le prix d’une monnaie dans une autre, et le risque qu’il change.", "Si le NT$ faiblit, les actions taïwanaises valent moins de dollars."],
    ["FOMO", "La peur de rater quelque chose : acheter parce que tout le monde achète.", "Acheter une action juste parce qu’elle est à la mode en ligne, c’est du FOMO."],
    ["Vente de panique", "Vendre par peur après une chute soudaine.", "Tout vendre après une mauvaise journée, c’est vendre dans la panique."],
    ["Moyenne à la baisse", "Acheter plus d’une action qui a baissé pour réduire son prix de revient moyen.", "Faire une moyenne à la baisse sur une action qui continue de chuter peut agrandir les pertes."],
    ["Taux d’intérêt", "Le coût de l’emprunt, fixé surtout par la banque centrale.", "Des taux d’intérêt plus hauts font souvent baisser les actions."],
    ["Inflation", "La hausse des prix des biens et services au fil du temps.", "Avec 3 % d’inflation, 100 $ de courses coûtent 103 $ un an plus tard."],
    ["Banque centrale", "La banque qui gère la monnaie et les taux d’intérêt d’un pays, comme la Réserve fédérale américaine ou la Banque centrale de Taïwan.", "La Réserve fédérale a relevé ses taux pour combattre l’inflation."],
    ["Récession", "Une période où l’économie se contracte et où des emplois sont perdus.", "Les actions baissent souvent quand on s’attend à une récession."],
    ["PIB (produit intérieur brut)", "La valeur totale de tout ce qu’un pays produit en un an.", "Une forte croissance du PIB signifie que l’économie se développe."],
    ["Exportations", "Les biens qu’un pays vend à d’autres pays. Très importantes pour Taïwan.", "De fortes exportations de puces aident l’économie taïwanaise."],
    ["Taux de chômage", "La part des personnes qui veulent un emploi mais n’en trouvent pas.", "Un faible taux de chômage est le signe d’une économie solide."],
  ],
});
