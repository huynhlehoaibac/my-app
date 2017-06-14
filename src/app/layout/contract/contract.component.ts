import { Component, OnInit, Input } from '@angular/core';
import { Contract } from './Contract';
import { ContractType } from './ContractType';

@Component({
    selector: 'app-contract',
    templateUrl: './contract.component.html',
    styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

    @Input()
    mode: string;

    contractTypes: Array<ContractType>;

    contract: Contract;

    constructor() {

        this.mode = 'ADD';

        this.contractTypes = [
            {
                key: '0',
                value: 'Probationary contract'
            },
            {
                key: '1',
                value: 'Fixed-term contract'
            },
            {
                key: '2',
                value: 'Indefinite contract'
            },
            {
                key: '3',
                value: 'Temporary contract'
            },
            {
                key: '4',
                value: 'Part-time contract'
            }
        ];

        this.contract = new Contract();
    }

    ngOnInit() {
    }

    onSubmit() {
        alert(this.contract.type);
    }
}
