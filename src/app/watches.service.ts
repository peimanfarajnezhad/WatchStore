import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Watch} from "./structures/watch";

@Injectable({
  providedIn: 'root'
})
export class WatchesService {

  // watches list
  public received: Watch[] = [];
  public watches: Watch[] = [];

  // URL to web api
  private apiUrl = 'https://api.vyrent.com/watch-service/watches';

  // services constructor
  constructor(
    private http: HttpClient
  ) {
    this.getWatchesFromWeb().subscribe(result => {
      this.received = result;
      this.watches = result;
    })
  }

  getWatchesFromWeb(): Observable<Watch[]> {
    if (this.received.length == 0) {
      return this.http
        .get<Watch[]>(this.apiUrl);
    }
    return of(this.received)
  }

  // search in watches
  searchWatches(query: string) {
    if (!query.trim()) {
      this.watches = this.received;
    } else {
      this.watches = this.received.filter(watch => {
        return watch.name.toLocaleLowerCase().search(query.toLowerCase()) != -1
      });
    }
  }

  getWatchById(watchId: String): Observable<Watch> {
    return this.http
      .get<Watch>(`${this.apiUrl}/${watchId}`);
  }
}
