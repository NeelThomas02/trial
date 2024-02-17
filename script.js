document.addEventListener("DOMContentLoaded", function() {
    var sidebarContainer = document.getElementById("sidebarContainer");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "sidebar.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            sidebarContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});