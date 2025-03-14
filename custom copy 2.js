var language = window.location.pathname.split("/")[1];
var isLoggedIn = false;

const depositMoneyLink = ()=> !isLoggedIn ? "?modal=login" : "?modal=wallet&tab=deposit";
const withdrawMoneyLink = ()=> !isLoggedIn ? "?modal=login" : "?modal=wallet&tab=withdraw";

const isMobile = () => window.innerWidth < 770;
try {





  if (typeof jQuery === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.onload = function () {
      $(document).ready(function () {


        initialize();

        // History API kullanarak URL değişikliklerini izleyin
        const originalPushState = history.pushState;
        history.pushState = function (state) {
          originalPushState.apply(history, arguments);
          
          setTimeout(() => {
            initialize();
          }, 500); // URL değiştiğinde fonksiyonu çağır
          removeHomePageWidgets();
        };

        // Popstate olayı için dinleyici ekle
        $(window).on('popstate', function () {
          setTimeout(() => {
            initialize();
          }, 500); // Geri düğmesine basıldığında fonksiyonu çağır
          removeHomePageWidgets();
        });






      });
    };
    document.head.appendChild(script);
  } else {
    console.log('jQuery zaten mevcut.');
  }

  function isHomePageCheck(){
    const path = window.location.pathname
    const splitPath = path.split("/")
    return !splitPath[2] || splitPath[2] === ""
  }

  function removeHomePageWidgets() {
    if (!isHomePageCheck()) {
      $(".manually-added-home-widgets").remove();
    }
  }

  function initialize() {
    isLoggedIn = $(".header__signin").length > 0 ? false : true
    language = window.location.pathname.split("/")[1]
    const isHomePage = isHomePageCheck()
    // if (language !== "tr") return;

    const is_mobile = isMobile();



    if (!isHomePage) {
      removeHomePageWidgets()
    }
    else {
      is_mobile && mobileBoxes();
      mobileSignInText();
      bottomMenuWidget(is_mobile);
       otherGames();
      !is_mobile && slotGames();
      !is_mobile && casinoGames();

      //hide default games
      !is_mobile && hideDefaultGames(50);
      !is_mobile && hideDefaultGames(1500);
    }

    headerButtons();
    hideBlogSection();



  }

  function otherGames() {

    if($("#digeroyunlari").length > 0) return;
    
    var newSection = `
           
<div class="manually-added-home-widgets section" id="digeroyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap"><h2 class="section__title"><svg class="svg-icon"><use href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#top-games"></use></svg>
        EKSTRA OYUNLAR
        </h2><a class="section__view section__view--carousel" href="/casino/group/top-games">Tümünü Görüntüle</a></div>
      </div>
      <div class="col-12">
        <div class="otherGamesComponent">
          <div class="otherGamesComponentLayout">
            <a href="casino/games/aviator">
              <img
                src="https://betrediofficial.github.io/images/other-games/aviator.png"
                alt="games"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="casino/games/pragmaticlive-spaceman">
              <img
                src="https://betrediofficial.github.io/images/other-games/spaceman.png"
                alt="maconcesi"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="casino/games/betsolutions-zeppelin?modal=register">
              <img
                src="https://betrediofficial.github.io/images/other-games/zepplin.png"
                alt="sporb"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="casino/games/pragmaticlive-big-bass-crash">
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

  function mobileBoxes() {
    if($("#mobileboxes").length > 0) return;
    $(".section:first").append(`
<div class="manually-added-home-widgets container mt-4 mobile-boxes" id="mobileboxes">
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-1">
        <a href="casino/group/live-lobby" class="col-4">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view//live_casino.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Canlı Casino</span>
          </div>
        </a>
        <a href="casino/slots" class="col-4">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view/sloticon.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Slot</span>
          </div>
        </a>
        <a href="${depositMoneyLink()}" class="col-4">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view//deposit.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Para Yatır</span>
          </div>
        </a>
        <a href="${withdrawMoneyLink()}" class="col-4">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view//withdraw.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Para Çek</span>
          </div>
        </a>
        <a class="col-4" href="promotions?modal=vip&tab=bonus-code">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view//bonus.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Bonus Talep</span>
          </div>
        </a>
        <a href="promotions" class="col-4">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view//promotion.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Promosyonlar</span>
          </div>
        </a>
        <a href="?modal=vip&tab=bonus-code" class="col-4">
          <div class="box-icon-item">
            <img
              src="https://betrediofficial.github.io/images/mobile-view//support.png"
              width="48"
              height="48"
              class="d-block mx-auto"
            />
            <span>Canlı Destek</span>
          </div>
        </a>
      </div>
</div>
    `);
  }

  function bottomMenuWidget(isMobile) {
    if($("#bottomMenuWidgedContainer").length > 0) return;
    $(".section:first").append(`
<div class="manually-added-home-widgets bottomMenuWidgedContainer" id="bottomMenuWidgedContainer">
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="casino/category/exclusive">
      <img src="https://betrediofficial.github.io/images/f63.png" alt="games" class="bottomMenuWidgetImage" >
    </a>
  </div>

  ${!isMobile ? `<div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="casino/group/live-casino">
      <img src="https://betrediofficial.github.io/images/canlicasinorevize.png" alt="maconcesi" class="bottomMenuWidgetImage" >
    </a>
  </div>` : ``}

  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="sportsbook">
      <img src="https://betrediofficial.github.io/images/sporbahislerirevize.png" alt="sporb" class="bottomMenuWidgetImage" >
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="casino/slots">
      <img src="https://betrediofficial.github.io/images/slotfixx.png" alt="slotcasino" class="bottomMenuWidgetImage" >
    </a>
  </div>
</div>
    `);
  }


  function slotGames() {
    if($("#slotoyunlari").length > 0) return;
    var newSection = `
     <div class="manually-added-home-widgets section" id="slotoyunlari">
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
                          <a href="casino" class"sdr-item-bc" href="#">
                            <img src="https://betrediofficial.github.io/images/f23.png" loading="lazy" class="sdr-image-bc">
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
                            <a href="casino/games/pragmaticlive-big-bass-crash" class="">Big bass Cristmas</a>
                        </div>
                   
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/gates_of_olympus.jpg" class="casino-game-image-bc" loading="lazy">
                           <div class="overlay">
                            <a href="casino/games/pragmaticplay-gates-of-olympus" class="">Gates of Olympus</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/big_bass_secrets_of_the_golden_lake.jpg" class="casino-game-image-bc" loading="lazy">
                           <div class="overlay">
                            <a href="casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">Big Bass Secrets Of The Golden Lake</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                       
                        <img src="https://betrediofficial.github.io/images/casino-games/sweet_bonanza_1000.jpg" class="casino-game-image-bc" loading="lazy">
                          <div class="overlay">
                            <a href="casino/games/pragmaticplay-sweet-bonanza-1000" class="">Sweet Bonanza 1000</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/devils_deal_soul_for_sale.jpg" class="casino-game-image-bc" loading="lazy">
                          <div class="overlay">
                            <a href="casino/games/gaming7777-devils-deal-soul-for-sale" class="">Devil's Deal Soul For Sale</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/shining_crown.jpg" class="casino-game-image-bc" loading="lazy">
                     <div class="overlay">
                            <a href="casino/games/egt-interactive-shining-crown" class="">Shining Crown</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                       
                        <img src="https://betrediofficial.github.io/images/casino-games/zeus_vs_hades_gods_of_war.jpg" class="casino-game-image-bc" loading="lazy">
                      <div class="overlay">
                            <a href="casino/games/pragmaticplay-zeus-vs-hades-gods-of-war" class="">Zeus Vs Hades</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        <img src="https://betrediofficial.github.io/images/casino-games/wisdom_of_athena.jpg" class="casino-game-image-bc" loading="lazy">
                        <div class="overlay">
                            <a href="casino/games/pragmaticplay-wisdom-of-athena" class="">Wisdom Of Athena</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                      
                        <img src="https://betrediofficial.github.io/images/casino-games/starlight_princess_1000.jpg" class="casino-game-image-bc" loading="lazy">
                       <div class="overlay">
                            <a href="casino/games/pragmaticplay-starlight-princess-1000" class="">StarLight Princess 1000</a>
                        </div>
                      </div>
                    </div>
                     <div class="casino-game-item-content">
                      <div class="casino-game-item">
                        
                        <img src="https://betrediofficial.github.io/images/casino-games/sugar_rush_1000.jpg" class="casino-game-image-bc" loading="lazy">
                      <div class="overlay">
                            <a href="casino/games/pragmaticplay-sugar-rush-1000" class="">Sugar Rush 1000</a>
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
    if (removed.length) removed.hide()

  }

  function casinoGames() {
    if($("#casinooyunlari").length > 0) return;
    var newSection = `
     <div class="manually-added-home-widgets section" id="casinooyunlari">
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
                    <a href="casino/group/live-casino" class"sdr-item-bc" href="#">
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
                      <a href="casino/games/american-roulette" class="">American Roulette</a>
                  </div>
                </div>
              </div>
              
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/roulette_1_azure_drops_and_wins.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="casino/games/pragmaticlive-roulette-azure" class="">Roulette Azure</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/auto_roulette.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                     <a href="casino/games/ezugi-auto-roulette" class="">Auto Roulette</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/roulette.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="casino/games/evolution-auto-roulette-vip" class="">Auto Roulette VIP</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/blackjack.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="casino/games/evolution-speed-blackjack-e" class="">Speed Blackjack E</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/blackjackvip.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                    <a href="casino/games/blackjack-vip" class="">Blackjack VIP</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/las-vegas-roulette.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="casino/games/las-vegas-roulette" class="">Lasvegas Roulette</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/lucky-fruits-and-diamonds.png" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="casino/games/lucky-fruits-diamonds" class="">Lucky Fruits & Diamonds</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/speed-blackjack.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                     <a href="casino/games/evolution-speed-blackjack-h" class="">Speed Blackjack H</a>
                  </div>
                </div>
              </div>
              <div class="casino-game-item-content position-relative">
                <div class="casino-game-item">
                  <img src="https://betrediofficial.github.io/images/live-casino/turkish_roulette.jpg" class="casino-game-image-bc img-fluid">
                  <div class="overlay">
                      <a href="casino/games/ezugi-turkish-roulette" class="">Turkish Roulette</a>
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
catch (e) {
  alert('hata')
  console.log(e)
}

function hideDefaultGames(ms) {
  let popularGames = language === "tr" ? "Popüler Oyunlar" : "Popular Games"
  let liveCasino = language === "tr" ? "Canlı Casino" : "Live Casino"

  setTimeout(() => {
  if($(`h2:contains("${popularGames}")`).length === 0){
    $('.section').eq(7).hide()
    $('.section').eq(8).hide()
  }
}, ms- 100);

  setTimeout(() => {
    $(`div:contains('${popularGames}')`).eq(8).hide()
    $(`div:contains('${liveCasino}')`).eq(7).hide()
  }, ms)

}

function headerButtons() {
  if ($(".manual-buttons").length === 0) {
    $(".header__actions").prepend(`
    <span class="manual-buttons" id="web-header-buttons">
   <div class="buttonsContainer">
     

   <div class="button-section">
      <a href="https://redisportv.com/" target="_blank" class="manual-redi-button" style="${isLoggedIn ? "margin-left: 22px;":""}">
      <span style="margin-right: 6px;margin-top: -4px;">
      ${SVGS.tvIcon}
      </span>
      REDI LIVE
      </a>
      <a href="${depositMoneyLink()}" class="manual-redi-button">
      <span style="margin-right: 6px;margin-top: 0px;">
      ${SVGS.moneyIcon}
      </span>
      Para Yatır
      </a>
   </div>
   
      <div class="button-section">
         <a href="https://betredicontact.com/" target="_blank" class="manual-redi-button">
         <span>
         ${SVGS.callIcon}
         </span>
         </a>
      </div>
      <div class="button-section">
         <a href="https://x.com/betrediofficial" target="_blank" class="manual-redi-button">
         <span>
         ${SVGS.twitterIcon}
         </span>
         </a>
         <a href="https://t.me/betredi" target="_blank" class="manual-redi-button">
         <span>
         ${SVGS.telegramIcon}
         </span>
         </a>
         <a href="" class="manual-redi-button">
         <span>
         ${SVGS.whatsappIcon}
         </span>
         </a>
      </div>
         <div>
       ${languageSelectWeb()}
       </div>
</span>
    `)
  }

  if ($("#mobile-header-buttons").length === 0) {
  $("header .container").append(`
    <div class="row" id="mobile-header-buttons">

      <div class="col-1">
          <a href="https://redisportv.com/" target="_blank" class="manual-redi-button">
            <span>
            ${SVGS.tvIcon}
            </span>
         </a>
      </div>

        <div class="col-1">
          <a href="https://x.com/betrediofficial"  target="_blank" class="manual-redi-button">
            <span>
            ${SVGS.twitterIcon}
            </span>
         </a>
      </div>


        <div class="col-1">
          <a href="https://t.me/betredi" target="_blank" class="manual-redi-button">
            <span>
            ${SVGS.telegramIcon}
            </span>
         </a>
      </div>

       <div class="col-1">
          <a href="" class="manual-redi-button">
            <span>
            ${SVGS.whatsappIcon}
            </span>
         </a>
      </div>

      ${languageSelectMobile()}

    </div>
    `)
  }
}



const SVGS = {
  tvIcon: `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66699 16.6666V7.49998C1.66699 7.05795 1.84259 6.63403 2.15515 6.32147C2.46771 6.00891 2.89163 5.83331 3.33366 5.83331H16.667C17.109 5.83331 17.5329 6.00891 17.8455 6.32147C18.1581 6.63403 18.3337 7.05795 18.3337 7.49998V16.6666C18.3337 17.1087 18.1581 17.5326 17.8455 17.8452C17.5329 18.1577 17.109 18.3333 16.667 18.3333H3.33366C2.89163 18.3333 2.46771 18.1577 2.15515 17.8452C1.84259 17.5326 1.66699 17.1087 1.66699 16.6666Z" stroke="url(#paint0_linear_92_74)" stroke-width="1.5"/>
<path d="M7.08398 2.08331L10.0007 4.99998L12.9173 2.08331" stroke="url(#paint1_linear_92_74)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_92_74" x1="10.0003" y1="5.83331" x2="10.0003" y2="18.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
<linearGradient id="paint1_linear_92_74" x1="10.0007" y1="2.08331" x2="10.0007" y2="4.99998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
moneyIcon: `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.375 4.5V1.875C12.375 1.64294 12.2828 1.42038 12.1187 1.25628C11.9546 1.09219 11.7321 1 11.5 1H2.75C2.28587 1 1.84075 1.18437 1.51256 1.51256C1.18437 1.84075 1 2.28587 1 2.75M1 2.75C1 3.21413 1.18437 3.65925 1.51256 3.98744C1.84075 4.31563 2.28587 4.5 2.75 4.5H13.25C13.4821 4.5 13.7046 4.59219 13.8687 4.75628C14.0328 4.92038 14.125 5.14294 14.125 5.375V8M1 2.75V13.25C1 13.7141 1.18437 14.1592 1.51256 14.4874C1.84075 14.8156 2.28587 15 2.75 15H13.25C13.4821 15 13.7046 14.9078 13.8687 14.7437C14.0328 14.5796 14.125 14.3571 14.125 14.125V11.5" stroke="url(#paint0_linear_92_69)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8V11.5H11.5C11.0359 11.5 10.5908 11.3156 10.2626 10.9874C9.93437 10.6592 9.75 10.2141 9.75 9.75C9.75 9.28587 9.93437 8.84075 10.2626 8.51256C10.5908 8.18437 11.0359 8 11.5 8H15Z" stroke="url(#paint1_linear_92_69)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_92_69" x1="7.5625" y1="1" x2="7.5625" y2="15" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
<linearGradient id="paint1_linear_92_69" x1="12.375" y1="8" x2="12.375" y2="11.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
callIcon: `
<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88267 0C8.38493 0 6.94853 0.594976 5.88947 1.65404C4.83041 2.7131 4.23543 4.1495 4.23543 5.64724C4.23543 7.14498 4.83041 8.58138 5.88947 9.64044C6.94853 10.6995 8.38493 11.2945 9.88267 11.2945C11.3804 11.2945 12.8168 10.6995 13.8759 9.64044C14.9349 8.58138 15.5299 7.14498 15.5299 5.64724C15.5299 4.1495 14.9349 2.7131 13.8759 1.65404C12.8168 0.594976 11.3804 0 9.88267 0ZM2.83633 12.7063C2.46446 12.7046 2.09592 12.7764 1.75187 12.9176C1.40783 13.0587 1.09505 13.2664 0.831507 13.5288C0.567962 13.7912 0.358839 14.103 0.216144 14.4464C0.0734504 14.7898 -3.76511e-06 15.158 1.44748e-10 15.5299C1.44748e-10 17.9173 1.17604 19.7173 3.01422 20.8906C4.82416 22.044 7.26376 22.589 9.88267 22.589C10.3872 22.589 10.8841 22.5687 11.3735 22.5283C11.2606 22.0392 11.268 21.5301 11.3948 21.0445C11.5217 20.5589 11.7644 20.1113 12.102 19.7399L12.8715 18.883C13.2216 18.4948 13.6695 18.2077 14.1683 18.0515C14.6672 17.8953 15.1988 17.8758 15.7078 17.9949L16.8161 18.2575C17.3497 17.817 17.673 17.2975 17.8213 16.6749L17.09 15.9605C16.7086 15.5877 16.4444 15.1115 16.3298 14.5906C16.2151 14.0697 16.2551 13.5267 16.4448 13.0282L16.5662 12.7063H2.83633ZM17.7662 13.528L18.1658 12.4691C18.53 11.5077 19.6651 11.0333 20.6223 11.4413L21.1701 11.6757C21.8379 11.9609 22.3899 12.4776 22.5071 13.1722C23.1523 17.0194 19.8133 22.4916 15.9704 23.8878C15.2758 24.1391 14.5261 23.9443 13.9303 23.5405L13.4418 23.2087C13.2413 23.0737 13.0724 22.8967 12.9469 22.69C12.8214 22.4833 12.7422 22.2519 12.7149 22.0116C12.6875 21.7714 12.7125 21.528 12.7883 21.2984C12.8641 21.0688 12.9888 20.8584 13.1538 20.6816L13.9233 19.8246C14.104 19.6256 14.3346 19.4784 14.5912 19.3982C14.8478 19.3181 15.1212 19.3079 15.3831 19.3686L17.1126 19.7781C18.4839 18.9216 19.219 17.7168 19.3178 16.1638L18.0782 14.9511C17.8931 14.7701 17.7649 14.539 17.7095 14.2862C17.654 14.0333 17.6738 13.7698 17.7662 13.528Z" fill="url(#paint0_linear_92_66)"/>
<defs>
<linearGradient id="paint0_linear_92_66" x1="11.2937" y1="0" x2="11.2937" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
twitterIcon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_92_60" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path d="M0 0H24V24H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_92_60)">
<path d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z" fill="url(#paint0_linear_92_60)"/>
</g>
<defs>
<linearGradient id="paint0_linear_92_60" x1="12" y1="1.125" x2="12" y2="22.8759" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
telegramIcon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 15.996 10.824 15.324C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.34 10.44 14.4 10.188C14.4083 10.1498 14.4072 10.1102 14.3968 10.0726C14.3863 10.0349 14.3668 10.0004 14.34 9.972C14.268 9.912 14.172 9.936 14.088 9.948C13.98 9.972 12.3 11.088 9.024 13.296C8.544 13.62 8.112 13.788 7.728 13.776C7.296 13.764 6.48 13.536 5.868 13.332C5.112 13.092 4.524 12.96 4.572 12.54C4.596 12.324 4.896 12.108 5.46 11.88C8.964 10.356 11.292 9.348 12.456 8.868C15.792 7.476 16.476 7.236 16.932 7.236C17.028 7.236 17.256 7.26 17.4 7.38C17.52 7.476 17.556 7.608 17.568 7.704C17.556 7.776 17.58 7.992 17.568 8.16Z" fill="url(#paint0_linear_92_58)"/>
<defs>
<linearGradient id="paint0_linear_92_58" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
whatsappIcon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0498 4.90999C18.1329 3.9841 17.0408 3.24996 15.8373 2.75036C14.6338 2.25075 13.3429 1.99568 12.0398 1.99999C6.5798 1.99999 2.1298 6.44999 2.1298 11.91C2.1298 13.66 2.5898 15.36 3.4498 16.86L2.0498 22L7.2998 20.62C8.7498 21.41 10.3798 21.83 12.0398 21.83C17.4998 21.83 21.9498 17.38 21.9498 11.92C21.9498 9.26999 20.9198 6.77999 19.0498 4.90999ZM12.0398 20.15C10.5598 20.15 9.1098 19.75 7.8398 19L7.5398 18.82L4.4198 19.64L5.2498 16.6L5.0498 16.29C4.22735 14.9771 3.79073 13.4593 3.7898 11.91C3.7898 7.36999 7.4898 3.66999 12.0298 3.66999C14.2298 3.66999 16.2998 4.52999 17.8498 6.08999C18.6174 6.85386 19.2257 7.76254 19.6394 8.76332C20.0531 9.76411 20.264 10.8371 20.2598 11.92C20.2798 16.46 16.5798 20.15 12.0398 20.15ZM16.5598 13.99C16.3098 13.87 15.0898 13.27 14.8698 13.18C14.6398 13.1 14.4798 13.06 14.3098 13.3C14.1398 13.55 13.6698 14.11 13.5298 14.27C13.3898 14.44 13.2398 14.46 12.9898 14.33C12.7398 14.21 11.9398 13.94 10.9998 13.1C10.2598 12.44 9.7698 11.63 9.6198 11.38C9.4798 11.13 9.5998 11 9.7298 10.87C9.8398 10.76 9.9798 10.58 10.0998 10.44C10.2198 10.3 10.2698 10.19 10.3498 10.03C10.4298 9.85999 10.3898 9.71999 10.3298 9.59999C10.2698 9.47999 9.7698 8.25999 9.5698 7.75999C9.3698 7.27999 9.1598 7.33999 9.0098 7.32999H8.5298C8.3598 7.32999 8.0998 7.38999 7.8698 7.63999C7.6498 7.88999 7.0098 8.48999 7.0098 9.70999C7.0098 10.93 7.89981 12.11 8.0198 12.27C8.1398 12.44 9.7698 14.94 12.2498 16.01C12.8398 16.27 13.2998 16.42 13.6598 16.53C14.2498 16.72 14.7898 16.69 15.2198 16.63C15.6998 16.56 16.6898 16.03 16.8898 15.45C17.0998 14.87 17.0998 14.38 17.0298 14.27C16.9598 14.16 16.8098 14.11 16.5598 13.99Z" fill="url(#paint0_linear_92_55)"/>
<defs>
<linearGradient id="paint0_linear_92_55" x1="11.9998" y1="1.99994" x2="11.9998" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`

}

function hideBlogSection(){
  $("li:contains('Blog')").hide()
}

function languageSelectWeb () {
  return `
 <div class="sidebar__lang">
      <a class="sidebar__lang-btn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <div class="svg-icon" onClick="window.location='/tr'">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/turkey.svg" alt=".">
      </div>
       <div class="svg-icon" onClick="window.location='/en'">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/united-kingdom.svg" alt=".">
      </div>
   </a>
</div>
  `
}

function languageSelectMobile () {
  return `
 <div class="col-1">
   <div href="" class="manual-redi-button" style="
      width: 79px;
      justify-content: space-between;
      ">
      <div class="svg-icon" onClick="window.location='/tr'" style="
         ">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/turkey.svg" alt=".">
      </div>
      <div onClick="window.location='/en'" class="svg-icon">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/united-kingdom.svg" alt=".">
      </div>
   </div>
</div>
  `
}

function mobileSignInText(){
  $(".header__signin").html(`
    <h1 style="
    color: #FFF;
    font-size: 16px;
    margin-top: 10px;
">GİRİŞ</h1>`)
}