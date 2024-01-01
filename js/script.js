function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(input => {
  input.addEventListener('input', function(event) {
    const inputValue = event.target.value;
    const warning = event.target.nextElementSibling;

    if (isNaN(inputValue)) {
      warning.textContent = 'Please enter a number';
    } else if (inputValue < 0) {
      warning.textContent = 'Please enter a non-negative number';
    } else {
      warning.textContent = 'Please enter a number between 0 and 999';
    }

    if (isNaN(inputValue) || inputValue < 0 || inputValue > 999) {
      warning.style.display = 'block';
    } else {
      warning.style.display = 'none';
    }
  });
});

const baseArea = document.getElementById('baseArea');
const baseValue = document.getElementById('baseValue');
const heightArea = document.getElementById('heightArea');
const calculateArea = document.getElementById('calculateArea');
const heightValue = document.getElementById('heightValue');
const resultArea = document.getElementById('resultArea');
const resultValue = document.getElementById('resultValue');
const formulaText = document.getElementById('formula');
const results = document.getElementById('results');

const sideA = document.getElementById('sideA');
const vsideA = document.getElementById('vsideA');
const sideB = document.getElementById('sideB');
const vsideB = document.getElementById('vsideB');
const sideC = document.getElementById('sideC');
const vsideC = document.getElementById('vsideC');
const calculatePerimeter = document.getElementById('calculatePerimeter');
const resultPerimeter = document.getElementById('resultPerimeter');
const pValue = document.getElementById('pValue');
const vFormula = document.getElementById('vformula');
const vResults = document.getElementById('vresults');


function countArea(base, height) {
  return 0.5 * base * height;
}

calculateArea.addEventListener('click', function() {
  const base = parseFloat(baseArea.value);
  const height = parseFloat(heightArea.value);

  if (!isNaN(base) && base > 0 && base <= 999 && !isNaN(height) && height > 0 && height <= 999) {
    const area = countArea(base, height);
    resultArea.textContent = area;
    resultArea.style = "color:black; font-weight:bold;"
    baseValue.textContent = base;
    heightValue.textContent = height;
    resultValue.textContent = area;
    formulaText.textContent = `½ × ${base} × ${height}`;
    formulaText.style = "color:black; font-weight:bold;"
    results.style.display = 'block';
  } else {
    resultArea.textContent = 'Please input a valid number!!'
    resultArea.style = "color:red; font-weight:bold;"
    results.style.display = 'none';
  }
});

function countPerimeter(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}

calculatePerimeter.addEventListener('click', function() {
  const sidea = parseFloat(sideA.value);
  const sideb = parseFloat(sideB.value);
  const sidec = parseFloat(sideC.value);


  if (!isNaN(sidea) && sidea > 0 && sidea <= 999 && !isNaN(sideb) && sideb > 0 && sideb <= 999 && !isNaN(sidec) && sidec > 0 && sidec <= 999) {
    const perimeter = countPerimeter(sidea, sideb, sidec);
    resultPerimeter.textContent = perimeter;
    resultPerimeter.style = "color:black; font-weight:bold;"
    vsideA.textContent = sidea;
    vsideB.textContent = sideb;
    vsideC.textContent = sidec;
    pValue.textContent = perimeter;
    vFormula.textContent = `${sidea} + ${sideb} + ${sidec}`;
    vFormula.style = "color:black; font-weight:bold;"
    vResults.style.display = 'block';
  } else {
    resultPerimeter.textContent = 'Please input a valid number!!'
    resultPerimeter.style = "color:red; font-weight:bold;"
    vResults.style.display = 'none';

  }
});

document.getElementById('areaModal').style.display = 'none';
document.getElementById('perimeterModal').style.display = 'none';

const areaModal = document.getElementById('areaModal');
const perimeterModal = document.getElementById('perimeterModal');

function openModal() {
  areaModal.style.display = 'flex';
}

function closeModal() {
  areaModal.classList.add('fadeout');
  setTimeout(() => {
    areaModal.style.display = 'none';
    areaModal.classList.remove('fadeout');
  }, 300);
}

function openPModal() {
  perimeterModal.style.display = 'flex';
}

function closePModal() {
  perimeterModal.classList.add('fadeout');
  setTimeout(() => {
    perimeterModal.style.display = 'none';
    perimeterModal.classList.remove('fadeout');
  }, 300);
}

function resetArea(){
  baseArea.value = "";
  heightArea.value = "";
  resultArea.textContent = "";
  baseValue.textContent = "";
  heightValue.textContent = "";
  resultValue.textContent = "";
  formulaText.textContent = "";
  results.style.display = 'none';
}

function resetPerimeter(){
  sideA.value = "";
  sideB.value = "";
  sideC.value = "";
  resultPerimeter.textContent = "";
  vsideA.textContent = "";
  vsideB.textContent = "";
  vsideC.textContent = "";
  vFormula.textContent = "";
  vResults.style.display = 'none';
}