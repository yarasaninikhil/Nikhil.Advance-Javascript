// bulb

	const Section2 = document.querySelector(".section2")
	const image = document.getElementById('bulb-img');
	const button = document.querySelector('.bulb-button');
	const app_section = document.querySelector(".app-main")
	
	
	const image1 = "bulb-go-off-img.png";
	const image2 = 'bulb-go-on-img.png';
	let isImage1 = true;
	
	button.addEventListener('click', () => {
		if (isImage1) {
			image.src = image2;
			button.innerHTML = "OFF"
			button.style = "background-color:red;"
			Section2 .style.backgroundImage = "url('65f0af99363aab4f7b86c22c38abb57f.jpeg')";
	
	
		} else {
			image.src = image1;
			button.innerHTML = "ON"
			button.style = "background-color:green;"
			Section2.style.backgroundImage = "url('9d21f1b5f82b6173f698aba0bd344191.jpeg')";
	
		}
		isImage1 = !isImage1;
	});

	// Section5
	// Apps

let apps = []; 

fetch('app.json')
    .then(response => response.json())
    .then(jsonData => {
        apps = jsonData.socialmedia;
        jsonData.socialmedia.forEach(social => {
            const img_section = document.querySelector(".app-main")
            const div = document.createElement("div")
            div.classList.add("app")
            const app_img = document.createElement("img")
            app_img.src = social.link
            app_img.classList.add("app-img")
            const paragraph = document.createElement('p');
            paragraph.textContent = social.name;
            paragraph.classList.add("app-name")
            div.appendChild(app_img)
            div.appendChild(paragraph);
            img_section.appendChild(div)
        });

    })
    .catch(error => (
        console.log(error)
    ))


const serch_button = document.querySelector(".app-search-button")
const search_input = document.querySelector(".search")



search_input.addEventListener('input', () => {
    const searchTerm = search_input.value.toLowerCase();
    const appElements = document.querySelectorAll('.app');

    appElements.forEach(appElement => {
        const appName = appElement.querySelector('.app-name').textContent.toLowerCase();
        if (appName.includes(searchTerm)) {
            appElement.style.display = 'block';
        } else {
            appElement.style.display = 'none';
        }
    });
});

const sorted_button = document.querySelector(".sorted-button");


sorted_button.addEventListener('click', () => {
    sorted_button.innerHTML="SORTED"
    sorted_button.style="background-color:green"
    
    apps.sort((a, b) => a.name.localeCompare(b.name));

    app_section.innerHTML = '';

    apps.forEach(social => {
        const div = document.createElement("div");
        div.classList.add("app");
        const app_img = document.createElement("img");
        app_img.src = social.link;
        app_img.classList.add("app-img");
        const paragraph = document.createElement('p');
        paragraph.textContent = social.name;
        paragraph.classList.add("app-name");
        div.appendChild(app_img);
        div.appendChild(paragraph);
        app_section.appendChild(div);

    });
});



// Slider
let slideImages = document.querySelectorAll('.slides img');
	
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	var counter = 0;


	next.addEventListener('click', slideNext);
	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
	}

	prev.addEventListener('click', slidePrev);
	function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	indicators();
	}
	function autoSliding(){
		deletInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();

	const container = document.querySelector('.slide-container');
	container.addEventListener('mouseover', function(){
		clearInterval(deletInterval);
	});

	
	container.addEventListener('mouseout', autoSliding);

	


