import { Component, OnInit } from '@angular/core';
import { BitCoin, BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bitList: Array<BitCoin> = [];

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.bitcoinService.makeBitcointRequest(5000); //tempo da requisição.
  }
}
