// document.addEventListener("DOMContentLoaded", function () {
//   // Handler when the DOM is fully loaded
// });

$(document).ready(function () {
  $("#append_new_concept").on("submit", function(e) { // 1. Handle submit event
    e.preventDefault();
    url = this.action
    params = { // 2. Structure parameters to be sent in the request 
      concept: {
        title: document.querySelector("#concept_title").value,
        description: document.querySelector("#concept_description").value,
      },
      authenticity_token: document.querySelector("[name=authenticity_token]").value
    }

    fetch(url, { // 3. Submit post request
      method: "POST",
      credentials: "same-origin",
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })// 4. How to handle response 
    .then(response => response.json()) // parses response to JSON
    .then(someData => {
      let $freshConcept = $('#freshConcept');
      let url = `/users/${someData.user_id}/concepts/${someData.id}`;
      $freshConcept.append(`<a href="${url}"> ${someData.title} </a> <br>`);
      // document.querySelector(".freshConcept").append(`<a href="${url}"> ${someData.title} </a> <br>`);
      // debugger
    })
    .catch(error => console.error(`Error: ${error}`))
  });
});