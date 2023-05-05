export class CreateBanDto {
  readonly user: string;
  readonly multiplier: number;
  readonly pocketBan: boolean;
  readonly oneTime: boolean;
}
