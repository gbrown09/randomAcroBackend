export interface BanInt extends Document {
  user: string;
  multiplier: number;
  pocketBan: boolean;
  oneTime: boolean;
}
