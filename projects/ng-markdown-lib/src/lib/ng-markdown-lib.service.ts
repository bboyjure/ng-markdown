import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class NgMarkdownLibService {
  private md;
  public markdownSubject: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
    this.md = marked;
    this.md.setOptions({
    });
  }
  public getMarkdownFile(pathToFile: string): any {
    this.http.get(pathToFile, { responseType: 'text' }).subscribe({
      next: data => this.markdownSubject.next(this.md.parse(data)),
      error: err => console.log(err),
    });
  }
}
