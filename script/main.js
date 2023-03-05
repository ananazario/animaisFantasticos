import ScrollSuave from "./modules/scroll-suave.js";
import AnimaScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdownMenu.js";
import MenuMobile from "./modules/menu-mobile.js"
import AnimaNumeros from './modules/animaNumeros.js'
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/animaisFetch.js";
import bitcoinFetch from "./modules/bitcoinFetch.js";
import { SlideNav } from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
animaNumeros.init();

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

const dropwdownMenu = new DropdownMenu('[data-dropdown]');
dropwdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid')
bitcoinFetch('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.changeSlide(1)
slide.activePrevSlide();
slide.addControl('.custom-controls')