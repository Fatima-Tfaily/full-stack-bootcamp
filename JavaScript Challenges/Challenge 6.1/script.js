function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done");
      }, milliseconds);
    });
  }
  console.log(delay(2000));

  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response =>response.json())
  .then(data =>{
    console.log(data.text);
  });

  async function fetchRandomFactAsync() {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      console.log(data.text);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  fetchRandomFactAsync();
  