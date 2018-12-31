import { Component, OnInit} from '@angular/core';
import {WatchesService} from "../watches.service";
import {Watch} from "../structures/watch";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.sass']
})
export class WatchDetailComponent implements OnInit {

  watch: Watch;

  // constructor
  constructor(
    private watchesService: WatchesService,
    private activatedRoute: ActivatedRoute
  ) {}

  // initialize
  ngOnInit() {
    let watchId = "";
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      watchId = params['id'];
    });

    this.watchesService.getWatchById(watchId).subscribe(watch => {
      this.watch = watch
    })
  }

}
