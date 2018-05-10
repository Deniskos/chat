export default class Field {
    constructor({
        el,
        onSubmit,
    }) {
        this.el = el;
    }

    render() {
        this.el.innerHTML = `
		   <form class="field">
                <textarea class="field__text" name="message" placeholder="Введите сообщение..."></textarea>
                <span class="field__smiley js-smiley"></span>
                <input class="field__send js-send" type="submit" value="">
            </form>
        `;
    }
}