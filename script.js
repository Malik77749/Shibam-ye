document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const rememberMe = localStorage.getItem('rememberMe') === 'true';

  if (isLoggedIn && rememberMe) {
    showApp();
  } else {
    showLogin();
  }
});

function showLogin() {
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('appContainer').style.display = 'none';
}

function showRegister() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'flex';
  document.getElementById('appContainer').style.display = 'none';
}

function showApp() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('appContainer').style.display = 'block';

  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  if (userData.fullName) {
    document.getElementById('userName').textContent = userData.fullName;
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('rememberMe');
  showLogin();
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const phone = document.getElementById('loginPhone').value;
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // تحقق وهمي
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('rememberMe', rememberMe);
  showApp();
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const phone = document.getElementById('registerPhone').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const address = document.getElementById('address').value;

  if (password !== confirmPassword) {
    alert('كلمة المرور وتأكيدها غير متطابقين');
    return;
  }

  const userData = { fullName, phone, address };
  localStorage.setItem('userData', JSON.stringify(userData));
  localStorage.setItem('isLoggedIn', 'true');

  showApp();
});
