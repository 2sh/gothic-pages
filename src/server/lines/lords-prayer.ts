import { ReuseLines } from "@server/lines"
import { toGothicLines } from "@server/tools"

// Directly from the Bible
export const lordsPrayer: ReuseLines = pi => `
${toGothicLines([
    {
      text: {
        got: 'Atta unsar þū in himinam,',
        grc: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς,",
        en: "Our Father in heaven,",
      },
      notes: `Taken directly from the Bible.`,
    },
    {
      text: {
        got: 'weihnai namo Þein.',
        grc: "ἁγιασθήτω τὸ ὄνομά σου.",
        en: "hallowed be your name.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Qimai þiudinassus Þeins.',
        grc: "Ἐλθέτω ἡ βασιλεία σου.",
        en: "your kingdom come.",
      }
    }
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Wairþai wilja Þeins,',
        grc: "Γενηθήτω τὸ θέλημά σου,",
        en: "Your will be done,",
      }
    },
    {
      text: {
        got: 'swe in himina jah ana airþai.',
        grc: "ὡς ἐν οὐρανῷ καὶ ἐπὶ τῆς γῆς.",
        en: "on earth as it is in heaven.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Hlaif unsarana þana sinteinan gif uns himma daga.',
        grc: "Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον.",
        en: "Give us today our daily bread.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Jah aflet uns þatei skulans sijaima,',
        grc: "Καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν,",
        en: "And forgive us our debts,",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'swaswe jah weis afletam þaim skulam unsaraim.',
        grc: "ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν.",
        en: "as we also have forgiven our debtors.",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Jah ni briggais uns in fraistubnjai,',
        grc: "Καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν,",
        en: "And lead us not into temptation,",
      }
    },
  ], pi)}
<br>
${toGothicLines([
    {
      text: {
        got: 'ak lausei uns af þamma ubilin.',
        grc: "ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.",
        en: "but deliver us from the evil one.",
      }
    },
  ], pi)}`