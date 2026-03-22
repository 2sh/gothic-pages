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

// https://www.ellopos.com/blog/4505/texts-witnessed-only-in-the-septuagint-1-esdras-psalm-151-prayer-of-manasseh/
// https://www.saint.gr/226/texts.aspx
// https://bible.oremus.org/?ql=26864532
// https://www.bombaxo.com/and-now-i-bend-the-knee-of-my-heart/

const slug = 'bida-manassezis'
const title = 'Bida Manassezis'
const description = "Bida Manassezis, skeireins in razdai gutiskai."

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
      got: 'Bida Manassezis',
      en: "Prayer of Manasseh",
    },
    notes: `Manasses from Μανασσῆς, looking at attested name Moses from Μωσῆς`
  },], info)}</h1>
</header>`

  article += html`<p class='verses'>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Frauja allwaldand, Guþ Attane unsaraize, Abrahamis jah Isakis jah Iakobis jah fraiwis ize garaihtis;",
      grc: "Κύριε παντοκράτορ, ὁ Θεὸς τῶν Πατέρων ἡμῶν, τοῦ Ἀβραὰμ καὶ Ἰσαὰκ καὶ Ἰακὼβ καὶ τοῦ σπέρματος αὐτῶν τοῦ δικαίου·",
      en: "O Lord Almighty, God of our ancestors, of Abraham and Isaac and Jacob and of their righteous offspring,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "saei gaskop himin jah airþa miþ alla gafeteinai ize;",
      grc: "ὁ ποιήσας τὸν οὐρανὸν καὶ τὴν γῆν σὺν παντὶ τῷ κόσμῳ αὐτῶν·",
      en: "you who made heaven and earth with all their order,",
    },
    notes: `κόσμος always translates to fairƕus or manaseþs in the Gothic Bible,
but in this context it seems to be the "order", "adornment" meaning. Though
related verb κοσμέω translates to a use of the noun gafeteins
from fetjan meaning "to adorn oneself".`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "saei gaband marein waurda anabusnais Þeinaizos; saei galauk afgrundiþa jah faursiglida ija agisleikamma jah wulþagamma namin þeinamma;",
      grc: "ὁ πεδήσας τὴν θάλασσαν τῷ λόγῳ τοῦ προστάγματός σου· ὁ κλείσας τὴν ἄβυσσον καὶ σφραγισάμενος αὐτὴν τῷ φοβερῷ καὶ ἐνδόξῳ ὀνόματί σου·",
      en: "who shackled the sea by your word of command, who confined the deep and sealed it with your terrible and glorious name,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "in þize all wagjada jah reiraiþ fram andwairþja mahtais Þeinaizos;",
      grc: "ὃν πάντα φρίσσει καὶ τρέμει ἀπὸ προσώπου τῆς δυνάμεώς σου·",
      en: "at whom all things shudder and tremble before your power,",
    },
    notes: `in þize Xristus gaswalt Corinthians I 8:11 "because of whom"

φρίσσω comes up in James 2:19, unattested sadly. Using wagjada (be moved/shaken).

fram andwairþja fraujins Thessalonians II 1:9`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte unþulaiþs ist mikilei wulþaus Þeinis, jah unandstaþans ist þwairhei ana frawaurhtans ƕotos Þeinaizos,",
      grc: "ὅτι ἄστεκτος ἡ μεγαλοπρέπεια τῆς δόξης σου, καὶ ἀνυπόστατος ἡ ὀργὴ τῆς ἐπὶ ἁμαρτωλοῖς ἀπειλῆς σου,",
      en: "for your glorious splendor cannot be borne, and the wrath of your threat to sinners is unendurable;",
    },
    notes: `ἐπ' αὐτοὺς / ana ins / upon them Thessalonians I 2:16, I disagree with the
use of hatis for God though. ὀργὴ is attested as also translating to þwairhei.
God doesn't hate his creation, he can be wrathful/angry though.

alternative idea: "unte ni þulada mikilei wulþaus Þeinis, jah ni andstandada þwairhei ana frawaurhtans ƕotos Þeinaizos,"`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "jah unmitans jah unusspilloþs ist armahairtei gahaite Þeinaize.",
      grc: "ἀμέτρητόν τε καὶ ἀνεξιχνίαστον τὸ ἔλεος τῆς ἐπαγγελίας σου.",
      en: "yet immeasurable and unsearchable is your promised mercy,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Þu auk is Frauja háuhista, armahairts, usbeisneigs jah bleiþs jah sutis ana unseleins manne.",
      grc: "Σὺ γὰρ εἶ Κύριος ὕψιστος, εὔσπλαγχνος, μακρόθυμος καὶ πολυέλεος καὶ μετανοῶν ἐπὶ κακίας ἀνθρώπων.",
      en: "for you are the Lord Most High, of great compassion, long-suffering, and very merciful, and you relent at human suffering.",
    },
    notes: `επολυέλεος translates to armahairts, but so does εὔσπλαγχνος, almost literally.
So using bleiþs for επολυέλεος here.

no direct word for μετανοῶν from what I can tell, though I felt sutis to be close to it as
it supposedly can also mean nachgiebig, yielding. Though perhaps its "tolerable"
meaning doesn't fit so well.`
  }], info)}</span>
