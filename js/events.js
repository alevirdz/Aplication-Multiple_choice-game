class Events {
    constructor(element) {
        this.element = element
    }

    show() {
        if (this.element) {
        this.element.classList.remove('d-none')
        }
    }

    hide() {
        if (this.element) {
        this.element.classList.add('d-none')
        }
    }

    true() {
        if (this.element) {
            this.element.classList.add('true')
        }
    }
}

