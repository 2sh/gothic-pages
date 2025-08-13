import { html, toGothicLine } from "./tools"

export const amen = toGothicLine({
  text: {
    got: 'Amēn.',
    el: "ἀμήν.",
    en: "Amen.",
  }
})

export const nowAndEver = toGothicLine({
  text: {
    got: 'jah nū jah aiw, jah ïn aiwins aiwē.',
    el: "νῦν, καὶ ἀεί, καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.",
    en: "now and ever and to the ages of ages.",
  },
  notes:
    `Combining "𐌹̈𐌽 𐌰𐌹𐍅𐌹𐌽𐍃" Matthew 6:13 and "𐌹̈𐌽 𐌰𐌻𐌳𐌹𐌽𐍃 𐌰𐌹𐍅𐌴" 1 Timothy 1:17.
Not using purely the line from 1 Timothy 1:17 as it mixes up
from generation to generation and unto ages of ages.`
})

export const ofTrinity = toGothicLine({
  text: {
    got: 'Attins, jah Sunaus, jah Ahmins Weihis',
    el: "τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος",
    en: "of the Father and of the Son and of the Holy Spirit",
  },
  notes: `Skeireins 5:2 attins jah sunaus`
})

export const toTrinity = toGothicLine({
  text: {
    got: 'Attin, jah Sunau, jah Ahmin Weihamma',
    el: "Πατρὶ καί Υιώ καί Αγίω Πνεύματι",
    en: "to the father, and to the son, and to the holy spirit",
  }
})

