document.getElementById("startButton").addEventListener("click", startServer);
document.getElementById("stopButton").addEventListener("click", stopServer);

function startServer() {
    fetch('https://cg6ykrknv4.execute-api.us-east-1.amazonaws.com/new', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            document.getElementById("ipAddress").innerText = data.body;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function stopServer() {
    fetch('https://cg6ykrknv4.execute-api.us-east-1.amazonaws.com/new', { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            document.getElementById("ipAddress").innerText = "Not Started";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
