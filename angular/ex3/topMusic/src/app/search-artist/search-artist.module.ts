import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { VagalumeServiceService } from './vagalume-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [VagalumeServiceService],
  declarations: [SearchArtistComponent]
})
export class SearchArtistModule { }
