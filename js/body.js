const container = document.querySelector(".box");

const colorsMap = [
  { name: "TURQUOISE", hex: "#1abc9c" },
  { name: "EMERALD", hex: "#2ecc71" },
  { name: "PETER RIVER", hex: "#3498db" },
  { name: "AMETHYST", hex: "#9b59b6" },
  { name: "WET ASPHALT", hex: "#34495e" },
  { name: "GREEN SEA", hex: "#16a085" },
  { name: "NEPHRITIS", hex: "#27ae60" },
  { name: "BELIZE HOLE", hex: "#2980b9" },
  { name: "WISTERIA", hex: "#8e44ad" },
  { name: "MIDNIGHT BLUE", hex: "#2c3e50" },
  { name: "SUN FLOWER", hex: "#f1c40f" },
  { name: "CARROT", hex: "#e67e22" },
  { name: "ALIZARIN", hex: "#e74c3c" },
  { name: "CLOUDS", hex: "#ecf0f1" },
  { name: "CONCRETE", hex: "#95a5a6" },
  { name: "ORANGE", hex: "#f39c12" },
  { name: "PUMPKIN", hex: "#d35400" },
  { name: "POMEGRANATE", hex: "#c0392b" },
  { name: "SILVER", hex: "#bdc3c7" },
  { name: "ASBESTOS", hex: "#7f8c8d" },
];

const messages = [ 
"IT'LL ROCK!",
"GOT IT!",
"COPIED!",
"WILL DO!",
"PASTE ME!",
"RIGHT ONE!"
];

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

function colorMapChanger(hex) {
  const copyFormat = document.querySelector('.textBox').value;
  console.log(copyFormat);
  if(copyFormat === 'Copy Format: HEX(#AA1923)'){
    result = hex;
  } else if(copyFormat === 'Copy Format: HEX(AA1923)'){
    result = hex.substr(1);
  } else if(copyFormat === 'Copy Format: RGB - (1,2,3)'){
    result = "rgb(" + hexToRgb(hex).r + "," + hexToRgb(hex).g + "," + hexToRgb(hex).b + ")";
  } else if(copyFormat === 'Copy Format: RGBA - (1,2,3,0.4)'){
    result = "rgb(" + hexToRgb(hex).r + "," + hexToRgb(hex).g + "," + hexToRgb(hex).b + ",1.0)";
  } else result = hex;
  
  return result;

  };


function copy(content){
  let textContent = colorMapChanger(content);
  navigator.clipboard.writeText(textContent)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
  let fullbox = document.querySelector("#fullScreen");  
  let random = messages[Math.floor(Math.random()*messages.length)];
  document.getElementById("randomMessage").innerHTML = random;
  document.getElementById("colorValue").innerHTML = textContent;
  fullbox.style.backgroundColor= content;
  fullbox.style.zIndex= "1000";
  setTimeout(() => {fullbox.style.zIndex = "0";}, 500);
  setTimeout(() => {fullbox.style.backgroundColor = "transparent";}, 500);
};


const fetchColorBox = () => {
  let output = "";
  colorsMap.forEach(
    ({ name, hex }) =>
      (output += `
              <div style="background-color: ${hex}" class="colorBox" onclick="copy('${hex}')">
                <div class="copySign">COPY</div>
                <span class="colorName">${name}</span>
              </div>
              `)
  );

  container.innerHTML = output;
};

fetchColorBox();