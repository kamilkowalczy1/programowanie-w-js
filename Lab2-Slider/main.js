const main = document.querySelector('main');
const slider = document.querySelector('.slides');


const btn_back = document.querySelector('#btn-back');
const btn = document.querySelectorAll('.btn')


const btn_forward = document.querySelector('#btn-forward');
const btn_ss = document.querySelector('#btn-ss');
let last_picture =btn[0]

const translateX = -600;
let translateX_string;
let picture_counter = 0;
let slider_work = true;

//Start Stop

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


//Interwał czasowyy

const intervalRef = setInterval( 
    () => {
       
        if (slider_work == false) {
            return;
        }
        if (picture_counter == 4) {
            picture_counter = 0;
            translateX_string = `translateX(${picture_counter * translateX}px)`;
            slider.style.transform = translateX_string;
            last_picture.style.color="black"
            btn[picture_counter].style.color="red"
            last_picture=btn[picture_counter]
            return;
        }
            picture_counter++;
            last_picture.style.color="black"
            btn[picture_counter].style.color="red"
            translateX_string = `translateX(${picture_counter * translateX}px)`;
            slider.style.transform = translateX_string;
            last_picture=btn[picture_counter]
     
    },
    2000
);

btn.forEach(button => {
    button. addEventListener("click",()=> {
        last_picture.style.color="black"
        const slider_number = button.innerHTML
        slider_work= false;
        picture_counter= slider_number-1;
        button.style.color="red"
        translateX_string = `translateX(${picture_counter * translateX}px)`;
        slider.style.transform = translateX_string;
        btn_ss.innerHTML = "Start";
        console.log(slider_number)
        last_picture=btn[slider_number-1]

     })
 })


btn_back.addEventListener('click', () => {
    btn_ss.innerHTML = "Start";
    slider_work = false;
    switch (picture_counter) {
        case 0:
            btn[4].style.color="red"
            translateX_string = `translateX(${4 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter = 4;
            btn[0].style.color="black"
            last_picture=btn[4]
        break;
        case 1:
            btn[0].style.color="red"
            translateX_string = `translateX(${0 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter = 0;
            btn[1].style.color="black"
            last_picture=btn[0]
        break;
        case 2:
            btn[1].style.color="red"
            translateX_string = `translateX(${1 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
            btn[2].style.color="black"
            last_picture=btn[1]
        break;
        case 3:
            btn[2].style.color="red"
            translateX_string = `translateX(${2 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
            btn[3].style.color="black"
            last_picture=btn[2]
        break;
        case 4:
            btn[3].style.color="red"
            translateX_string = `translateX(${3 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter--;
            btn[4].style.color="black"
            last_picture=btn[3]
        break;
    }

});

btn_forward.addEventListener('click', () => {
    btn_ss.innerHTML = "Start";
    slider_work = false;
    switch (picture_counter) {
        case 0:
            btn[1].style.color="red"
            translateX_string = `translateX(${1 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
            btn[0].style.color="black"
            last_picture=btn[1]
        break;
        case 1:
            btn[2].style.color="red"
            translateX_string = `translateX(${2 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
            btn[1].style.color="black"
            last_picture=btn[2]
        break;
        case 2:
            btn[3].style.color="red"
            translateX_string = `translateX(${3 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
            btn[2].style.color="black"
            last_picture=btn[3]
        break;
        case 3:
            btn[4].style.color="red"
            translateX_string = `translateX(${4 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter++;
            btn[3].style.color="black"
            last_picture=btn[4]
        break;
        case 4:
            btn[0].style.color="red"
            translateX_string = `translateX(${0 * translateX}px)`;
            slider.style.transform = translateX_string;
            picture_counter = 0;
            btn[4].style.color="black"
            last_picture=btn[0]
        break;
    }
});
