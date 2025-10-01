import { ReuseLines } from "@server/lines"
import { toGothicLines } from "@server/tools"

const oComeLetUsWorshipRep: ReuseLines = pi => toGothicLines([{
  text: {
    got: 'Hiri, ïnweitaima jah driusaima',
    el: "Δεῦτε προσκυνήσωμεν καὶ προσπέσωμεν",
    en: "Come, let us worship and bow down",
  },
  notes: "Matthew 9:18 𐌹̈𐌽𐍅𐌴𐌹𐍄𐌰𐌽; Mark 7:25 𐌳𐍂𐌰𐌿𐍃 𐌳𐌿",
}], pi)

export const oComeLetUsWorship: ReuseLines = pi => `
${oComeLetUsWorshipRep(pi)}
<br>
${toGothicLines([{
  text: {
    got: 'du Þiudana unsaramma Guda.',
    el: "τῷ βασιλεῖ ἡμῶν Θεῷ.",
    en: "before God our King.",
  }
}], pi)}
<br>
${oComeLetUsWorshipRep(pi)}
<br>
${toGothicLines([{
  text: {
    got: 'du Xristau Þiudana unsaramma Guda.',
    el: "Χριστῷ τῷ βασιλεῖ ἡμῶν Θεῷ.",
    en: "before Christ God our King.",
  }
}], pi)}
<br>
${oComeLetUsWorshipRep(pi)}
<br>
${toGothicLines([{
  text: {
    got: 'du ïmma Xristau Þiudana jah Guda unsaramma.',
    el: "αὐτῷ, Χριστῷ τῷ βασιλεῖ καὶ Θεῷ ἡμῶν.",
    en: "before Him, Christ our King and God.",
  }
}], pi)}`