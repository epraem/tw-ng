import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CenteredComponent } from '../../layouts/centered/centered.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CenteredComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cardData = [
    {
      color: 'dwhite',
      withTitle: true,
      withDescription: true,
      cardTitle: 'Total Hosts',
      cardDescription: 'Within 30 Days',
      withIcon: true,
      content: '<h1 class="text-[28px] font-bold">23</h1>',
    },
    {
      color: 'dwhite',
      withTitle: true,
      withDescription: true,
      cardTitle: 'Total Hosts',
      cardDescription: 'Within 30 Days',
      withIcon: true,
      content: '<h1 class="text-[28px] font-bold">23</h1>',
    },
    {
      color: 'dwhite',
      withTitle: true,
      withDescription: true,
      cardTitle: 'Total Hosts',
      cardDescription: 'Within 30 Days',
      withIcon: true,
      content: '<h1 class="text-[28px] font-bold">23</h1>',
    },
    {
      color: 'dwhite',
      withTitle: true,
      withDescription: false,
      cardTitle: 'New Registrations',
      withIcon: true,
      content: '<h1 class="text-[28px] font-bold">157</h1>',
    },
    {
      color: 'dwhite',
      withTitle: true,
      withDescription: true,
      cardTitle: 'Active Users',
      cardDescription: 'Last 7 Days',
      withIcon: false,
      content: '<p class="text-[24px]">2,345</p>',
    },
    {
      color: 'dwhite',
      withTitle: false,
      withDescription: false,
      withIcon: true,
      content:
        '<div class="flex items-center"><span class="text-[20px] font-semibold mr-2">+14%</span><span class="text-[16px] text-gray-500">vs. last month</span></div>',
    },
    {
      color: 'dyellow',
      withTitle: true,
      withDescription: true,
      cardTitle: 'Pending Tasks',
      cardDescription: 'High Priority',
      withIcon: true,
      content: '<h2 class="text-[26px] font-bold">8</h2>',
    },
  ];
}
