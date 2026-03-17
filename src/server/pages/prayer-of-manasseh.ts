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
      en: "O Lord Almighty, God of our fathers, of Abraham and Isaac and Jacob, and of their righteous seed,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "saei gaskop himin jah airþa miþ alla gafeteinai ize;",
      grc: "ὁ ποιήσας τὸν οὐρανὸν καὶ τὴν γῆν σὺν παντὶ τῷ κόσμῳ αὐτῶν·",
      en: "You Who have made heaven and earth with all their adornment,",
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
      en: "You Who have bound the sea by the word of your command, You Who have shut the deep, and sealed it with your fearsome and glorious Name,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "in þize all wagjada jah reiraiþ fram andwairþja mahtais Þeinaizos;",
      grc: "ὃν πάντα φρίσσει καὶ τρέμει ἀπὸ προσώπου τῆς δυνάμεώς σου·",
      en: "You at whom all things shudder, and tremble before Your power,",
    },
    notes: `in þize Xristus gaswalt Corinthians I 8:11 "because of whom"

φρίσσω comes up in James 2:19, unattested sadly. Using wagjada (be moved/shaken).

fram andwairþja fraujins Thessalonians II 1:9`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte ni þulada mikilei wulþaus Þeinis, jah ni andstandada þwairhei ana frawaurhtans ƕotos Þeinaizos, ",
      grc: "ὅτι ἄστεκτος ἡ μεγαλοπρέπεια τῆς δόξης σου, καὶ ἀνυπόστατος ἡ ὀργὴ τῆς ἐπὶ ἁμαρτωλοῖς ἀπειλῆς σου,",
      en: "for unbearable is the magnificence of Your glory, and not to be withstood is the anger of Your threat toward sinners,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀμέτρητόν τε καὶ ἀνεξιχνίαστον τὸ ἔλεος τῆς ἐπαγγελίας σου.",
      en: "and unmeasurable and inscrutable is the mercy of Your promise,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Σὺ γὰρ εἶ Κύριος ὕψιστος, εὔσπλαγχνος, μακρόθυμος καὶ πολυέλεος καὶ μετανοῶν ἐπὶ κακίας ἀνθρώπων.",
      en: "for You are the Lord Most High, compassionate, patient, and merciful, repenting from the evil deeds of people.",
    },
  }], info)}</span>
<span class='verse-7'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Σύ, Κύριε, κατὰ τὸ πλῆθος τῆς χρηστότητός σου, ἐπηγγείλω μετάνοιαν καὶ ἄφεσιν τοῖς ἡμαρτηκόσι σοι, καὶ τῷ πλήθει τῶν οἰκτιρμῶν σου ὥρισας μετάνοιαν ἁμαρτωλοῖς εἰς σωτηρίαν.",
      en: "You, O Lord, according to the fullness of Your clemency, promised repentance and forgiveness to those who have sinned against You, and in the fullness of Your mercies, You have appointed repentance for sinners toward salvation.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Σὺ οὖν, Κύριε, ὁ Θεὸς τῶν δυνάμεων, οὐκ ἔθου μετάνοιαν δικαίοις, τῷ Ἀβραὰμ καὶ Ἰσαὰκ καὶ Ἰακώβ, τοῖς ούχ ἡμαρτηκόσι σοι, ἀλλ’ ἔθου μετάνοιαν ἐπ’ ἐμοὶ τῷ ἁμαρτωλῷ,",
      en: "Therefore, You, O Lord, God of the righteous, have not given repentance for the righteous, for Abraham and Isaac and Jacob, who had not sinned against You, but you have given repentance for me, the sinner.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "διότι ἥμαρτον ὑπὲρ ἀριθμὸν ψάμμου θαλάσσης. nἘπλήθυναν αἱ ἀνομίαι μου, Κύριε· ἐπλήθυναν αἱ ἀνομίαι μου, καὶ οὔκ εἰμι ἄξιος ἀτενίσαι καὶ ἰδεῖν τὸ ὕψος τοῦ οὐρανοῦ ἀπὸ τοῦ πλήθους τῶν ἀδικιῶν μου,",
      en: "For I have sinned more than the number of sand of the sea; my lawless deeds are multiplied, O Lord, multiplied, and I am not worthy to look and see the heights of heaven because of the multitude of my unrighteous deeds.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "κατακαμπτόμενος πολλῷ δεσμῷ σιδηρῷ, εἰς τὸ μὴ ἀνανεῦσαι τὴν κεφαλήν μου, καὶ οὐκ ἔστι μοι ἄνεσις· διότι παρώργισα τὸν θυμόν σου καὶ τὸ πονηρὸν ἐνώπιόν σου ἐποίησα, μὴ ποιήσας τὸ θέλημά σου καὶ μὴ φυλάξας τὰ προστάγματά σου.",
      en: "I am bent down by too many a bond of iron for the lifting of my head because of my sins, and there is no relief for me, for I have provoked Your wrath and done evil before You. I have set up abominations and multiplied provocations (idols).",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Καὶ νῦν κλίνω γόνυ καρδίας, δεόμενος τῆς παρὰ σοῦ χρηστότητος.",
      en: "And now I bend the knee of my heart, begging for Your clemency.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Ἡμάρτηκα, Κύριε, ἡμάρτηκα καὶ τὰς ἀνομίας μου ἐγὼ γινώσκω·",
      en: "I have sinned, O Lord, I have sinned, and I know my lawless deeds.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀλλ’ αἰτοῦμαι δεόμενος· Ἄνες μοι, Κύριε, ἄνες μοι, καὶ μὴ συναπολέσῃς με ταῖς ἀνομίαις μου, μηδὲ εἰς τὸν αἰῶνα μηνίσας τηρήσῃς τὰ κακά μοι, μηδὲ καταδικάσῃς με ἐν τοῖς κατωτάτοις τῆς γῆς, διότι σὺ εἶ Θεός, Θεὸς τῶν μετανοούντων,",
      en: "I am asking, begging You: forgive me, O Lord, forgive me! Do not destroy me with my lawless deeds, nor for all ages keep angry with me, nor condemn me to the depths of the earth, for You, O Lord, are the God of those who repent.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "καὶ ἐν ἐμοὶ δείξεις πᾶσαν τὴν ἀγαθωσύνην σου· ὅτι ἀνάξιον ὄντα σῴσεις με κατὰ τὸ πολὺ ἔλεός σου,",
      en: "And in me You will display Your goodness, for, my being unworthy, You will save me according to Your great mercy.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "καὶ αἰνέσω σε διὰ παντὸς ἐν ταῖς ἡμέραις τῆς ζωῆς μου. Ὅτι σὲ ὑμνεῖ πᾶσα ἡ δύναμις τῶν οὐρανῶν καὶ σοῦ ἐστιν ἡ δόξα εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.",
      en: "And I will praise You throughout all the days of my life, for all the power of the heavens sing Your praise. For Yours is the glory, to the ages. Amen.",
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