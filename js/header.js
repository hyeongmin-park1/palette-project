
function show(value) {
    document.querySelector(".textBox").value = value;
  }
  let dropdown = document.querySelector(".dropdown");

  dropdown.onclick = function() {
      dropdown.classList.toggle("active");
  };

  function change() {
    const sound = document.getElementById('soundButton');
    if(sound.innerText === 'Sound Off 🔇') {
        sound.innerText = 'Sound On 🔊';
    } else sound.innerText = 'Sound Off 🔇';
};