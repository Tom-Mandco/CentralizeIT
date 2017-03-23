import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'add',
    templateUrl: 'add-document.component.html'
})

export class AddDocumentComponent {

    msgs: Message[];
    
    uploadedFiles: any[] = [];

    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
    
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}