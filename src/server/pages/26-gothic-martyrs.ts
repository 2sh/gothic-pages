import { fromLatin } from '@common/transliterate'
import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'

// https://www.oca.org/saints/lives/2017/03/26/100888-26-martyrs-in-the-crimea
// https://en.wikipedia.org/wiki/Gothic_persecution_of_Christians
// "The "26 Gothic martyrs" are commemorated in Orthodox Christianity on 26 March, but in the Gothic calendar fragment on 29 October (gaminþi marwtre þize bi Werekan papan jah Batwin bilaif. aikklesjons fullaizos ana Gutþiudai gabrannidai "remembrance of the martyrs who with Werekas the priest and Batwin the bilaif were burned in a crowded church among the Goths"). The same fragment for 23 October proscribes remembrance of "the many martyrs among the Gothic people, and of Fridaric" (þize ana Gutþiudai managaize martwre jah Friþareikeis), Fridaric being an otherwise unknown Gothic martyr."
// Link from: https://www.wulfila.be/gothic/text/minora/Kalender.html
// https://www.crkvenikalendar.com/zitije_en.php?id=EEIA

// sons & daughters of batwins: https://tyoos.org/Feasts-and-Saints-of-the-Day/March/saints-of-march-26.html


// https://www.info-grece.com/el/eortologio/agion-eikosiex-martyron-ton-en-gotthia
// https://www.info-grece.com/en/saints_day/saints-26-martyrs-in-the-land-of-the-goths
// leads me to believe the queen and her daughter and son weren't actually included in the 26




// https://www.johnsanidopoulos.com/2016/03/holy-26-martyrs-of-gothia-in-crimea.html



    /*
    {
      text: {
        got: '<[Queen]> Gaaþa,',
        en: "Queen Gaatha,",
      },
    },
    {
      text: {
        got: '<[Princess]> Duklida,',
        en: "Princess Duklida,",
      },
    },
    {
      text: {
        got: 'jah Prince Agaþon,',
        en: "and Prince Agathon,",
      },
      notes: `Included in the "Eastern Orthodox martyrologies"`
    },
    */

    /*
    {
      text: {
        got: 'Konstans,',
        en: "Constans,",
      },
      notes: `Included in the "Eastern Orthodox martyrologies"`
    },
    */

// presbyters 2
// monk 1
// included laypeople 18
// = 21 named martyrs

// the queen and daughter were not part of the "28 martyrs"
// queen + daughter (+son Agathon?)
// anonymous martyr is part of the story but doesn't seem to be included in the named ones

// constans (anonymous martyr?)
// OR
// 2 sons and 2/3 daughters - 3 daughters would make it 26 but leave out the anon


// decided on 2 sons 3 daughters, leaving out anon in the numbered ones
// queen and daughter are separate martyrs

const slug = "26-martyros"
const title = "26 Martyros Taurikas"
const description = "26 Martyros Taurikas, skeireins ïn razdai gutiskai."

const anchors: Anchor[] = [
  {
    name: slug,
    lang: "got-Goth",
    title: fromLatin(title),
    description: fromLatin(description),
  },
  {
    name: slug + ".lat",
    lang: "got-Latn",
    title,
    description,
  },
]

