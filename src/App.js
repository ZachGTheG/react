import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

document.querySelector(".duplicator").addEventListener("click", function (e) {
  const node = document.getElementById("card");
  let clone = node.cloneNode(true);

  document.body.appendChild(clone);
});

const button = document.querySelector(".details");
button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = "green";
});
button.addEventListener("mouseleave", function () {
  button.style.backgroundColor = "";
});

const card = document.querySelector("#card");
const toggleBackgroundButton = document.querySelector(".toggle-background");

toggleBackgroundButton.addEventListener("click", function () {
  card.classList.toggle("bg-toggled");
});

const heading = document.querySelector("#card h1");
const changeHeadingButton = document.querySelector(".change-heading");

changeHeadingButton.addEventListener("click", function () {
  heading.textContent = "Something Else";
});

const cardContainer = document.querySelector("#card").parentNode;
const deleteCardButton = document.querySelector(".delete-card");

deleteCardButton.addEventListener("click", function () {
  cardContainer.removeChild(cardContainer.lastChild);
});

const description = document.querySelector("#card p");
const detailsButton = document.querySelector(".details");

detailsButton.addEventListener("click", function () {
  description.classList.toggle("hidden");
});


export default App;
