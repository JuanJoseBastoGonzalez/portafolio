import { writable } from 'svelte/store';

// Primer audio
const audio = new Audio('/assets/avri.m4a'); // Reemplaza con la ruta de tu archivo de audio
audio.loop = true; // Si quieres que el audio se reproduzca en bucle

const audioStore = writable({
    isPlaying: false,
    audio
});

// Segundo audio
const audio2 = new Audio('/assets/whatthehell.m4a'); // Reemplaza con la ruta de tu segundo archivo de audio
audio2.loop = true;

const audio2Store = writable({
    isPlaying: false,
    audio2
});

// Tercer audio
const audio3 = new Audio('/assets/tu_audio3.m4a'); // Reemplaza con la ruta de tu tercer archivo de audio
audio3.loop = true;

const audio3Store = writable({
    isPlaying: false,
    audio3
});

// Funciones para controlar el primer audio
function play() {
    audio.volume=0.1;
    audio.play();
    audioStore.update(state => ({ ...state, isPlaying: true }));
}

function pause() {
    audio.pause();
audio.currentTime=0;
    audioStore.update(state => ({ ...state, isPlaying: false }));
}

function toggle() {
    if (audio.paused) {
        play();
        
    } else {
        pause();
    }
}

function reset() {
    audio.pause();
    audio.currentTime = 0;
    audioStore.update(state => ({ ...state, isPlaying: false }));
}

// Funciones para controlar el segundo audio
function play2() {
    audio2.volume=0.2;
    audio2.play();
    audio2Store.update(state => ({ ...state, isPlaying: true }));
}

function pause2() {
    audio2.pause();
    audio2.currentTime=0;
    audio2Store.update(state => ({ ...state, isPlaying: false }));
}

function toggle2() {
    if (audio2.paused) {
        play2();
    } else {
        pause2();
    }
}

function reset2() {
    audio2.pause();
    audio2.currentTime = 0;
    audio2Store.update(state => ({ ...state, isPlaying: false }));
}

// Funciones para controlar el tercer audio
function play3() {
    audio3.play();
    audio3Store.update(state => ({ ...state, isPlaying: true }));
}

function pause3() {
    audio3.pause();
    audio3Store.update(state => ({ ...state, isPlaying: false }));
}

function toggle3() {
    if (audio3.paused) {
        play3();
    } else {
        pause3();
    }
}

function reset3() {
    audio3.pause();
    audio3.currentTime = 0;
    audio3Store.update(state => ({ ...state, isPlaying: false }));
}

// Exportar los controles para cada audio
export const audioControl = {
    subscribe: audioStore.subscribe,
    play,
    pause,
    toggle,
    reset
};

export const audio2Control = {
    subscribe: audio2Store.subscribe,
    play2,
    pause2,
    toggle2,
    reset2
};

export const audio3Control = {
    subscribe: audio3Store.subscribe,
    play3,
    pause3,
    toggle3,
    reset3
};
