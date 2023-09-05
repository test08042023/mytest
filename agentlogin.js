function validate() {
    if (document.getElementById("text1").value == "Agent" 
    // || "Denver" || "Eric" || "Ken" || "Aurthur" || "Hayden" || "Jack" || "Finn" || "Sarah" || "Dennis" || "Mario" || "Juan"
        && document.getElementById("text2").value == "Admin@123") {
        alert("validation succeeded");
        location.href = "day_night.html";
    }
    else {
        alert("validation failed");
        location.href = "fail.html";
    }
}