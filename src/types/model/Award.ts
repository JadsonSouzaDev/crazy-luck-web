class AwardSoldNumbers {
  solded: number = 0;
  total: number = 0;
}

export class AwardPrices {
  quantity: number = 0;
  unitPrice: number = 0;
}

export class Award {
  slug: string = "";
  title: string = "";
  description: string = "";
  shortDescription: string = "";
  urlImage: string = "";
  prices: AwardPrices[] = [];
  soldNumbers: AwardSoldNumbers = new AwardSoldNumbers();
  maxDrawDate: Date = new Date();
  drawDate: Date = new Date();
}
