export default class Chat {
    constructor({
            el,
            data = { messages: [] },
        }) {
        this.el = el;
        this.data = data;
    }

    render() {
        this.el.innerHTML = this.template(this.data);
    }

    template(data) {
        return `
        <div class="chat">
            ${this.messageTemplate(data)}
        </div> 
        `;
    }

    messageTemplate(data) {
        return data.messages.map((message) => `
            <div class="message">
                <div class="message__image"></div>
                <div class="message__wrapper">
                    <div class="message__info">
                        <div class="message__info-name">${message.name}</div>
                        <div class="message__info-time">10:33</div>
                    </div>
                    <div class="message__text">${message.text}</div>
                </div>
            </div>
        `).join('');
    }
}