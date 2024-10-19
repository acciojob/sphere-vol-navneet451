function volume_sphere() {
    //Write your code here
	 let radius = document.getElementById('radius').value;

	if (radius === '' || radius < 0) {
                alert("Please enter a valid non-negative number for the radius.");
                return;
            }
	radius = parseFloat(radius);
	let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
	document.getElementById("volume").value=volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
