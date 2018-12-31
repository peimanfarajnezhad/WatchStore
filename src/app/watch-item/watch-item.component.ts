import { Component, OnInit, Input } from '@angular/core';
import {Watch} from "../structures/watch";
import {Router} from "@angular/router";

@Component({
  selector: 'app-watch-item',
  templateUrl: './watch-item.component.html',
  styleUrls: ['./watch-item.component.sass']
})
export class WatchItemComponent implements OnInit {

  @Input() watch: Watch;

  constructor(private router: Router) { }

  ngOnInit() {}

  showWatch(): void {
    this.router.navigateByUrl('/watch/' + this.watch.id)
  }
}
