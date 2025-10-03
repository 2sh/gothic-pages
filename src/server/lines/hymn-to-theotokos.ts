import { ReuseLines } from "@server/lines"
import { toGothicLines } from "@server/tools"

export const hymnToTheotokos: ReuseLines = pi => `
${toGothicLines([
    {
      text: {
        got: 'Gatils ïst raihtis du þiuþjan þuk Gudabairandein,',
        el: "Ἄξιόν ἐστιν ὡς ἀληθῶς μακαρίζειν σε τὴν Θεοτόκον,",
        en: "It is truly meet to bless thee, the Theotokos,",
      },
      notes:
`axion translates to mostly wairþs and once gatils.
Using gatils as wairþs seems to miss the fitting/meet meaning
and in the verse gatils is used,
axion is translated to "fit" in English instead of the usual "worthy".`
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'aiw þiuþeigon jah allandjo unfairinon jah aiþein Gudis unsaris.',
        el: "τὴν ἀειμακάριστον καὶ παναμώμητον καὶ μητέρα τοῦ Θεοῦ ἡμῶν.",
        en: "ever blessed and most blameless, and Mother of our God.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Sweriza þaim Xairubeim jah wulþagiza ïnuh galeiki þaim Sairafeim,',
        el: "Τὴν τιμιωτέραν τῶν Χερουβεὶμ καὶ ἐνδοξοτέραν ἀσυγκρίτως τῶν Σεραφείμ,",
        en: "More honorable than the Cherubim, and beyond compare more glorious than the Seraphim,",
      },
      notes: `As Cherubim and Seraphim seems to be strictly in plural without
declension, I've done the same and stuck articles before them for clarification.`
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'saei ïn unriurein Guþ Waurd gabar,',
        el: "τὴν ἀδιαφθόρως Θεὸν Λόγον τεκοῦσαν,",
        en: "who without corruption gavest birth to God the Word,",
      },
      notes: `gabar sunu ACC Luke 1:57

ὄντως = bi sunjai

μεγαλύνει - mikileid saiwala meina fraujan Luke 1:46`
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'bi sunjai Gudabairandei, þuk mikiljam.',
        el: "τὴν ὄντως Θεοτόκον, σὲ μεγαλύνομεν.",
        en: "the very Theotokos, thee do we magnify.",
      },
      notes: `gabar sunu ACC Luke 1:57

ὄντως = bi sunjai

μεγαλύνει - mikileid saiwala meina fraujan Luke 1:46`
    },
  ], pi)}`