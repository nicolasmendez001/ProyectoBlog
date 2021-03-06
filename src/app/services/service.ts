import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  getConsult(data:String): any {
    return this.http.get<any>(`http://localhost:3000/${data}`);
  }

  //Get data persons
  public getData(collecction: String): any {
    return this.http.get<any>(`http://localhost:3000/${collecction}`);
  }

  getOnlyData(id: any, collecction: string) {
    return this.http.get<any>(`http://localhost:3000/${collecction}/${id}`);
  }


  /**
   * savePerson
   */
  public save(data: any, collecction: String) {
    return this.http.post<String>(`http://localhost:3000/${collecction}`, data);
  }

  /**
   * deletePerson
   */
  public delete(collecction: String, id) {
    return this.http.delete<String>(`http://localhost:3000/${collecction}/${id}`);
  }

  /**
   * update
   */
  public update(data: any, collecction: String) {
    return this.http.put<String>(`http://localhost:3000/${collecction}`, data);

  }

}
