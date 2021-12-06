import {Book} from "./Book";
import {Label} from "./Label";

let label = new Label();
label.init();

let book = new Book();
book.init().then(() => label.clickPage());

