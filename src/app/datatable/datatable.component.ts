import { Component, OnInit } from '@angular/core';
import { ServerService } from "../services/server.service"

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  products: any

  ngOnInit() {
    this.serverService.getProducts().subscribe(response => {
      this.products = response
    })
  }
}
