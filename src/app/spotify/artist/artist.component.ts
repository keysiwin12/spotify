import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist
  public imagen = '';
  public id;
  public name: string = ''
  public headersTable: string[] = ['Foto' , 'Album' , 'Cancion' , 'Vista Previa']
  public tracks: Object[] = [];
  constructor(private _ac : ActivatedRoute , private spotifyService : SpotifyService) {
    this._ac.params.subscribe(response => {
      console.log(response);
      this.id = response.id;
      if(this.id) {
        this.spotifyService.getArtist(this.id).subscribe(data => {
          console.log(data);
          this.artist = data;
          this.imagen = this.artist.images[0].url;
          this.name = this.artist.name;      
        } ,
        error => {
          console.log(error.error);
        }
        )
        this.spotifyService.getTracks(this.id).subscribe(data => {
          this.tracks = data;
          console.log(this.tracks)
          for(let track of this.tracks) {
            console.log(track['external_urls'].spotify);
          }
        })
      }

    })
  }

  

  ngOnInit() {
  
  }

  regresar() {
    window.history.back();
  }
  
}
