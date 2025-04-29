function showRegister() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'block';
}
function showLogin() {
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}
function logout() {
  localStorage.removeItem('userName');
  location.reload();
}
// المزيد من البرمجة حسب الحاجة
