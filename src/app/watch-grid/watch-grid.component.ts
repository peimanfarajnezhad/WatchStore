import {Component, OnInit} from '@angular/core';
import {WatchesService} from "../watches.service";

@Component({
  selector: 'app-watch-grid',
  templateUrl: './watch-grid.component.html',
  styleUrls: ['./watch-grid.component.sass']
})
export class WatchGridComponent implements OnInit {

  // structure.
  constructor(
    private watchService: WatchesService
  ) {}

  // initialize
  ngOnInit() {}
}
