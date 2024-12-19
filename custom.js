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
        <div class="container-xxl">
          <div class="row align-items-center text-center">
            <div class="col">
              <a href="https://imgbb.com/"><img src="https://betrediofficial.github.io/images/games.png" alt="games" border="0"></a><br />
            </div>
            <div class="col">
              <a href="https://imgbb.com/"><img src="https://betrediofficial.github.io/images/maconcesi.png" alt="maconcesi" border="0"></a><br />
            </div>
            <div class="col">
              <a href="https://imgbb.com/"><img src="https://betrediofficial.github.io/images/sporb.png" alt="sporb" border="0"></a><br />
            </div>
            <div class="col">
              <a href="https://imgbb.com/"><img src="https://betrediofficial.github.io/images/slotcasino.png" alt="slotcasino" border="0"></a><br />
            </div>
          </div>
        </div>
    `);
}
