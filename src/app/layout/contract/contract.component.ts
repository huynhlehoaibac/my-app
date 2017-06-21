import { Component, OnInit, Input } from '@angular/core';
import { Contract } from './Contract';
import { ContractType } from './ContractType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-contract',
    templateUrl: './contract.component.html',
    styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

    contractForm: FormGroup;

    contractTypes: Array<ContractType>;

    constructor(private fb: FormBuilder) {

        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.contractForm = this.fb.group({
            id: '',
            type: ['', Validators.required],
            employeeId: '',
            validFrom: '',
            validTo: ''
        });
    }

    onSubmit() {

        const formModel: any = this.contractForm.value;

        const saveContract: Contract = {
            id: null,
            type: formModel.type as Number,
            employeeId: formModel.employeeId as Number,
            validFrom: formModel.validFrom as String,
            validTo: formModel.validTo as String
        };

        alert(JSON.stringify(saveContract));
    }
}
