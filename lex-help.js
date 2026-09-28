/* ═══════════════════════════════════════════════════════════
   lex-help.js — LexCalendar · תוכן המדריך המלא (נתונים בלבד)
   כל פריט: qh/qe = שאלה/כותרת (עברית/אנגלית), ah/ae = הסבר, go = מסך לפתיחה (אופציונלי)
   ═══════════════════════════════════════════════════════════ */
window.LEX_HELP=[
{id:'start',icon:'🚀',he:'התחלה מהירה',en:'Quick start',items:[
 {qh:'מה הסדר הנכון להתחיל?',qe:'Where do I start?',ah:'1) הגדרות ← שם עורך הדין/הנוטריון. 2) לקוחות ← "+ לקוח חדש". 3) תיקים ← "+ תיק חדש" ובחירת הלקוח. 4) בתוך התיק ← "+ הוסף מועד". מכאן כל השאר (יומן, התראות, דוחות) מתמלא לבד.',ae:'1) Settings → your name. 2) Clients → "+ New Client". 3) Cases → "+ New Case". 4) Inside the case → "+ Add Deadline". Calendar, alerts and reports fill in automatically.',go:'pg-clients'},
 {qh:'איך מנווטים?',qe:'How do I navigate?',ah:'בדף הבית — לחיצה על כל קוביה. במחשב — התפריט בצד או הסרגל העליון (לפי סגנון התצוגה). בטלפון — הסרגל התחתון: בית, תיקים, מועדים, התראות, ו"עוד" לכל שאר המסכים. כפתור 🏠 בכותרת מחזיר תמיד לדף הבית.',ae:'Tap any tile on the home screen. On desktop use the side/top menu; on phones the bottom bar (Home, Cases, Deadlines, Alerts, More). 🏠 always returns home.'},
 {qh:'איך עורכים או מוחקים פריט?',qe:'How do I edit or delete?',ah:'בכל רשימה: כפתור ✏️ או לחיצה ארוכה על השורה פותחים חלון עריכה. מחיקה נמצאת תמיד בתוך חלון העריכה ותמיד עם אישור.',ae:'Use ✏️ or long-press a row. Delete is always inside the edit window, with confirmation.'},
 {qh:'מה המשמעות של העיגולים האדומים?',qe:'What are the red badges?',ah:'מספר הדברים החדשים או הדחופים בקוביה (לקוחות/תיקים חדשים, מועדים דחופים, התראות). אחרי כניסה למסך הלקוחות/התיקים — הספרה נעלמת עד שיתווסף משהו חדש.',ae:'New or urgent items. After you open Clients/Cases the badge clears until something new is added.'}
]},
{id:'clients',icon:'👤',he:'לקוחות ותיקים',en:'Clients & cases',items:[
 {qh:'כרטיס לקוח',qe:'Client card',ah:'לחיצה על לקוח מציגה את פרטיו ואת כל התיקים שלו. משם אפשר לפתוח תיק חדש ישירות ללקוח הזה.',ae:'Tap a client to see details and all their cases, and open a new case for them.',go:'pg-clients'},
 {qh:'פתיחת תיק',qe:'Opening a case',ah:'בתיק מגדירים לקוח, שם, מספר תיק, בית משפט, סוג הליך, סטטוס ושכר טרחה. אם ממלאים גם "תאריך המצאה" — האפליקציה מחשבת את המועד הראשון לפי סוג ההליך (רגיל 60, דיון מהיר 45, רשלנות רפואית 120, פינוי מושכר 30, תביעה קטנה 30, ערעור 60), בלי לספור ימי פגרה (תקנה 179(ב)). לאימות.',ae:'Set client, name, number, court, procedure, status and fee. Filling a service date auto-calculates initial deadlines (verify them).',go:'pg-cases'},
 {qh:'תשלום חלקי ויתרה',qe:'Partial payment & balance',ah:'בעריכת תיק: "שכר טרחה מוסכם" + "סכום ששולם" — היתרה לתשלום מחושבת מיד (אדום = חוב, ירוק = שולם).',ae:'Edit case: agreed fee + amount paid — balance is calculated instantly.'},
 {qh:'סטטוס תיק',qe:'Case status',ah:'פעיל / חדש / מושהה / סגור. שינוי סטטוס יכול להקפיץ שאלה "לעדכן את הלקוח?" (ניתן לכבות במסך ההתראות).',ae:'Changing status can prompt "update the client?" (configurable in Alerts).'}
]},
{id:'deadlines',icon:'⏰',he:'מועדים ויומן',en:'Deadlines & calendar',items:[
 {qh:'שתי דרכים להוסיף מועד',qe:'Two ways to add a deadline',ah:'"📅 אירוע ידני" — כותרת + תאריך (דיון, פגישה, הגשה). "🧮 חשב לפי המצאה" — מזינים תאריך המצאה וסוג הליך ורואים תצוגה מקדימה: המועד אחרי דילוג על ימי פגרה (סוכות, פסח, קיץ 21.7–5.9) והזזה מיום שישי/שבת/חג, וגם המועד "הגולמי" להשוואה. אם בית המשפט הורה שהפגרה נספרת — מבטלים את הסימון.',ae:'"Manual event" — title + date. "Calc from service" — enter service date and procedure, preview and add the calculated deadlines.',go:'pg-dl'},
 {qh:'⚠️ חשוב — אימות מועדים',qe:'⚠️ Verify deadlines',ah:'חישוב אוטומטי ומאגר המועדים הם כלי עזר בלבד. תמיד לאמת מול נוסח התקנות/החוק העדכני, ימי פגרה, מניין ימים (ימי עבודה מול ימים קלנדריים) והחלטות בית המשפט בתיק.',ae:'Auto-calculation and the database are aids only. Always verify against current rules, recess periods, day-counting and court orders.'},
 {qh:'סינון לפי תאריכים',qe:'Date filters',ah:'בכל רשימה: היום / שבוע / החודש / 3 חודשים / השנה / הכל, וגם "חודש ›" לבחירת חודש מסוים ו"טווח מותאם ›" לבחירת מתאריך–עד תאריך.',ae:'Every list: today / week / month / 3 months / year / all, plus a specific month and a custom date range.'},
 {qh:'יומן חודשי',qe:'Monthly calendar',ah:'נקודות צבעוניות מסמנות ימים עם מועדים (אדום = 0–2 ימים, כתום = עד שבוע). לחיצה על יום מציגה את המועדים שבו, או פותחת הוספת מועד אם הוא ריק.',ae:'Coloured dots mark days with deadlines. Tap a day to see them or add one.',go:'pg-cal'},
 {qh:'Google Calendar',qe:'Google Calendar',ah:'כפתור 📅 ליד כל מועד מוסיף אותו ליומן Google שלך עם תזכורות. במסך ההתראות — "סנכרן ל-Google" מוסיף את כל המועדים העתידיים. דורש התחברות לחשבון Google בפעם הראשונה.',ae:'📅 next to a deadline adds it to Google Calendar with reminders; "Sync" in Alerts adds all upcoming ones.'}
]},
{id:'work',icon:'📋',he:'לוג, שעות ושכר טרחה',en:'Log, hours & fees',items:[
 {qh:'תיעוד פעולה',qe:'Logging activity',ah:'לוג פעולות ← "+ פעולה חדשה": סוג (פגישה, שיחה, הגשה, דיון, מחקר), תאריך, שעות ותעריף. הסכום מחושב אוטומטית (שעות × תעריף).',ae:'Activity Log → "+ Log Activity": type, date, hours and rate; amount = hours × rate.',go:'pg-log'},
 {qh:'מסך שעות ושכר',qe:'Hours & fees screen',ah:'סיכום שעות וסכומים, עם סינון לפי תאריכים וגם לפי תיק מסוים. הסכומים מוצגים רק כאן ובדוחות — לא בדף הבית, כדי לשמור על פרטיות מול מי שיושב לידך.',ae:'Totals filtered by date and by case. Amounts appear only here and in reports — never on the home screen.',go:'pg-hours'},
 {qh:'מחשבון שכר טרחה',qe:'Fee calculator',ah:'נוטריון — לפי התעריף הרשמי 2026 (אימות חתימה, העתק נאמן, תרגום, תצהיר) כולל מע"מ 18%. שאר הסוגים — אומדן פנימי בלבד (לא "התעריף המינימלי המומלץ" של הלשכה): אחוזים לפי מדרגות, שכר בסיס ושכר שעתי, עם פירוט מלא של החישוב.',ae:'12 case types; percentage, base and hourly fee — estimate only.',go:'pg-calc'}
]},
{id:'docs',icon:'📷',he:'מסמכים ושיתוף עם לקוח',en:'Documents & client sharing',items:[
 {qh:'צילום והוספת מסמך',qe:'Adding a document',ah:'בתוך תיק ← מסמכים ← "📷 הוסף": מצלמה, גלריה או קובץ PDF. תמונות מוקטנות אוטומטית ונשמרות באחסון המכשיר (לא בענן). "💾 שמור למכשיר" מוריד עותק לתיקיית ההורדות.',ae:'Case → Documents → Add: camera, gallery or PDF. Stored on-device; "Save to device" downloads a copy.'},
 {qh:'מחיקת מסמך',qe:'Deleting a document',ah:'מוחקת אותו מהאפליקציה בלבד. עותק שכבר הורדת למכשיר לא נמחק.',ae:'Removes it from the app only; downloaded copies stay.'},
 {qh:'שתף עם לקוח',qe:'Share with client',ah:'כפתור ירוק בכל תיק: 4 תבניות מוכנות + "התבניות שלי" — כותבים הודעה ולוחצים "💾 שמור כתבנית"; שם הלקוח והתיק מוחלפים אוטומטית במשתנים ({לקוח}, {תיק}, {מועד_קרוב}, {תאריך_מועד}, {עורך_דין}) כך שהתבנית מתאימה לכל תיק. שליחה ב-WhatsApp ישר למספר הלקוח, SMS, מייל או כל אפליקציה. כל שליחה מסמנת שהלקוח עודכן היום.',ae:'Green button in each case: ready templates + free text; send via WhatsApp, email or any app.'}
]},
{id:'alerts',icon:'🔔',he:'התראות',en:'Alerts',items:[
 {qh:'הגדרת התראות',qe:'Configuring alerts',ah:'כל התראה עם מתג הפעלה ומספר ימים חופשי: מועד מתקרב, מועד שעבר (עד שמסמנים "✓ טופל"), לקוח שלא עודכן (נמדד לפי שליחת עדכון מתוך האפליקציה או פגישה/שיחה/מייל בלוג), תיק ללא פעילות, יתרת שכ"ט, ושאלות "לעדכן לקוח?" כשמועד עבר, כשסטטוס משתנה וכשנוסף מסמך.',ae:'Each alert has an on/off switch and custom days.',go:'pg-alerts'},
 {qh:'"הזכר לי ב..."',qe:'"Remind me later"',ah:'בהתראה שקופצת אפשר לבחור תאריך להזכרה חוזרת במקום לדחות אותה לגמרי.',ae:'Pick a date to be reminded again instead of dismissing.'},
 {qh:'האם מקבלים התראה כשהאפליקציה סגורה?',qe:'Alerts when the app is closed?',ah:'בכנות — לא. אפליקציית רשת בלי שרת מציגה התראות רק כשהיא פתוחה. לתזכורת גם כשהיא סגורה: סנכרן את המועדים ל-Google Calendar, או שלח לעצמך תזכורת WhatsApp.',ae:'Honestly — no. Without a server, alerts show only when the app is open. Sync to Google Calendar for reminders.'}
]},
{id:'laws',icon:'⚖️',he:'מאגר המועדים (חוקי סד"פ)',en:'Deadline database',items:[
 {qh:'מה יש במאגר?',qe:'What is in it?',ah:'כ-80 פריטים ב-14 נושאים: פגרות ומניין ימים, כתבי טענות, הליכים מקדמיים, עדים ומומחים, סעדים זמניים, ערעור, תביעות קטנות, עבודה, מנהלי, פלילי, הוצל"פ, ירושה, התיישנות ושכר נוטריון. לכל פריט מופיע מקור וסטטוס אימות, ויש סינון "רק מאומתים".',ae:'174 deadlines in 16 categories with search.',go:'pg-laws'},
 {qh:'⚠️ מעמד המאגר',qe:'⚠️ Status',ah:'✅ אומת מול המקור — נבדק מול נוסח התקנות/החוק או מקור רשמי. ☑️ מקורות משניים — כמה מקורות משפטיים תואמים. ⚠️ לא אומת — לבדוק לפני הסתמכות. גם פריט מאומת יכול להשתנות בתיקון חקיקה — המאגר עבר בדיקה בספטמבר 2026 ואינו תחליף לבדיקה במקור.',ae:'Reference only — not yet fully legally reviewed. Always check the source.'},
 {qh:'כפתור 🤖 ליד כל מועד',qe:'🤖 next to each rule',ah:'שולח שאלה ל-AI על חריגים, הארכות והשלכות של המועד הזה.',ae:'Asks the AI about exceptions, extensions and consequences.'}
]},
{id:'ai',icon:'🤖',he:'עוזר AI',en:'AI assistant',items:[
 {qh:'בלי מפתח (חינם)',qe:'Without a key (free)',ah:'כפתור 🤖 AI מכין שאלה משפטית ושולח/מעתיק אותה לאפליקציית ה-AI שכבר מותקנת אצלך (Claude, ChatGPT, Gemini ועוד).',ae:'The AI button prepares a question and shares it to an AI app you already have.'},
 {qh:'עם מפתח — עוזר מובנה',qe:'With a key — built-in assistant',ah:'הגדרות ← חיבור בינה ← בחר ספק (Gemini יש בו שכבה חינמית) ← הדבק מפתח ← "שמור ובדוק". הנורית על כפתור ה-AI הופכת לירוקה ומופיע כפתור 🪄. העוזר עונה, מנווט בין מסכים, פותח טפסים, מפיק PDF ומנסח הודעות ללקוח.',ae:'Settings → AI Connection → choose provider → paste key → Save & test. The assistant answers, navigates, opens forms and drafts client messages.',go:'pg-ai'},
 {qh:'איך העוזר מנסח הודעה ללקוח?',qe:'Drafting a client message',ah:'פתח תיק ← "שתף עם לקוח", ואז בקש מהעוזר "נסח הודעת עדכון" — הוא יכתוב ישר לשדה ההודעה, ואתה בוחר איך לשלוח.',ae:'Open Share with client, then ask the assistant to draft — it writes straight into the message field.'},
 {qh:'פרטיות מול העוזר',qe:'Assistant privacy',ah:'המפתח מוצפן על המכשיר ולא נכלל בגיבוי. השאלות נשלחות ישירות לספק שבחרת. פרטי תיקים (מועדים קרובים ושמות תיקים) נשלחים רק אם הפעלת "שתף נתוני תיקים עם העוזר". תשובות AI אינן ייעוץ משפטי.',ae:'Key encrypted on-device, never in backups. Case details are sent only if you enable sharing. AI answers are not legal advice.'}
]},
{id:'privacy',icon:'🔒',he:'פרטיות, נעילה וגיבוי',en:'Privacy, lock & backup',items:[
 {qh:'איפה נשמר המידע?',qe:'Where is data stored?',ah:'רק על המכשיר הזה. אין שרת של AppNest. לכן — מחיקת נתוני הדפדפן או הסרת האפליקציה מוחקות הכל. גבה באופן קבוע.',ae:'Only on this device — clearing browser data deletes it. Back up regularly.'},
 {qh:'נעילת קוד (PIN)',qe:'PIN lock',ah:'הגדרות ← נעילת קוד: 4–6 ספרות, נעילה אחרי שהייה ברקע, וטשטוש המסך ברקע. חשוב: קוד שנשכח לא ניתן לשחזור — רק איפוס מלא (ואז שחזור מקובץ גיבוי).',ae:'Settings → PIN lock. A forgotten PIN cannot be recovered — only a full reset and restore from backup.',go:'pg-set'},
 {qh:'גיבוי ושחזור',qe:'Backup & restore',ah:'"💾 גיבוי" מוריד קובץ אחד עם כל הנתונים והמסמכים (בלי מפתח AI ובלי קוד נעילה). "📂 שחזור" מחליף את כל הנתונים בתוכן הקובץ, אחרי אישור. כך גם מעבירים למכשיר חדש.',ae:'Backup downloads one file with all data and documents (no AI key/PIN). Restore replaces everything. Use it to move to a new device.'},
 {qh:'מחיקת הכל',qe:'Delete everything',ah:'הגדרות ← "מחק את כל הנתונים" — אישור כפול, מוחק הכל (כולל מסמכים, מפתח ונעילה) ומחזיר למצב התקנה ראשונה.',ae:'Double confirmation; returns the app to a fresh install.'}
]},
{id:'look',icon:'🎨',he:'עיצוב והתקנה',en:'Look & install',items:[
 {qh:'ערכות צבע ומצב לילה',qe:'Themes & night mode',ah:'🎨 בכותרת: 5 ערכות (כחול מקצועי, שחור־זהב, כהה, ירוק, סגול) ו-3 סגנונות דף בית. כפתור 🌙/☀️ מחליף מהר בין יום ללילה.',ae:'🎨: 5 themes and 3 home layouts. 🌙/☀️ toggles day/night.',go:'pg-design'},
 {qh:'התקנה על הטלפון',qe:'Install on the phone',ah:'פתח את הכתובת ב-Chrome ← תפריט ⋮ ← "הוסף למסך הבית"/"התקן אפליקציה". מאותו רגע יש אייקון ⚖️ והיא נפתחת במסך מלא, גם בלי אינטרנט (על הנתונים הקיימים).',ae:'Chrome ⋮ → "Add to Home screen"/"Install app". Works offline on existing data.'},
 {qh:'שפה',qe:'Language',ah:'כפתור 🌐 בכותרת מחליף בין עברית לאנגלית.',ae:'🌐 switches Hebrew/English.'}
]},
{id:'trouble',icon:'🩺',he:'פתרון תקלות',en:'Troubleshooting',items:[
 {qh:'העלית עדכון ואני עדיין רואה גרסה ישנה',qe:'Still seeing an old version',ah:'סגור את האפליקציה לגמרי (גם מרשימת האפליקציות האחרונות) ופתח מחדש. אם עדיין — הגדרות ← דוח אבחון ← "🔄 רענון מלא".',ae:'Fully close and reopen. If needed: Settings → Diagnostics → Hard refresh.'},
 {qh:'מופיע פס כתום "העדכון לא נטען במלואו"',qe:'Orange "update not fully loaded" bar',ah:'חלק מקבצי האפליקציה נטען מגרסה ישנה. לחץ על הפס — הוא מנקה את המטמון ומרענן.',ae:'Some files came from an old version. Tap the bar to clear cache and reload.'},
 {qh:'העוזר עונה "החיבור נכשל" / 401 / 403',qe:'Assistant errors 401/403',ah:'המפתח שגוי, פג או שנמחק אצל הספק. חיבור בינה ← הדבק מפתח חדש ← "שמור ובדוק".',ae:'Invalid or revoked key — paste a new one and test.'},
 {qh:'המצלמה לא נפתחת',qe:'Camera does not open',ah:'אשר הרשאת מצלמה בהגדרות הדפדפן (הסמל ליד הכתובת). המצלמה עובדת רק בכתובת https — לא בקובץ שנפתח מקומית.',ae:'Allow camera permission; it works only over https.'},
 {qh:'איך לשלוח דיווח תקלה?',qe:'Reporting a problem',ah:'הגדרות ← דוח אבחון ← "שלח לתמיכה". הדוח לא כולל שמות לקוחות, תוכן תיקים או מפתחות.',ae:'Settings → Diagnostics → Send to support. No client data or keys are included.'}
]}
];
window.__MODS=window.__MODS||{}; window.__MODS['lex-help']=1;
