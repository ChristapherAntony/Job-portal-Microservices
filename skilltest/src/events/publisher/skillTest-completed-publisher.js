import { Publisher } from "../base.js";


class SkillTestCompletedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'skilltest:completed';
    }
}

export default SkillTestCompletedPublisher;