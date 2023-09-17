document.getElementById("startButton").addEventListener("click", startServer);
document.getElementById("stopButton").addEventListener("click", stopServer);

const API_ENDPOINT = 'https://q151ydyszk.execute-api.us-east-1.amazonaws.com/prod/server';

function startServer() {
    fetch(API_ENDPOINT, { method: 'GET' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("ipAddress").innerText = data.ipAddress || "Started, but IP not yet available";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("ipAddress").innerText = "Error starting server";
        });
}

function stopServer() {
    fetch(API_ENDPOINT, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("ipAddress").innerText = "Not Started";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("ipAddress").innerText = "Error stopping server";
        });
}
