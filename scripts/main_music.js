let songs= document.querySelectorAll('.audio');
let albumCovers = document.querySelectorAll('.albums');
let songTitle = document.querySelectorAll('.songtitle');
let players = document.querySelectorAll('audio');

function hideTitle() {
  songTitle.forEach(function(el) {
    el.style.display = 'none';
  });
}

function hideAll() {
  songs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideTitle();

hideAll();

albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    hideTitle();
    hideAll();


    switch (e.target.getAttribute('id')) {
          case 'saturation':
            document.querySelector('#gold')
            .style.display = 'block';
            document.querySelector('#goldsong')
            	.style.display = 'block';
            break;
          case 'saturationtwo':
            document.querySelector('#sweet')
              .style.display = 'block';
            document.querySelector('#sweetsong')
            	.style.display = 'block';
            break;
          case 'saturationthree':
            document.querySelector('#bleach')
            .style.display = 'block';
            document.querySelector('#bleachsong')
            .style.display = 'block';
            break;
          case 'irid':
            document.querySelector('#vivid')
            .style.display = 'block';
            document.querySelector('#vividsong')
            .style.display = 'block';
            break;
          case 'ginger':
              document.querySelector('#nohalo')
              .style.display = 'block';
              document.querySelector('#nohalosong')
              .style.display = 'block';
              break;
        }

        players.forEach(function(el) {
                  el.pause();
                  el.currentTime = 0;
              });

         }
         });