export const letUsPrayToTheLord = toGothicLine({
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

export const lordHaveMercy = toGothicLine({
  text: {
    got: 'Frauja, armai.',
    el: "Κύριε, ἐλέησον.",
    en: "Lord, have mercy.",
  },
  notes: `Unsure if 𐌰𐍂𐌼𐌴𐌹 can be said without 𐌿𐌽𐍃𐌹𐍃, though don't see why not`
})

export const toYouOLord = toGothicLine({
  text: {
    got: '<[TODO]>',
    el: "Σοί, Κύριε.",
    en: "To You, O Lord.",
  }
})

export const oHeavenlyKing = `
${toGothicLine({
  text: {
    got: 'Þiudan himinakunda, Paraklētau, Ahma sunjōs,',
    el: "Βασιλεῦ Οὐράνιε, Παράκλητε, τὸ Πνεῦμα τῆς Ἀληθείας,",
    en: "O heavenly King, Comforter, and Spirit of truth,",
  },
  notes: "weak adjective because vocative",
})}
<br>
${toGothicLine({
  text: {
    got: 'saei and all andwaírþs jah alla usfulljands,',
    el: "ὁ Πανταχοῦ Παρὼν καὶ τὰ Πάντα Πληρῶν,",
    en: "Who art everywhere present and fillest all things,",
  }
})}
<br>
${toGothicLine({
  text: {
    got: 'Huzd þiuþe jah Giband libainais:',
    el: "ὁ Θησαυρός τῶν Ἀγαθῶν καὶ Ζωῆς Χορηγός:",
    en: "the Treasury of good things and Giver of life:",
  }
})}
<br>
${toGothicLine({
  text: {
    got: 'Qim jah gabaú ïn unsis,',
    el: "ἐλθὲ καὶ σκήνωσον ἐν ἡμῖν,",
    en: "Come and abide in us,",
  }
})}
<br>
${toGothicLine({
  text: {
    got: 'jah gahrainei uns af allamma wamma,',
    el: "καὶ καθάρισον ἡμᾶς ἀπὸ πάσης κηλῖδος,",
    en: "and cleanse us from every stain,",
  }
})}
<br>
${toGothicLine({
  text: {
    got: 'jah nasei, Þiuþeiga saiwalōs unsara.',
    el: "καὶ σῶσον, Ἀγαθὲ τὰς ψυχὰς ἡμῶν.",
    en: "and save our souls, O good one.",
  }
})}`

export const trisagion = toGothicLine({
  text: {
    got: 'Weiha Guþ, Weiha Mahteiga, Weiha Undiwana, armai unsis.',
    el: "Ἅγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς.",
    en: "Holy God, Holy Mighty, Holy Immortal, have mercy on us.",
  },
  notes:
    `*undiwans from attested diwano (mortal) and undiwanei (immortality).

weak adjective because vocative.`
})

export const timesThree = `<span class="notice">${toGothicLine({
  text: {
    got: '(þrim sinþam)',
    el: "(εκ τρίτου)",
    en: "(Thrice)",
  },
  notes:
    `Seems to always be in the dative`
})}</span>`

export const timesTwelve = `<span class="notice">${toGothicLine({
  text: {
    got: '(twalibim sinþam)',
    el: "(εκ τρίτου)",
    en: "(12 times)",
  }
})}</span>`

export const gloryToTrinity = `
${toGothicLine({
  text: {
    got: 'Wulþus',
    el: "Δόξα",
    en: "Glory",
  }
})}
${toTrinity}
<br>
${nowAndEver}
<br>
${amen}`

export const allHolyTrinity = `
${toGothicLine({
  text: {
    got: 'Allweiha Þrifalþei, armai unsis.',
    el: "Παναγία Τριάς, ἐλέησον ἡμᾶς.",
    en: "O All-Holy Trinity, have mercy on us.",
  },
  notes:
    `*𐌰𐌻𐌻𐍅𐌴𐌹𐌷𐌰 from 𐌰𐌻𐌻 + 𐍅𐌴𐌹𐌷𐌰 like 𐌰𐌻𐌻𐍅𐌰𐌻𐌳𐌰𐌽𐌳𐍃.

three fold -ity, triune-ity -> trinity, Dreifaltigkeit: *𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐌴𐌹 from
𐌸𐍂𐌹 + 𐍆𐌰𐌻𐌸𐍃 + 𐌴𐌹, 𐌰𐌹𐌽𐍆𐌰𐌻𐌸𐌴𐌹 and 𐍆𐌹𐌳𐌿𐍂𐍆𐌰𐌻𐌸𐍃 attested, 𐌸𐍂𐌹- taken from PG "þrifalþaz"`,
})}
<br>
${toGothicLine({
  text: {
    got: 'Frauja, hulþs sijais frawaúrhtim unsaraim.',
    el: "Κύριε, ἱλάσθητι ταῖς ἁμαρτίαις ἡμῶν.",
    en: "O Lord, blot out our sins (be merciful for my sins).",
  },
  notes:
    `Luke 18:13`
})}
<br>
${toGothicLine({
  text: {
    got: 'Fraujinōnd, fragif unsibjōna unsara.',
    el: "Δέσποτα, συγχώρησον τὰς ἀνομίας ἡμῖν.",
    en: "O Master, pardon our iniquities.",
  },
  notes:
    `𐍆𐍂𐌰𐌲𐌹𐍆 instead of 𐌰𐍆𐌻𐌴𐍄 as 𐌰𐍆𐌻𐌴𐍄 in lord's prayer`
})}
<br>
${toGothicLine({
  text: {
    got: 'Weiha, gaweisō jah hailei saúhtins unsara,',
    el: "Ἅγιε, ἐπίσκεψαι καὶ ἴασαι τὰς ἀσθενείας ἡμῶν,",
    en: "O Holy One, visit and heal our infirmities,",
  }
})}
<br>
${toGothicLine({
  text: {
    got: 'ïn namins þeinis.',
    el: "ἕνεκεν τοῦ ὀνόματός σου.",
    en: "for Thy Name's sake.",
  },
  notes:
    `ἕνεκεν/“for the sake of” was very often translated to 𐌹̈𐌽 + GEN`
})}`

// Directly from the Bible
export const lordsPrayer = `
${[
    {
      text: {
        got: 'Atta unsar þu ïn himinam,',
        el: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς,",
        en: "Our Father in heaven,",
      },
      notes: `Taken directly from the Bible.`,
    },
    {
      text: {
        got: 'weihnai namō þein.',
        el: "ἁγιασθήτω τὸ ὄνομά σου.",
        en: "hallowed be your name.",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'Qimai þiudinassus þeins.',
        el: "Ἐλθέτω ἡ βασιλεία σου.",
        en: "your kingdom come.",
      }
    }
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'Waírþai wilja þeins,',
        el: "Γενηθήτω τὸ θέλημά σου,",
        en: "Your will be done,",
      }
    },
    {
      text: {
        got: 'swē ïn himina jah ana aírþai.',
        el: "ὡς ἐν οὐρανῷ καὶ ἐπὶ τῆς γῆς.",
        en: "on earth as it is in heaven.",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'Hlaif unsarana þana sinteinan gif uns himma daga.',
        el: "Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον.",
        en: "Give us today our daily bread.",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'Jah aflēt uns þatei skulans sijaima,',
        el: "Καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν,",
        en: "And forgive us our debts,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'swaswē jah weis aflētam þaim skulam unsaraim.',
        el: "ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν.",
        en: "as we also have forgiven our debtors.",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'Jah ni briggais uns ïn fraistubnjai,',
        el: "Καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν,",
        en: "And lead us not into temptation,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'ak lausei uns af þamma ubilin.',
        el: "ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.",
        en: "but deliver us from the evil one.",
      }
    },
  ].map(toGothicLine).join('\n')}`


export const forYoursIs = toGothicLine({
  text: {
    got: 'Unte þeina ïst þiudangardi jah mahts jah wulþus',
    el: "Ὅτι σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα",
    en: "for yours is the kingdom and the power and the glory",
  },
  notes: `Line from Matthew 6:13`,
})

const oComeLetUsWorshipRep = toGothicLine({
  text: {
    got: 'Hiri, ïnweitaima jah driusaima',
    el: "Δεῦτε προσκυνήσωμεν καὶ προσπέσωμεν",
    en: "Come, let us worship and bow down",
  },
  notes: "Matthew 9:18 𐌹̈𐌽𐍅𐌴𐌹𐍄𐌰𐌽; Mark 7:25 𐌳𐍂𐌰𐌿𐍃 𐌳𐌿",
})

export const oComeLetUsWorship = `
${oComeLetUsWorshipRep}
<br>
${toGothicLine({
  text: {
    got: 'du Þiudana unsaramma Guda.',
    el: "τῷ βασιλεῖ ἡμῶν Θεῷ.",
    en: "before God our King.",
  }
})}
<br>
${oComeLetUsWorshipRep}
<br>
${toGothicLine({
  text: {
    got: 'du Xristau Þiudana unsaramma Guda.',
    el: "Χριστῷ τῷ βασιλεῖ ἡμῶν Θεῷ.",
    en: "before Christ God our King.",
  }
})}
<br>
${oComeLetUsWorshipRep}
<br>
${toGothicLine({
  text: {
    got: 'du ïmma Xristau Þiudana jah Guda unsaramma.',
    el: "αὐτῷ, Χριστῷ τῷ βασιλεῖ καὶ Θεῷ ἡμῶν.",
    en: "before Him, Christ our King and God.",
  }
})}`


const speakerMark = ':'

export const speakerDeacon = html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Diakaúnus',
    el: "Ὁ Διάκονος",
    en: "Deacon",
  }
})}${speakerMark}</span>`

export const speakerPriest = html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Gudja',
    el: "O Ἱερεύς",
    en: "Priest",
  },
  notes: '𐌲𐌿𐌳𐌾𐌰 Luke 5:14'
})}${speakerMark}</span>`

export const speakerReader = html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Ussiggwands',
    el: "Αναγνώστης",
    en: "Reader",
  },
  notes:
    `ἀναγινώσκεις = ussiggwis Luke 10:26, ἀνέγνωτε= 𐌿𐍃𐍃𐌿𐌲𐌲𐍅𐌿𐌸 Mark 2:25, Mark 12:10`
})}${speakerMark}</span>`

export const speakerChoir = html`<span class="speaker">${toGothicLine({
  text: {
    got: 'Liuþārjōs',
    el: "O Χορός",
    en: "Choir",
  }
})}${speakerMark}</span>`