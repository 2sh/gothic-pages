import { html, PageInfo, toGothicLines } from "./tools"

export type ReuseLines = (pageInfo: PageInfo) => string

export const amen: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Amen.',
    grc: "ἀμήν.",
    en: "Amen.",
  }
}], pi)

export const nowAndEver: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'jah nū jah aiw, jah ïn aiwins aiwe.',
    grc: "νῦν, καὶ ἀεί, καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.",
    en: "now and ever and to the ages of ages.",
  },
  notes:
    `Combining “𐌹̈𐌽 𐌰𐌹𐍅𐌹𐌽𐍃” Matthew 6:13 and “𐌹̈𐌽 𐌰𐌻𐌳𐌹𐌽𐍃 𐌰𐌹𐍅𐌴” 1 Timothy 1:17.
Not using purely the line from 1 Timothy 1:17 as it mixes up
from generation to generation and unto ages of ages.`
}], pi)

export const ofTrinity: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Attins, jah Sunaus, jah Ahmins Weihis',
    grc: "τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος",
    en: "of the Father and of the Son and of the Holy Spirit",
  },
  notes: `Skeireins 5:2 attins jah sunaus`
}], pi)

export const ofTrinityEnd: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Attins, jah Sunaus, jah Ahmins Weihis.',
    grc: "τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος.",
    en: "of the Father and of the Son and of the Holy Spirit.",
  },
  notes: `Skeireins 5:2 attins jah sunaus`
}], pi)

export const toTrinity: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Attin, jah Sunau, jah Ahmin Weihamma',
    grc: "Πατρὶ καί Υιώ καί Αγίω Πνεύματι",
    en: "to the father, and to the son, and to the holy spirit",
  }
}], pi)

export const letUsPrayToTheLord: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'bidjaima Fraujan.',
    grc: "τοῦ Κυρίου δεηθῶμεν.",
    en: "let us pray to the Lord.",
  },
  notes:
    `let us = 1st person plural subjunctive.

ἐρωτῶ 𐌱𐌹𐌳𐌾𐌰 (to request, ask, to pray, beg) + ACC Luke 14:18
beseech/pray = 𐌱𐌹𐌳𐌾𐌹𐌸 Luke 10:2;

during liturgy, -𐌾𐌰𐌽 ending can be chanted similarly to -μεν
so sticking 𐍆𐍂𐌰𐌿𐌾𐌰𐌽 at end`
}], pi)

export const lordHaveMercy: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Frauja, armai.',
    grc: "Κύριε, ἐλέησον.",
    en: "Lord, have mercy.",
  },
  notes: `Unsure if 𐌰𐍂𐌼𐌴𐌹 can be said without 𐌿𐌽𐍃𐌹𐍃, though don’t see why not`
}], pi)

export const trisagion: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Weihs Guþ, Weihs Mahteigs, Weihs Undiwans, armai unsis.',
    grc: "Ἅγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς.",
    en: "Holy God, Holy Mighty, Holy Immortal, have mercy on us.",
  },
  notes:
    `*undiwans from attested diwano (mortal) and undiwanei (immortality).

Using strong nominative as Greek not in vocative.`
}], pi)

export const timesThree: ReuseLines = pi => `<span class="notice">${toGothicLines([{
  text: {
    got: '(þrim sinþam)',
    grc: "(εκ τρίτου)",
    en: "(Thrice)",
  },
  notes:
    `Seems to always be in the dative`
}], pi)}</span>`

export const timesTwelve: ReuseLines = pi => `<span class="notice">${toGothicLines([{
  text: {
    got: '(twalibim sinþam)',
    grc: "(εκ τρίτου)",
    en: "(12 times)",
  }
}], pi)}</span>`

export const gloryToTrinity: ReuseLines = pi => `
${toGothicLines([{
  text: {
    got: 'Wulþus',
    grc: "Δόξα",
    en: "Glory",
  }
}], pi)}
${toTrinity(pi)}
<br>
${nowAndEver(pi)}
<br>
${amen(pi)}`

export const forYoursIs: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Unte þeina ïst þiudangardi jah mahts jah wulþus',
    grc: "Ὅτι σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα",
    en: "for yours is the kingdom and the power and the glory",
  },
  notes: `Line from Matthew 6:13`,
}], pi)


const speakerMark = ':'

export const speakerDeacon: ReuseLines = pi => html`<span class="speaker">${toGothicLines([{
  text: {
    got: 'Diakaunus',
    grc: "Ὁ Διάκονος",
    en: "Deacon",
  }
}], pi)}${speakerMark}</span>`

export const speakerPriest: ReuseLines = pi => html`<span class="speaker">${toGothicLines([{
  text: {
    got: 'Gudja',
    grc: "O Ἱερεύς",
    en: "Priest",
  },
  notes: '𐌲𐌿𐌳𐌾𐌰 Luke 5:14'
}], pi)}${speakerMark}</span>`

export const speakerReader: ReuseLines = pi => html`<span class="speaker">${toGothicLines([{
  text: {
    got: 'Ussiggwands',
    grc: "Αναγνώστης",
    en: "Reader",
  },
  notes:
    `ἀναγινώσκεις = ussiggwis Luke 10:26, ἀνέγνωτε= 𐌿𐍃𐍃𐌿𐌲𐌲𐍅𐌿𐌸 Mark 2:25, Mark 12:10`
}], pi)}${speakerMark}</span>`

export const speakerChoir: ReuseLines = pi => html`<span class="speaker">${toGothicLines([{
  text: {
    got: 'Liuþārjos',
    grc: "O Χορός",
    en: "Choir",
  }
}], pi)}${speakerMark}</span>`