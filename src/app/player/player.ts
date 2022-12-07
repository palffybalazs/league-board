export class Player {
  public id: number;
  public name: string;
  public goals: number;
  public assists: number;
  public yellow_cards: number;
  public red_cards: number;
  public played_matches: number;
  public picture: string;

  constructor(id: number, name: string, goals: number, assists: number, yellow_cards: number, red_cards: number, played_matches: number, picture: string) {
    this.id = id;
    this.name = name;
    this.goals = goals;
    this.assists = assists;
    this.yellow_cards = yellow_cards;
    this.red_cards = red_cards;
    this.played_matches = played_matches;
    this.picture = picture;
  }
}
