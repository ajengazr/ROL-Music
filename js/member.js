// mengambil element dengan nama class sesuai yang ada pada file member.html yang dibutuhkan
const signInButton = document.querySelector('.sign-ina');
const signUpButton = document.querySelector('.sign-upa');
const signInSection = document.getElementById('sign-in');
const signUpSection = document.getElementById('sign-up');

// menambahkan event listener untuk button sign in
signInButton.addEventListener('click', function() {
  // menentukan style pada form sign in ketika button sign in diklik
  signInSection.setAttribute('style', 'display:flex;justify-content: center;align-items: center;height: 100vh;');
  // menentukan style pada form sign up ketika button sign in diklik
  signUpSection.style.display = 'none';
});
// menambahkan event listener untuk button sign up
signUpButton.addEventListener('click', function() {
  // menentukan style pada form sign up ketika button sign up diklik
  signUpSection.setAttribute('style', 'display:flex;justify-content: center;align-items: center;height: 100vh;');
  // menentukan style pada form sign in ketika button sign up diklik
  signInSection.style.display = 'none';
});
