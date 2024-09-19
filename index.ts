// get form and display area
const form=document.getElementById("Resume-form") as HTMLFormElement;
const resume=document.getElementById('resume-display') as HTMLDivElement;
form.addEventListener("submit",function(event)  {
  

    // prevant page reload
    event.preventDefault();
    // collect input values
    const name=(document.getElementById("name") as HTMLInputElement).value;
    const email=(document.getElementById("email") as HTMLInputElement).value
    const phon=(document.getElementById("phon") as HTMLInputElement).value
    const experience=(document.getElementById("experience") as HTMLInputElement).value
    const education=(document.getElementById("Education") as HTMLInputElement).value
    const skill=(document.getElementById("skills") as HTMLInputElement).value
// genrate resume covtent dynamicalt
const ResumeHtml=
`<h2><b>resume</b></h2>
<h3><b>personal information</b></h3>
<p><b>name:</b>${name}</p>
<p><b>email:</b>${email}</p>
<p><b>phon:</b>${phon}</P>
<h3>experience</3>
<p>${experience}</p>
<h3>Education</p>
<p>${education}</p>
<h3>skills</h3>
<p>${skill}<h3>`


//display the genrate resume
if(resume) {
resume.innerHTML=ResumeHtml;

}else{
  console.error("the resume display element is missing")
}

;
})








