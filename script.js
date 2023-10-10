const text_content = document.getElementsByClassName("text-content")[0];

text_content.textContent = `Loading...`;

fetch(`https://api.adviceslip.com/advice/${Math.random() * 220}`)
  .then((data) => data.json())
  .then((value) => {
    let quotes = value.slip.advice;
    text_content.textContent = `"${quotes}"`;
  })
  .catch((er) => location.reload());
