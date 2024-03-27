// setTimeout(function(){
    
// 	$(".center").hide()
//     $(".sza").show()
// }, 10000)

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=07w0rG5TETcyihsEIZR3qG',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f615039camshb67937b75a69bbdp1b0b09jsna02c40e56d05',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	$(".center").fadeOut(5000)
    $(".sza").fadeIn(5000)
	// $(".sza").css("display")
	console.log(response)
	let nike = response.albums[0].release_date
	$("#nike").text(`Released ${nike}`)

	let her = response.albums[0].artists[0].name
	$("#her").text(` ${her}`)

	let show = response.albums[0].name
	$("#show").text(`album ${show}`)
	
	let tracks = response.albums[0].tracks.items
	let list = ""
	for(var i = 0; i < tracks.length; i++){
		list += `<h3>${tracks[i].name}</h3><br>`
	}
	$("#tracks").html(list)
	console.log(tracks);
	

});

