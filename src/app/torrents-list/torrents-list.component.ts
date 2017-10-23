import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'magnet-torrents-list',
  templateUrl: './torrents-list.component.html',
  styleUrls: ['./torrents-list.component.scss']
})
export class TorrentsListComponent implements OnInit {
  @Input() torrents;

  constructor() {
  }

  ngOnInit() {

  }
}
