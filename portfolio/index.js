
// contact container sending message to my email
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.classList.add('success')
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.classList.add('error')
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.classList.add('error')
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

// single page application 

// nav bar
$("#aboutMe, #tools, #project, #contact").on("click", function() {
  $("#title-container").show();
  $("#aboutMe-container").show();
  $("#tools-container").show();
  $("#project-container").show();
  $("#contact-container").show();
  $("#project1, #project2, #project3, #project4").hide();
});

// project 1 
$("#projectbtn1").on("click", function() {
  $("#project1").show();
  $("#title-container").hide();
  $("#aboutMe-container").hide();
  $("#tools-container").hide();
  $("#project-container").hide();
  $("#contact-container").hide();
});

// project 2
$("#projectbtn2").on("click", function() {
  $("#project2").show();
  $("#title-container").hide();
  $("#aboutMe-container").hide();
  $("#tools-container").hide();
  $("#project-container").hide();
  $("#contact-container").hide();
});

// project 3
$("#projectbtn3").on("click", function() {
  $("#project3").show();
  $("#title-container").hide();
  $("#aboutMe-container").hide();
  $("#tools-container").hide();
  $("#project-container").hide();
  $("#contact-container").hide();
});

// project 4 
$("#projectbtn4").on("click", function() {
  $("#project4").show();
  $("#title-container").hide();
  $("#aboutMe-container").hide();
  $("#tools-container").hide();
  $("#project-container").hide();
  $("#contact-container").hide();
});