import { Injectable } from '@nestjs/common';

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Route {
  title: string;
  startPosition: Position;
  endPosition: Position;
};

@Injectable()
export class RoutesService {
  findAll(): Route[] {
    return [
      {
        title: 'Masp - Ibirapuera',
        startPosition: {
          latitude: -23.56142775211142,
          longitude: -46.65583759523131
        },
        endPosition: {
          latitude: -23.58729141715226,
          longitude: -46.65763172963987
        }
      },
      {
        title: 'Corcovado - Pão de Açucar',
        startPosition: {
          latitude: -22.951719074927876,
          longitude: -43.211103417203205
        },
        endPosition: {
          latitude: -22.94846763519971,
          longitude: -43.15474740136171
        }
      },
      {
        title: 'João Pessoa - Campina Grande',
        startPosition: {
          latitude: -7.112913462658199,
          longitude: -34.88351833633309
        },
        endPosition: {
          latitude: -7.232817271615555,
          longitude: -35.9766580414725
        }
      },
      {
        title: 'Ushuaia - Caracas',
        startPosition: {
          latitude: -55.102662427273025,
          longitude: -68.5677947194223
        },
        endPosition: {
          latitude: 10.100137633409924,
          longitude: -67.8646696829507
        }
      },
      {
        title: 'Cape Town - Magadan',
        startPosition: {
          latitude: -33.159470773110705,
          longitude: 18.036637208261713
        },
        endPosition: {
          latitude: 60.57410653975035,
          longitude: 150.7514878422718
        }
      },
    ];
  }
}
