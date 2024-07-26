// mengambil element dengan class bx dan menambahkan event klik untuk masuk ke halaman html lain
const icon = document.querySelector('.bx').addEventListener("click", () => {
    location.href = "../html/index.html"
});
// membuat funtion judul album untuk menampilkan judul artis ketika halaman web dibuka
function judulArtist(){
    // mengambil element dengan class judul-artist
    const judul = document.querySelector('.judul-artist');
    // membuat element h1
    const h1 = document.createElement('h1');
    h1.textContent = "Artis Yang Disarankan";
    // memasukkan element h1 sebagai child dari element judul
    judul.appendChild(h1);
}
// memanggil funtion judul album
judulArtist();

// mendeklar url API artist
const artist = 'https://rol-music.vercel.app/api/artist';
// mengambil data artist
fetch(artist)
    .then(response => response.json())
    .then(res => {
        // data JSON yang diperoleh disimpan dalam variabel names.
        names = res;
        // memanggil fungsi display name untuk mengelola setiap data yang ada pada names
        displayName(names);
    });

// mendeklar fungsi display name menggunakan arrow funtion (=>)
// fungsi ini menerima satu parameter names, yang merupakan sebuah array yang berisi elemen-elemen yang akan ditampilkan.
const displayName = (names) => {
    // mengambil element dengan class ap-img
    const apImg = document.querySelector('.ap-img');
    // element dengan class ap-img diatur menjadi string kosong, berguna jika ingin menghapus konten sebelum menambahkan konten baru.
    apImg.textContent = '';

    // melakukan perulangan setiap element dalam array names, setiap elementnya diwakili oleh parameter n di dalam arrow function
    names.forEach((n) => {
        // membuat element figure
        const figure = document.createElement('figure');
        // membuat element img
        const img = document.createElement('img');
        // set atribut img dengan properti image yang ada dalam objek di dalam array t
        img.setAttribute('src', n.image);
        // memasukkan element img sebagai child dari element figure
        figure.appendChild(img);

        // membuat element figcaption
        const figcaption = document.createElement('figcaption');
        // membuat element p
        const title = document.createElement('p');
        // mengatur text dari element title dengan value title yang ada dalam array t
        title.textContent = n.title;
        // memasukan element title sebagai child dari element figcaption
        figcaption.appendChild(title);

        // membuat element p
        const name = document.createElement('p');
        // mengatur text dari element name dengan value name dalam array n
        name.textContent = n.name;
        // memasukan element name(p) sebagai child dari element figcaption
        figcaption.appendChild(name);
        // memasukan element figcaption sebagai child dari element figure
        figure.appendChild(figcaption);
        // memasukan element figure sebagai child dari element dengan class ra-img
        apImg.appendChild(figure);

        // menambahkan event listener untuk menanggapi ketika element figure diklik 
        figure.addEventListener("click", () => {
            // mengambil element iframe
            const iframe = document.querySelector('iframe');
            // menghapus element iframe
            iframe.parentNode.removeChild(iframe);

            // membuat element iframe baru
            const newIframe = document.createElement('iframe');
            // set atribut element iframe baru
            newIframe.setAttribute('style', "width:fit-content;height:440px;border-radius:10px;");
            newIframe.setAttribute('src', n.embed);

            // mengambil element dengan class play-screem dan menjadikan element iframe baru sebagai child dari element dengan class play-screen
            document.querySelector('.play-screen').appendChild(newIframe);
            // untuk menggulirkan tampilan agar iframe baru terlihat secara mulus.
            newIframe.scrollIntoView({ behavior: 'smooth' })
        });
    });
}

// mengambil element dengan id keyword dan menambahkan event listener ketika element tersebut terjadi input/nilai input berubah.
document.getElementById('keyword').addEventListener('input', (e) => {
    // Mengambil nilai input, mengonversi ke huruf kecil (lowercase), dan menyimpannya dalam variabel searchTerm.
    const searchTerm = e.target.value.toLowerCase();
    // Menerapkan filter ke array names. Hanya judul yang mengandung searchTerm (dalam huruf kecil) akan dimasukkan ke dalam filteredTitle.
    const filteredName = names.filter(names =>
        names.name.toLowerCase().includes(searchTerm)
    );
    // Memanggil fungsi displayName dengan array yang sudah difilter, sehingga hanya judul yang sesuai dengan pencarian yang ditampilkan.
    displayName(filteredName);
});
