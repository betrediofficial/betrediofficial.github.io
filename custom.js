var language = window.location.pathname.split("/")[1];
try{ 
  



  if (typeof jQuery === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.onload = function() {
        $( document ).ready(function() {
        
          

          initialize();

          // History API kullanarak URL değişikliklerini izleyin
          const originalPushState = history.pushState;
          history.pushState = function(state) {
              originalPushState.apply(history, arguments);
              setTimeout(() => {
                initialize(); 
              }, 200); // URL değiştiğinde fonksiyonu çağır
          };
        
          // Popstate olayı için dinleyici ekle
          $(window).on('popstate', function() {
            setTimeout(() => {
              initialize(); 
            }, 200); // Geri düğmesine basıldığında fonksiyonu çağır
          });






        });
    };
    document.head.appendChild(script);
} else {
    console.log('jQuery zaten mevcut.');
}


function initialize(){

  const path = window.location.pathname
  language = path.split("/")[1]
  const splitPath = path.split("/")
  const isHomePage = !splitPath[2] || splitPath[2] === ""


  if(!isHomePage){
    $(".manually-added").remove();
  }  
  else{
    bottomMenuWidget();
    otherGames();
    slotGames();
    casinoGames();

    //hide default games
    $("div:contains('Popüler Oyunlar')").eq(8).hide()
    $("div:contains('Canlı Casino')").eq(7).hide()
  }


    
}

function otherGames(){
        var newSection = `
           
<div class="manually-added section" id="digeroyunlari">
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
<div class="manually-added bottomMenuWidgedContainer">
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
     <div class="manually-added section" id="slotoyunlari">
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
                          <a href="/${language}/casino/group/lobby" class"sdr-item-bc" href="#">
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
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_christmas_bash.jpg" class="casino-game-image-bc" loading="lazy">
                         <div class="overlay">
                            <a href="/${language}/casino/games/pragmaticlive-big-bass-crash" class="">Big bass Cristmas</a>
                        </div>
                   
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/gates_of_olympus.jpg" class="casino-game-image-bc" loading="lazy">
                           <div class="overlay">
                            <a href="/${language}/casino/games/pragmaticplay-gates-of-olympus" class="">Gates of Olympus</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_secrets_of_the_golden_lake.jpg" class="casino-game-image-bc" loading="lazy">
                           <div class="overlay">
                            <a href="/${language} /casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">Big Bass Secrets Of The Golden Lake</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                       
                        <img src="https://betrediofficial.github.io/images/casino-games/sweet_bonanza_1000.jpg" class="casino-game-image-bc" loading="lazy">
                          <div class="overlay">
                            <a href="/${language}/casino/games/pragmaticplay-sweet-bonanza-1000" class="">Sweet Bonanza 1000</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/devils_deal_soul_for_sale.jpg" class="casino-game-image-bc" loading="lazy">
                          <div class="overlay">
                            <a href="/${language}/casino/games/gaming7777-devils-deal-soul-for-sale" class="">Devil's Deal Soul For Sale</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/shining_crown.jpg" class="casino-game-image-bc" loading="lazy">
                     <div class="overlay">
                            <a href="/${language}/casino/games/egt-interactive-shining-crown" class="">Shining Crown</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                       
                        <img src="https://betrediofficial.github.io/images/casino-games/zeus_vs_hades_gods_of_war.jpg" class="casino-game-image-bc" loading="lazy">
                      <div class="overlay">
                            <a href="/${language}  /casino/games/pragmaticplay-zeus-vs-hades-gods-of-war" class="">Zeus Vs Hades</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <img src="https://betrediofficial.github.io/images/casino-games/wisdom_of_athena.jpg" class="casino-game-image-bc" loading="lazy">
                        <div class="overlay">
                            <a href="/${language}/casino/games/pragmaticplay-wisdom-of-athena" class="">Wisdom Of Athena</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                      
                        <img src="https://betrediofficial.github.io/images/casino-games/starlight_princess_1000.jpg" class="casino-game-image-bc" loading="lazy">
                       <div class="overlay">
                            <a href="/${language}/casino/games/pragmaticplay-starlight-princess-1000" class="">StarLight Princess 1000</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/sugar_rush_1000.jpg" class="casino-game-image-bc" loading="lazy">
                      <div class="overlay">
                            <a href="/${language}/casino/games/pragmaticplay-sugar-rush-1000" class="">Sugar Rush 1000</a>
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
</div>
`;

  $('.section--first').eq(0).before(newSection)
  const removed = $('.section--first').eq(0)
  if(removed.length) removed.hide()

}

function casinoGames(){
  var newSection = `
     <div class="manually-added section" id="casinooyunlari">
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


        <div class="hm-row-bc has-game has-slider" style="grid-template-columns: 2fr 10fr;">
      <div class="pb-component-wrapper">
        <div class="slider-bc">
          <div class="carousel">
            <div class="carousel-viewport">
              <div class="carousel-container" style="transform: translate3d(0%, 0px, 0px);">
                <div class="carousel-slide active-slide" style="width: 100%;">
                  <div class="sdr-item-holder-bc">
                    <a href="_self" class"sdr-item-bc" href="#">
                      <img src="https://betrediofficial.github.io/images/livecasino.png" loading="lazy" class="sdr-image-bc">
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
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/american-roulette.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/american-roulette" class="">American Roulette</a>
                  </div>
                </div>
              </div>
              
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/roulette_1_azure_drops_and_wins.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/pragmaticlive-roulette-azure" class="">Roulette Azure</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/auto_roulette.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                     <a href="/${language}/casino/games/ezugi-auto-roulette" class="">Auto Roulette</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/roulette.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/evolution-auto-roulette-vip" class="">Auto Roulette VIP</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/blackjack.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/evolution-speed-blackjack-e" class="">Speed Blackjack E</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/blackjackvip.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                    <a href="/${language}/casino/games/blackjack-vip" class="">Blackjack VIP</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/las-vegas-roulette.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/las-vegas-roulette" class="">Lasvegas Roulette</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/lucky-fruits-and-diamonds.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/lucky-fruits-diamonds" class="">Lucky Fruits & Diamonds</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/speed-blackjack.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                     <a href="/${language}/casino/games/evolution-speed-blackjack-h" class="">Speed Blackjack H</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/turkish_roulette.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="/${language}/casino/games/ezugi-turkish-roulette" class="">Turkish Roulette</a>
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
</div>
`;

  $('#slotoyunlari').after(newSection)

}
}
catch(e){
  alert('hata')
  console.log(e)
}