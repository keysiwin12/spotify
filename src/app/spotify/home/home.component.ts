import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public albums
  constructor(private _servicio:SpotifyService , private router : Router) { 
    this._servicio.getData().subscribe(data => {
      this.albums = data;
      console.log(this.albums); 
      for(let album of this.albums) {
        console.log(album.artists[0].id);
      }
    },
    error => {
      console.log(error.error);
    }
    );
  }

  ngOnInit() {
  }


  verArtista(id) {
    console.log(id);
    this.router.navigate(['artist',id]);
  }
}
