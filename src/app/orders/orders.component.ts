import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  Price: number;
  Order_ID: number;
  Status: string;
  Date: string;
  description: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {
    Price: 1,
    Status: 'Pending',
    name: 'Hydrogen',
    Order_ID: 1.0079,
    Date: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    Price: 2,
    Status: 'Pending',
    name: 'Helium',
    Order_ID: 4.0026,
    Date: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    Price: 2,
    Status: 'Pending',
    name: 'Lithium',
    Order_ID: 6.941,
    Date: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    Price: 2,
    Status: 'Pending',
    name: 'Beryllium',
    Order_ID: 9.0122,
    Date: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class OrdersComponent implements OnInit {

  constructor() { }

  expandedElement: PeriodicElement | null;
  columnsToDisplay = ['name', 'Order_ID', 'Status', 'Price', 'Date'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}


