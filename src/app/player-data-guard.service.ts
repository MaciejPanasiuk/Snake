import { inject } from '@angular/core';
import { PlayerDataService } from './player-data.service';
import { Router } from '@angular/router';

export const PlayerDataGuardService = () => {
  const playerDataservice = inject(PlayerDataService);
  const router = inject(Router);
  if (playerDataservice.PlayerInfoSubmited()) {
    return true;
  }else
   { return router.parseUrl('/TitlePage');}
  // return playerDataservice.readstatus();
};
