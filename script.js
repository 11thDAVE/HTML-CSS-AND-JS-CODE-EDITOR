function run() {
    let htmlCode = document.getElementById('html-code');
    let cssCode = document.getElementById('css-code');
    let jsCode = document.getElementById('js-code');
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode.value + `<style>${cssCode.value}</style>`;
    output.contentWindow.eval(jsCode.value);
}

const dcm = document.querySelector('.body');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');
const changeMode = document.getElementById('changeMode');
const switchMode = document.getElementById('switchMode');
const textArea1 = document.querySelector('.textarea1');
const textArea2 = document.querySelector('.textarea2');
const textArea3 = document.querySelector('.textarea3');
const header = document.querySelector('#header');

let font = 15;

switchMode.addEventListener('click', () => {
    if (changeMode.value === 'DARK') {
        dcm.style.backgroundColor = 'black';
        dcm.style = `color: white;`
        header.style.backgroundColor = 'rgb(1, 1, 30)';
        
        setTextAreaStyles('rgb(13, 13, 13)', 'white');
        
        changeMode.style.backgroundColor = 'rgb(3, 3, 53)';
        changeMode.style.color = 'white';
        changeMode.style.border = '1px solid white';

        switchMode.style.backgroundColor = 'rgb(3, 3, 53)';
        switchMode.style.color = 'white';

        increaseFontBtn.style.backgroundColor = 'rgb(3, 3, 53)';
        increaseFontBtn.style.color = 'white';

        decreaseFontBtn.style.backgroundColor = 'rgb(3, 3, 53)';
        decreaseFontBtn.style.color = 'white';


    } else if (changeMode.value === 'LIGHT') {
        dcm.style = `color: black;`
        dcm.style.backgroundColor = 'rgb(207, 201, 201)';

        header.style.backgroundColor = 'white';

        setTextAreaStyles('white', 'black');

        changeMode.style.backgroundColor = 'rgb(207, 201, 201)';
        changeMode.style.color = 'black';
        changeMode.style.border = 'none';

        switchMode.style.backgroundColor = 'rgb(207, 201, 201)';
        switchMode.style.color = 'black';

        increaseFontBtn.style.backgroundColor = 'rgb(207, 201, 201)';
        increaseFontBtn.style.color = 'black';

        decreaseFontBtn.style.backgroundColor = 'rgb(207, 201, 201)';
        decreaseFontBtn.style.color = 'black';
    }
    updateFontSize();
});

function setTextAreaStyles(bgColor, textColor) {
    textArea1.style.backgroundColor = bgColor;
    textArea1.style.color = textColor;

    textArea2.style.backgroundColor = bgColor;
    textArea2.style.color = textColor;

    textArea3.style.backgroundColor = bgColor;
    textArea3.style.color = textColor;
}

increaseFontBtn.addEventListener('click', () => {
    font++;
    updateFontSize();
});

decreaseFontBtn.addEventListener('click', () => {
    font--;
    updateFontSize();
});

function updateFontSize() {
    textArea1.style.fontSize = `${font}px`;
    textArea2.style.fontSize = `${font}px`;
    textArea3.style.fontSize = `${font}px`;
};