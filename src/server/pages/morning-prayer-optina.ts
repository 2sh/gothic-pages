import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
  PageGenerator,
} from '@server/tools'
import { amen } from "@server/lines"

// Eng: https://glory2godforallthings.com/2006/11/10/the-morning-prayer-of-the-last-elders-of-optina/
// Rus: https://azbyka.ru/molitvoslov/molitva-poslednix-optinskix-starcev-na-nachalo-dnya.html

global.lineId = 0

let article = ''

article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Bida Maurginis\nSpedizane Sinistaize Auptinas',
    ru: "Молитва последних оптинских старцев",
    en: "The Morning Prayer of the Last Elders of Optina",
  },
})}</h1>
</header>`

article += html`<p>${[
  {
    text: {
      got: 'Frauja, fragif ei allaim, þoei his dags qimands briggau, miþ rimisa ahmeinamma gamotjau.',
      ru: "Господи, дай мне с душевным спокойствием встретить всё, что принесёт мне наступающий день.",
      en: "O Lord, grant that I may meet all that this coming day brings to me with spiritual tranquility.",
    },
  },
  {
    text: {
      got: 'Fragif ei mik allandjo Wiljin Weihamma þeinamma atgibau.',
      ru: "Дай мне всецело предаться воле Твоей Святой.",
      en: "Grant that I may fully surrender myself to Thy holy Will.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Uta ƕeilai ƕizáih his dagis, talzei jah niþ mik ïn allaim.',
      ru: "На всякий час сего дня во всём наставь и поддержи меня.",
      en: "At every hour of this day, direct and support me in all things.",
    },
  },
  {
    text: {
      got: 'Ƕo hauseins þoei ïn runa dagis qimaina,',
      ru: "Какие бы я ни получал известия в течение дня,",
      en: "Whatsoever news may reach me in the course of the day,",
    },
    notes: `in the run of the day`
  },
  {
    text: {
      got: 'laisei mik þo miþ saiwalai rimisis jah muna tulgjamma,',
      ru: "научи меня принять их со спокойной душою и твёрдым убеждением,",
      en: "teach me to accept it with a calm soul and the firm conviction",
    },
    notes: `rimisis "of calmness", though I'd prefer an adjective`
  },
  {
    text: {
      got: 'ei all uf Wiljin Weihamma þeinamma sijai, andniman.',
      ru: "что на всё Святая воля Твоя.",
      en: "that all is subject to Thy holy Will.",
    },
    notes: `Corinthians I 15:27, Ephesians 1:22. Though not using ufhnaiwida
as the Russian isn't using a word like submit, just using a preposition.

Every thing is under thy Holy Will.`
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Ïn waurdam jah tojam meinaim tiuh mitonins jah gahugdins meinos.',
      ru: "Во всех словах и делах моих руководи моими мыслями и чувствами.",
      en: "Direct my thoughts and feelings in all my words and actions.",
    },
    notes: `Using gahugds (mind, reason, disposition) for feeling,
though there may be something better.`
  },
  {
    text: {
      got: 'Ïn allaim ungaweniþaim, ni fraletais mik ufarmunnon ei all fram þus dalaþ sandiþ sijai.',
      ru: "Во всех непредвиденных случаях не дай мне забыть, что всё ниспослано Тобой.",
      en: "In all unexpected occurrences, do not let me forget that all is sent down from Thee.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Fragif ei raihtaba jah frodaba miþ allaim ingardjam taujau,',
      ru: "Научи меня прямо и разумно действовать с каждым членом семьи моей,",
      en: "Grant that I may deal straightforwardly and wisely with every member of my family,",
    },
  },
  {
    text: {
      got: 'ni drobjands nih gaurjands ainohun.',
      ru: "никого не смущая и не огорчая.",
      en: "neither embarrassing nor saddening anyone.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Frauja, fragif mis swinþein afmojandan dagis qimandins',
      ru: "Господи, дай мне силу перенести утомление наступающего дня",
      en: "O Lord, grant me the strength to endure the fatigue of the coming day",
    },
  },
  {
    text: {
      got: 'jah alla þoei ïn þamma wairþand du frabairan.',
      ru: "и все события в течение дня.",
      en: "and all the events that take place during it.",
    },
  },
  {
    text: {
      got: 'Tiuh wiljan meinana jah laisei mik',
      ru: "Руководи моею волею и научи меня ",
      en: "Direct my will and teach me",
    },
  },
  {
    text: {
      got: 'bidjan, galaubjan, wenjan,',
      ru: "молиться, верить, надеяться,",
      en: "to pray, to believe, to hope,",
    },
  },
  {
    text: {
      got: 'usþulān, fragiban jah frijon.',
      ru: "терпеть, прощать и любить.",
      en: "to be patient, to forgive, and to love.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${amen()}</p>`


article += html`<p class="annotation">
  <span class="nowrap">${toGothicLine({
    text: { got: "Bida Maurginis", en: "The Morning Prayer" },
  })}</span>
  <span class="nowrap">${toGothicLine({
    text: { got: "Spedizane Sinistaize Auptinas", en: "of the Last Elders of Optina" },
  })}</span>
  <span class="nowrap">${toGothicLine({
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  })}</span>
  <span class="nowrap">${toGothicLine({
    text: { got: "skeireins þairh Ïostaihan (2025)", en: "a translation by 2sh (2025)." },
  })}</span>
</p>`

article += html`<p lang='en' class="annotation">
<span class="nowrap">The Morning Prayer</span>
<span class="nowrap">of the Last Elders of Optina</span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`


const title = '𐌱𐌹𐌳𐌰 𐌼𐌰𐌿𐍂𐌲𐌹𐌽𐌹𐍃 𐍃𐍀𐌴𐌳𐌹𐌶𐌰𐌽𐌴 𐍃𐌹𐌽𐌹𐍃𐍄𐌰𐌹𐌶𐌴 𐌰𐌿𐍀𐍄𐌹𐌽𐌰𐍃'
const description = "𐌱𐌹𐌳𐌰 𐌼𐌰𐌿𐍂𐌲𐌹𐌽𐌹𐍃 𐍃𐍀𐌴𐌳𐌹𐌶𐌰𐌽𐌴 𐍃𐌹𐌽𐌹𐍃𐍄𐌰𐌹𐌶𐌴 𐌰𐌿𐍀𐍄𐌹𐌽𐌰𐍃, 𐍃𐌺𐌴𐌹𐍂𐌴𐌹𐌽𐍃 𐌹̈𐌽 𐍂𐌰𐌶𐌳𐌰𐌹 𐌲𐌿𐍄𐌹𐍃𐌺𐌰𐌹."

const page: PageGenerator = info => html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(info, title, description)}
  </head>
  <body>
    ${createArticleBody(article)}
  </body>
</html>`

export default page
