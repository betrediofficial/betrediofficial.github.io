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

  $(".section--first").before(`
  <div class="otherGames">
        <h1 class="otherGamesHeader">CANLI CASINO OYUNLARI</h1>

  <div class="otherGamesComponent">
  <div class="otherGamesComponentLayout">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/other-games/aviator.png" alt="games" class="otherGamesComponentLayoutImg">
    </a>
  </div>
  <div class="otherGamesComponentLayout">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/other-games/spaceman.png" alt="maconcesi" class="otherGamesComponentLayoutImg">
    </a>
  </div>
  <div class="otherGamesComponentLayout">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/other-games/zepplin.png" alt="sporb" class="otherGamesComponentLayoutImg">
    </a>
  </div>
  <div class="otherGamesComponentLayout">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/other-games/bigbass.png" alt="slotcasino" class="otherGamesComponentLayoutImg">
    </a>
  </div>
</div>
</div>`) 
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
