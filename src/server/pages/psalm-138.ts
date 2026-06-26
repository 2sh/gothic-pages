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

// https://www.septuagint.bible/-/psalmos-138
// https://biblehub.com/psalms/139-1.htm
// https://biblehub.com/interlinear/apostolic/psalms/139.htm
// https://biblebento.com/index.html?lxx1i&230.138.1
// https://www.bibleserver.com/EU.SLT.ELB/Psalm139
// https://ebible.org/eng-Brenton/

const slug = 'psalmo-138'
const title = 'Psalmo 138'
const description = "Psalmo 138, skeireins in razdai gutiskai."

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
      got: 'Psalmo 138',
      en: "Psalm 138",
    },
  },], info)}</h1>
  <div class="intro"><span class='verse'>${toGothicLines([{
    text: {
      got: "Und andi, psalmo Daweida.",
      grc: "Εἰς τὸ τέλος· ψαλμὸς τῷ Δαυΐδ.",
      en: "For the end, a Psalm of David. (Alex. + of Zacharias in the dispersion.)",
    },
    notes:
`"The phrase 𐌿𐌽𐌳 𐌰𐌽𐌳𐌹 (und andi) (Luke 18:5) is used with the sense of
"in the end, eventually". It may be a calque of Ancient Greek εἰς τέλος
(eis télos) with the same meaning."

A lot of Septuagint translations include
"A psalm of Zacharias in the Diaspora/Dispersion" though I'm not sure where
this is coming from. It's not in any Septuagint manuscript I've found so far.
Some even leave out the "A psalm to/of David" entirely.`
  }], info)}</span></div>
</header>`

  article += html`<p class='dropcap'>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Frauja, gakaust mik, jah kant mik;",
      grc: "Κύριε, ἐδοκίμασάς με, καὶ ἔγνως με·",
      en: "O Lord, thou hast proved me, and known me.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Þū kant gasiss meina jah usstass meina, Þū frost mitonim meinaim fairraþro.",
      grc: "σὺ ἔγνως τὴν καθέδραν μου καὶ τὴν ἔγερσίν μου, σὺ συνῆκας τοὺς διαλογισμούς μου ἀπὸ μακρόθεν·",
      en: "Thou knowest my down-sitting and mine up-rising: thou understandest my thoughts from afar.",
    },
    notes: `*gasiss, taking gasitan + þs which though there's no attestation of it
being stuck after a t, it's observed to be -ss "after dentals".`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Staiga meina jah hlaut meinana ussokides jah allans wigans meinans faurawisses,",
      grc: "τὴν τρίβον μου καὶ τὴν σχοῖνόν μου ἐξιχνίασας καὶ πάσας τὰς ὁδούς μου προεῖδες,",
      en: "Thou hast traced my path and my bed (of rushes, lit. rush), and hast foreseen all my ways.",
    },
    notes:
