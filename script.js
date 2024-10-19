function volume_sphere(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    let radius = document.getElementById('radius').value;

    if (radius === '' || radius < 0) {
        alert("Please enter a valid non-negative number for the radius.");
        return;
    }

    radius = parseFloat(radius);
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);

    // Display the calculated volume in the output field
    document.getElementById("volume").value = volume;
}

// Attach the event handler to the form submission
window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};

