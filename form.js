document.getElementById("userInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var formData = new FormData(event.target);

    // Convert FormData to JSON
    var jsonObject = {};
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });

    // Convert JSON object to a string
    var jsonData = JSON.stringify(jsonObject);

    // Store data in local storage for access on the template page
    localStorage.setItem("userData", jsonData);

    // Redirect to template.html
    window.location.href = "templete.html";
});
