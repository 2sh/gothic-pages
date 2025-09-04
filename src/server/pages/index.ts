import {
  createArticleBody,
  createArticleHeaders,
  html,
} from "@server/tools"

// notes about the skeireins: https://www.nthuleen.com/papers/755gothfinal.html

const title = "2sh's Gothic Pages"

const description = "A page with various Gothic language related stuff I've done."

const article = html`<header>
  <h1>2sh's Gothic Pages</h1>
</header>
<div>
  <p>${description}</p>
</div>
<div>
  <h2>Tools</h2>
  <div>
    <ul>
      <li><a href="transliterator.html">Transliterator</a></li>
      <li><a href="https://github.com/2sh/wulfilaverse/raw/refs/heads/master/wulfilaverse.user.js">WulfilaVerse</a> -
      A Userscript which adds Wulfila.be verse links to BibleHub, but only if attested.
      Useful for finding phrases or Greek words in BibleHub, immediately seeing if a verse is attested in Gothic and being presented with a Wulfila.be link when it is.</li>
    </ul>
  </div>
</div>
<div>
  <h2>Translations</h2>
  <div>
    <p>Click on the lines on the pages to see notes.</p>
    <h3>Christian</h3>
    <h4>Liturgical</h4>
    <ul>
      <li><a href="nicene-creed.html">Nicene Creed</a></li>
      <li><a href="doxology-lesser.html">Lesser Doxology</a></li>
      <li><a href="compline-small.html">Office of Small Compline</a> (WIP)</li>
      <li><a href="liturgy-chrysostom.html">Liturgy of Saint John Chrysostom</a> (WIP)</li>
    </ul>
    <h4>Prayers</h4>
    <ul>
      <li><a href="morning-prayer-optina.html">Morning Prayer of the Last Elders of Optina</a> (WIP)</li>
    </ul>
    <h4>Saints</h4>
    <ul>
      <li><a href="nicetas-the-goth.html">Nicetas the Goth</a> (Needs proofreading)</li>
    </ul>
    <h4>Other</h4>
    <ul>
      <li><a href="phrases.html">Words & Phrases</a></li>
    </ul>
    <h3>Stories</h3>
    <ul>
      <li><a href="peter-rabbit.html">The Tale of Peter Rabbit</a> (WIP)</li>
      <li><a href="grimm-the-poor-man-and-the-rich-man.html">The Poor Man and the Rich Man</a> (WIP)</li>
    </ul>
    <p>Feedback greatly appreciated!</p>
  </div>
</div>
<div>
  <h2>Other</h2>
  <div>
    <p>Various other Gothic related things, <em>not by me</em>, but useful and interesting.</p>
    <h3>Links</h3>
    <ul>
      <li><a href="https://gutanebokahus.wordpress.com/">Gutisk Bokahus</a> - Collection of works in Gothic</li>
    </ul>
  </div>
</div>`

const page = html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(title, description)}
  </head>
  <body>
    ${createArticleBody(article, { hasGothic: false, isHome: true })}
  </body>
</html>`

export default page