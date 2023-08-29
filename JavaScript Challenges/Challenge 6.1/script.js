function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done");
      }, milliseconds);
    });
  }
  console.log(delay(3000));

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
  
  const dogImageURLs = [
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random"
  ];
  
  async function fetchDogImages() {
    try {
      const responses = await Promise.all(dogImageURLs.map(url => fetch(url)));
      const dataPromises = responses.map(response => response.json());
      const dogImages = await Promise.all(dataPromises);
      
      dogImages.forEach(imageData => {
        console.log("Dog Image:", imageData.message);
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  fetchDogImages();