import
{
  html,
  safeHtmlText,
  createArticleBody,
  toGothicLine,
  articleHead
} from '@server/tools'

// https://www.grimmstories.com/de/grimm_maerchen/der_arme_und_der_reiche
// https://www.grimmstories.com/en/grimm_fairy-tales/the_poor_man_and_the_rich_man

global.lineId = 0

const title = '𐍃𐌰 𐌿𐌽𐌻𐌴𐌳𐌰 𐌾𐌰𐌷 𐍃𐌰 𐌲𐌰𐌱𐌹𐌲𐌰'
let content = ''

content += html`<header>
  <h1>${toGothicLine({
  text: {
got: 'Sa Unleda jah sa Gabiga',
de: "Der Arme und der Reiche",
en: "The Poor Man and the Rich Man",
    },
})}</h1>
</header>`

content += html`<p>${[
{
  text: {
got: 'Faúr faírnja mēla, biþē liufs Guþ naúh silba ana airþai ïn mannam ƕarbōda,',
de: "Vor alten Zeiten, als der liebe Gott noch selber auf Erden unter den Menschen wandelte,",
en: "In olden times, when the Lord himself still used to walk about on this earth amongst men,"
    },
    notes:
`𐍆𐌰𐌹𐍂𐌽𐌴𐌹𐍃 seems to mean old but also "of former times"

𐌼𐌴𐌻: my time John 7:6, "times" Galatians 4:10, "in his times" Timothy I 6:15.
Though the plural can also mean writing/scripture, it's fitting.

Jesus walked in John 7:1, John 10:23, Mark 1:16, Mark 11:27, Matthew 9:27`
},
{
  text: {
got: 'ïta warþ, ei ïs at ainamma andanahtja mōþus warþ jah ins nahts biqam',
de: "trug es sich zu, daß er eines Abends müde war und ihn die Nacht überfiel,",
en: "it once happened that he was tired and overtaken by the darkness"
    },
    notes:
`it came to pass = 𐍅𐌰𐍂𐌸

it came to pass, that Luke 6:12, Luke 8:1.

tired *𐌼𐍉𐌸𐌿𐍃 from PGm u-stem *mōþuz.`
},
{
  text: {
got: 'faúra du saliþwōm gaqiman mahta.',
de: "bevor er zu einer Herberge kommen konnte.",
en: "before he could reach an inn."
    }
},
{
  text: {
got: 'Nū stōþun ana wiga faúra imma twa razna missō wiþrawaírþa,',
de: "Nun standen auf dem Weg vor ihm zwei Häuser einander gegenüber,",
en: "Now there stood on the road before him two houses facing each other;"
    },
    notes:
`Unsure if 𐌼𐌹𐍃𐍃𐍉 𐍅𐌹𐌸𐍂𐌰𐍅𐌰𐌹𐍂𐌸𐌰 works.`
},
{
  text: {
got: 'ain mikil jah skaun, anþar leitil jah unlēþ du andsaíƕan,',
de: "das eine groß und schön, das andere klein und ärmlich anzusehen,",
en: "the one large and beautiful, the other small and poor."
    },
    notes:
`du saiƕan Matthew 6:1`
},
{
  text: {
got: 'jah þata mikil gabigis, jah þata leitil unlēdis.',
de: "und gehörte das große einem reichen, das kleine einem armen Manne.",
en: "The large one belonged to a rich man, and the small one to a poor man."
    },
},
].map(toGothicLine).join('\n')}</p>`


content += html`<p>${[
{
  text: {
got: `Ei þāhta Frauja Guþ unsar "þana gabigan ni kaúrida, wiljau at ïmma saljan."`,
de: `Da dachte unser Herrgott 'dem Reichen werde ich nicht beschwerlich fallen: bei ihm will ich übernachten.'`,
en: `Then the Lord thought, "I shall be no burden to the rich man, I will stay the night with him."`
    },
    notes:
`𐍆𐍂𐌰𐌿𐌾𐌰 𐌲𐌿𐌸 attested.

saliþwos at imma John 14:23.`
},
{
  text: {
got: `sa gabiga, biþē daúr ïs slahan hausida,`,
de: `Der Reiche, als er an seine Türe klopfen hörte,`,
en: `When the rich man heard some one knocking at his door,`
    },
    notes:
`using 𐍃𐌻𐌰𐌷𐌰𐌽 for knock`
},
{
  text: {
got: `uslauk augadaúrō jah baþ þana framaþjan, ƕa sōkjai`,
de: `machte das Fenster auf und fragte den Fremdling, was er suche.`,
en: `he opened the window and asked the stranger what he wanted.`
    },
},
{
  text: {
got: `Frauja andhōf "bidja naht du saljan."`,
de: `Der Herr antwortete 'ich bitte um ein Nachtlager.'`,
en: `The Lord answered, "I only ask for a night's lodging."`
    },
    notes:
`𐌽𐌰𐌷𐍄 𐌾𐌰𐌷 𐌳𐌰𐌲 𐌹𐌽 𐌳𐌹𐌿𐍀𐌹𐌸𐌰𐌹 𐍅𐌰𐍃 𐌼𐌰𐍂𐌴𐌹𐌽𐍃 "a night and a day I have been in the deep" Corinthians II 11:25.`
},
].map(toGothicLine).join('\n')}</p>`


