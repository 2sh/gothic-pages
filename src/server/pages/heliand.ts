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


// https://de.wikipedia.org/wiki/Mondnacht_(Eichendorff)


const slug = 'nasjands'
const title = 'Nasjands'
const description = "Nasjands, skeireins in razdai gutiskai."

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
      got: 'Nasjands',
      en: "Saviour",
      osx: "Heliand",
    },
  },], info)}</h1>
  </header>`



  article += html`<h2>${toGothicLines([{
    text: {
      got: 'Weihanahts (357)',
      en: "Christmas",
    },
  },], info)}</h2>`

  let poem = ''

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Þaruh galaiþ auk miþ garda seinamma",
      osx: "   Thô giwêt im ôk [mid] is hîwiska",
      de: "   Da machte sich auf auch mit seinem Haus",
      en: "   So to his homeland",
    },
    notes: ``
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Iosef sa goda,   swaswe Guþ mahteigs,",
      osx: "Joseph the gôdo,   sô it god mahtig,",
      de: "Joseph, der gute,   wie es Gott, der mächtige,",
      en: "Came Joseph, the good man,   as God the Almighty,",
    },
    notes: `"Guþ ..., swaswe wilda." Corinthians I 12:18`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Waldands wilda:   sokida sik wairþa bauain,",
      osx: "Waldand welda:   sôhta im [thiu] [wânamon] hêm,",
      de: "der Waltende wollte,   suchte sich das glanzvolle Heim,",
      en: "The Wielder had willed it;   with his family he came,",
    },
    notes: `using worthy instead of shining for allit.
dwelling place instead of a "heim" reconstruction`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "baurg in Beþlaihaim,   þarei bai is wesun,",
      osx: "thea burg an Bethleem,   thar iro beiðero was,",
      de: "die Burg in Bethlehem,   wo ihrer beider war,",
      en: "Sought his shining castle,   his lordly seat,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "gridais gardis   jah auk gagudaizos magaþais,",
      osx: "thes heliðes handmahal   endi ôk thera hêlagun thiornun,",
      de: "des Helden Gerichtshof,   und auch der heiligen Jungfrau,",
      en: "The bastion at Bethlehem,   where they both did dwell,",
    },
    notes: `"his court's rank"

"godly/honorable virgin" - gaguds seems to be used without a "divine" meaning towards
a counsellor, Joseph of Arimathaea, to simply mean honorable.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Mariïns þizos godons.   Þar was þis mahteigins sitls",
      osx: "Mariun thera gôdun.   Thar was thes mâreon stôl",
      de: "Maria der guten.   Da war des Mächtigen Stuhl",
      en: "Hero and holy maid,   Mary the good.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "in dagam airis   Daweidis þis godins,",
      osx: "an êrdagun,   aðalkuninges,",
      de: "in früheren/alten Tagen,   des Adel-Königes,",
      en: "There stood in earlier days   the shining throne",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þiudanis godakundis,   swa lagga swe is þar reiki,",
      osx: "Dauides thes gôdon,   than [langa] the he thana druhtskepi thar,",
      de: "Davids, des guten,   so lange, als er die Volksherrschaft dort",
      en: "Of the high-born king,   of the earl of the Hebrews,",
    },
    notes: `"swa lagga ƕeila swe" Mark 2:19; "swa lagga swe" Romans 11:13
Like the German I'm guessing "so lange (Weile) als", laggs declined to ƕeila.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "in Haibraium grafja   haban þaurfta,",
      osx: "erl undar Ebreon   êgan môsta,",
      de: "als Fürst unter den Hebräern   besitzen mußte,",
      en: "Of David the good,   as long as he governed",
    },
    notes: `*grafja from the Neolog. doc`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "hauhsitl fastan.   Wesun gards is,",
      osx: "haldan hôhgisetu.   [Sie] wârun is hîwiskas,",
      de: "bewahren den Hochsitz.   Sie waren seines Hauses,",
      en: "And kept lofty seat.   They were his kith,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "qemun fram fadreinai is,   kunjis godis,",
      osx: "kuman fon is knôsla,   kunneas gôdes,",
      de: "gekommen von seinem Stamme,   guten Geschlechtes,",
      en: "Were come from his clan,   were of good kin all,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "bai us gabaurþai.   þar gafrah ik ei [ijos] bairhtos gaskaftins,",
      osx: "bêðiu bi giburdiun.   Thar gifragn ik, that [sie thiu] berhtun giskapu,",
      de: "beide von Geburt aus.   Weiter erfuhr ich, daß sie die herrlichen Wirkungen,",
      en: "Both through their birth.   Then I heard that the bright tidings",
    },
    notes: `bright creations = the angels, john the baptist and OT prophets`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Marïin, meridedun   jah maht Gudis,",
      osx: "Mariun gimanodun   endi maht godes,",
      de: "Marien, gemahnten   und die Macht Gottes,",
      en: "Admonished Mary,   and the might of God:",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "ei izai þar   sunus fragibans warþ,",
      osx: "that iru an [them] sîða   [sunu] [ôdan] [warð],",
      de: "daß ihr auf der Fahrt   ein Sohn gegeben ward,",
      en: "That on this site   a Son should be hers,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "gabaurans in Beþlahaim   barne swinþists,",
      osx: "giboran an Bethleem   barno strangost,",
      de: "geboren in Bethlehem,   der Söhne stärkster,",
      en: "Born here in Bethlehem,   the Mightiest of Bairns,",
    },
    notes: `using swinþs here as it also includes healthy`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "mahteigists allaize þiudane:   sa merja qam,",
      osx: "allaro kuningo kraftigost:   kuman [warð] the mâreo,",
      de: "aller Könige kräftigster,   kommend ward der erlauchte, mächtige,",
      en: "The Strongest of Kings.   Come was the Shining One,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "gabigs in manne liuhada,   swe þis managaim dagam air",
      osx: "[mahtig] [an] manno lioht,   sô is [êr] managan dag",
      de: "an der Menschen Licht,   wie von ihm früher manchen Tag",
      en: "Mighty here to man’s light,   as for many a day",
    },
    notes: `John 1:4, "mighty in the having the light of men",
