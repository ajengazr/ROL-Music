// membuat funtion utama sebagai judul dari halaman utama web
function utama(){
    // mengambil element dengan class utama
    const utama = document.querySelector('.utama');
    // membuat element h3
    const h3 = document.createElement('h1');
    h3.textContent = "Rhythm Of Life Music";
    // memasukkan elment h3 sebagai child element dgn class utama
    utama.appendChild(h3);
    // membuat element h1
    const h1 = document.createElement('h1');
    h1.textContent = "Discover new music every day."
    // memasukkan elment h1 sebagai child element dgn class utama
    utama.appendChild(h1);
}
// memanggil funtion utama ketika web dibuka pertama kali
utama();

// artis yang disarankan
// deklar url API artist
const url = 'https://rol-music.vercel.app/api/artist';
// mengambil data artist
fetch(url)
.then(response => response.json())
.then(res => {
    // menampilkan setiap isi datanya dengan perulangan
    res.forEach(res => {
        artisPopuler(res);
    });
});
// membuat funtion judul artist
function judulArtist(){
    // mengambil element dengan classs judul-artist
    const judul = document.querySelector('.judul-artist');
    // membuat element h1
    const h1 = document.createElement('h1');
    h1.textContent = "Artis Yang Disarankan";
    // memasukkan element h1 sebagai child dari element judul
    judul.appendChild(h1);
    // membuat element a
    const tampil = document.createElement('a');
    tampil.textContent = "Tampilkan Selengkapnya";
    tampil.setAttribute('href', "../html/saran-artis.html");
    // memasukkan element a sebagai child dari element judul
    judul.appendChild(tampil);
}
// memanggil funtion judul artist ketika halaman web dibuka pertama kali
judulArtist();

// membuat funtion untuk menampilkan data artist
function artisPopuler(res){
    // membuat element figure
    const figure = document.createElement('figure');
    // membuat element img
    const img = document.createElement('img');
    img.setAttribute('src', res.image);
    // membuat element figcaption
    const figcaption = document.createElement('figcaption');
    // membuat element p
    const p = document.createElement('p');
    p.textContent = res.name;
    // memebuat element p
    const artist = document.createElement('p');
    artist.textContent = "Artist";
    // memasukkan semua element sebagai child dari setiap parent element
    figcaption.appendChild(p);
    figcaption.appendChild(artist);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // mengambil element dengan class ap-img
    const apImg = document.querySelector('.ap-img');
    // memasukkan element figure sebagai chil dari element dgn class ap-img
    apImg.appendChild(figure);
    
    // ketika element figure diklik maka akan ada beberapa perintah
    figure.addEventListener("click", () => {
        // mengambil elemnt iframe
        const iframe = document.querySelector('iframe');
        // menghapus tag iframe agar ketika ingin menampilkan iframe baru, iframe lama dihapus dulu
        iframe.parentNode.removeChild(iframe);
        
        // membuat element iframe baru
        const newIframe = document.createElement('iframe');
        // menambahkan atribut pada iframe baru
        newIframe.setAttribute('style', "width:fit-content;height:440px;margin-bottom:1%;border-radius:10px;");
        newIframe.setAttribute('id', 'iframe');
        newIframe.setAttribute('src', res.embed);
        // mengambil element dengan class play-screen dan memasukkan iframe baru sebagai chilnya
        document.querySelector('.play-screen').appendChild(newIframe);
        // berfungsi agar scroll vertical iframe baru ditampilkan akan smooth
        newIframe.scrollIntoView({behavior: 'smooth'})
    });
}

// album teratas
// deklar url API album
const album = 'https://rol-music.vercel.app/api/albums';
// mengambil data albums
fetch(album)
.then(response => response.json())
.then(res => {
    // menampilkan setiap isi datanya dengan perulangan
    res.forEach(res => {
        saranAlbum(res);
    })
});
// membuat funtion judul album
function judulAlbum(){
    // mengambil element dengan classs judul-album
    const judul = document.querySelector('.judul-album');
    // membuat element h1
    const h1 = document.createElement('h1');
    h1.textContent = "Album Teratas";
    // memasukkan element h1 sebagai child dari element judul
    judul.appendChild(h1);

    const tampil = document.createElement('a');
    tampil.textContent = "Tampilkan Selengkapnya";
    tampil.setAttribute('href', "../html/saran-album.html");
    judul.appendChild(tampil);
}
// memanggil funtion judul album ketika halaman web dibuka pertama kali
judulAlbum();

// membuat funtion untuk menampilkan data album
function saranAlbum(res){
    // membuat element figure
    const figure = document.createElement('figure');
    // membuat element img
    const img = document.createElement('img');
    img.setAttribute('src', res.image);
    // memasukan element img sebagai child dari element figure
    figure.appendChild(img);

    // membuat element figcaption
    const figcaption = document.createElement('figcaption');
    // membuat element p
    const title = document.createElement('p');
    title.textContent = res.title;
    // memasukan element p sebagai child dari element figcaption
    figcaption.appendChild(title);

    // membuat element p
    const name = document.createElement('p');
    name.textContent = res.name;
    // memasukan element p (name) sebagai child dari element figcaption
    figcaption.appendChild(name);

    // memasukkanelement figcaption sebagai child dari element figure
    figure.appendChild(figcaption);

    // mengambil element dengan class ra-img
    const raImg = document.querySelector('.ra-img');
    // memasukan element figure sebagai child dari elemnt dengan class ra-img
    raImg.appendChild(figure);

    // menambahkan event click pada element figure
    figure.addEventListener("click", () => {
        // mengambil element iframe
        const iframe = document.querySelector('iframe');
        // menghapus tag iframe agar ketika ingin menampilkan iframe baru, iframe lama dihapus dulu
        iframe.parentNode.removeChild(iframe);
        
        // membuat element iframe baru
        const newIframe = document.createElement('iframe');
        // menambahkan atribut pada iframe baru
        newIframe.setAttribute('style', "width:fit-content;height:440px;border-radius:10px;");
        newIframe.setAttribute('id', 'iframe');
        newIframe.setAttribute('src', res.embed);
        // mengambil element dengan class play-screen dan memasukkan element iframe baru sebagai child dari element dengan class play-screen
        document.querySelector('.play-screen').appendChild(newIframe);
        // berfungsi agar scroll vertical iframe baru ditampilkan akan smooth
        newIframe.scrollIntoView({behavior: 'smooth'})
    });
}