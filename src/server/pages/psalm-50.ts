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

// https://www.septuagint.bible/-/psalmos-50
// https://biblehub.com/psalms/51-1.htm
// https://biblehub.com/interlinear/apostolic/psalms/51.htm
// https://biblebento.com/index.html?lxx1i&230.50.1
// https://www.bibleserver.com/EU.SLT.ELB/Psalm51
// https://ebible.org/eng-Brenton/

const slug = 'psalmo-50'
const title = 'Psalmo 50'
const description = "Psalmo 50, skeireins in razdai gutiskai."

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
      got: 'Psalmo 50',
      en: "Psalm 50",
    },
  },], info)}</h1>
  <div class="intro"><span class='verse'>${toGothicLines([{
    text: {
      got: "Und andi, psalmo Daweida",
      grc: "Εἰς τὸ τέλος· ψαλμὸς τῷ Δαυΐδ",
      en: "Unto the end, a psalm to David",
    },
    notes: `Check notes of psalm 138`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἐν τῷ ἐλθεῖν πρὸς αὐτὸν Νάθαν τὸν προφήτην, ἡνίκα εἰσῆλθε πρὸς Βηρσαβεέ.",
      en: "when Nathan the prophet came to him, when he had gone in to Bersabee, the wife of Urias.",
    },
    notes: ``
  }], info)}</span></div>
</header>`

  article += html`<p class='psalm'>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Armai mik, Guþ, bi mikila armahairtein Þeina jah bi managein bleiþeino Þeinaizo afswairb missadeþ meina.",
      grc: "ΕΛΕΗΣΟΝ με, ὁ Θεός, κατὰ τὸ μέγα ἔλεός σου καὶ κατὰ τὸ πλῆθος τῶν οἰκτιρμῶν σου ἐξάλειψον τὸ ἀνόμημά μου·",
      en: "Have mercy upon me, O God, according to thy great mercy; and according to the multitude of thy compassions blot out my transgression.",
    },
    notes: `Using managei instead of managduþs as the Greek πλῆθος is more
multitude instead of abundance. Some English translations use multitude here.

I was between ungaraihtei and unsibjis for ἀνόμημά. It's ungaraihtei for ἀνομία
which comes up in the next line, but the -μά is
"Added to verbal stems to form neuter nouns denoting the effect or result of an action",
so the transgression itself, the act/result, so I've gone with missadeþs, missdeed.`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Du filusnai usþwah mik af ungaraihtein meinai jah af frawaurhtai meinai gahrainei mik.",
      grc: "ἐπὶ πλεῖον πλῦνόν με ἀπὸ τῆς ἀνομίας μου καὶ ἀπὸ τῆς ἁμαρτίας μου καθάρισόν με.",
      en: "Wash me thoroughly from mine iniquity, and cleanse me from my sin.",
    },
    notes: `du filusnai Timothy II 3:9`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Unte ungaraihtein meina ik kann, jah frawaurhts meina in andwairþja meinamma ist sinteino.",
      grc: "ὅτι τὴν ἀνομίαν μου ἐγὼ γινώσκω, καὶ ἡ ἁμαρτία μου ἐνώπιόν μού ἐστι διαπαντός.",
      en: "For I am conscious of mine iniquity; and my sin is continually before me.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Du Þus ainamma ik frawaurhta jah þana ubilo in andwairþja Þeinamma tawida, ei gasunjoþs sijais in waurdam Þeinaim, jah hroþeigs in stauai Þeinai.",
      grc: "σοὶ μόνῳ ἥμαρτον καὶ τὸ πονηρὸν ἐνώπιόν σου ἐποίησα, ὅπως ἂν δικαιωθῇς ἐν τοῖς λόγοις σου, καὶ νικήσῃς ἐν τῷ κρίνεσθαί σε.",
      en: "Against thee only have I sinned, and done evil before thee: that thou mightest be justified in thy sayings, and mightest overcome when thou art judged.",
    },
    notes:
`wiþra vs du (Luke 17:4), I went with du as the Greek here doesn't have a preposition
but I don't want to leave it without one, so I've gone with the more vague du.

"imma ainamma" Luke 4:8, "þuk ainana" John 17:3

Using def article for evil like in the lord's prayer

ὅπως ἂν just translates to ei Luke 2:35`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Sai allis in ungaraihteim was ik ganumans, jah in frawaurhtim was inkilþa mis aiþei meina.",
      grc: "ἰδοὺ γὰρ ἐν ἀνομίαις συνελήφθην, καὶ ἐν ἁμαρτίαις ἐκίσσησέ με ἡ μήτηρ μου.",
      en: "For, behold, I was conceived in iniquities, and in sins did my mother conceive me.",
    },
    notes:
