import { toGothicLine } from "@server/tools"

export const oHeavenlyKing = () => `
${toGothicLine({
  text: {
    got: 'Þiudan himinakunda, Gaþlaihands, Ahma sunjos,',
    el: "Βασιλεῦ Οὐράνιε, Παράκλητε, τὸ Πνεῦμα τῆς Ἀληθείας,",
    en: "O heavenly King, Comforter, and Spirit of truth,",
  },
  notes: `weak adjective because vocative

There's Parakletau for comforter but I though I'd use a Gothic word for it.
Various uses of gaþlaihands in Bible.`,
})}
<br>
${toGothicLine({
  text: {
    got: 'and all andwairþa jah alla usfulljands,',
    el: "ὁ Πανταχοῦ Παρὼν καὶ τὰ Πάντα Πληρῶν,",
    en: "Who art everywhere present and fillest all things,",
  },
  notes: `Πανταχοῦ = and all

andwairþs Corinthians I 5:3

alla in allaim usfulljandins Ephesians 1:23`
})}
<br>
${toGothicLine({
  text: {
    got: 'Huzd þiuþe jah Gibands libainais:',
    el: "ὁ Θησαυρός τῶν Ἀγαθῶν καὶ Ζωῆς Χορηγός:",
    en: "the Treasury of good things and Giver of life:",
  }
})}
<br>
${toGothicLine({
  text: {
    got: 'Qim jah gabau ïn unsis,',
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
    got: 'jah nasei, Þiuþeiga, saiwalos unsara.',
    el: "καὶ σῶσον, Ἀγαθὲ τὰς ψυχὰς ἡμῶν.",
    en: "and save our souls, O good one.",
  }
})}`