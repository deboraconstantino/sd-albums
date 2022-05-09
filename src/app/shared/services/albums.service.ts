import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

constructor(
  private httpClient: HttpClient
) { }

  getAlbums(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId: number): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos`).pipe(
      map((photos: any) => photos.filter((photo: any) => photo.albumId === albumId))
    );
  }
}
