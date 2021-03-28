import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }

      adminLogin(adminObj):Observable<any>{
        return this.hc.post("/admin/login",adminObj)
      }
    
      createProduct(product:any):Observable<any>{

        return this.hc.post("/admin/addproduct",product);
      }
      getProducts():Observable<any>{
        return this.hc.get("/admin/allproducts");
      }
      editProduct(productObj):Observable<any>{
        return this.hc.post("/admin/editproduct",productObj)
      }
      saveProduct(productObj):Observable<any>
      {
        return this.hc.post("/admin/save",productObj);
      }
      deleteProduct(obj):Observable<any>{
      
        return this.hc.post("/admin/delete",obj);
      }
      
      viewItem(Obj):Observable<any>{
        return this.hc.post("/admin/viewitem",Obj)
      }
      getItem(obj):Observable<any>{
      
        return this.hc.get("/admin/oneproduct/"+obj);
      }
}
