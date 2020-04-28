import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magzine',
  templateUrl: './magzine.component.html',
  styleUrls: ['./magzine.component.css']
})
export class MagzineComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  } 
  fullName = ""
  editions = [
    {editionCode: 1, editionName: "US", price: "10.99 USD"},
    {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
    {editionCode: 3, editionName: "International", price: "23.99 USD"}
  ]
  selectedEdition = this.editions[0] // Choose US by default
  selectedShipping = ""
  acceptPolicy = false

  submitForm() {
    let requestData = {
      customerName: this.fullName,
      productCode: this.selectedEdition.editionCode,
      acceptPolicy: this.acceptPolicy,
      shipMode: this.selectedShipping
    }
    alert(JSON.stringify(requestData))
  }
}
