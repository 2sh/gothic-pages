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
const description = "Psalmo 138, skeireins ïn razdai gutiskai."

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
      en: "Unto the end, a psalm to David.",
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

  article += html`<p class='psalm'>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Frauja, gakaust mik, jah kant mik;",
      grc: "Κύριε, ἐδοκίμασάς με, καὶ ἔγνως με·",
      en: "O Lord, Thou hast proved me, and Thou knowest me.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Þū kant gasiss meina jah usstass meina, Þū frost mitonim meinaim fairraþro.",
      grc: "σὺ ἔγνως τὴν καθέδραν μου καὶ τὴν ἔγερσίν μου, σὺ συνῆκας τοὺς διαλογισμούς μου ἀπὸ μακρόθεν·",
      en: "Thou knowest my downsitting, and mine uprising, Thou hast understood my thoughts from afar.",
    },
    notes: `*gasiss, taking gasitan + þs which though there's no attestation of it
being stuck after a t, it's observed to be -ss "after dentals".`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Staiga meina jah badi mein ussokides jah allans wigans meinans faurawisses,",
      grc: "τὴν τρίβον μου καὶ τὴν σχοῖνόν μου ἐξιχνίασας καὶ πάσας τὰς ὁδούς μου προεῖδες,",
      en: "Thou hast searched out my path and my lot, and hast forseen all my ways;",
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
Lot feels more like fate, as in it wasn't your own choice.`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte nist liutei ïn tuggon meinai.",
      grc: "ὅτι οὐκ ἔστι δόλος ἐν γλώσσῃ μου.",
      en: "For there is no guile upon my tongue.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Sai, Frauja, Þū kant alla, þo aftumistona jah þo frumistona; Þū gadaiht mik jah galagides ana mis handu Þeina.",
      grc: "ἰδού, Κύριε, σὺ ἔγνως πάντα, τὰ ἔσχατα καὶ τὰ ἀρχαῖα· σὺ ἔπλασάς με καὶ ἔθηκας ἐπ᾿ ἐμὲ τὴν χεῖρά σου.",
      en: "Behold, O Lord, Thou knowest all things, the last and the first; Thou hast fashioned, and laid Thine hand upon me.",
    },
    notes: `handu þeina ana ija Matthew 9:18`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Sildaleik ïst kunþi Þein mis; ïst gaswinþida, ïk ni mag allis du ïmma gasniwan.",
      grc: "ἐθαυμαστώθη ἡ γνῶσίς σου ἐξ ἐμοῦ· ἐκραταιώθη, οὐ μὴ δύνωμαι πρὸς αὐτήν.",
      en: "Thy knowledge is too wonderful for me; it is great, I cannot attain unto it.",
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
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Ƕaþ gaggau af Ahmin Þeinamma jah af andwairþja Þeinamma ƕaþ gaþliuhau?",
      grc: "ποῦ πορευθῶ ἀπὸ τοῦ πνεύματός σου καὶ ἀπὸ τοῦ προσώπου σου ποῦ φύγω;",
      en: "Whither shall I go from Thy Spirit? And whither shall I flee from Thy presence?",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Jabai ussteigau ïn himin, Þū ïs þar; jabai atsteigau ïn halja, atïs;",
      grc: "ἐὰν ἀναβῶ εἰς τὸν οὐρανόν, σὺ εἶ ἐκεῖ· ἐὰν καταβῶ εἰς τὸν ᾅδην, πάρει·",
      en: "If I ascend up into heaven, Thou art there; if I go down into Hades, Thou art there.",
    },
    notes: `I think, "þar" if it's a specific known place,
"jainar" if it's a bit more open like a place of a plural "in the uttermost parts of the sea".`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "jabai nimau fiþrakans meinans at ūhtwon, jah bauau ïn andjam mareins,",
      grc: "ἐὰν ἀναλάβοιμι τὰς πτέρυγάς μου κατ᾿ ὄρθρον καὶ κατασκηνώσω εἰς τὰ ἔσχατα τῆς θαλάσσης,",
      en: "If I take up my wings in the morning, and dwell in the uttermost parts of the sea,",
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
      en: "even there shall Thy hand lead me, and Thy right hand shall hold me.",
    },
    notes: `jah auk Matthew 8:9

gahaban hold/keep Luke 8:15 Romans 7:6`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Jah ïk qaþ, Þannu riqis gatrudiþ mik, jah nahts wairþiþ liuhaþ ïn botos meinaizos;",
      grc: "καὶ εἶπα· ἄρα σκότος καταπατήσει με, καὶ νὺξ φωτισμὸς ἐν τῇ τρυφῇ μου·",
      en: "And I said, Surely the darkness shall cover me, and in my pleasure shall the night be turned to day.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte riqis ni wairþiþ riqis fram Þus, jah nahts swe dags wairþiþ bairhts; swaswe þata riqis ïzos, swah þata liuhaþ ïzos.",
      grc: "ὅτι σκότος οὐ σκοτισθήσεται ἀπὸ σοῦ, καὶ νὺξ ὡς ἡμέρα φωτισθήσεται· ὡς τὸ σκότος αὐτῆς, οὕτως καὶ τὸ φῶς αὐτῆς.",
      en: "For darkness will not be darkness with Thee, but night shall be bright as day; as is the darkness, even so shall be the light thereof.",
    },
    notes: `Luke 6:18 Luke 8:44 Luke 9:22 "ἀπὸ" turns into "fram" to mean "by"`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Unte Þu gastaistalst lundja meina; Frauja, hleibides mis us wambai aiþeins meinaizos.",
      grc: "ὅτι σὺ ἐκτήσω τοὺς νεφρούς μου, Κύριε, ἀντελάβου μου ἐκ γαστρὸς μητρός μου.",
      en: "For Thou hast possessed my reins; Thou hast holpen me, O Lord, from my mother's womb.",
    },
    notes: `νεφρούς means kidneys and figuratively "the inmost mind -- reins", using
*lundi [n. Ja] from *lundiją (loin, kidney, fat) as it descended to
mean "mindset, character" in Norse languages.`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Awiliudo þus, unte ogjands sildaleiknis; sildaleikai sind waurstwans Þeinai, jah saiwala meina wait waila.",
      grc: "ἐξομολογήσομαί σοι, ὅτι φοβερῶς ἐθαυμαστώθης· θαυμάσια τὰ ἔργα σου, καὶ ἡ ψυχή μου γινώσκει σφόδρα.",
      en: "I will give Thee thanks, for Thou art wondrous and fearful; marvelous are Thy works, and my soul knoweth it right well.",
    },
    notes: `"awiliudo þus, unte andhausides mis" John 11:41`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Gafulgin nist bain mein fram Þus, þatei gawaurhtes þiubjo, jah stoma meins ïn undaristin airþos;",
      grc: "οὐκ ἐκρύβη τὸ ὀστοῦν μου ἀπὸ σοῦ, ὃ ἐποίησας ἐν κρυφῇ, καὶ ἡ ὑπόστασίς μου ἐν τοῖς κατωτάτοις τῆς γῆς·",
      en: "My bones are not hid from Thee, which Thou hast made in secret; nor my substance in the lowest parts of the earth.",
    },
    notes: `"gafulgin ist" Luke 19:42

Greek 'bone' is singular.

gawaurkjaima hleiþros þrins Luke 9:33

in undaristo airþos Ephesians 4:9, although it's in ACC and making it DAT for this verse`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "ungahabaiþana meinana witun augona Þeina, jah ïn bokom Þeinaim allai gameljanda; dagis gadiganda jah ni ainshun ïn ïm.",
      grc: "τὸ ἀκατέργαστόν μου εἶδον οἱ ὀφθαλμοί σου, καὶ ἐπὶ τὸ βιβλίον σου πάντες γραφήσονται· ἡμέρας πλασθήσονται καὶ οὐθεὶς ἐν αὐτοῖς.",
      en: "Thine eyes did see my substance, yet being unperfect; and in Thy book shall all mankind be written; daily shall they be fashioned, when as yet there be none of them.",
    },
    notes:
