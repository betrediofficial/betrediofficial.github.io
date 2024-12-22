var language = window.location.pathname.split("/")[1];
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

    language = window.location.pathname.split("/")[1]
    const isHomePage = isHomePageCheck()
    if (language !== "tr") return;

    const is_mobile = isMobile();



    if (!isHomePage) {
      removeHomePageWidgets()
    }
    else {
      bottomMenuWidget();
       otherGames();
      !is_mobile && slotGames();
      !is_mobile && casinoGames();

      //hide default games
      !is_mobile && hideDefaultGames(50);
      !is_mobile && hideDefaultGames(1500);
    }

    headerButtons();



  }

  function otherGames() {
    var newSection = `
           
<div class="manually-added-home-widgets section" id="digeroyunlari">
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
            <a href="${language}/casino/games/aviator">
              <img
                src="https://betrediofficial.github.io/images/other-games/aviator.png"
                alt="games"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="${language}/casino/games/pragmaticlive-spaceman">
              <img
                src="https://betrediofficial.github.io/images/other-games/spaceman.png"
                alt="maconcesi"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="${language}/casino/games/betsolutions-zeppelin?modal=register">
              <img
                src="https://betrediofficial.github.io/images/other-games/zepplin.png"
                alt="sporb"
                class="otherGamesComponentLayoutImg"
              />
            </a>
          </div>
          <div class="otherGamesComponentLayout">
            <a href="${language}/casino/games/pragmaticlive-big-bass-crash">
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

  function bottomMenuWidget() {
    $(".section:first").append(`
<div class="manually-added-home-widgets bottomMenuWidgedContainer">
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


  function slotGames() {
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
                            <a href="/${language}/casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">Big Bass Secrets Of The Golden Lake</a>
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
    if (removed.length) removed.hide()

  }

  function casinoGames() {
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
    <span class="manual-buttons">
     <div class="buttonsContainer">
    <a href="" class="manual-redi-button">REDI LIVE</a>


   <a href="" class="btn-deposit">
    <img src="https://betrediofficial.github.io/images/buttons/io68nmg.png"/>
  </a>
  <a href="" class="call">
     <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_92_65)">
    <rect x="30" y="25" width="40" height="40" rx="8" fill="url(#paint0_linear_92_65)"/>
    <rect x="30.5" y="25.5" width="39" height="39" rx="7.5" stroke="#EC2026"/>
    <path d="M48.8827 33C47.3849 33 45.9485 33.595 44.8895 34.654C43.8304 35.7131 43.2354 37.1495 43.2354 38.6472C43.2354 40.145 43.8304 41.5814 44.8895 42.6404C45.9485 43.6995 47.3849 44.2945 48.8827 44.2945C50.3804 44.2945 51.8168 43.6995 52.8759 42.6404C53.9349 41.5814 54.5299 40.145 54.5299 38.6472C54.5299 37.1495 53.9349 35.7131 52.8759 34.654C51.8168 33.595 50.3804 33 48.8827 33ZM41.8363 45.7063C41.4645 45.7046 41.0959 45.7764 40.7519 45.9176C40.4078 46.0587 40.0951 46.2664 39.8315 46.5288C39.568 46.7912 39.3588 47.103 39.2161 47.4464C39.0735 47.7898 39 48.158 39 48.5299C39 50.9173 40.176 52.7173 42.0142 53.8906C43.8242 55.044 46.2638 55.589 48.8827 55.589C49.3872 55.589 49.8841 55.5687 50.3735 55.5283C50.2606 55.0392 50.268 54.5301 50.3948 54.0445C50.5217 53.5589 50.7644 53.1113 51.102 52.7399L51.8715 51.883C52.2216 51.4948 52.6695 51.2077 53.1683 51.0515C53.6672 50.8953 54.1988 50.8758 54.7078 50.9949L55.8161 51.2575C56.3497 50.817 56.673 50.2975 56.8213 49.6749L56.09 48.9605C55.7086 48.5877 55.4444 48.1115 55.3298 47.5906C55.2151 47.0697 55.2551 46.5267 55.4448 46.0282L55.5662 45.7063H41.8363ZM56.7662 46.528L57.1658 45.4691C57.53 44.5077 58.6651 44.0333 59.6223 44.4413L60.1701 44.6757C60.8379 44.9609 61.3899 45.4776 61.5071 46.1722C62.1523 50.0194 58.8133 55.4916 54.9704 56.8878C54.2758 57.1391 53.5261 56.9443 52.9303 56.5405L52.4418 56.2087C52.2413 56.0737 52.0724 55.8967 51.9469 55.69C51.8214 55.4833 51.7422 55.2519 51.7149 55.0116C51.6875 54.7714 51.7125 54.528 51.7883 54.2984C51.8641 54.0688 51.9888 53.8584 52.1538 53.6816L52.9233 52.8246C53.104 52.6256 53.3346 52.4784 53.5912 52.3982C53.8478 52.3181 54.1212 52.3079 54.3831 52.3686L56.1126 52.7781C57.4839 51.9216 58.219 50.7168 58.3178 49.1638L57.0782 47.9511C56.8931 47.7701 56.7649 47.539 56.7095 47.2862C56.654 47.0333 56.6738 46.7698 56.7662 46.528Z" fill="url(#paint1_linear_92_65)"/>
  </g>
  <defs>
    <filter id="filter0_d_92_65" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_92_65"/>
      <feOffset dx="-5"/>
      <feGaussianBlur stdDeviation="12"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.121569 0 0 0 0 0.145098 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_65"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_65" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_92_65" x1="30" y1="45" x2="70" y2="45" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2D0607"/>
      <stop offset="0.9999" stop-color="#B5181D"/>
      <stop offset="1" stop-color="#F92228"/>
    </linearGradient>
    <linearGradient id="paint1_linear_92_65" x1="50.2937" y1="33" x2="50.2937" y2="57" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#999999"/>
    </linearGradient>
  </defs>
</svg>
  </a>
  <a href="" class="btn-twitter">
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_92_59)">
    <rect x="30" y="25" width="40" height="40" rx="8" fill="url(#paint0_linear_92_59)"/>
    <rect x="30.5" y="25.5" width="39" height="39" rx="7.5" stroke="#EC2026"/>
    <mask id="mask0_92_59" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="38" y="33" width="24" height="24">
      <path d="M38 33H62V57H38V33Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_92_59)">
      <path d="M56.9 34.125H60.5806L52.5406 43.3376L62 55.8759H54.5943L48.7897 48.273L42.1554 55.8759H38.4714L47.0703 46.0187L38 34.1267H45.5943L50.8331 41.0747L56.9 34.125ZM55.6057 53.6679H57.6457L44.48 36.2181H42.2926L55.6057 53.6679Z" fill="url(#paint1_linear_92_59)"/>
    </g>
  </g>
  <defs>
    <filter id="filter0_d_92_59" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_92_59"/>
      <feOffset dx="-5"/>
      <feGaussianBlur stdDeviation="12"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.121569 0 0 0 0 0.145098 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_59"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_59" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_92_59" x1="30" y1="45" x2="70" y2="45" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2D0607"/>
      <stop offset="0.9999" stop-color="#B5181D"/>
      <stop offset="1" stop-color="#F92228"/>
    </linearGradient>
    <linearGradient id="paint1_linear_92_59" x1="50" y1="34.125" x2="50" y2="55.8759" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#999999"/>
    </linearGradient>
  </defs>
