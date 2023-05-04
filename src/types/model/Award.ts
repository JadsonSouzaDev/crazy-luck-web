class AwardSoldNumbers {
  solded: number = 0;
  total: number = 0;
}

export class Award {
  title: string = "";
  description: string = "";
  shortDescription: string = "";
  urlImage: string = "";
  price: number = 999;
  soldNumbers: AwardSoldNumbers = new AwardSoldNumbers();
  maxDrawDate: Date = new Date();
  drawDate: Date = new Date();
}