`σχοῖνόν seems to mean rush (camel hay) but apparently it can also mean "rush bed".
"schoinon = “things made of rushes,” but also used to mean the Egyptian measurement of land."
which is where English translation "lot" seems to come in.
I've gone with "bed" though. The Masoretic has "laying down",
"bed" is also used in Brenton's translation,
it has various figurative meanings relating to choices
(where you put it, how you make it, what you think while lying in it, when you are in it,
your physical and mental state while lying in it, vunerability, etc. and
though a modern idiom "make one's bed and lie in it") and the surrounding
words are about your own choices too: path, ways, my tongue, downsitting, uprising, thoughts.
Lot feels more like fate, as in it wasn't your own choice.

And I've changed my mind after talking to a friend, paths are your own choices and
the lot the choices made by God for you.`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte nist liutei in tuggon meinai.",
      grc: "ὅτι οὐκ ἔστι δόλος ἐν γλώσσῃ μου.",
      en: "For there is no unrighteous word in my tongue.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Sai, Frauja, Þū kant alla, þo aftumistona jah þo frumistona; Þū gadaiht mik jah galagides ana mis handu Þeina.",
      grc: "ἰδού, Κύριε, σὺ ἔγνως πάντα, τὰ ἔσχατα καὶ τὰ ἀρχαῖα· σὺ ἔπλασάς με καὶ ἔθηκας ἐπ᾿ ἐμὲ τὴν χεῖρά σου.",
      en: "Behold, O Lord, thou hast known all things, the last and the first: thou hast fashioned me, and laid thine hand upon me.",
    },
    notes: `handu þeina ana ija Matthew 9:18`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Sildaleik ist kunþi Þein mis; ist gaswinþida, ik ni mag allis du imma gasniwan.",
      grc: "ἐθαυμαστώθη ἡ γνῶσίς σου ἐξ ἐμοῦ· ἐκραταιώθη, οὐ μὴ δύνωμαι πρὸς αὐτήν.",
      en: "The knowledge of thee is too wonderful for me; it is very difficult, I cannot attain to it.",
    },
    notes: `There's "sildaleiknan in allaim þaim galaubjandam" Thessalonians II 1:10
which made me think "sildaleiknoda kunþi Þein in mis" initially although that could be
understood as "Your knowledge was admired in me", a past event and perhaps no longer true,
and using "sildaleikniþ" could be understood as "to be admired", a future event
or a desired thing not currently fullfilled. The Greek Aorist is just giving this a
perfectiveness and not talking about the past or the future.

I think the "too" in English translations are coming from looking at the Hebrew of the
Masoretic texts, even though the Septuagint Greek does not have it. It is still added to the
Septuagint translations though I guess because it fits with the second half of this verse
and is added for familiarity to those coming from a Protestant background, it doesn't
really change the meaning of the text adding them. I won't add them though as
the Goths only had the Septuagint (You can tell by looking at the end of Nehemiah 5:14.
Septuagint "hlaif fauramaþleis meinis"/"the bread of my governor" vs
Masoretic "the food allotted to the governor", the Masoretic text missing "my",
has "food" instead of "bread" and using "allotted to" which probably would have
been translated differently than a genitive).`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Ƕaþ gaggau af Ahmin Þeinamma jah af andwairþja Þeinamma ƕaþ gaþliuhau?",
      grc: "ποῦ πορευθῶ ἀπὸ τοῦ πνεύματός σου καὶ ἀπὸ τοῦ προσώπου σου ποῦ φύγω;",
      en: "Whither shall I go from thy Spirit? and whither shall I flee from thy presence?",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Jabai ussteigau in himin, Þū is þar; jabai atsteigau in halja, atïs;",
      grc: "ἐὰν ἀναβῶ εἰς τὸν οὐρανόν, σὺ εἶ ἐκεῖ· ἐὰν καταβῶ εἰς τὸν ᾅδην, πάρει·",
      en: "If I should go up to heaven, thou art there: if I should go down to hell, thou art present.",
    },
    notes: `I think, "þar" if it's a specific known place,
"jainar" if it's a bit more open like a place of a plural "in the uttermost parts of the sea".`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "jabai nimau fiþrakans meinans at ūhtwon, jah bauau in andjam mareins,",
      grc: "ἐὰν ἀναλάβοιμι τὰς πτέρυγάς μου κατ᾿ ὄρθρον καὶ κατασκηνώσω εἰς τὰ ἔσχατα τῆς θαλάσσης,",
      en: "If I should spread my wings to fly straight forward (or Alex. κατ᾿ ὄρθον, toward the dawn), and sojourn at the extremity of the sea,",
    },
    notes:
