import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Bet {
  gameWeek: number;
  bettor: string;
  amountWon: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  bets: Bet[] = [
    {
      gameWeek: 1,
      bettor: 'luke',
      amountWon: 0,
    },
    {
      gameWeek: 2,
      bettor: 'jamie',
      amountWon: 0,
    },
    {
      gameWeek: 3,
      bettor: 'steven',
      amountWon: 0,
    },
    {
      gameWeek: 4,
      bettor: 'luke',
      amountWon: 295,
    },
    {
      gameWeek: 5,
      bettor: 'jamie',
      amountWon: 0,
    },
  ];

  get totalAmountWon(): number {
    return this.bets.reduce((acc, bet) => acc + bet.amountWon, 0);
  }

  get totalAmountLost(): number {
    return this.bets.length * 30;
  }

  get totalAmount(): number {
    return this.totalAmountWon - this.totalAmountLost;
  }

  get totalAmountWonByBettor(): { [bettor: string]: number } {
    return this.bets.reduce((acc: { [bettor: string]: number }, bet) => {
      if (!acc[bet.bettor]) {
        acc[bet.bettor] = 0;
      }
      acc[bet.bettor] += bet.amountWon;
      return acc;
    }, {});
  }
}
