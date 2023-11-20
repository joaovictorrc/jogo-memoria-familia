import MemoryGame from './game.js';
import Modal from './modal.js';

const cardImgs = [
    {
        src: './src/assets/imgs/1.jpeg',
        nome: 'Gato 1',
        bgColor: '#692C2B'
    },
    {
        src: './src/assets/imgs/2.jpeg',
        nome: 'Gato 2',
        bgColor: '#479898'
    },
    {
        src: './src/assets/imgs/3.jpeg',
        nome: 'Gato 3',
        bgColor: '#B0A2AC'
    },
    {
        src: './src/assets/imgs/4.jpeg',
        nome: 'Gato 4',
        bgColor: '#C2907C'
    },
    {
        src: './src/assets/imgs/5.jpeg',
        nome: 'Gato 5',
        bgColor: '#FFE486'
    },
    {
        src: './src/assets/imgs/6.jpeg',
        nome: 'Gato 6',
        bgColor: '#D2E2ED'
    },
    {
        src: './src/assets/imgs/7.jpeg',
        nome: 'Gato 7',
        bgColor: '#CEE0C2'
    },
    {
        src: './src/assets/imgs/8.jpeg',
        nome: 'Gato 8',
        bgColor: '#FF816F'
    },
    {
        src: './src/assets/imgs/1.jpeg',
        nome: 'Gato 1',
        bgColor: '#692C2B'
    },
    {
        src: './src/assets/imgs/2.jpeg',
        nome: 'Gato 2',
        bgColor: '#479898'
    },
    {
        src: './src/assets/imgs/3.jpeg',
        nome: 'Gato 3',
        bgColor: '#B0A2AC'
    },
    {
        src: './src/assets/imgs/4.jpeg',
        nome: 'Gato 4',
        bgColor: '#C2907C'
    },
    {
        src: './src/assets/imgs/5.jpeg',
        nome: 'Gato 5',
        bgColor: '#FFE486'
    },
    {
        src: './src/assets/imgs/6.jpeg',
        nome: 'Gato 6',
        bgColor: '#D2E2ED'
    },
    {
        src: './src/assets/imgs/7.jpeg',
        nome: 'Gato 7',
        bgColor: '#CEE0C2'
    },
    {
        src: './src/assets/imgs/8.jpeg',
        nome: 'Gato 8',
        bgColor: '#FF816F'
    }
]

const modal = new Modal('#open', '#close', '#modalPlay', '.container-modal', '#title', '#text');
modal.init();

const game = new MemoryGame(cardImgs, '.game', '.reset', modal);
game.init();
game.setResultContent("Você venceu!", 'Clique no botão abaixo para jogar de novo.', 'Jogar novamente!');