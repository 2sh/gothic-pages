import
{
  html,
  safeHtmlText,
  createArticleBody,
  toGothicLine,
  articleHead,
} from '@server/tools'
import { amen } from "@server/lines"

// Eng: https://glory2godforallthings.com/2006/11/10/the-morning-prayer-of-the-last-elders-of-optina/
// Rus: https://azbyka.ru/molitvoslov/molitva-poslednix-optinskix-starcev-na-nachalo-dnya.html

global.lineId = 0

const title = 'Morning Prayer'
let article = ''

article += html`<header>
  <h1>${toGothicLine({
  text: {
got: '<[TODO]>',
ru: "Молитва последних оптинских старцев",
en: "The Morning Prayer of the Last Elders of Optina",
  },
})}</h1>
</header>`

article += html`<p>${[
{
  text: {
got: '𐍆𐍂𐌰𐌿𐌾𐌰,',
ru: "Господи,",
en: "O Lord,",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "дай мне с душевным спокойствием встретить всё,",
en: "grant that I may meet all (next line) with spiritual tranquility.",
  },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "что принесёт мне наступающий день.",
en: "that this coming day brings to me",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "Дай мне всецело предаться",
en: "Grant that I may fully surrender myself",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "воле Твоей Святой.",
en: "to Thy holy Will.",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "На всякий час сего дня",
en: "At every hour of this day,",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "во всём наставь и поддержи меня.",
en: "direct and support me in all things.",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "Какие бы я ни получал известия",
en: "Whatsoever news may reach me",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "в течение дня,",
en: "in the course of the day,",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "научи меня принять их",
en: "teach me to accept it",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "со спокойной душою и твёрдым убеждением,",
en: "with a calm soul and the firm conviction",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
{
  text: {
got: '<[TODO]>',
ru: "что на всё Святая воля Твоя.",
en: "that all is subject to Thy holy Will.",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "Во всех словах и делах моих",
en: "in all my words and actions. (this and next line swapped)",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "руководи моими мыслями и чувствами.",
en: "Direct my thoughts and feelings",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "Во всех непредвиденных случаях",
en: "In all unexpected occurrences,",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "не дай мне забыть,",
en: "do not let me forget",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "что всё ниспослано Тобой.",
en: "that all is sent down from Thee.",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "Научи меня прямо и разумно",
en: "Grant that I may deal straightforwardly and wisely",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "действовать с каждым членом семьи моей,",
en: "with every member of my family,",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "никого не смущая и не огорчая.",
en: "neither embarrassing nor saddening anyone.",
    },
},
{
  text: {
got: '𐍆𐍂𐌰𐌿𐌾𐌰,',
ru: "Господи,",
en: "O Lord,",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "дай мне силу",
en: "grant me the strength",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "перенести утомление",
en: "to endure the fatigue",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "наступающего дня",
en: "of the coming day",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "и все события в течение дня.",
en: "and all the events that take place during it.",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "Руководи моею волею и научи меня ",
en: "Direct my will and teach me",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "молиться, верить, надеяться,",
en: "to pray, to believe, to hope,",
    },
},
{
  text: {
got: '<[TODO]>',
ru: "терпеть, прощать и любить.",
en: "to be patient, to forgive, and to love.",
    },
},
].map(toGothicLine).join('')}</p>`

article += html`<p>${amen()}</p>`


article += html`<p lang='en' class="annotation">
<span class="nowrap">The Morning Prayer</span>
<span class="nowrap">of the Last Elders of Optina</span>
<span class="nowrap">in the Gothic anguage,</span>
<br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
</p>`


const page = html`<!doctype html>
<html lang="got">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
    <body>
      ${createArticleBody(article)}
    </body>
</html>`

export default page