`Sai allis Luke 1:44

συνελήφθην means both arrested and to conceive which is similar to meaning of ganiman
in context with the second part of the sentence. "ganumans wesi in wamba" Luke 2:21

The word ἐκίσσησέ means to have an appetite for unusual foods, so a being pregnant`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἰδοὺ γὰρ ἀλήθειαν ἠγάπησας, τὰ ἄδηλα καὶ τὰ κρύφια τῆς σοφίας σου ἐδήλωσάς μοι.",
      en: "For, behold, thou lovest truth: thou hast manifested to me the secret and hidden things of thy wisdom.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ραντιεῖς με ὑσσώπῳ, καὶ καθαρισθήσομαι, πλυνεῖς με, καὶ ὑπὲρ χιόνα λευκανθήσομαι.",
      en: "Thou shalt sprinkle me with hyssop, and I shall be purified: thou shalt wash me, and I shall be made whiter than snow.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀκουτιεῖς μοι ἀγαλλίασιν καὶ εὐφροσύνην, ἀγαλλιάσονται ὀστέα τεταπεινωμένα.",
      en: "Thou shalt cause me to hear gladness and joy: the afflicted bones shall rejoice.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀπόστρεψον τὸ πρόσωπόν σου ἀπὸ τῶν ἁμαρτιῶν μου καὶ πάσας τὰς ἀνομίας μου ἐξάλειψον.",
      en: "Turn away thy face from my sins, and blot out all mine iniquities.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "καρδίαν καθαρὰν κτίσον ἐν ἐμοί, ὁ Θεός, καὶ πνεῦμα εὐθὲς ἐγκαίνισον ἐν τοῖς ἐγκάτοις μου.",
      en: "Create in me a clean heart, O God; and renew a right spirit in my inward parts.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "μὴ ἀποῤῥίψῃς με ἀπὸ τοῦ προσώπου σου καὶ τὸ πνεῦμά σου τὸ ἅγιον μὴ ἀντανέλῃς ἀπ᾿ ἐμοῦ.",
      en: "Cast me not away from thy presence; and remove not thy Holy Spirit from me.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀπόδος μοι τὴν ἀγαλλίασιν τοῦ σωτηρίου σου καὶ πνεύματι ἡγεμονικῷ στήριξόν με.",
      en: "Restore to me the joy of thy salvation: establish me with thy directing/governing Spirit.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "διδάξω ἀνόμους τὰς ὁδούς σου, καὶ ἀσεβεῖς ἐπὶ σὲ ἐπιστρέψουσι.",
      en: "Then will I teach transgressors thy ways; and ungodly men shall turn to thee.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ρῦσαί με ἐξ αἱμάτων, ὁ Θεὸς ὁ Θεὸς τῆς σωτηρίας μου· ἀγαλλιάσεται ἡ γλῶσσά μου τὴν δικαιοσύνην σου.",
      en: "Deliver me from blood-guiltiness, O God, the God of my salvation: and my tongue shall joyfully declare thy righteousness.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "Κύριε, τὰ χείλη μου ἀνοίξεις, καὶ τὸ στόμα μου ἀναγγελεῖ τὴν αἴνεσίν σου.",
      en: "O Lord, thou shalt open my lips; and my mouth shall declare thy praise.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ὅτι εἰ ἠθέλησας θυσίαν, ἔδωκα ἄν· ὁλοκαυτώματα οὐκ εὐδοκήσεις.",
      en: "For if thou desiredst sacrifice, I would have given it: thou wilt not take pleasure in whole-burnt-offerings.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "θυσία τῷ Θεῷ πνεῦμα συντετριμμένον, καρδίαν συντετριμμένην καὶ τεταπεινωμένην ὁ Θεὸς οὐκ ἐξουδενώσει.",
      en: "Sacrifice to God is a broken spirit: a broken and humbled heart God will not despise.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἀγάθυνον, Κύριε, ἐν τῇ εὐδοκίᾳ σου τὴν Σιών, καὶ οἰκοδομηθήτω τὰ τείχη ῾Ιερουσαλήμ·",
      en: "Do good, O Lord, to Sion in thy good pleasure; and let the walls of Jerusalem be built.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "τότε εὐδοκήσεις θυσίαν δικαιοσύνης, ἀναφορὰν καὶ ὁλοκαυτώματα· τότε ἀνοίσουσιν ἐπὶ τὸ θυσιαστήριόν σου μόσχους.",
      en: "Then shalt thou be pleased with a sacrifice of righteousness, offering (a heave or wave-offering), and whole-burnt-sacrifices: then shall they offer calves upon thine altar.",
    },
  }], info)}</span>
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Psalmo 50", en: "Psalm 50" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram iostaiha (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">LXX Psalm 50 (MT 51)</span>
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