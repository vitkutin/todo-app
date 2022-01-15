export default function Info() {
  return (
    <main>
      <h1>INFO</h1>
      <div class="info-box">
        <h2>Tekijä:</h2>
        <p>Hilla Härkönen</p>
        <h2>Käyttöohjeet:</h2>
        <p>
          Aloitusnäkymässä on mahdollista valita haluamansa sivu. Todo-sivu
          toimii seuraavalla tavalla:
        </p>
        <p>
          Todo-listaan voi lisätä tulevia tehtäviä. Tehtävään on mahdollista
          merkata päivämäärä, kuvaus sekä tagi, johon tehtävä liittyy, esim.
          "kotityöt" tai "koulu." Risuaitaa ei tarvitse kirjoittaa. Päivämäärä
          valitaan kalenterista. Kuvaus ja tagi kirjoitetaan tekstikenttiin
          vapaasti. Lista sisältää alkutilassaan yhden esimerkkitehtävän.
        </p>
        <p>Add task -painiketta painamalla tehtävä siirtyy listalle.</p>
        <p>Tehtävän kuvausta voi muokata kynä-painikkeella.</p>
        <p>
          Tehtäviä voi siirtää listalla ylös tai alas nuolipainikkeiden avulla.
        </p>
        <p>
          Listaa on mahdollista filtteröidä kirjoittamalla haluttu tagi
          täsmällisesti filter by tag-lomakkeeseen (risuaitaa ei tarvitse
          kirjoittaa). Tällöin listassa näkyvät vain ne elementit, joiden tagi
          vastaa syötettyä tekstiä.
        </p>
        <p>Tehtävän voi poistaa listalta roskakori-painikkeella.</p>

        <p>
          Luodut muutokset eivät tallennu mihinkään, ja lista palautuu
          alkutilaansa päivittämällä sivun.
        </p>
      </div>
      <div class="licence-box">
        <p>
          Projektissa käytetyt kuvakkeet ovat kirjastosta <b>react-icons,</b>{" "}
          tarkemmin <b>Font Awesome,</b> jonka sisältöä saa käyttää vapaasti,
          myös kaupalliseen tarkoitukseen, kunhan lisenssi ja lähteet on
          mainittu.
        </p>
        <p>
          <a id="licence" href="https://creativecommons.org/licenses/by/4.0/">
            Lisenssi
          </a>
        </p>
        <p>
          <a
            id="licence"
            href="https://react-icons.github.io/react-icons/icons?name=fa"
          >
            Käytetty kirjasto
          </a>
        </p>
      </div>
    </main>
  );
}
