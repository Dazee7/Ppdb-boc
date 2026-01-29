function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (user === "" || pass === "") {
    alert("Isi semua data!");
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("Pendaftaran berhasil!");
  window.location.href = "index.html";
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerHTML = "❌ Login gagal!";
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}

// Proteksi dashboard
if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
  }
}
