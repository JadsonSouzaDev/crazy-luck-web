import { Award } from "./Award";
import { Ticket } from "./Ticket";
import { User } from "./User";

export class Winner {
  award: Award = new Award();
  winner: User = new User();
  ticket: Ticket = new Ticket();
}
