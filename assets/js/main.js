const gambar = document.querySelector('.gambar');
let img = ['1.png', '2.png', '3.png'];
let i = 0;

function prev(){
	if (i <= 0) i = img.length;	
	i--;
	return setImg();			 
}

function next(){
	if (i >= img.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return gambar.setAttribute('src', "./assets/images/"+ img[i]);
	
}