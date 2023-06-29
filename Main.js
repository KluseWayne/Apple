let storeBtn = document.querySelector('.Store');
const submenu = document.querySelector('.submenu');
let storeTimeoutId;


storeBtn.addEventListener('mouseover', () => {
    submenu.classList.add('show');
    clearTimeout(storeTimeoutId);
});

storeBtn.addEventListener('mouseout', () => {
    storeTimeoutId = setTimeout(() => {
        submenu.classList.remove('show');
    }, 100);
});


submenu.addEventListener('mouseover', () => {
    clearTimeout(storeTimeoutId);
});

submenu.addEventListener('mouseout', () => {
    storeTimeoutId = setTimeout(() => {
        submenu.classList.remove('show');
    }, 100);
});

// ---------------------------------- Mac

const macBtn = document.querySelector('.mac');
const submenu2 = document.querySelector('.submenu2');
let macTimeoutId;


macBtn.addEventListener('mouseover', () => {
    submenu2.classList.add('show');
    clearTimeout(macTimeoutId);
});

macBtn.addEventListener('mouseout', () => {
    macTimeoutId = setTimeout(() => {
        submenu2.classList.remove('show');
    }, 100);
});


submenu2.addEventListener('mouseover', () => {
    clearTimeout(macTimeoutId);
});

submenu2.addEventListener('mouseout', () => {
    macTimeoutId = setTimeout(() => {
        submenu2.classList.remove('show');
    }, 100);
});

// ---------------------------------- iPad

const ipadBtn = document.querySelector('.iPad');
const submenu3 = document.querySelector('.submenu3');
let ipadTimeoutId;


ipadBtn.addEventListener('mouseover', () => {
    submenu3.classList.add('show');
    clearTimeout(ipadTimeoutId);
});

ipadBtn.addEventListener('mouseout', () => {
    ipadTimeoutId = setTimeout(() => {
        submenu3.classList.remove('show');
    }, 100);
});


submenu3.addEventListener('mouseover', () => {
    clearTimeout(ipadTimeoutId);
});

submenu3.addEventListener('mouseout', () => {
    ipadTimeoutId = setTimeout(() => {
        submenu3.classList.remove('show');
    }, 100);
});

// ---------------------------------- iPhone


let iphoneBtn = document.querySelector('.iphone');
const submenu4 = document.querySelector('.submenu4');
let iphoneTimeoutId;


iphoneBtn.addEventListener('mouseover', () => {
    submenu4.classList.add('show');
    clearTimeout(iphoneTimeoutId);
});

iphoneBtn.addEventListener('mouseout', () => {
    iphoneTimeoutId = setTimeout(() => {
        submenu4.classList.remove('show');
    }, 100);
});


submenu4.addEventListener('mouseover', () => {
    clearTimeout(iphoneTimeoutId);
});

submenu4.addEventListener('mouseout', () => {
    iphoneTimeoutId = setTimeout(() => {
        submenu4.classList.remove('show');
    }, 100);
});

// ---------------------------------- watch

let watchBtn = document.querySelector('.Watch');
const submenu5 = document.querySelector('.submenu5');
let watchTimeoutId;


watchBtn.addEventListener('mouseover', () => {
    submenu5.classList.add('show');
    clearTimeout(watchTimeoutId);
});

watchBtn.addEventListener('mouseout', () => {
    watchTimeoutId = setTimeout(() => {
        submenu5.classList.remove('show');
    }, 100);
});


submenu5.addEventListener('mouseover', () => {
    clearTimeout(watchTimeoutId);
});

submenu5.addEventListener('mouseout', () => {
    watchTimeoutId = setTimeout(() => {
        submenu5.classList.remove('show');
    }, 100);
});

// ---------------------------------- airpods

let airpodBtn = document.querySelector('.Airpods');
const submenu6 = document.querySelector('.submenu6');
let airpodTimeoutId;


airpodBtn.addEventListener('mouseover', () => {
    submenu6.classList.add('show');
    clearTimeout(airpodTimeoutId);
});

airpodBtn.addEventListener('mouseout', () => {
    airpodTimeoutId = setTimeout(() => {
        submenu6.classList.remove('show');
    }, 100);
});


submenu6.addEventListener('mouseover', () => {
    clearTimeout(airpodTimeoutId);
});

submenu6.addEventListener('mouseout', () => {
    airpodTimeoutId = setTimeout(() => {
        submenu6.classList.remove('show');
    }, 100);
});

// ---------------------------------- TV

let tvBtn = document.querySelector('.tv');
const submenu7 = document.querySelector('.submenu7');
let tvTimeoutId;


tvBtn.addEventListener('mouseover', () => {
    submenu7.classList.add('show');
    clearTimeout(tvTimeoutId);
});

tvBtn.addEventListener('mouseout', () => {
    tvTimeoutId = setTimeout(() => {
        submenu7.classList.remove('show');
    }, 100);
});


submenu7.addEventListener('mouseover', () => {
    clearTimeout(tvTimeoutId);
});

submenu7.addEventListener('mouseout', () => {
    tvTimeoutId = setTimeout(() => {
        submenu7.classList.remove('show');
    }, 100);
});
// ---------------------------------- Entertainment

let enterBtn = document.querySelector('.entertain');
const submenu8 = document.querySelector('.submenu8');
let entertainTimeoutId;


enterBtn.addEventListener('mouseover', () => {
    submenu8.classList.add('show');
    clearTimeout(entertainTimeoutId);
});

enterBtn.addEventListener('mouseout', () => {
    entertainTimeoutId = setTimeout(() => {
        submenu8.classList.remove('show');
    }, 100);
});


submenu8.addEventListener('mouseover', () => {
    clearTimeout(entertainTimeoutId);
});

submenu8.addEventListener('mouseout', () => {
    entertainTimeoutId = setTimeout(() => {
        submenu8.classList.remove('show');
    }, 100);
});

// ---------------------------------- Accessories

let accessoriesBtn = document.querySelector('.accessor');
const submenu9 = document.querySelector('.submenu9');
let accessoriesTimeoutId;


accessoriesBtn.addEventListener('mouseover', () => {
    submenu9.classList.add('show');
    clearTimeout(accessoriesTimeoutId);
});

accessoriesBtn.addEventListener('mouseout', () => {
    accessoriesTimeoutId = setTimeout(() => {
        submenu9.classList.remove('show');
    }, 100);
});


submenu9.addEventListener('mouseover', () => {
    clearTimeout(accessoriesTimeoutId);
});

submenu9.addEventListener('mouseout', () => {
    accessoriesTimeoutId = setTimeout(() => {
        submenu9.classList.remove('show');
    }, 100);
});

// ---------------------------------- Support

let supportBtn = document.querySelector('.support');
const submenu10 = document.querySelector('.submenu10');
let supportTimeoutId;


supportBtn.addEventListener('mouseover', () => {
    submenu10.classList.add('show');
    clearTimeout(supportTimeoutId);
});

supportBtn.addEventListener('mouseout', () => {
    supportTimeoutId = setTimeout(() => {
        submenu10.classList.remove('show');
    }, 100);
});


submenu10.addEventListener('mouseover', () => {
    clearTimeout(supportTimeoutId);
});

submenu10.addEventListener('mouseout', () => {
    supportTimeoutId = setTimeout(() => {
        submenu10.classList.remove('show');
    }, 100);
});


