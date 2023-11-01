import Usecase from "./Usecase";

export default class LoggerDecorator implements Usecase {
    constructor(readonly usecase: Usecase) {}

    execute(input: any): Promise<any> {
        console.log(input.userAgent);
        console.log(input.host);
        return this.usecase.execute(input);
    }
}
