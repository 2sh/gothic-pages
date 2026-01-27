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


const slug = 'paitraus-hazins'
const title = 'Þata Spill Paitraus Hazins'
const description = "Þata Spill Paitraus Hazins, skeireins ïn razdai gutiskai."

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
      got: 'Þata Spill\nPaitraus Hasins',
      en: "The Tale of Peter Rabbit",
    }
  },], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Simle wesun fidwor hasans leitilai,',
        en: "Once upon a time there were four little Rabbits,",
      }
    },
    {
      text: {
        got: 'jah wesun haitanai —',
        en: "and their names were —",
      },
      notes:
        `Using 𐌷𐌰𐌹𐍄𐌰𐌽 to teach about a common way to say it in gothic
and the past passive usage.`
    },
    {
      text: {
        got: 'Flaupsi, Maupsi, Kauttaun-taieil jah Paitrus.',
        en: "Flopsy, Mopsy, Cotton-tail, and Peter.",
      },
      notes:
        `Cotton tail to translate, and to make sure the endings of the other names
are correct Gothic.

German translations for Cotton-Tail are Wattebausch or Baumwollschwänzchen.
There’s the yet to be approved neologisms *𐌱𐌰𐌲𐌼𐌰𐍅𐌿𐌻𐌻𐌰 and *𐍃𐍀𐌰𐌿𐍂𐌳𐍃`
    },
    {
      text: {
        got: 'Bauaidedun miþ aiþein ïze ïn malmadriuson',
        en: "They lived with their Mother in a sand-bank,",
      },
      notes:
        `𐌲𐍂𐍉𐌱𐌰 translates to foxhole on wiktionary but I imagine it wasn’t just
for foxes, it’s only been attested in the bible in relation to foxes.

*𐌼𐌰𐌻𐌼𐌰𐌳𐍂𐌹𐌿𐍃𐍉𐌽 made out of 𐌼𐌰𐌻𐌼𐌰 (sand) + 𐌳𐍂𐌹𐌿𐍃𐍉𐌽 (slope/bank)`
    },
    {
      text: {
        got: 'undaro waurtai faurhos mikilaizos filu.',
        en: "underneath the root of a very big fir-tree.",
      },
      notes: `neologism *𐍆𐌰𐌿𐍂𐌷𐌰 for fir *furho`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: '“NŪ, liubans meinai”, qaþ Hasa Fraujo ïn ainamma maurgina,',
        en: '“NOW, my dears”, said old Mrs. Rabbit one morning,',
      },
      notes:
        `*𐍆𐍂𐌰𐌿𐌾𐍉 from *frawjô, jô endings turning into 𐌾𐍉

“𐌹̈𐌽 𐌰𐌹𐌽𐌰𐌼𐌼𐌰 𐌳𐌰𐌲𐌴,” on one day Luke 5:17`
    },
    {
      text: {
        got: '“uslaubja ïzwis ïn haiþjos aiþþau and wig gaggan,',
        en: '“you may go into the fields or down the lane,',
      },
      notes:
        `𐌿𐍃𐌻𐌰𐌿𐌱𐌾𐌰𐌽 “Jesus gave them leave” Mark 5:13; 𐍃𐌺𐌿𐌻𐌳(𐌿) 𐌹̈𐍃𐍄 Mark 3:4 “is is necessary”; 𐌱𐌹𐌽𐌰𐌿𐌷𐍄 𐌹̈𐍃𐍄 Corinthians I 10:23`
    },
    {
      text: {
        got: 'ïþ gaggaiþ ïn aurtigard Mkgraigaur Fraujins.',
        en: "but don’t go into Mr. McGregor’s garden.",
      },
    },
    {
      text: {
        got: 'Ubil warþ bi attan ïzwar jainar;',
        en: "Your Father had an accident there;",
      },
      notes:
        `Übeles passierte über ihn dort.
an evil (thing), with thing being neuter?

befell to him 𐍅𐌰𐍂𐌸 𐌱𐌹 𐌸𐌰𐌽𐌰 Mark 5:16.
happen unto him 𐌹̈𐌽𐌰 𐌲𐌰𐌳𐌰𐌱𐌰𐌽. Mark 10:32. this word has a “as it should be” feel to it.
was done in her 𐍅𐌰𐍂𐌸 𐌱𐌹 𐌹̈𐌾𐌰 Mark 5:33.
be it unto me 𐍅𐌰𐌹𐍂𐌸𐌰𐌹 𐌼𐌹𐍃 Luke 1:38.`
    },
    {
      text: {
        got: 'ïs was ïn mat fram Mkgraigaur Fraujon galagiþs.”',
        en: 'he was put in a pie by Mrs. McGregor.”',
      },
      notes:
        `for now, “into a meal” instead of “in a pie”

“𐌻𐌰𐌲𐌹𐌳𐌰 𐍆𐌹𐌲𐌲𐍂𐌰𐌽𐍃 𐍃𐌴𐌹𐌽𐌰𐌽𐍃 𐌹̈𐌽 𐌰𐌿𐍃𐍉𐌽𐌰 𐌹̈𐌼𐌼𐌰” Mark 7:33.
𐌲𐌰𐌻𐌰𐌲𐌹𐌸𐍃 instead of 𐌻𐌰𐌲𐌹𐌸𐍃 as it’s talking about him being put in the pie,
not the motion of putting him into the pie? Focus of him being in the pie.
The Bible verse describes a series of events. That part talking about
the motion, with the next part having reached the ear.`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: '“JAH NŪ afleiþiþ, jah taujaiþ ni waiht unfroþ.',
        en: `“NOW run along, and don’t get into mischief.`,
      },
      notes:
        `depart from me 𐌰𐍆𐌻𐌴𐌹𐌸𐌹𐌸 𐍆𐌰𐌹𐍂𐍂𐌰 𐌼𐌹𐍃 Matthew 7:23.

A German translation has “Und nun”.

German has and macht kein Unsinn/Unfug.

options: untilamalsks: sorta works in meaning, though only one attestation;
dwals: foolish, too close to dull perhaps, perhaps also somewhat insulting to use;
𐌿𐌽𐍆𐍂𐍉𐌸𐍃: a bit too sterile perhaps but works I think`
    },
    {
      text: {
        got: `ïk usgagga.”`,
        en: `I am going out.”`,
      },
      notes:
        `go out 𐌿𐍃𐌲𐌰𐌲𐌲 Luke 14:23`
    },
    {
      text: {
        got: `Þan nam Hasa Fraujo tainjon jah rignskildu ïzos,`,
        en: `Then old Mrs. Rabbit took a basket and her umbrella,`,
      },
      notes:
        `take up his cross 𐌽𐌹𐌼𐌰𐌹 𐌲𐌰𐌻𐌲𐌰𐌽 𐍃𐌴𐌹𐌽𐌰𐌽𐌰 ACC Mark 8:34

*𐍂𐌹𐌲𐌽𐍃𐌺𐌹𐌻𐌳𐌿𐍃 - rain shield (temporary)`
    },
    {
      text: {
        got: `jah ïddja þairh walþu du bakari.`,
        en: `and went through the wood to the baker’s.`,
      },
      notes:
        `go through Mark 9:30.

NEO *walþus m. U
PGm *bakaną to 𐌱𐌰𐌺𐌰𐌽, class 6 verb. Looking at other class 6 verbs like 𐌳𐍂𐌰𐌲𐌰𐌽 from *draganą, and 𐍅𐌰𐌺𐌰𐌽 from *wakaną.
PGm *bakārijaz, Gothic having inherited the -ārijaz suffix as -𐌰𐍂𐌴𐌹𐍃, 𐌱𐌰𐌺𐌰𐍂𐌴𐌹𐍃`
    },
    {
      text: {
        got: `Bauhta ainana hlaif jah fimf basibakeinins.`,
        en: `She bought a loaf of brown bread and five currant buns.`,
      },
      notes:
        `𐌱𐌰𐌹𐍂𐌰 from bairabagms + 𐌱𐌰𐌺𐌴𐌹𐌽𐌹𐌽𐍃 𐌱𐌰𐌺𐌰𐌽+𐌴𐌹𐌽𐍃.

most likely needs improving.`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'FLAUPSI, Maupsi jah Kauttaun-taieil, þaiei wesun godai hasans leitilai,',
        en: `FLOPSY, Mopsy, and Cotton-tail, who were good little bunnies,`,
      },
    },
    {
      text: {
        got: 'ïddjedun and wig du lisan bremibasja;',
        en: `went down the lane to gather blackberries;`,
      },
      notes: `*bremibasi (n. Ja) from *bremibasją`
    },
    {
      text: {
        got: 'ÏÞ Paitrus, saei was ufarhausjands filu,',
        en: `BUT Peter, who was very naughty,`,
      },
      notes:
        `ufarhauseins, disobedience, then there’s ufhausjands found attested as
obedient. so ufarhausjands.

altenatively: “who was a very badly behaved rabbit”,
or “who was an excessively/very bold behaved rabbit”
𐍃𐌰𐌴𐌹 𐍅𐌰𐍃 𐌷𐌰𐍃𐌰 𐌿𐍃𐌼𐌹𐍄𐌰𐌽𐍃 𐌱𐌰𐌻𐌸𐌰𐌱𐌰. Using boldly 𐌱𐌰𐌻𐌸𐌰𐌱𐌰,
instead of 𐌿𐌱𐌹𐌻𐌰𐌱𐌰 as it may seem too harsh`
    },
    {
      text: {
        got: 'rann suns du aurtigard Mkgraigaur Fraujins,',
        en: `ran straight away to Mr. McGregor’s garden,`,
      },
    },
    {
      text: {
        got: 'jah þairhïddja uf daur!',
        en: `and squeezed under the gate!`,
      }
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'FRUMIST matida suma <[lettuces]> jah suma frankiska <[beans]>; jah þan matida suma <[radishes]>;',
        en: `FIRST he ate some lettuces and some French beans; and then he ate some radishes;`,
      }
    },
    {
      text: {
        got: 'JAH þan, habands ubil, ïddja suma <[parsley]> du sokjan.',
        en: `AND then, feeling rather sick, he went to look for some parsley.`,
      },
      notes: `𐌿𐍂𐍂𐌰𐌽𐌽 ... 𐌳𐌿 𐍃𐌰𐌹𐌰𐌽 Luke 8:5`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'AÞÞAN bi andja <[cucumber]> hramos, du ƕamma garann? Mkgraigaur Frauja!',
        en: `BUT round the end of a cucumber frame, whom should he meet but Mr. McGregor!`,
      },
      notes:
        `𐌷𐍂𐌰𐌼𐌾𐌰𐌽 “to crucify” from PGm *hramjaną out of the
parts o-stem *hramo (“frame, rack”) and *-janą.
hramo following o-stem *skamo to attested 𐍃𐌺𐌰𐌼𐌰 => 𐌷𐍂𐌰𐌼𐌰.

For meet, there’s 𐌲𐌰𐌵𐌹𐌼𐌰𐌽 and 𐌲𐌰𐍂𐌹𐌽𐌽𐌰𐌽, 𐌲𐌰𐌵𐌹𐌼𐌰𐌽 seems to be closer to meet,
𐌲𐌰𐍂𐌹𐌽𐌽𐌰𐌽 seems to be used for a meeting/gathering of multiples but it also being
a perfective of 𐍂𐌹𐌽𐌽𐌰𐌽 feels quite fitting “into whom does he run?”. In
English the “into” is required as the run could be imperfective,
but shouldn’t be needed with the Gothic 𐌲𐌰𐍂𐌹𐌽𐌽𐌰𐌽, I think.`
    },
    {
      text: {
        got: 'Mkgraigaur Frauja was ana handum jah kniwam ïs ussatjands jugga <[cabbages]>,',
        en: `Mr. McGregor was on his hands and knees planting out young cabbages,`,
      },
      notes:
        `𐌰𐌽𐌰 𐌰𐌽𐌳𐌰𐍅𐌻𐌴𐌹𐌶𐌽 “on his face” Corinthians I 14:25.`
    },
    {
      text: {
        got: `ïþ ushaihlaup jah rann afar Paitrau, swaggwida raka jah hropida: “Gastand þiuf!”`,
        en: `but he jumped up and ran after Peter, waving a rake and calling out, “Stop thief!`,
      },
      notes:
        `Matthew 8:1, Matthew 8:22, Matthew 9:9 use 𐌰𐍆𐌰𐍂 like English,
not 𐌷𐌹𐌽𐌳𐌰𐍂 like German. 𐌰𐍆𐌰𐍂 with dative in this case.

Using *𐍃𐍅𐌰𐌲𐌲𐍅𐌾𐌰𐌽 which probably means to sway, may need changing though.

Using *𐍂𐌰𐌺𐌰 for rake, from PGm female o-stem *rako. Looking at 𐌱𐍉𐌺𐌰’s declensions.
Not from an-stem *rekô as it clashes with 𐍂𐌹𐌺𐌰𐌽’s conjugations.`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: `PAITRUS ohta sis abraba;`,
        en: `PETER was most dreadfully frightened;`,
      },
      notes:
        `𐍉𐌷𐍄𐌴𐌳𐌿𐌽 𐍃𐌹𐍃 John 6:19, ohtedun abraba Matthew 27:54`
    },
    {
      text: {
        got: `sniumida and allana aurtigard,`,
        en: `he rushed all over the garden,`,
      },
      notes:
        `and all gawi ACC sing Luke 4:14`
    },
    {
      text: {
        got: `unte ni gamunan wig atwandjands du daur.`,
        en: `for he had forgotten the way back to the gate.`,
      },
      notes:
        `ni gamunuþ Mark 8:18

wiga gaggandans du Iairusaulwmai Mark 10:32`
    },
    {
      text: {
        got: `Fralaus ainana skohe ïn <[cabbages]>,`,
        en: `He lost one of his shoes among the cabbages,`,
      },
      notes:
        `“one of” Matthew 5:19, Matthew 5:29.`
    },
    {
      text: {
        got: `jah anþarana skoh ïn <[potatoes]>.`,
        en: `and the other shoe amongst the potatoes.`,
      },
      notes:
        `“one of” Matthew 5:19, Matthew 5:29.`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: `AFAR þatei fralaus þans, rann ana liþus fidworim jah ïddja snilliza,`,
        en: `AFTER losing them, he ran on four legs and went faster,`,
      },
      notes:
        `𐌰𐍆𐌰𐍂 𐌸𐌰𐍄𐌴𐌹 Mark 1:14, 𐌰𐍆𐌰𐍂 𐌸𐌰𐍄𐌴𐌹 𐍂𐍉𐌳𐌹𐌳𐌰 𐌳𐌿 𐌹̈𐌼 Mark 16:19, Skeireins 7:4.

went with limb 𐌻𐌹𐌸𐌿𐍃 as leg not really attested.

*𐍃𐌽𐌹𐌻𐌻𐍃 from a-stem snellaz, looking at a-stem 𐌼𐌰𐌽𐌰𐌲𐍃, comparative 𐌼𐌰𐌽𐌰𐌲𐌹𐌶𐌰 => 𐍃𐌽𐌹𐌻𐌻𐌹𐌶𐌰`
    },
    {
      text: {
        got: `swaei ïk fraþja gaþlauhi allandjo,`,
        en: `so that I think he might have got away altogether`,
      },
      notes:
        ``
    },
    {
      text: {
        got: `wainei unaudagaba ni garunni ïn <[gooseberry]> nati,`,
        en: `if he had not unfortunately run into a gooseberry net,`,
      },
      notes:
        `“if only, would that” + SUBJ Corinthians I 4:8, Corinthians II 11:1, Galatians 5:12.

fortunate 𐌰𐌿𐌳𐌰𐌲𐍃, 𐌿𐌽𐌰𐌿𐌳𐌰𐌲𐌰𐌱𐌰 following a-stem 𐌱𐌰𐌹𐍂𐌷𐍄𐌰𐌱𐌰.`
    },
    {
      text: {
        got: `jah warþ þairh mikila <[buttons]> ana <[jacket]> ïs gafāhans.`,
        en: `and got caught by the large buttons on his jacket.`,
      },
      notes:
        ``
    },
    {
      text: {
        got: `Sa was <[jacket]> blews miþ <[buttons]> aizis, niujis filu.`,
        en: `It was a blue jacket with brass buttons, quite new.`,
      },
      notes:
        `*𐌱𐌻𐌴𐍅𐍃

Translating “quite” to “very” for now.`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: `PAITRUS þāhta sis swe fralusans, jah fralaílot tagr mikil;`,
        en: `PETER gave himself up for lost, and shed big tears;`,
      },
    },
    {
      text: {
        got: `ïþ gretos ïs wesun gáuridai sumaim <[sparrows]> qairrjaim`,
        en: `but his sobs were overheard by some friendly sparrows,`,
      },
    },
    {
      text: {
        got: `þaiei gadrobnandans mikilaba <[flew]> du ïmma, jah ïna bedun ïna du usdaudjan.`,
        en: `who flew to him in great excitement, and implored him to exert himself.`,
      },
      notes:
        ``
    },
  ], info)}</p>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Þata Spill Paitraus Hasins", en: "The Tale of Peter Rabbit" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "fram Beiaitriks Pauttair", en: "by Beatrix Potter" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025).", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Tale of Peter Rabbit</span>
  <span class="nowrap">by Beatrix Potter</span>
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