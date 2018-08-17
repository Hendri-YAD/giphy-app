import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface Giphy {
  imageUrl: string;
  title?: string;
}


@Injectable()
export class GiphyService {

  constructor(private http: HttpClient) { }


  search(searchTerm: string, limit=10, offset=0): Promise<Giphy[]> {

    const qs = new HttpParams()
      .set('q', searchTerm)
      .set('api_key', 'mEzODqHsW9FdPSfZsknADJApYt59Nyiw')
      .set('limit', "" + limit)
      .set('offset', "" + offset);

    return (
      this.http.get('https://api.giphy.com/v1/gifs/search', { params: qs })
          .toPromise()
          .then(result => {
            const giphys: Giphy[] = [];
            for (let g of result['data']) {
              giphys.push({
                imageUrl: g.images.fixed_width.url,
                title: g.title
              });
            }
            return (giphys);
          })
    );
  }

}