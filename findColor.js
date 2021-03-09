const inputName = document.getElementById('inputName');
const mainSection = document.getElementById('main');
const bgSection = mainSection.querySelector('.background')
const text_title = mainSection.querySelector('h2')
const text_colorname = mainSection.querySelector('p')

function stringToColor(e) {
    let color_bg = "#"
    const yourName = e.target.value;
    console.log(yourName)
    let hash = 0;
    for (let i = 0; i < yourName.length; i++) {
        hash = yourName.charCodeAt(i) + ((hash << 5) - hash);
    }
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        color_bg += ("00" + value.toString(16)).substr(-2);
    }

    console.log(`color_bg is ${color_bg}`)
    
        let r = parseInt(color_bg.substr(1,2),16);
        let g = parseInt(color_bg.substr(3,2),16);
        let b = parseInt(color_bg.substr(4,2),16);
        let brightness = ( (r*299) + (g*587) + (b*114) ) / 1000;
        console.log(`r is ${r}, g is${g}, b is ${b}, brightness is ${brightness}`)
     
    const color_text = (brightness > 128) ? 'black' : 'white';
    // const color_text = color_bg === "#000000" && "#ffffff";



    console.log(`color_text is ${color_text}`)
    

    bgSection.style.backgroundColor = color_bg;
    text_title.style.color = color_text;
    text_colorname.style.color = color_text;
    console.log(text_colorname)
    text_colorname.innerHTML = color_bg;
}

function init() {
    inputName.addEventListener('input', stringToColor)

}
init();
