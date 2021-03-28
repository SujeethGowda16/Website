import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  
  username;
  products=[];
  
  constructor(private as:AdminService,private router:Router) { }

  ngOnInit(): void {
   
    this.username=localStorage.getItem("username")
    this.getAllProducts();
   
  }
  
  getAllProducts(){
    this.as.getProducts().subscribe(
      res=>{
        this.products=res["message"]
      },
      err=>{
        alert("Something went wrong in getting all products")
        console.log(err)
      }
    )
  }
 
  viewitem(n:number){
    
    let viewObj=this.products[n];
    console.log(viewObj);
    this.as.viewItem(viewObj).subscribe(
      res=>{
        if(res["message"]){
      
          localStorage.setItem("productname",res["productname"])
          this.router.navigateByUrl("/viewproduct");
        }
      },
      err=>{
        alert("Something went wrong in getting details")
        console.log(err)

      }
    )
  }

  additem(n:number){
    if(this.username!==null){
      let obj={
      username:this.username,
      productname:this.products[n].productname,
      productID:this.products[n].productID,
      colour:this.products[n].colour,
      brand:this.products[n].brand,
      category:this.products[n].category,
      cost:this.products[n].cost,
      description:this.products[n].description,
      productImgLink:this.products[n].productImgLink
      }
 
    }
    else{
      this.router.navigateByUrl("/login")
    }
  }


 
  
  logout(){
    this.router.navigateByUrl("/login")
  }
}
