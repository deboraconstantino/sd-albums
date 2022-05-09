import { AlbumsService } from './../../../shared/services/albums.service';
import { map, Observable, finalize } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId: number;
  photos$: Observable<any>;
  photos: Array<any>;
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.isLoading = true;
    const albumId = parseInt(this.activatedRoute.snapshot.params['id']);

    this.albumsService.getPhotos(albumId)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(res => this.photos = res.slice(res.length - 10));
  }
}
