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
 

  logout(){
    this.router.navigateByUrl("/login")
  }
}
