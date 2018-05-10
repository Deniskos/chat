
import Chat from './../chat/chat.js';
import Field from './../field/field.js';



export default class App {
    constructor({
			el,
			data,
		}) {
        this.el = el;
        this.data = data;

        this.chat = new Chat({
            el: document.createElement('div'),
            data: {
                messages: data.messages,
                user: data.user,
            },
        });

        this.form = new Field({
            el: document.createElement('div'),
            data: {
                placeholder: 'Введите текст',
            },
        });

        this.el.append(
            this.chat.el,
            this.form.el,
        );
    }

    render() {
        this.chat.render();
        this.form.render();
    }
}