export interface Player {
    Name: string;
    Email: string;
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