"gabigs in allans" Romans 10:12`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "manleikans wesun   jah taikneis filu",
      osx: "biliði wârun   endi [bôkno] filu",
      de: "Bilder waren   und Zeichen viel",
      en: "Pictures of Him   and tokens aplenty",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "in fairƕau waurþun.   swah usfullnoda allata",
      osx: "giworðen an thesero weroldi.   Thô was it all giwârod sô,",
      de: "geworden in dieser Welt.   Da war es all erfüllet so,",
      en: "Had foretold in this world.   So all had turned true,",
    },
    notes: `"ei usfullidedi allata." Ephesians 4:10`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "swe handugai mans   fauragahaíhaitun air,",
      osx: "sô it êr spâha man   gisprokan habdun,",
      de: "wie es eher weise Männer   gesprochen hatten,",
      en: "As the sages had spoken it   in the long, long ago.",
    },
  }], info)}
<br>
...
</p>`

  article += html`<div class='poem'>${poem}</div>`

  article += html`<h2>${toGothicLines([{
    text: {
      got: 'Atta Unsar (1600)',
      en: "Lord's Prayer",
    },
  },], info)}</h2>`

  poem = html`<p>
${toGothicLines([{
    text: {
      got: "Atta unsar   alamanne barne,",
      osx: "[Fadar ûsa]   firiho barno,",
      de: "Vater ist unser,   der Menschenkinder,",
      en: "Father of us,   who art all Thy folk-bairns,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þū in þizai háuhon   himine þiudangardjai,",
      osx: "[thu bist] an them hôhon   himila rîkea,",
      de: "du bist in dem hohen   Reiche der Himmel,",
      en: "Thou who art on high   in the kingdom of Heaven,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "weihnai namo Þein   waurda ƕammeh.",
      osx: "gewîhid sî thîn namo   [wordo gehwiliko].",
      de: "geweihet sei dein Name   mit jeglichem Worte,",
      en: "Hallowed Thy name   here in every world,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þiudinassus þiuþeigs   Þeins qimai.",
      osx: "[Cuma] thîn   [kraftag] rîki.",
      de: "komme dein   kräftige Reich,",
      en: "Thy kingdom come   in strength and craft,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Wairþai in manasedai alakjo   wilja Þeins,",
      osx: "Werða thîn willeo   oƀar thesa werold [alla],",
      de: "werde dein Wille   über diese Welt all",
      en: "Thy will be done   over all the world;",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "swe ana airþai   jah ufar þar",
      osx: "sô sama an erðo,   sô thar uppa ist",
      de: "eben so auf Erden   wie es dar oben ist,",
      en: "As here on earth;   so there above",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "in þizai háuhon   himine þiudangardjai.",
      osx: "an them hôhon   [himilo rîkea].",
      de: "in dem hohen   Reiche der Himmel,",
      en: "On high in the   kingdom of Heaven.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Gif uns daga ƕammeh andawizn,   allwaldand, sa goda,",
      osx: "Gef ûs dago gehwilikes râd,   drohtin the gôdo,",
      de: "gib uns an der Tage jeglichem den Bedarf,   Herr, der gute,",
      en: "Give us each day, good Lord,   Thy gracious guidance,",
    },
    notes: `Hlaif unsarana þana sinteinan gif uns himma daga.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "hilpa Þeina hailaga,   jah aflet unsis, himinis wardja,",
      osx: "thîna hêlaga [helpa],   endi alât ûs, heƀenes ward,",
      de: "deine heilige Hülfe,   und erlaß uns, Himmelswart,",
      en: "Thy holy help, and absolve us,   O Warder of Heaven,",
    },
    notes: `Jah aflet uns þatei skulans sijaima,`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "managa missadedins,   alla swe mannam aljaim taujam.",
      osx: "managoro [mên]skuldio,   al sô we ôðrum mannum dôan.",
      de: "die Menge der Meinschulden,   all wie wir andern Menschen thuen,",
      en: "From the manifold mischief   we do against mankind,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ni letais uns uslutnan   latos wistins",
      osx: "Ne lât ûs farlêdean   lêða wihti",
      de: "nicht laß uns verleiten   ledige Wesen",
      en: "Let not loathsome wights   lead us astray,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "swe þanamais bi wiljam ize,   swe wairþai sijum,",
      osx: "sô forð an iro willeon,   sô wi wirðige sind,",
      de: "so fort nach ihrem Willen,   so wir würdig sind,",
      en: "As is their will   and as we are worthy;",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "ak hilp unsar wiþra alla   ubila toja.",
      osx: "ak help ûs wiðar allun   uƀilon dâdiun.",
      de: "sondern hilf uns wider alle   übelen Thaten.",
      en: "But help us against   all our evil deeds.",
    },
  }], info)}
</p>`

/*
Atta unsar þū in himinam, weihnai namo Þein.
Qimai þiudinassus Þeins.
Wairþai wilja Þeins, swe in himina jah ana airþai.
Hlaif unsarana þana sinteinan gif uns himma daga.
Jah aflet uns þatei skulans sijaima,
swaswe jah weis afletam þaim skulam unsaraim.
Jah ni briggais uns in fraistubnjai,
ak lausei uns af þamma ubilin.
*/

  article += html`<div class='poem'>${poem}</div>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Daileis us Heliand", en: "Parts from the Heliand" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Parts of the Heliand</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2026).</span>
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