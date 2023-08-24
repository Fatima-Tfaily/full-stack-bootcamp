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