const generator: PageGenerator = info =>
{
  global.lineId = 0

  let article = ''

  article += html`<header>
  <h1>${toGothicLines([{
    text: {
      got: '26 Martyros Taurikas',
      en: "26 Martyrs in the Crimea",
    },
  },], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Dags gaminþjis: 26 Martjus',
        en: "Day of remembrance: 26 March",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Bi 376 A.X., Aþanareiks þiudans gutisks warþ gramiþs',
        en: "In around 376 A.D., the Gothic King Athanaric was enraged",
      },
      notes: `A.X. = Afar Xristu`
    },
    {
      text: {
        got: 'saiƕands gakunnandans ïs andnimandein Xristeinein',
        en: "to see his subjects embracing Christianity",
      },
    },
    {
      text: {
        got: 'ïn wailamereinais Wulfilins Aipiskaupaus arianiskis.',
        en: "because of the preaching of the Arian bishop Ulfilas.",
      },
    },
    {
      text: {
        got: 'Swa, ïs anabauþ balwjan jah usqiman managana þize, ufta ïnuh kustu.',
        en: "So, he ordered many of them to be tortured and executed, often without a trial.",
      },
    },
    {
      text: {
        got: 'Swaswe Sozaumainus <{Historian}> gamelida:',
        en: "As the historian Sozomen records:",
      },
      notes: `The name is from Greek Σωζομενός(Sozomenos).`
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: `"Unte biliþun haidu attane ize,`,
        en: `"Because they had abandoned the cult of their fathers,`,
      },
      notes: 'using haidus (manner/way) for cult'
    },
    {
      text: {
        got: `Aþanareiks brahta managans ïn managos balweinins;`,
        en: `Athanaric subjected many individuals to many punishments;`,
      },
      notes: `in aljana briggan ins. Romans 11:11`
    },
    {
      text: {
        got: `sumans afdauþida afar þatei faur staua táuhanai waurþun jah garedaba andhaihaitun laisein,`,
        en: `some he put to death after they had been dragged before tribunals and had nobly confessed the doctrine,`,
      },
      notes: `"afar þatei rodida du im" Mark 16:19.

stood before, faura + DATIVE without motion Matthew 27:11.
put before, faur + ACC with motion Mark 8:6.`
    },
    {
      text: {
        got: `jah sumai waurþun afslahanai jah uslaubidai ni wesun ain waurd sunjonais seinaizos rodjan.`,
        en: `and others were slain without being permitted to utter a single word in their own defense.`,
      },
      notes: `Mark 10:4`
    },
    {
      text: {
        got: `Qiþan ïst þatei eis gasatidai fram Aþanareika du waurkjan ragina unmanariggwa seina,`,
        en: `It is said that the officers appointed by Athanaric to execute his cruel mandates,`,
      },
    },
    {
      text: {
        got: `brāhtedun gatimrein leikis þatei gasatidedun ana wagna`,
        en: `caused a statue to be constructed, which they placed on a chariot,`,
      },
    },
    { // Let check
      text: {
        got: `jah letand, ei ïta du hleiþrom þize mundane swe andnumanai Xristeinein attauhan was,`,
        en: `and had it conveyed to the tents of those who were suspected of having embraced Christianity,`,
      },
    },
    {
      text: {
        got: `jah þaiei þata leik inweitan jah saljan anabudanai wesun;`,
        en: `and who were therefore commanded to worship the statue and offer sacrifice;`,
      },
    },
    {
      text: {
        got: `jabei ...`,
        en: `if they refused to do so, the men and the tents were burnt together.`,
      },
    },
  ], info)}</p>`

//   But I have heard that an outrage of still greater atrocity was perpetrated at this period. Many refused to obey those who were compelling them by force to sacrifice. Among them were men and women; of the latter some were leading their little children, others were nourishing their new-born infants at the breast; they fled to their church, which was a tent. The pagans set fire to it, and all were destroyed."
// In the fiery inferno 308 people perished, of whom only twenty-one are known by name, 2 presbyters, 1 monk and 18 laypeople (11 men, 7 women). To this are added the five children of the presbyters Wereka and Batwin (two sons and three daughters). This took place in Gothia in the Crimea.
// Among these was a certain Christian man who was bringing the offering breads to the church to be used for the eucharistic sacrifice in the Divine Liturgy, but he was captured by the soldiers. Therefore, instead of a soulless offering, he himself became a living offering to God, by becoming a burnt offering for his confession to Christ, and was numbered among the twenty-six Martyrs.
// The names of the Martyrs vary by source, but of those known they are: Werekas (or Ouerkas, Vercus) and Batwin (or Bathouses, Bathusius) the presbyters, Arpulas (Arpilus) the monk, the eleven laymen Abippas (Abibus), Hagias (Agnus), Ruias (Reas), Egathrax (Igathrax), Eskoes (Iscous), Silas, Sigetzas (Signicus), Swerilas (Sonerilas), Swemblas (Suimbalus), Therthas (Thermus), and Philgas (Phillus), and the seven laywomen Anna, Alas (Alla), Baren (Beride, also recorded as Larissa), Moiko (Monco), Kamika (Mamika), Oneko (Virko), and Anemais (Animais, Animaida).
// A few years later, during the reign of Valentinian and Theodosius (383–392), Gaatha, the widow of the tribal leader Winguric, who had been appointed by Athanaric to carry out the persecution of the Christians, and her daughter Duclida (or Dulcilla, Duklida), both Christians, gathered the remains of the twenty-six Martyrs and with the help of some priests and a layman named Thyellas transferred them to Syria. Gaatha later returned to her native land, where she was stoned and died as a martyr, along with her son Agathon. The relics of the holy martyrs were left to Duclida, who went to Cyzicus in Asia Minor and gave some of the relics for the founding of a church. Duclida died in peace. In some calendars Gaatha, Duclida and Agathon are also commemorated with the twenty-six Martyrs.
// The Gothic calendar celebrates these Holy Martyrs on October 23rd, while they are listed in the Greek calendar under March 26th.

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Wereka Gudja;',
        en: "Presbyter Bercus (Ouerkas, Vercus, Werekas) and;",
      },
      notes: `Taken from the calendar.
