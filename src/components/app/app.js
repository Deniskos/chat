
import Chat from './../chat/chat.js';
import Field from './../field/field.js';
import Message from './../message/message.js';


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
                user: data.user,
            },
        });

        this.message = new Message({
            el: document.createElement('div'),
            data: {
                messages: data.messages,
            },
        });

        this.form = new Field({
            el: document.createElement('div'),
            data: {
                placeholder: 'Введите текст',
            },
        });

        this.chat.el.append(
            this.message.el,
        );

        this.el.append(
            this.chat.el,
            this.form.el,
        );



    }

    render() {
        this.message.render();
        this.chat.render();
        this.form.render();

    }
}