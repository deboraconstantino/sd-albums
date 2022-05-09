import { Router } from '@angular/router';
import { AlbumsService } from './../../shared/services/albums.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, filter, finalize, forkJoin, map, mergeMap, Observable, reduce, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  albums$: Observable<any>;
  photos$: Subscription;
  albums: Array<any> = [];
  isLoading: boolean;
  albumsPresentation: Array<any> = [];
  page = 1;
  pageCount = 0;

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.photos$.unsubscribe();
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  goToAlbumDetail(albumId: number): void {
    this.router.navigate(['home/album', albumId]);
  }

  getAlbums(): void {
    this.isLoading = true;
    this.albums$ = this.albumsService.getAlbums().pipe(
      switchMap(albums => albums.map(
          (album: any) => this.photos$ = this.albumsService.getPhotos(album.id).pipe(
            finalize(() => {
              this.albumsPresentation = this.albums.slice(0, 10);
              this.isLoading = false;
            }),
            map(photos => ({
              ...album,
              ...photos[0]
            }))
          ).subscribe(res => this.albums.push(res))
        )
      )
    )
  }

  showMore(): void {
    this.page++;
    this.pageCount += 10;
    const nextItems = this.albums.slice(this.pageCount, (this.page * 10));
    this.albumsPresentation = this.albumsPresentation.concat(nextItems);
  }
}
