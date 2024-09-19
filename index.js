// get form and display area
var form = document.getElementById("Resume-form");
var resume = document.getElementById('resume-display');
form.addEventListener("submit", function (event) {
    // prevant page reload
    event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phon = document.getElementById("phon").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("Education").value;
    var skill = document.getElementById("skills").value;
    // genrate resume covtent dynamicalt
    var ResumeHtml = "<h2><b>resume</b></h2>\n<h3><b>personal information</b></h3>\n<p><b>name:</b>".concat(name, "</p>\n<p><b>email:</b>").concat(email, "</p>\n<p><b>phon:</b>").concat(phon, "</P>\n<h3>experience</3>\n<p>").concat(experience, "</p>\n<h3>Education</p>\n<p>").concat(education, "</p>\n<h3>skills</h3>\n<p>").concat(skill, "<h3>");
    //display the genrate resume
    if (resume) {
        resume.innerHTML = ResumeHtml;
    }
    else {
        console.error("the resume display element is missing");
    }
    ;
});
