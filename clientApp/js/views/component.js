import {parseRequestURL} from '../helpers/ustils';

class Component {
    constructor() {
        this.request = parseRequestURL();
    }

    getData() {
        return new Promise(resolve => resolve());
    }

    afterRender() {}
}

export default Component;