`ἀκατέργαστόν is from ἀ- and an aorist/adjective derivative of κατέχω, κατέχω translates in the Gothic NT to gahabān, so using ungahabān.

ἡμέρᾱς is probably an adverb here to mean "within a certain number of days; by day; sometime during a particular day"
It could either be genitive singular or accusative plural, and genitive singular seems more likely here, so "by day"

Another translation for the last part by Brenton "they shall be formed by day, though there should for a time be no one among them."`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Mis auk filu swerai sind frijonds Þeinai, Guþ, filu gaswinþida sind reikja ïze;",
      grc: "ἐμοὶ δὲ λίαν ἐτιμήθησαν οἱ φίλοι σου, ὁ Θεός, λίαν ἐκραταιώθησαν αἱ ἀρχαὶ αὐτῶν·",
      en: "Exceeding honored also are Thy friends unto me, O God their rule is greatly strengthened.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "garaþja ïns, jah ufar malman managnodedun; urraisiþs jah nauh ïm miþ Þus.",
      grc: "ἐξαριθμήσομαι αὐτούς, καὶ ὑπὲρ ἄμμον πληθυνθήσονται· ἐξηγέρθην καὶ ἔτι εἰμὶ μετὰ σοῦ.",
      en: "I will tell them, and they shall be multiplied in number more than the sand; when I awake, I am still with Thee.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Wainei usqimais frawaurhtaim, Guþ, mannans bloþis, afwandeiþ af mis,",
      grc: "ἐὰν ἀποκτείνῃς ἁμαρτωλούς, ὁ Θεός, ἄνδρες αἱμάτων, ἐκκλίνατε ἀπ᾿ ἐμοῦ,",
      en: "Surely Thou wilt slay the sinners, O God! Depart from me, ye men of blood,",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "unte miþ waihjon sijuþ bi mitonins; nimand ïn uswissja baurgs Þeina.",
      grc: "ὅτι ἐρισταί ἐστε εἰς διαλογισμούς· λήψονται εἰς ματαιότητα τὰς πόλεις σου.",
      en: "for ye are contentious in your thoughts. They shall take Thy cities in vain.",
    },
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Niu þans fijandans þuk, Frauja, fijaida jah ïn fiande þeinaize gauriþs?",
      grc: "οὐχὶ τοὺς μισοῦντάς σε, Κύριε, ἐμίσησα καὶ ἐπὶ τοὺς ἐχθρούς σου ἐξετηκόμην;",
      en: "Have not I hated them, O Lord, that hate Thee? and have I not pined away because of Thine enemies?",
    },
    notes: `gauriþs isn't quite the same as pine away, but it's the closest I could find`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Fullai fijaþwai fija ïns, fijands waurþun mis.",
      grc: "τέλειον μῖσος ἐμίσουν αὐτούς, εἰς ἐχθροὺς ἐγένοντό μοι.",
      en: "I have hated them with a perfect hatred, and they are counted mine enemies.",
    },
    notes: `Need to figure out how imperfect renders to Gothic`
  }], info)}</span>
<br>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Gakius mik, Guþ, gakunnai hairto mein, ussokei mik jah gakunnai staigos meinos.",
      grc: "δοκίμασόν με, ὁ Θεός, καὶ γνῶθι τὴν καρδίαν μου, ἔτασόν με καὶ γνῶθι τὰς τρίβους μου.",
      en: "Prove me, O Lord, and know my heart; try me, and know my ways.",
    },
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Jah saiƕ, jau wigs ungaraihteins ïn mis, jah tiuh mik ïn wiga aiweinamma.",
      grc: "καὶ ἴδε εἰ ὁδὸς ἀνομίας ἐν ἐμοί, καὶ ὁδήγησόν με ἐν ὁδῷ αἰωνίᾳ.",
      en: "And see if there be any way of iniquity in me, and lead me in the way everlasting.",
    },
  }], info)}</span>
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Psalmo 138", en: "Psalm 138" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2026).", en: "a translation by 2sh (2026)." },
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