<span class='verse-7'>${toGothicLines([{
    text: {
      got: "Þu, Frauja, bi managein seleins Þeinaizos, gahaihaist idreiga jah fralet þaimei frawaurhtedun du Þus, jah managein bleiþeino Þeinaizo",
      grc: "Σύ, Κύριε, κατὰ τὸ πλῆθος τῆς χρηστότητός σου, ἐπηγγείλω μετάνοιαν καὶ ἄφεσιν τοῖς ἡμαρτηκόσι σοι, καὶ τῷ πλήθει τῶν οἰκτιρμῶν σου ὥρισας μετάνοιαν ἁμαρτωλοῖς εἰς σωτηρίαν.",
      en: "O Lord, according to your great goodness you have promised repentance and forgiveness to those who have sinned against you, and in the multitude of your mercies you have appointed repentance for sinners, so that they may be saved.",
    },
    notes: `du Xristau frawaurkeiþ Corinthians I 8:12, 'wiþra' directly against, and 'du' for God/Christ who sees you committing the sins`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Σὺ οὖν, Κύριε, ὁ Θεὸς τῶν δυνάμεων, οὐκ ἔθου μετάνοιαν δικαίοις, τῷ Ἀβραὰμ καὶ Ἰσαὰκ καὶ Ἰακώβ, τοῖς ούχ ἡμαρτηκόσι σοι, ἀλλ’ ἔθου μετάνοιαν ἐπ’ ἐμοὶ τῷ ἁμαρτωλῷ,",
      en: "Therefore you, O Lord, God of the righteous, have not appointed repentance for the righteous, for Abraham and Isaac and Jacob, who did not sin against you, but you have appointed repentance for me, who am a sinner.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "διότι ἥμαρτον ὑπὲρ ἀριθμὸν ψάμμου θαλάσσης. nἘπλήθυναν αἱ ἀνομίαι μου, Κύριε· ἐπλήθυναν αἱ ἀνομίαι μου, καὶ οὔκ εἰμι ἄξιος ἀτενίσαι καὶ ἰδεῖν τὸ ὕψος τοῦ οὐρανοῦ ἀπὸ τοῦ πλήθους τῶν ἀδικιῶν μου,",
      en: "For the sins I have committed are more in number than the sand of the sea; my transgressions are multiplied, O Lord, they are multiplied! I am not worthy to look up and see the height of heaven because of the multitude of my iniquities.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "κατακαμπτόμενος πολλῷ δεσμῷ σιδηρῷ, εἰς τὸ μὴ ἀνανεῦσαι τὴν κεφαλήν μου, καὶ οὐκ ἔστι μοι ἄνεσις· διότι παρώργισα τὸν θυμόν σου καὶ τὸ πονηρὸν ἐνώπιόν σου ἐποίησα, μὴ ποιήσας τὸ θέλημά σου καὶ μὴ φυλάξας τὰ προστάγματά σου.",
      en: "I am weighted down with many an iron fetter, so that I am rejected because of my sins, and I have no relief, for I have provoked your wrath and have done what is evil in your sight, setting up abominations and multiplying offenses. ",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Καὶ νῦν κλίνω γόνυ καρδίας, δεόμενος τῆς παρὰ σοῦ χρηστότητος.",
      en: "And now I bend the knee of my heart, imploring you for your kindness.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Ἡμάρτηκα, Κύριε, ἡμάρτηκα καὶ τὰς ἀνομίας μου ἐγὼ γινώσκω·",
      en: "I have sinned, O Lord, I have sinned, and I acknowledge my transgressions.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀλλ’ αἰτοῦμαι δεόμενος· Ἄνες μοι, Κύριε, ἄνες μοι, καὶ μὴ συναπολέσῃς με ταῖς ἀνομίαις μου, μηδὲ εἰς τὸν αἰῶνα μηνίσας τηρήσῃς τὰ κακά μοι, μηδὲ καταδικάσῃς με ἐν τοῖς κατωτάτοις τῆς γῆς, διότι σὺ εἶ Θεός, Θεὸς τῶν μετανοούντων,",
      en: "I earnestly implore you, forgive me, O Lord, forgive me! Do not destroy me with my transgressions! Do not be angry with me forever or store up evil for me; do not condemn me to the depths of the earth. For you, O Lord, are the God of those who repent,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "καὶ ἐν ἐμοὶ δείξεις πᾶσαν τὴν ἀγαθωσύνην σου· ὅτι ἀνάξιον ὄντα σῴσεις με κατὰ τὸ πολὺ ἔλεός σου,",
      en: "and in me you will manifest your goodness, for, unworthy as I am, you will save me according to your great mercy,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "καὶ αἰνέσω σε διὰ παντὸς ἐν ταῖς ἡμέραις τῆς ζωῆς μου. Ὅτι σὲ ὑμνεῖ πᾶσα ἡ δύναμις τῶν οὐρανῶν καὶ σοῦ ἐστιν ἡ δόξα εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.",
      en: "and I will praise you continually all the days of my life. For all the host of heaven sings your praise, and yours is the glory forever. Amen.",
    },
  }], info)}</span>
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Bida Manassezis", en: "Prayer of Manasseh" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram iostaiha (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Prayer of Manasseh</span>
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