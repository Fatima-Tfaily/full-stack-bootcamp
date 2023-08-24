setTimeout(() => {
    console.log("Hello after 5 seconds");

}, 5000)

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);
}

setInterval(updateClock, 1000);

function delayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved!");
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

delayedPromise()
    .then((message) => {
        alert(message);
        return "Chained message!";
    })
    .then((chainedMessage) => {
        console.log(chainedMessage);
    });
function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Network Error!");
            }
        }, 3000); // 3000 milliseconds = 3 seconds
    });
}
simulateNetworkRequest()
    .then((message) => {
        console.log(message); // Success scenario
    })
    .catch((error) => {
        console.error(error); // Error scenario
    });
async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchPost();