content += html`<p>${[
{
  text: {
got: `Sa gabiga ïnsaƕ du þamma ƕarbōnds fram haubida und fōtuns,`,
de: `Der Reiche guckte den Wandersmann von Haupt bis zu den Füßen an,`,
en: `Then the rich man looked at the traveler from head to foot,`
    },
    notes:
`looked upon him Mark 14:67

from ... to ... Mark 13:27`
},
{
  text: {
got: `jah untē sa liufs Guþ was ainfalþaim wastjōm gawasiþs`,
de: `und weil der liebe Gott schlichte Kleider trug`,
en: `and as the Lord was wearing common clothes`
    },
    notes:
`clothed in soft raiment Matthew 11:8.`
},
{
  text: {
got: `jah ni was swē sums gasaíƕaizau, saei faíhu filu ïn pugga habai,`,
de: `und nicht aussah wie einer, der viel Geld in der Tasche hat,`,
en: `and did not look like one who had much money in his pocket,`
    },
    notes:
`passive 𐌲𐌰𐍃𐌰𐌹𐍈𐌰𐌽 as appear in Matthew 6:16, Matthew 6:18, Luke 9:31

alt: 𐌽𐌹 𐍃𐍄𐍉𐌾𐌰𐌹𐌸 𐌱𐌹 𐍃𐌹𐌿𐌽𐌰𐌹 "Judge not according to the appearance" John 7:24.`
},
{
  text: {
got: `wiþōda ïs haubiþ seinana jah qaþ`,
de: `schüttelte er mit dem Kopf und sprach`,
en: `he shook his head, and said,`
    },
    notes:
`𐍅𐌹𐌸𐍉𐌽𐌳𐌰𐌽𐍃 𐌷𐌰𐌿𐌱𐌹𐌳𐌰 𐍃𐌴𐌹𐌽𐌰 "wagging their heads" Mark 15:29`
},
{
  text: {
got: `"ni mag þuk andniman, hēþjōns meinōs sind fullōs grasē jah sēdē,`,
de: `'ich kann Euch nicht aufnehmen, meine Kammern liegen voll Kräuter und Samen,`,
en: `"No, I cannot take you in, my rooms are full of herbs and seeds;`
    },
    notes:
