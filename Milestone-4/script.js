// script.ts
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Format the resume content dynamically
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume in the 'resumedisplay' div
    var resumeDisplay = document.getElementById("resumedisplay");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeContent;
    }
});
