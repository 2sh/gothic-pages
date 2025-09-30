import { toGothicLine } from "@server/tools"

export const allHolyTrinity = () => `
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
    got: 'Frauja, hulþs sijais frawaurhtim unsaraim.',
    el: "Κύριε, ἱλάσθητι ταῖς ἁμαρτίαις ἡμῶν.",
    en: "O Lord, blot out our sins (be merciful for my sins).",
  },
  notes:
    `Luke 18:13`
})}
<br>
${toGothicLine({
  text: {
    got: 'Fraujinond, fragif unsibjona unsara.',
    el: "Δέσποτα, συγχώρησον τὰς ἀνομίας ἡμῖν.",
    en: "O Master, pardon our iniquities.",
  },
  notes:
    `𐍆𐍂𐌰𐌲𐌹𐍆 instead of 𐌰𐍆𐌻𐌴𐍄 as 𐌰𐍆𐌻𐌴𐍄 in lord's prayer`
})}
<br>
${toGothicLine({
  text: {
    got: 'Weiha, gaweiso jah hailei sauhtins unsara,',
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