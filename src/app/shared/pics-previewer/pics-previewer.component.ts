import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-pics-previewer',
    templateUrl: './pics-previewer.component.html',
    styleUrls: ['./pics-previewer.component.scss']
})
export class PicsPreviewerComponent implements OnInit {

    // inbound properties
    @Input() subtitleHalf1: string;
    @Input() subtitleHalf2: string;

    @Input() route: string;
    //  end inbound properties
    form: FormGroup;

    file1: File;
    imgSrc1: string;

    file2: File;
    imgSrc2: string;


    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            file1: [null, Validators.required],
            file2: [null, Validators.required],
        });
    }

    upload() {
        console.log(this.file1);
        console.log(this.file2);
    }

    handleFile1(file: File) {
        this.file1 = file;
        const reader = new FileReader();
        reader.onload = (event: any) => this.imgSrc1 = event.target.result;
        reader.readAsDataURL(file);
    }

    handleFile2(file: File) {
        this.file2 = file;
        const reader = new FileReader();
        reader.onload = (event: any) => this.imgSrc2 = event.target.result;
        reader.readAsDataURL(file);
    }

}
