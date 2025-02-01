// get 
var form = document.getElementById('Resume-form');
var resumedisplayelement = document.getElementById('resume-display');
// 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // 
    var Name = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // 
    var ResumeHtml = "<h2><b>Resume</b></h2>\n <h3><b>Personal information</b></h3> \n <p><b>Name:</b>".concat(Name, "</p>\n  <p><b>email:</b>").concat(email, "</p>\n  <p><b>phone:</b>").concat(phone, "</p>\n\n  <h3>Education</h3>\n  <p><b>").concat(Education, "</b></p>\n  \n  <h3>Experience</h3>\n<p><b>").concat(Experience, "</b></p>\n \n <h3>skills</h3>\n <p><b>").concat(Skills, "</b></p>\n  ");
    //   
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = ResumeHtml;
    }
    else {
        console.error('the resume display element is missing');
    }
});
