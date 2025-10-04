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
      notes: ``
    },
    // laymen and women
    {
      text: {
        got: 'Abippas,',
        en: "Abibus (Abippus, Habib, Abippas),",
      },
    },
    /*
    {
      text: {
        got: 'Konstans,',
        en: "Constans,",
      },
      notes: `Included in the "Eastern Orthodox martyrologies"`
    },
    */
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
        got: 'Þerþas,',
        en: "Thermus (Therthas),",
      },
    },
    {
      text: {
        got: 'Filgas,',
        en: "Phillus (Philgas),",
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
        got: 'Oneko,',
        en: "Uirko (Virko, Oneko),",
      },
    },
    {
      text: {
        got: 'Anemais,',
        en: "Animais (Anemais, Animaida),",
      },
    },
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
    /*
    {
      text: {
        got: 'jah Prince Agaþon,',
        en: "and Prince Agathon,",
      },
      notes: `Included in the "Eastern Orthodox martyrologies"`
    },
    */
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