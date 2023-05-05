export interface Ban extends Document {
  user: string;
  multiplier: number;
  pocketBan: boolean;
  oneTime: boolean;
}
