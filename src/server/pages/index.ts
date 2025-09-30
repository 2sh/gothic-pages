import {
  createArticleBody,
  createArticleHeaders,
  html,
  PageGenerator,
} from "@server/tools"


const title = "2sh's Gothic Pages"
const description = "A page with various Gothic language related stuff I've done."

const article = html`<header>
  <h1>2sh's Gothic Pages</h1>
</header>

<p>${description}</p>

<p>Feedback on anything on these pages greatly appreciated!</p>


<h2>Tools</h2>
<ul>
  <li><a href="transliterator.html">Transliterator</a></li>
  <li><a href="https://github.com/2sh/wulfilaverse/raw/refs/heads/master/wulfilaverse.user.js">WulfilaVerse</a> -
  A Userscript which adds <a href='https://www.wulfila.be/gothic/browse/'>Wulfila.be</a>
  verse links to <a href="https://biblehub.com/">BibleHub</a>, but only if attested.
  Useful for finding phrases or Greek words in BibleHub, immediately seeing if a verse
  is attested in Gothic and being presented with a Wulfila.be link when it is.</li>
</ul>


<h2>Translations</h2>
<p>On the following pages, click on the lines to see translations and notes,
and to see the Gothic text in the Latin alphabet,
click the dropdown menu in the top right corner and select "Lateins".</p>
<p>In my Latin alphabet transcriptions, for native words,
ai and au without diacritics are pronounced short (/ɛ/ and /ɔ/) before h, ƕ and r,
and long (/ɛː/ and /ɔː/) otherwise.
The diacritics then indicate the exceptional cases,
aí and aú are short, and ái and áu long.
For non-native words ai and au are always short unless marked otherwise.
This way it's easier spot and learn the exceptional cases
for when reading only in the Gothic alphabet.
I also try to mark all cases of long a and u as ā and ū.</p>


<h3>Christian</h3>

<h4>Liturgical</h4>
<ul>
  <li><a href="nicene-creed.html" hreflang='got'>Nicene Creed</a></li>
  <li><a href="doxology-lesser.html" hreflang='got'>Lesser Doxology</a></li>
  <li><a href="compline-small.html" hreflang='got'>Office of Small Compline</a> (WIP)</li>
  <li><a href="liturgy-chrysostom.html" hreflang='got'>Liturgy of Saint John Chrysostom</a> (WIP)</li>
</ul>

<h4>Prayers</h4>
<ul>
  <li><a href="morning-prayer-optina.html" hreflang='got'>Morning Prayer of the Last Elders of Optina</a> (WIP)</li>
</ul>

<h4>Saints</h4>
<ul>
  <li><a href="nicetas-the-goth.html" hreflang='got'>Nicetas the Goth</a></li>
  <li><a href="sabbas-the-goth.html" hreflang='got'>Sabbas the Goth</a></li>
  <li><a href="26-gothic-martyrs.html" hreflang='got'>26 Gothic Martyrs in the Crimea</a> (WIP)</li>
</ul>

<h4>Other</h4>
<ul>
  <li><a href="phrases.html">Words & Phrases</a></li>
  <li><a href="test.html">Test page</a> - a simple page for testing fonts.</li>
</ul>

<h3>Stories</h3>
<ul>
  <li><a href="peter-rabbit.html" hreflang='got'>The Tale of Peter Rabbit</a> (WIP)</li>
  <li><a href="grimm-the-poor-man-and-the-rich-man.html" hreflang='got'>The Poor Man and the Rich Man</a> (WIP)</li>
</ul>

<h3>Poems</h3>
<ul>
  <li><a href="mondnacht.html" hreflang='got'>Mondnacht</a></li>
</ul>


<h2>Fonts</h2>
<ul>
  <li><a href="dl/NotoSerifGothicV1.otf" download>Noto Serif Gothic</a> (v1.0) -
  Font with uppercase and lowercase Gothic letters.
  The letters I created from the various letters in the original
  Noto Serif font, largly from Latin and Cyrillic letters.
  See it in use on the translation pages above by clicking on the
  dropdown menu in the top right corner of the pages and selecting
  "<span lang='got'>𐌼𐌹𐌸 𐍃𐍄𐍂𐌹𐌺𐌹𐌼</span>".</li>
</ul>


<h2>Other</h2>
<p>Various other Gothic related things, <em>not by me</em>, but useful and interesting.</p>

<h3>Resources</h3>
<ul>
  <li><a href="https://www.koeblergerhard.de/gotwbhin.html">Gerhard Köbler's Wörterbuch</a></li>
  <li><a href="https://www.nthuleen.com/papers/755gothpaper.html">Proper Noun Declension</a></li>
  <li><a href="https://en.wikipedia.org/wiki/Gothic_declension">Noun & Adjective Declension</a></li>
  <li><a href="https://en.wikipedia.org/wiki/Gothic_verbs">Verb Conjugation</a></li>
  <li><a href="http://www.harbornet.com/folks/theedrich/hive/Medieval/Skeireins-Latin-English.htm">Skeireins Translations</a></li>
  <li><a href="https://web.archive.org/web/20140301215235/http://germanica.wikispot.org/Naples_Deed">Naples Deed Information</a></li>
</ul>

<h3>Works</h3>
<ul>
  <li><a href="https://got.wikipedia.org/">Gothic Wikipedia</a></li>
  <li><a href="https://bokahusgutisk.wordpress.com/">Bokahus</a> - Collection of works in Gothic</li>
  <li><a href="https://airushimmadaga.wordpress.com/">Himma Daga</a> - News in Gothic</li>
</ul>`


const page: PageGenerator = info => html`<!doctype html>
<html lang="en">
  <head>
    ${createArticleHeaders(info, title, description)}
  </head>
  <body>
    ${createArticleBody(article, { hasGothic: false, isHome: true })}
  </body>
</html>`

export default page