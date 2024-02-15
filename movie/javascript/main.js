// $(document).ready(function() {  
//   console.log("시작");
// 	$.ajax({		
//     	url:"API Key",		
//       	data:{"key":"value"},	
//       	type:"POST",	
//       	success:function(json) {
//         	console.log(json);

//             $("movie-list").html('')
//             let movie_list = json.result;

//             for(let i = 0; i < movie_list.length; i++) {
//                 let card = ` <div class="row row-cols-1 row-cols-md-3">
//                 <div class="col mb-4">
//                   <div class="card">
//                     <img src="${'http://image.tmdb.org/t/p/w500/' + movie_list.poster_path}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${movie_list[i].original_title}</h5>
//                       <button type="button" class="btn btn-success" id="review-button" onclick="review(${movie_list[i].id})">리뷰 보기</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>`

//               $("movie-list").append(card)
//             }
//         },
//     	error:function(err) {
        	
//         }
//     })
          
// })


// function review (id) {
//     $('#review-modal').modal('show')
// }