import { Component } from '@angular/core';

@Component({
  selector: 'app-tekniva',
  templateUrl: './tekniva.component.html',
  styleUrls: ['./tekniva.component.css']
})
export class TeknivaComponent {
items!: { label: string; icon: string; }[];
  show=false;
  test=false;
ngOnInit(){
  this.items = [
    { label: 'Recent', icon: 'pi pi-fw pi-home' },
    { label: 'ALL', icon: 'pi pi-fw pi-calendar' },
    { label: 'Add', icon: 'pi pi-fw pi-pencil' },
    // { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    // { label: 'Settings', icon: 'pi pi-fw pi-cog' }
];

}
ShowSetting(){
  this.show=true
  this.test=false
}
Show(){
   
  this.test=true
  this.show=false
}
}
