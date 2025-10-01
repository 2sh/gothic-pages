import { ReuseLines } from "@server/lines"
import { toGothicLines } from "@server/tools"

// Directly from the Bible
export const lordsPrayer: ReuseLines = pi => `
${toGothicLines([
    {
      text: {
        got: 'Atta unsar þū ïn himinam,',
        el: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς,",
        en: "Our Father in heaven,",
      },
      notes: `Taken directly from the Bible.`,
    },
    {
      text: {
        got: 'weihnai namo þein.',
        el: "ἁγιασθήτω τὸ ὄνομά σου.",
        en: "hallowed be your name.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Qimai þiudinassus þeins.',
        el: "Ἐλθέτω ἡ βασιλεία σου.",
        en: "your kingdom come.",
      }
    }
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Wairþai wilja þeins,',
        el: "Γενηθήτω τὸ θέλημά σου,",
        en: "Your will be done,",
      }
    },
    {
      text: {
        got: 'swe ïn himina jah ana airþai.',
        el: "ὡς ἐν οὐρανῷ καὶ ἐπὶ τῆς γῆς.",
        en: "on earth as it is in heaven.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Hlaif unsarana þana sinteinan gif uns himma daga.',
        el: "Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον.",
        en: "Give us today our daily bread.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Jah aflet uns þatei skulans sijaima,',
        el: "Καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν,",
        en: "And forgive us our debts,",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'swaswe jah weis afletam þaim skulam unsaraim.',
        el: "ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν.",
        en: "as we also have forgiven our debtors.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Jah ni briggais uns ïn fraistubnjai,',
        el: "Καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν,",
        en: "And lead us not into temptation,",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'ak lausei uns af þamma ubilin.',
        el: "ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.",
        en: "but deliver us from the evil one.",
      }
    },
  ], pi)}`