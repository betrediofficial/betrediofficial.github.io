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
    bottomMenuWidget();
    otherGames();
}

function otherGames(){


        var newSection = `
           
<div class="section" id="casinooyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap"><h2 class="section__title"><svg class="svg-icon"><use href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#top-games"></use></svg>En Popüler Oyunlar</h2><a class="section__view section__view--carousel" href="/tr/casino/group/top-games">Tümünü Görüntüle</a></div>
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

        $('.section--first')[1].before(newSection)

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
