const main = document.querySelector('main');
const slider = document.querySelector('.slides');

const btn_back = document.querySelector('#btn-back');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn_forward = document.querySelector('#btn-forward');
const btn_ss = document.querySelector('#btn-ss');

const translateX = -600;
let translateX_string;
let picture_counter = 1;
let slider_work = true;


btn_ss.addEventListener('click', () => {
    if (slider_work == true) {   
        btn_ss.innerHTML = "START";
        slider_work = false;

    }
    else {
        btn_ss.innerHTML = "STOP";
        slider_work = true;
    } 
});


const intervalRef = setInterval( 
    () => {
        if (slider_work == true && picture_counter <= 4)
        {
            
            translateX_string = `translateX(${picture_counter * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
            console.log(picture_counter);
        }
        else if (picture_counter == 5)
        {
            picture_counter = 0;
            translateX_string = `translateX(${picture_counter * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
            console.log(picture_counter);
        }
    },
    2000
);


btn1.addEventListener('click', () => {
    slider_work = false;
    picture_counter = 0;
    translateX_string = `translateX(${picture_counter * translateX}px)`;
    slider.style.transform = translateX_string;
    btn_ss.innerHTML = "Start";
});

btn2.addEventListener('click', () => {
    slider_work = false;
    picture_counter = 1;
    translateX_string = `translateX(${picture_counter * translateX}px)`;
    slider.style.transform = translateX_string;
    btn_ss.innerHTML = "Start";
});

btn3.addEventListener('click', () => {
    slider_work = false;
    picture_counter = 2;
    translateX_string = `translateX(${picture_counter * translateX}px)`;
    slider.style.transform = translateX_string;
    btn_ss.innerHTML = "Start";
});

btn4.addEventListener('click', () => {
    slider_work = false;
    picture_counter = 3;
    translateX_string = `translateX(${picture_counter * translateX}px)`;
    slider.style.transform = translateX_string;
    btn_ss.innerHTML = "Start";
});

btn5.addEventListener('click', () => {
    slider_work = false;
    picture_counter = 4;
    translateX_string = `translateX(${picture_counter * translateX}px)`;
    slider.style.transform = translateX_string;
    btn_ss.innerHTML = "Start";
});


btn_back.addEventListener('click', () => {
    btn_ss.innerHTML = "Start";
    slider_work = false;
    switch (picture_counter) {
        case 0:
            translateX_string = `translateX(${4 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter = 4;
        break;
        case 1:
            translateX_string = `translateX(${0 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
        break;
        case 2:
            translateX_string = `translateX(${1 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
        break;
        case 3:
            translateX_string = `translateX(${2 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
        break;
        case 4:
            translateX_string = `translateX(${3 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
        break;
    }
});

btn_forward.addEventListener('click', () => {
    btn_ss.innerHTML = "Start";
    slider_work = false;
    switch (picture_counter) {
        case 0:
            translateX_string = `translateX(${1 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
        break;
        case 1:
            translateX_string = `translateX(${2 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
        break;
        case 2:
            translateX_string = `translateX(${3 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
        break;
        case 3:
            translateX_string = `translateX(${4 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
        break;
        case 4:
            translateX_string = `translateX(${0 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter = 0;
        break;
    }
});


