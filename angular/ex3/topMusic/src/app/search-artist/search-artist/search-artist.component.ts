import { Component, OnInit, OnDestroy } from '@angular/core';
import { VagalumeServiceService } from '../vagalume-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit, OnDestroy {

  constructor(
    private vagalume : VagalumeServiceService,
    ) { }

  subscribe : Subscription;

  songs : any[];

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.subscribe)
      this.subscribe.unsubscribe();
  }

  getSongs(song : string) {
    this.subscribe = this.vagalume.getArtists(song).subscribe((res) => {
      this.songs = res.response.docs;
      console.table(this.songs);
    });
  }

}
