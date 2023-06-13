export interface Player {
    name: string;
    auth_token: string;
    playerAction?: object;
  }
export interface playerAction {
    Time: number;
    Action: string;
  }
export interface TotalGameData {
    playerName: string;
    pointsEarned: number;
    timePlayed: number;
    gamePlayHistory: Array<playerAction>;
  }
  export interface GameStatus{
    isGameOver: boolean;
    isPaused: boolean;
    isGo: boolean;
    isReady: boolean;
  }
  export interface Authentication{
    "auth-token": string;
  }
  export interface Scores{
    'name':string;
    'game'?:string;
    'score':number;
    'rank'?:number;
  }
  export interface AuthRes{
    success:boolean
  }
