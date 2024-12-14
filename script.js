document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [

    { name: 'Henrique & Juliano', image: './img/henrique.png' },
    
    { name: 'Jorge & Mateus', image: './img/jorge.png' },
    { name: 'Zé Neto & Cristiano', image: './img/ze-neto.png' },
    { name: 'Gusttavo Lima', image: './img/gustavo.png'
    },
    { name: 'Luan Santana', image: './img/luan.png' },
    
    { name: 'Matheus & Kauan', image: './img/mateus.png' }
    
    ];
    const albumsData = [
      { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Sleepy John',
        image: './img/white.png' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano',
    image: './img/ceu.png' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais',
    image: './img/vidaloka.png' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image:
    './img/hitme.png' },
    { name: 'CAJU', artist: 'Liniker', image: './img/caju.png' },
    { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image:
    './img/luisa.png' }
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
      const artistCard = document.createElement('div')
      artistCard.classList.add('artist-card')

      artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do${artist.name}">
        <div>
              <h3>${artist.name}</h3>
              <p>artista</p>
        </div>  
        `

      artistGrid.appendChild(artistCard) //joga lá dentro
    })

    albumsData.forEach(album => {
      const albumCard = document.createElement('div')
      albumCard.classList.add('album-card')

      albumCard.innerHTML = `
        <img src="${album.image}" alt="imagem do${album.name}">
        <div>
              <h3>${album.name}</h3>
              <p>${album.artist}</p>
        </div>
          `
      

      albumsGrid.appendChild(albumCard) //joga lá dentro
    })
})



