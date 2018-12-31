import { Component, OnInit } from '@angular/core';
import {WatchesService} from "../watches.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  onSearchChange(value) {
    this.watchesServices.searchWatches(value);
  }

  constructor(private watchesServices: WatchesService) {}

  ngOnInit() {
  }

}
