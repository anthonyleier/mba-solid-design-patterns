import moment from "moment";
import ContractRepository from "./ContractRepository";
import Presenter from "./Presenter";
import JsonPresenter from "./JsonPresenter";

export default class GenerateInvoices {
    constructor(readonly contractRepository: ContractRepository, readonly presenter: Presenter = new JsonPresenter()) {}

    async execute(input: Input): Promise<any> {
        const output: Output[] = [];
        const contracts = await this.contractRepository.list();

        for (const contract of contracts) {
            const invoices = contract.generateInvoices(input.month, input.year, input.type);
            for (const invoice of invoices) {
                output.push({ date: invoice.date, amount: invoice.amount });
            }
        }

        return this.presenter.present(output);
    }
}

type Input = {
    month: number;
    year: number;
    type: string;
    format?: string;
};

export type Output = {
    date: Date;
    amount: number;
};
