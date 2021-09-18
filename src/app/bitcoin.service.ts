import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

export interface BitCoin {
  time: {
    updated: string;
  };
  bpi: {
    BRL: {
      rate_float: number;
    };
    USD: {
      rate_float: number;
    };
  };
}

@Injectable({ providedIn: 'root' })
export class BitcoinService {
  bitcoinList: Array<BitCoin> = [];

  constructor(private http: HttpClient) {}

  makeBitcointRequest(time: number) {
    this.BitcoinRequest();
    setInterval(() => {
      this.BitcoinRequest();
    }, time);
  }

  BitcoinRequest() {
    return this.http
      .get<BitCoin>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => this.bitcoinList.push(data));
  }
}
