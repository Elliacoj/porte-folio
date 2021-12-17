
// @ts-ignore
import {Books} from './Book.ts';
// @ts-ignore
import {Labels} from "./Label.ts";


let label = new Labels();
label.init();

let book = new Books();
book.init().then(() => label.clickPage());

