import {Component, Input, OnInit} from '@angular/core'
import {MmpService} from '../../../../core/services/mmp.service'
import {FileService} from '../../../../core/services/file.service'
import {UtilsService} from '../../../../core/services/utils.service'
import {MatSidenav} from '@angular/material'
import {DialogService} from '../../../../core/services/dialog.service'

@Component({
    selector: 'mindmapp-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Input() public node: any
    @Input() public sidenav: MatSidenav

    public savingStatus: any

    constructor (public utilsService: UtilsService,
                 public dialogService: DialogService,
                 public mmpService: MmpService,
                 public fileService: FileService) {
    }

    ngOnInit () {
        this.fileService.watchSavingStatus().subscribe((savingStatus: any) => {
            this.savingStatus = savingStatus
        })
    }

    public toogleNodeFontStyle () {
        let currentStyle = this.mmpService.selectNode().font.style

        if (currentStyle === 'italic') {
            this.mmpService.updateNode('fontStyle', 'normal')
        } else {
            this.mmpService.updateNode('fontStyle', 'italic')
        }
    }

    public toogleNodeFontWeight () {
        let currentWeight = this.mmpService.selectNode().font.weight

        if (currentWeight === 'bold') {
            this.mmpService.updateNode('fontWeight', 'normal')
        } else {
            this.mmpService.updateNode('fontWeight', 'bold')
        }
    }

}
