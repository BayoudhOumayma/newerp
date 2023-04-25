import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  items!: MenuItem[];
  items2!: any[];
  items3!: any[];
  model!:any
  show=false
  test=false
  home!:any
  // 
  constructor(private router:Router){

  }
  ngOnInit() {
    this.items = [
        { label: 'Recent', icon: 'pi pi-fw pi-home' },
        { label: 'ALL', icon: 'pi pi-fw pi-calendar' },
        { label: 'Add', icon: 'pi pi-fw pi-pencil' },
        // { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        // { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.items3= [{label:"aaa",icon: 'pi pi-fw pi-star-fill',}];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items2 =  [{
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
            {
                key: '0-0',
                label: 'tekniva',
                data: 'Work Folder',
                icon: 'pi pi-fw pi-cog',
                routerLink: '/tekniva'
                
            },
            {
                key: '0-1',
                label: 'Home',
                data: 'Home Folder',
                icon: 'pi pi-fw pi-home',
            }
        ]
    },
    {
        key: '1',
        label: 'Events',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-calendar',
        children: [
            { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
            { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
            { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
        ]
    },
    {
        key: '2',
        label: 'Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
            {
                key: '2-0',
                icon: 'pi pi-fw pi-star-fill',
                label: 'Al Pacino',
                data: 'Pacino Movies',
               
            },
            {
                key: '2-1',
                label: 'Robert De Niro',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
               
            }
        ]
    }
];



}
ShowSetting(){
  this.show=true
  this.test=false
}
Show(event:any){
   console.log('test',event.target?.innerText);
   this.items3.push({label:event.target?.innerText,icon: 'pi pi-fw pi-star-fill',})
  
  this.test=true
  this.show=false
}
onNodeSelect(event:any) {
    console.log(event.target?.innerText);
  }
}
