document.getElementById("startButton").addEventListener("click", startServer);
document.getElementById("stopButton").addEventListener("click", stopServer);

function startServer() {
    fetch('https://ukhir1gwd8.execute-api.us-east-2.amazonaws.com/default/minecraft', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            document.getElementById("ipAddress").innerText = data.body;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function stopServer() {
    fetch('https://ukhir1gwd8.execute-api.us-east-2.amazonaws.com/default/minecraft', { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            document.getElementById("ipAddress").innerText = "Not Started";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
