export interface IMarket {
  division: string;
  max: number;
  min: number;
  market: string;
  lastWeek: string;
  yesterday: string;
  today: string;
  marketNameBn: string;
  name: string;
  price: number;
}

export interface IProduct {
  lastWeek: string;
  id: number;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;
  today: number;
  yesterday: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
  markets: IMarket[];
  slug: string;
}
