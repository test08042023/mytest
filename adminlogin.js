function validate() {
    if (document.getElementById("admin1").value == "admin"
        && document.getElementById("admin2").value == "Admin@12345") {
        alert("validation succeeded");
        location.href = "https://script.google.com/macros/s/AKfycbzHkJMvPFUMVyqg5Pic0KQ5w9DVYMTjlsQqqgmhC_8HU7ribDtUW_6fAn-gErzzKwqs/exec";
    }
    else {
        alert("validation failed");
        location.href = "adminfail.html";
    }
}