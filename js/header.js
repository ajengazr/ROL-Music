// header ketika discroll
window.addEventListener('scroll', function() {
  // ketika header utama pada halaman html discroll secara vertikal setinggi 10px, maka akan ditambahkan class bernama scroll yang akan didesain di css
    if (window.scrollY >= 10) {
      document.querySelector('header').classList.add('scroll');
    } 
    // jika header utama digulir/discroll kembali ke atas/ pada titik awal maka class akan di hapus
    else {
      document.querySelector('header').classList.remove('scroll');
    }
});

// responsive header 
// mengambil element dengan class menu-toggle & close-toggle
const iconMenu = document.querySelector('.menu-toggle');
const iconXx = document.querySelector('.close-toggle');
// ketika class diklik, makan akan terjadi perintah
iconMenu.addEventListener("click", () => {
  // mengambil element ul dan menambahkan class bernama slide
    document.querySelector('ul').classList.add('slide');
    // lalu clas menu-toggle displaynya disembunyikan/dihilangkan
    iconMenu.setAttribute('style', 'display:none;');
    // dan class close-toggle dimunculkan
    iconXx.setAttribute('style', 'display:flex; align-items:center;');
});

// ketika class diklik, makan akan terjadi perintah
iconXx.addEventListener("click", () => {
  // mengambil element ul dan menghapus class bernama slide
  document.querySelector('ul').classList.remove('slide');
    // lalu clas menu-toggle displaynya dimunculkan
    iconMenu.setAttribute('style', 'display:flex; align-items:center');
    // dan class close-toggle disembunyikan/dihilangkan
    iconXx.setAttribute('style', 'display:none;');
});