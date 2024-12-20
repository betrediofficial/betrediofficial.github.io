try{ 

  const path = window.location.pathname
  const language = path.split("/")[1]
  const splitPath = path.split("/")
  const isHomePage = !splitPath[2] || splitPath[2] === ""

  if (typeof jQuery === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.onload = function() {
        $( document ).ready(function() {
          initialize()
        });
    };
    document.head.appendChild(script);
} else {
    console.log('jQuery zaten mevcut.');
}


function initialize(){
  if(!isHomePage) return;

    bottomMenuWidget();
    otherGames();
    slotGames();
    casinoGames();

    //hide default games
    $("div:contains('Popüler Oyunlar')").eq(8).hide()
    $("div:contains('Canlı Casino')").eq(7).hide()
    
}

function otherGames(){
        var newSection = `
           
<div class="section" id="digeroyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap"><h2 class="section__title"><svg class="svg-icon"><use href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#top-games"></use></svg>
        EKSTRA OYUNLAR
        </h2><a class="section__view section__view--carousel" href="/tr/casino/group/top-games">Tümünü Görüntüle</a></div>
      </div>
      <div class="col-12">
        <div class="otherGamesComponent">
          <div class="otherGamesComponentLayout">
            <a href="https://imgbb.com/">
              <img
                src="https://betrediofficial.github.io/images/other-games/aviator.png"
                alt="games"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="https://imgbb.com/">
              <img
                src="https://betrediofficial.github.io/images/other-games/spaceman.png"
                alt="maconcesi"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="https://imgbb.com/">
              <img
                src="https://betrediofficial.github.io/images/other-games/zepplin.png"
                alt="sporb"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="https://imgbb.com/">
              <img
                src="https://betrediofficial.github.io/images/other-games/bigbass.png"
                alt="slotcasino"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        `;

        $('.section--first').eq(1).before(newSection)

}

function bottomMenuWidget(){
    $(".section:first").append(`
<div class="bottomMenuWidgedContainer">
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/games.png" alt="games" class="bottomMenuWidgetImage" >
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/maconcesi.png" alt="maconcesi" class="bottomMenuWidgetImage" >
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/sporb.png" alt="sporb" class="bottomMenuWidgetImage" >
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/slotcasino.png" alt="slotcasino" class="bottomMenuWidgetImage" >
    </a>
  </div>
</div>
    `);
}


function slotGames(){
  var newSection = `
     <div class="section" id="slotoyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap">
          <h2 class="section__title">
            <svg class="svg-icon">
              <use
                href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#top-games"
              ></use>
            </svg>
            SLOT OYUNLARI
          </h2>
          
        </div>
      </div>
      <div class="col-12">


        <div class="hm-row-bc has-game has-slider section__carousel" style="grid-template-columns: 2fr 10fr;">
            <div class="pb-component-wrapper">
              <div class="slider-bc">
                <div class="carousel">
                  <div class="carousel-viewport">
                    <div class="carousel-container" style="transform: translate3d(0%, 0px, 0px);">
                      <div class="carousel-slide active-slide" style="width: 100%;">
                        <div class="sdr-item-holder-bc">
                          <a target="/${language}/casino/group/lobby" class"sdr-item-bc" href="#">
                            <img src="https://betrediofficial.github.io/images/casino-games/Frame-67.png" loading="lazy" class="sdr-image-bc">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="pb-component-wrapper">
              <div class="games-content">
                <div class="games-horiz">
                  <div class="games-horiz-scroll" style="grid-template-rows: auto auto;">
                    <div class="casino-game-item-content">
                      <div class="casino-game-item">
                      <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_christmas_bash.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/gates_of_olympus.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_secrets_of_the_golden_lake.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/sweet_bonanza_1000.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/devils_deal_soul_for_sale.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/shining_crown.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/zeus_vs_hades_gods_of_war.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <img src="https://betrediofficial.github.io/images/casino-games/wisdom_of_athena.jpg" class="casino-game-image-bc" loading="lazy">
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/starlight_princess_1000.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/sugar_rush_1000.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>





      </div>
    </div>
  </div>
</div>
`;

  $('.section--first').eq(0).before(newSection)
  const removed = $('.section--first').eq(0)
  if(removed.length) removed.hide()

}

function casinoGames(){
  var newSection = `
     <div class="section" id="casinooyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap">
          <h2 class="section__title">
           <svg class="svg-icon"><use href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#live"></use></svg>
            CASİNO OYUNLARI
          </h2>
          
        </div>
      </div>
      <div class="col-12">


        <div class="hm-row-bc has-game has-slider section__carousel" style="grid-template-columns: 2fr 10fr;">
            <div class="pb-component-wrapper">
              <div class="slider-bc">
                <div class="carousel">
                  <div class="carousel-viewport">
                    <div class="carousel-container" style="transform: translate3d(0%, 0px, 0px);">
                      <div class="carousel-slide active-slide" style="width: 100%;">
                        <div class="sdr-item-holder-bc">
                          <a target="/${language}/casino/group/lobby" class"sdr-item-bc" href="#">
                            <img src="https://betrediofficial.github.io/images/casino-games/Frame-67.png" loading="lazy" class="sdr-image-bc">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="pb-component-wrapper">
              <div class="games-content">
                <div class="games-horiz">
                  <div class="games-horiz-scroll" style="grid-template-rows: auto auto;">
                    <div class="casino-game-item-content">
                      <div class="casino-game-item">
                      <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_christmas_bash.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/gates_of_olympus.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_secrets_of_the_golden_lake.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/sweet_bonanza_1000.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/devils_deal_soul_for_sale.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/shining_crown.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/zeus_vs_hades_gods_of_war.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <img src="https://betrediofficial.github.io/images/casino-games/wisdom_of_athena.jpg" class="casino-game-image-bc" loading="lazy">
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/starlight_princess_1000.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <a href="/${language}/casino/games/pragmaticlive-big-bass-crash">
                        <img src="https://betrediofficial.github.io/images/casino-games/sugar_rush_1000.jpg" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




      </div>
    </div>
  </div>
</div>
`;

  $('#slotoyunlari').after(newSection)

}
}
catch(e){
  alert('hata')
  console.log(e)
}