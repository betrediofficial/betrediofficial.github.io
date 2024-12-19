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
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 1200px; margin: 0 auto; padding: 10px;">
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/games.png" alt="games" style="width: 100%; max-width: 200px; height: auto;">
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/maconcesi.png" alt="maconcesi" style="width: 100%; max-width: 200px; height: auto;">
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/sporb.png" alt="sporb" style="width: 100%; max-width: 200px; height: auto;">
    </a>
  </div>
  <div style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://imgbb.com/">
      <img src="https://betrediofficial.github.io/images/slotcasino.png" alt="slotcasino" style="width: 100%; max-width: 200px; height: auto;">
    </a>
  </div>
</div>
    `);
}
