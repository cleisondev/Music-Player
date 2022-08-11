
    let musicas = [
        {titulo: 'Pop Melodic',
        artista: 'Cleison',
        source:'Musica/As You Fade Away - NEFFEX.mp3',
        img: 'Imagem/Disc.jpg'
    
        },
        {titulo: 'Pop Just',
        artista: 'Amanda',
        source:'Musica/Escapism - Yung Logos.mp3',
        img: 'Imagem/Piano.jpg'
    
        },
        {titulo: 'Eletro Melodic',
        artista: 'Rilary',
        source:'Musica/Pray - Anno Domini Beats.mp3',
        img: 'Imagem/Bass.jpg'
    
        }
    ];




    let musica = document.querySelector('audio');
    let indexMusica = 0;

    let imagem = document.querySelector('img');
    let nomeMusica = document.querySelector('.descricao h2');
    let nomeArtista = document.querySelector('.descricao i');
    

     renderizarMusica(indexMusica)

    //Eventos
     document.querySelector('.botao-play').addEventListener('click', tocarMusica);

     document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

     musica.addEventListener('timeupdate', atualizarBarra);

     
     musica.addEventListener('loadeddata', duration);

     document.querySelector('.anterior').addEventListener('click', () => {
        indexMusica--;
        if (indexMusica < 0){
            indexMusica = 2;
        }
        pausarMusica()
        renderizarMusica(indexMusica);
     });

     document.querySelector('.proximo').addEventListener('click', () => {
        indexMusica++;
        if (indexMusica > 2){
            indexMusica = 0;
        }
        pausarMusica()
        renderizarMusica(indexMusica);
    });

  
   

   
    //Functions

    function renderizarMusica(indexMusica){
        musica.setAttribute('src', musicas[indexMusica].source);
        musica.addEventListener('loadeddata', () => {
            nomeMusica.textContent =  musicas[indexMusica].titulo;
            nomeArtista.textContent = musicas[indexMusica].artista;
            imagem.src = musicas[indexMusica].img;
            duracaoMusica.textContent = secToMin(Math.floor(musica.duration));
            
    }

        )};

        document.body.append(musica)



     function tocarMusica() {
        musica.play();
        document.querySelector('.botao-pause').style.display = 'block';
        document.querySelector('.botao-play').style.display = 'none';
        
     }
     
     function pausarMusica() {
        musica.pause(); 
        document.querySelector('.botao-pause').style.display = 'none';
        document.querySelector('.botao-play').style.display = 'block';
     }

     function atualizarBarra() {
        let barra = document.querySelector('progress')
        barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
        let tempoDecorrido = document.querySelector('.inicio');
        tempoDecorrido.textContent = secToMin(Math.floor(musica.currentTime));

    }


    function secToMin (segundos){
        let campoMinuto = Math.floor(segundos / 60)
        let campoSegundos = segundos % 60;
        if(campoSegundos < 10 ){
            campoSegundos = '0' + campoSegundos
        }
        return campoMinuto + ':' +campoSegundos
    }
     
    function duration (){
        let duracaoMusica = document.querySelector(' .fim');



    duracaoMusica.textContent = secToMin(Math.floor(musica.duration));
    }

  