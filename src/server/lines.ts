import { html, toGothicLine } from "./tools"

export const amen = () => toGothicLine({
  text: {
    got: 'Amen.',
    el: "ἀμήν.",
    en: "Amen.",
  }
})

export const nowAndEver = () => toGothicLine({
  text: {
    got: 'jah nū jah aiw, jah ïn aiwins aiwe.',
    el: "νῦν, καὶ ἀεί, καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.",
    en: "now and ever and to the ages of ages.",
  },
  notes:
    `Combining "𐌹̈𐌽 𐌰𐌹𐍅𐌹𐌽𐍃" Matthew 6:13 and "𐌹̈𐌽 𐌰𐌻𐌳𐌹𐌽𐍃 𐌰𐌹𐍅𐌴" 1 Timothy 1:17.
Not using purely the line from 1 Timothy 1:17 as it mixes up
from generation to generation and unto ages of ages.`
})

export const ofTrinity = () => toGothicLine({
  text: {
    got: 'Attins, jah Sunaus, jah Ahmins Weihis',
    el: "τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος",
    en: "of the Father and of the Son and of the Holy Spirit",
  },
  notes: `Skeireins 5:2 attins jah sunaus`
})

export const toTrinity = () => toGothicLine({
  text: {
    got: 'Attin, jah Sunau, jah Ahmin Weihamma',
    el: "Πατρὶ καί Υιώ καί Αγίω Πνεύματι",
    en: "to the father, and to the son, and to the holy spirit",
  }
})

export const letUsPrayToTheLord = () => toGothicLine({
  text: {
    got: 'bidjaima Fraujan.',
    el: "τοῦ Κυρίου δεηθῶμεν.",
    en: "let us pray to the Lord.",
  },
  notes:
    `let us = 1st person plural subjunctive.

ἐρωτῶ 𐌱𐌹𐌳𐌾𐌰 (to request, ask, to pray, beg) + ACC Luke 14:18
beseech/pray = 𐌱𐌹𐌳𐌾𐌹𐌸 Luke 10:2;

during liturgy, -𐌾𐌰𐌽 ending can be chanted similarly to -μεν
so sticking 𐍆𐍂𐌰𐌿𐌾𐌰𐌽 at end`
})

export const lordHaveMercy = () => toGothicLine({
  text: {
    got: 'Frauja, armai.',
    el: "Κύριε, ἐλέησον.",
    en: "Lord, have mercy.",
  },
  notes: `Unsure if 𐌰𐍂𐌼𐌴𐌹 can be said without 𐌿𐌽𐍃𐌹𐍃, though don't see why not`
})

export const toYouOLord = () => toGothicLine({
  text: {
    got: '<[TODO]>',
    el: "Σοί, Κύριε.",
    en: "To You, O Lord.",
  }
})

export const trisagion = () => toGothicLine({
  text: {
    got: 'Weihs Guþ, Weihs Mahteigs, Weihs Undiwans, armai unsis.',
    el: "Ἅγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς.",
    en: "Holy God, Holy Mighty, Holy Immortal, have mercy on us.",
  },
  notes:
    `*undiwans from attested diwano (mortal) and undiwanei (immortality).

Using strong nominative as Greek not in vocative.`
})

export const timesThree = () => `<span class="notice">${toGothicLine({
  text: {
    got: '(þrim sinþam)',
    el: "(εκ τρίτου)",
    en: "(Thrice)",
  },
  notes:
    `Seems to always be in the dative`
})}</span>`

export const timesTwelve = () => `<span class="notice">${toGothicLine({
  text: {
    got: '(twalibim sinþam)',
    el: "(εκ τρίτου)",
    en: "(12 times)",
  }
})}</span>`

export const gloryToTrinity = () => `
${toGothicLine({
  text: {
    got: 'Wulþus',
    el: "Δόξα",
    en: "Glory",
  }
})}
${toTrinity()}
<br>
${nowAndEver()}
<br>
${amen()}`

export const forYoursIs = () => toGothicLine({
  text: {
    got: 'Unte þeina ïst þiudangardi jah mahts jah wulþus',
    el: "Ὅτι σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα",
    en: "for yours is the kingdom and the power and the glory",
  },
  notes: `Line from Matthew 6:13`,
})


const speakerMark = ':'

export const speakerDeacon = () => html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Diakaunus',
    el: "Ὁ Διάκονος",
    en: "Deacon",
  }
})}${speakerMark}</span>`

export const speakerPriest = () => html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Gudja',
    el: "O Ἱερεύς",
    en: "Priest",
  },
  notes: '𐌲𐌿𐌳𐌾𐌰 Luke 5:14'
})}${speakerMark}</span>`

export const speakerReader = () => html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Ussiggwands',
    el: "Αναγνώστης",
    en: "Reader",
  },
  notes:
    `ἀναγινώσκεις = ussiggwis Luke 10:26, ἀνέγνωτε= 𐌿𐍃𐍃𐌿𐌲𐌲𐍅𐌿𐌸 Mark 2:25, Mark 12:10`
})}${speakerMark}</span>`

export const speakerChoir = () => html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Liuþārjos',
    el: "O Χορός",
    en: "Choir",
  }
})}${speakerMark}</span>`