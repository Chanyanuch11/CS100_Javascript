fetch('data.txt')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById('output').textContent = data; // Display content on the page
    })
    .catch(error => console.error('Error reading file:', error));