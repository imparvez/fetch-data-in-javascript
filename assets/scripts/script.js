
/*
* Creating Element
*/
function createNode(elem){
	return document.createElement(elem)
}

/*
* Appending parent and child
*/
function append(parent, el) {
	return parent.appendChild(el);
}

/*
* Targetting element with author ID: getting the list where we put our authors
*/
const ul = document.getElementById('authors');

/*
* Authors API: Getting random 10 users
*/
const url = 'https://randomuser.me/api/?results=10';


fetch(url) //Simple GET request
	.then((resp) => resp.json()) //Transform the data into JSON
	.then(function(resp){
		let authors = resp.results; //Get the results
		return authors.map(function(author){
			let li = createNode('li'),
			 	img = createNode('img'),
			 	span = createNode('span');
			img.src = author.picture.medium;
			span.innerHTML = `${author.name.first} ${author.name.last}`;
			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error){
		console.log(error);
	});