`Would be nice to follow the us- and at- pattern like in Greek ἀνα- and κατα- but
us- can also mean "out" and usniman means to remove or take out.

*fiþraks`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "jah auk jainar handus Þeina tiuhiþ mik, jah gahabaiþ mik taihswa Þeina.",
      grc: "καὶ γὰρ ἐκεῖ ἡ χείρ σου ὁδηγήσει με, καὶ καθέξει με ἡ δεξιά σου.",
      en: "for even there thy hand would guide me, and thy right hand would hold me.",
    },
    notes: `jah auk Matthew 8:9

gahaban hold/keep Luke 8:15 Romans 7:6`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Jah ik qaþ, Þannu riqis gatrudiþ mik, jah nahts wairþiþ liuhaþ in botos meinaizos;",
      grc: "καὶ εἶπα· ἄρα σκότος καταπατήσει με, καὶ νὺξ φωτισμὸς ἐν τῇ τρυφῇ μου·",
      en: "When I said, Surely the darkness will cover me; even the night was light in my luxury.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte riqis ni wairþiþ riqis fram Þus, jah nahts swe dags wairþiþ bairhts; swaswe þata riqis izos, swah þata liuhaþ izos.",
      grc: "ὅτι σκότος οὐ σκοτισθήσεται ἀπὸ σοῦ, καὶ νὺξ ὡς ἡμέρα φωτισθήσεται· ὡς τὸ σκότος αὐτῆς, οὕτως καὶ τὸ φῶς αὐτῆς.",
      en: "For darkness will not be darkness with thee; but night will be light as day: as its darkness, so shall its light be to thee.",
    },
    notes: `Luke 6:18 Luke 8:44 Luke 9:22 "ἀπὸ" turns into "fram" to mean "by"`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Unte Þu gastaistalst lundja meina; Frauja, hleibides mis us wambai aiþeins meinaizos.",
      grc: "ὅτι σὺ ἐκτήσω τοὺς νεφρούς μου, Κύριε, ἀντελάβου μου ἐκ γαστρὸς μητρός μου.",
      en: "For thou, O Lord, hast possessed my reins; thou hast helped me from my mother's womb.",
    },
    notes: `νεφρούς means kidneys and figuratively "the inmost mind -- reins", using
*lundi [n. Ja] from *lundiją (loin, kidney, fat) as it descended to
mean "mindset, character" in Norse languages.`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Awiliudo Þus, unte ogjands sildaleiknis; sildaleikai sind waurstwans Þeinai, jah saiwala meina wait waila.",
      grc: "ἐξομολογήσομαί σοι, ὅτι φοβερῶς ἐθαυμαστώθης· θαυμάσια τὰ ἔργα σου, καὶ ἡ ψυχή μου γινώσκει σφόδρα.",
      en: "I will give thee thanks; for thou art fearfully wondrous; wondrous are thy works; and my soul knows it well.",
    },
    notes: `"awiliudo Þus, unte andhausides mis" John 11:41`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Gafulgin nist bain mein fram Þus, þatei gawaurhtes þiubjo, jah stoma meins in undaristin airþos;",
      grc: "οὐκ ἐκρύβη τὸ ὀστοῦν μου ἀπὸ σοῦ, ὃ ἐποίησας ἐν κρυφῇ, καὶ ἡ ὑπόστασίς μου ἐν τοῖς κατωτάτοις τῆς γῆς·",
      en: "My bones which thou madest in secret were not hidden from thee, nor my substance, in the lowest parts of the earth.",
    },
    notes: `"gafulgin ist" Luke 19:42

Greek 'bone' is singular.

gawaurkjaima hleiþros þrins Luke 9:33

in undaristo airþos Ephesians 4:9, although it's in ACC and making it DAT for this verse`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "ungahabaiþana meinana witun augona Þeina, jah in bokom Þeinaim allai gameljanda; dagis gadiganda jah ni ainshun in im.",
      grc: "τὸ ἀκατέργαστόν μου εἶδον οἱ ὀφθαλμοί σου, καὶ ἐπὶ τὸ βιβλίον σου πάντες γραφήσονται· ἡμέρας πλασθήσονται καὶ οὐθεὶς ἐν αὐτοῖς.",
      en: "Thine eyes saw my unwrought substance, and all men shall be written in thy book; they shall be formed by day, though there should for a time be no one among them.",
    },
    notes:
`ἀκατέργαστόν is from ἀ- and an aorist/adjective derivative of κατέχω, κατέχω translates in the Gothic NT to gahabān, so using ungahabān.

ἡμέρᾱς is probably an adverb here to mean "within a certain number of days; by day; sometime during a particular day"
It could either be genitive singular or accusative plural, and genitive singular seems more likely here, so "by day"

Another translation for the last part by Brenton "they shall be formed by day, though there should for a time be no one among them."`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Mis auk filu swerai sind frijonds Þeinai, Guþ, filu gaswinþida sind reikja ize;",
      grc: "ἐμοὶ δὲ λίαν ἐτιμήθησαν οἱ φίλοι σου, ὁ Θεός, λίαν ἐκραταιώθησαν αἱ ἀρχαὶ αὐτῶν·",
      en: "But thy friends, O God, have been greatly honoured by me; their rule has been greatly strengthened.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "garaþja ins, jah ufar malman managnodedun; urraisiþs jah nauh im miþ Þus.",
      grc: "ἐξαριθμήσομαι αὐτούς, καὶ ὑπὲρ ἄμμον πληθυνθήσονται· ἐξηγέρθην καὶ ἔτι εἰμὶ μετὰ σοῦ.",
      en: "I will number them, and they shall be multiplied beyond the sand; I awake, and am still with thee.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Wainei usqimais frawaurhtaim, Guþ, mannans bloþis, afwandeiþ af mis,",
      grc: "ἐὰν ἀποκτείνῃς ἁμαρτωλούς, ὁ Θεός, ἄνδρες αἱμάτων, ἐκκλίνατε ἀπ᾿ ἐμοῦ,",
      en: "Oh that thou wouldest slay the wicked, O God; depart from me, ye men of blood.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte miþ waihjon sijuþ bi mitonins; nimand in uswissja baurgs Þeina.",
      grc: "ὅτι ἐρισταί ἐστε εἰς διαλογισμούς· λήψονται εἰς ματαιότητα τὰς πόλεις σου.",
      en: "For thou wilt say concerning their thought, that they shall take thy cities in vain.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Niu þans fijandans Þuk, Frauja, fijaida jah in fiande Þeinaize gauriþs?",
      grc: "οὐχὶ τοὺς μισοῦντάς σε, Κύριε, ἐμίσησα καὶ ἐπὶ τοὺς ἐχθρούς σου ἐξετηκόμην;",
      en: "Have I not hated them, O Lord, that hate thee? and wasted away because of thine enemies?",
    },
    notes: `gauriþs isn't quite the same as pine away, but it's the closest I could find`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Fullai fijaþwai fija ins, fijands waurþun mis.",
      grc: "τέλειον μῖσος ἐμίσουν αὐτούς, εἰς ἐχθροὺς ἐγένοντό μοι.",
      en: "I have hated them with perfect hatred; they were counted my enemies.",
    },
    notes: `Need to figure out how imperfect renders to Gothic`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Gakius mik, Guþ, gakunnai hairto mein, ussokei mik jah gakunnai staigos meinos.",
      grc: "δοκίμασόν με, ὁ Θεός, καὶ γνῶθι τὴν καρδίαν μου, ἔτασόν με καὶ γνῶθι τὰς τρίβους μου.",
      en: "Prove me, O God, and know my heart; examine me, and know my paths;",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Jah saiƕ, jau wigs witodalauseins in mis, jah tiuh mik in wiga aiweinamma.",
      grc: "καὶ ἴδε εἰ ὁδὸς ἀνομίας ἐν ἐμοί, καὶ ὁδήγησόν με ἐν ὁδῷ αἰωνίᾳ.",
      en: "and see if there is any way of iniquity in me, and lead me in an everlasting way.",
    },
  }], info)}</span>
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Psalmo 138", en: "Psalm 138" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">LXX Psalm 138 (MT 139)</span>
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