Attested as "bi Werekan Papan" probably in ACC so an-stem perhaps.

On the english line, names in braces are variations I've found online.`
    },
    {
      text: {
        got: 'Batwins Gudja',
        en: "Presbyter Bathusius (Bathouses, Batwin)",
      },
      notes: `Taken from the calendar with the unknown Bilaif word.
Wondering if it means deacon.

Attested as "bi [...] Batwin Bilaif" probably in ACC so a-stem perhaps.`
    },
    {
      text: {
        got: 'miþ twaim sunum jah þrim dauhtrum seinaim;',
        en: "with his two sons and three daughters;",
      },
    },
    {
      text: {
        got: 'Arpulas Monakus;',
        en: "Monk Arpilus (Arpulas);",
      },
    },
    {
      text: {
        got: 'gamainjai',
        en: "laymen",
      },
    },
    {
      text: {
        got: 'Abippas,',
        en: "Abibus (Abippus, Habib, Abippas),",
      },
    },
    {
      text: {
        got: 'Hagias,',
        en: "Agnus (Hagias),",
      },
    },
    {
      text: {
        got: 'Ruias,',
        en: "Reasus (Ruias, Reas),",
      },
    },
    {
      text: {
        got: 'Egaþraks,',
        en: "Igathrax (Egathrax),",
      },
    },
    {
      text: {
        got: 'Eskoes,',
        en: "Iscoeus (Iskous, Eskoes, Escoos),",
      },
    },
    {
      text: {
        got: 'Silas,',
        en: "Silas,",
      },
    },
    {
      text: {
        got: 'Sigetzas,',
        en: "Signicus (Sigetzas),",
      },
    },
    {
      text: {
        got: 'Swerilas,',
        en: "Sonirilus (Swerilas),",
      },
    },
    {
      text: {
        got: 'Swemblas,',
        en: "Suimbalus (Swemblas),",
      },
    },
    {
      text: {
        got: 'Þerþas',
        en: "Thermus (Therthas),",
      },
    },
    {
      text: {
        got: 'jah Filgas;',
        en: "and Phillus (Philgas);",
      },
    },
    {
      text: {
        got: 'jah gamainjos',
        en: "and laywomen",
      },
    },
    {
      text: {
        got: 'Anna,',
        en: "Anna,",
      },
    },
    {
      text: {
        got: 'Alas,',
        en: "Alla (Alas),",
      },
    },
    {
      text: {
        got: 'Baren,',
        en: "Larissa (Baren, Beride),",
      },
    },
    {
      text: {
        got: 'Moiko,',
        en: "Monco (Manca, Moiko),",
      },
    },
    {
      text: {
        got: 'Kamika,',
        en: "Mamica (Kamika),",
      },
    },
    {
      text: {
        got: 'Oneko',
        en: "Uirko (Virko, Oneko),",
      },
    },
    {
      text: {
        got: 'jah Anemais.',
        en: "and Animais (Anemais, Animaida),",
      },
    },
  ], info)}
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "26 Martyros Taurikas", en: "26 Martyrs in the Crimea" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">26 Martyrs in the Crimea</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`


  return html`<!doctype html>
<html lang="${info.lang}">
  <head>
    ${createArticleHeaders(info)}
  </head>
  <body>
    ${createArticleBody(info, article)}
  </body>
</html>`
}

export default {
  anchors,
  generator
}