`He that receiveth you receiveth me Matthew 10:40.

𐍆𐌿𐌻𐌻𐍉𐍃 𐌲𐌰𐌱𐍂𐌿𐌺𐍉 "full of fragments" GEN Mark 8:19, Mark 8:20.

*𐍃𐌴𐌸𐍃, attested in the compound 𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃`
},
{
  text: {
got: `jah jabei ƕana saljau, saei daúr mein slahai,`,
de: `und sollte ich einen jeden beherbergen, der an meine Tür klopft,`,
en: `and if I were to lodge everyone who knocked at my door,`
    }
},
{
  text: {
got: `swa ganimau ïk silba hrugga bidagwins ïn handau.`,
de: `so könnte ich selber den Bettelstab in die Hand nehmen.`,
en: `I might very soon go begging myself. `
    },
},
{
  text: {
got: `Sōkei þus aljiþ saliþwōs."`,
de: `Sucht Euch anderswo ein Auskommen.'`,
en: `Go somewhere else for a lodging,"`
    },
},
{
  text: {
got: `þaþrōh þan galauk augadaúrō ïs jah aflailōt þana liubana Guþ standandan.`,
de: `Schlug damit sein Fenster zu und ließ den lieben Gott stehen.`,
en: `and with this he shut down the window and left the Lord standing there."`
    },
    notes:
`𐌰𐍆𐌻𐌴𐍄𐌰𐌽𐌳𐌰𐌽𐍃 𐌹̈𐌽𐌰 "forsook him" Mark 14:50.
𐌰𐍆𐌻𐌴𐍄𐌰𐌽 seems to have a sense of abandoning.`
},
].map(toGothicLine).join('\n')}</p>`


content += html`<p>${[
{
  text: {
got: `Swaei bilaiþ ïmma sa liufs Guþ jah ufarlaiþ du razn þamma leitil.`,
de: `Also kehrte ihm der liebe Gott den Rücken und ging hinüber zu dem kleinen Haus.`,
en: `So the Lord turned his back on the rich man, and went across to the small house`
    }
},
{
  text: {
got: `Halis slōh, swa uslauk sa unlēda ju daúr leitil sein`,
de: `Kaum hatte er angeklopft, so klinkte der Arme schon sein Türchen auf`,
en: `and knocked. He had hardly done so when the poor man opened the little door`
    },
    notes:
`*𐌷𐌰𐌻𐌹𐍃 from 𐌷𐌰𐌻𐌹𐍃𐌰𐌹𐍅 "hardly ever".

Not using a diminutive -𐌹𐌻𐌰. 𐌳𐌰𐌿𐍂𐌹𐌻𐌰 sounds like it could be confused.
Another possible suffix: [url=https://en.wiktionary.org/wiki/Reconstruction:Gothic/-%F0%90%8C%BF%F0%90%8C%BA%F0%90%8D%83]*-𐌿𐌺𐍃[/url].`
},
{
  text: {
got: `jah baþ þana ƕarbōndan ei ïnnïddjēdi.`,
de: `und bat den Wandersmann einzutreten.`,
en: `and bade the traveler come in.`
    },
    notes:
`𐌱𐌰𐌸 𐍃𐌹𐍀𐍉𐌽𐌾𐌰𐌽𐍃 𐌸𐌴𐌹𐌽𐌰𐌽𐍃 𐌴𐌹 𐌿𐍃𐌳𐍂𐌹𐌱𐌴𐌹𐌽𐌰 𐌹̈𐌼𐌼𐌰 "I besought thy disciples to cast him out" Luke 9:40`
},
{
  text: {
got: `"Salei naht at mis," qaþ ïs,`,
de: `'Bleibt die Nacht über bei mir,' sagte er,`,
en: `"Pass the night with me," said he;`
    },
},
{
  text: {
got: `ju riqizida, jah ni magt himma daga þaírhleiþan.`,
de: `'es ist schon finster, und heute könnt Ihr doch nicht weiterkommen.'`,
en: `"it is already dark, you cannot go any further to-night."`
    },
    notes: `𐌽𐌹 𐌼𐌰𐌲𐌿𐌸 John 8:43.

Perhaps 𐌽𐌹𐌱𐌰𐌹 can be used here?

þairhleiþands pass forth Matthew 9:9`
},
{
  text: {
got: `Þatei leikaida þamma liubamma Guda, jah ïnnïddja du ïmma.`,
de: `Das gefiel dem lieben Gott, und er trat zu ihm ein.`,
en: `This pleased the Lord, and he went in.`
    },
    notes: `þatei leikaiþ imma John 8:29`
},
{
  text: {
got: `Qēns þis unlēdis ufrakida ïmma handu ïzōs,`,
de: `Die Frau des Armen reichte ihm die Hand,`,
en: `The poor man's wife shook hands with him,`
    },
    notes: `𐌿𐍆𐍂𐌰𐌺𐌴𐌹 𐌸𐍉 𐌷𐌰𐌽𐌳𐌿 𐌸𐌴𐌹𐌽𐌰 Luke 6:10`
},
{
  text: {
got: `gataih ïna swē andnumanana jah qaþ,`,
de: `hieß ihn willkommen und sagte,`,
en: `and welcomed him, and said`
    },
    notes: `declare him as accepted/taken in/adopted`
},
{
  text: {
got: `þrafstidēdi sik jah usþulaidedi aihtins þeinōs,`,
de: `er möchte sichs bequem machen und vorlieb nehmen,`,
en: `he was to make himself at home and put up with what they had got;`
    },
    notes:
`Luke 19:4

þrafstei þuk Matthew 9:2.

usþulaiþ mik Corinthians II 11:1 => put up with their possessions`
},
{
  text: {
got: `ïja ni habaidēdeina filu,`,
de: `sie hätten nicht viel,`,
en: `they had not much to offer him,`
    }
},
{
  text: {
got: `ïþ ƕa wēsi, gēbi haírtins gabaúrjaba.`,
de: `aber was es wäre, gäben sie von Herzen gerne.`,
en: `but what they had they would give him with all their hearts.`
    }
},
{
  text: {
got: `Þan lagida si aírþaaplans at aid,`,
de: `Dann setzte sie Kartoffeln ans Feuer,`,
en: `Then she put the potatoes on the fire,`
    },
    notes:
`potato: *airþaapls
fire: *aids`
},
{
  text: {
got: `jah miþþanei sudun,`,
de: `und derweil sie kochten,`,
en: `and while they were boiling,`
    },
    notes:
`cooking: *siudan following 𐌻𐌹𐌿𐌳𐌰𐌽`
},
].map(toGothicLine).join('\n')}</p>`


content += html`<p lang='en' class="annotation">
<span class="nowrap">The Poor Man and the Rich Man,</span>
<span class="nowrap">a fairy tale by the Brothers Grimm</span>
<span class="nowrap">in the Gothic language,</span>
<br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
</p>`


const page = html`<!doctype html>
<html lang="got">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
  ${createArticleBody(content, undefined, ['got', 'de', 'en'])}
</html>`

export default page