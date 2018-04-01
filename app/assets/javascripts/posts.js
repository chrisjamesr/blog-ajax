// Loading Comments via AJAX- replaced by remote: true
// $(function(){
  
  // Fire some ajax
  // $.ajax({
  //   method: "GET",
  //   url: this.href,
  // })
  //   .success(function( response ) {
  // //     // GET the response (variable 'data')
  //     $("div.comments").html(response)
  // //     // load data into DOM
  // // debugger

  // }).error(function(notNeeded){
  //   alert("we broke!!!!");
  // }); 

  // Requesting HTML

  // $.get(this.href).success(function(response){
  //   $("div.comments").html(response)
  // })
  // ***************************

  // Requesting JSON

    // $.get(this.href).success(function(json){
    //   // clear the OL html (incase there were stale comments)
    //   let $ol = $("div.comments ol")
    //   $ol.html("")     //emptied the ol
    //   json.forEach(function(comment){   // iterate over each comment within json
    //     $ol.append("<li>"+ comment.content + "</li>");
    //   })
    
    // })
    // ***************************

    // Server side AJAX Model
  // $("a.load_comments").on("click", function(e){
  //   $.ajax({
  //     url: this.href,
  //     dataType: 'script'
  //   })

  //   // ***************************
  // e.preventDefault();

  // }) 
// })

// Submit Comments via AJAX
// $(function(){
//   $("#new_comment").on("submit", function(e){
//     // 1. we need the URL to submit the POST request too
//     // 2. we need the form data
//     // Low Level Implementation
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize(),
      // dataType: "script"
//       success: (response)=> {
//         $("#comment_content").val('')
//         const $ol = $("div.comments ol")
//         $ol.append(response);

//       }
//     });
//     // Send a POST request to the correct place that form would have gone to anywat
//     // along with the actual form data
//     e.preventDefault();
//   })
// });