</svg>
  </a>
  <a href="" class="btn-telegram">
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_92_57)">
    <rect x="30" y="25" width="40" height="40" rx="8" fill="url(#paint0_linear_92_57)"/>
    <rect x="30.5" y="25.5" width="39" height="39" rx="7.5" stroke="#EC2026"/>
    <path d="M50 33C43.376 33 38 38.376 38 45C38 51.624 43.376 57 50 57C56.624 57 62 51.624 62 45C62 38.376 56.624 33 50 33ZM55.568 41.16C55.388 43.056 54.608 47.664 54.212 49.788C54.044 50.688 53.708 50.988 53.396 51.024C52.7 51.084 52.172 50.568 51.5 50.124C50.444 49.428 49.844 48.996 48.824 48.324C47.636 47.544 48.404 47.112 49.088 46.416C49.268 46.236 52.34 43.44 52.4 43.188C52.4083 43.1498 52.4072 43.1102 52.3968 43.0726C52.3863 43.0349 52.3668 43.0004 52.34 42.972C52.268 42.912 52.172 42.936 52.088 42.948C51.98 42.972 50.3 44.088 47.024 46.296C46.544 46.62 46.112 46.788 45.728 46.776C45.296 46.764 44.48 46.536 43.868 46.332C43.112 46.092 42.524 45.96 42.572 45.54C42.596 45.324 42.896 45.108 43.46 44.88C46.964 43.356 49.292 42.348 50.456 41.868C53.792 40.476 54.476 40.236 54.932 40.236C55.028 40.236 55.256 40.26 55.4 40.38C55.52 40.476 55.556 40.608 55.568 40.704C55.556 40.776 55.58 40.992 55.568 41.16Z" fill="url(#paint1_linear_92_57)"/>
  </g>
  <defs>
    <filter id="filter0_d_92_57" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_92_57"/>
      <feOffset dx="-5"/>
      <feGaussianBlur stdDeviation="12"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.121569 0 0 0 0 0.145098 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_57"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_57" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_92_57" x1="30" y1="45" x2="70" y2="45" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2D0607"/>
      <stop offset="0.9999" stop-color="#B5181D"/>
      <stop offset="1" stop-color="#F92228"/>
    </linearGradient>
    <linearGradient id="paint1_linear_92_57" x1="50" y1="33" x2="50" y2="57" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#999999"/>
    </linearGradient>
  </defs>
</svg>
  </a>
  <a href="" class="btn-whatsapp">
    <img src="https://betrediofficial.github.io/images/buttons/t6yf1mw.png"/>
  </a>
  
</div>
    </span>
    `)
  }
}