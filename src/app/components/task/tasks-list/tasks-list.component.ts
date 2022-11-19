import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/model/task";
import { Board } from './../../../model/board';


@Component({
  selector: "app-task-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.css"],
})
export class TasksListComponent implements OnInit {



  constructor() {}
 

   board: Board = new Board(' ', [

    new Task('A Fazer', [

      "DVARLVN-5955",
      "DVARLVN-3875",
      "DVARLVN-4950"
    ]),

    new Task('Desenvolvimento', [

      "DVARLVN-2910",
      "DVARLVN-3050",
      "DVARLVN-5910",
      "DVARLVN-0950",
    ]),

    new Task('Em Teste', [

      "DVARLVN-7510",
      "DVARLVN-5588",
      "DVARLVN-4466",
      "DVARLVN-7766"
    ]),

    new Task('Feito', [

      "DVARLVN-7566",
      "DVARLVN-6644",

     "DVARLVN-6648",
     "DVARLVN-5598",
     "DVARLVN-1247"
    ])

  ]);

  ngOnInit(): void {
   
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem (event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  
}
