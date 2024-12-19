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
