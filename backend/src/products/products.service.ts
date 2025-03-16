import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts(): object[] {
    return [
      {
        id: '1',
        title: 'Product 1',
        description: 'Description 1',
        price: 100,
      },
      {
        id: '2',
        title: 'Product 2',
        description: 'Description 2',
        price: 200,
      },
    ];
  }
}
