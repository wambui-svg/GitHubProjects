  // JavaScript code for changing the background color of the content area
    const contentArea = document.getElementById('content');
    const changeColorBtn = document.getElementById('changeColorBtn');

    changeColorBtn.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random hex color
        contentArea.style.backgroundColor = randomColor;
    });