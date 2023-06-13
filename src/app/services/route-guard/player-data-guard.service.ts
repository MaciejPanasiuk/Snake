import { inject } from '@angular/core';
import { PlayerDataService } from '../player-data/player-data.service';
import { Router } from '@angular/router';

export const PlayerDataGuardService = () => {
  const playerDataservice = inject(PlayerDataService);
  const router = inject(Router);
  const isInfoSubmitted=localStorage.getItem('isInfoSubmitted')
  if (playerDataservice.PlayerInfoSubmited() || isInfoSubmitted==='true') {
    return true;
  }else
   { return router.parseUrl('/TitlePage');}
};
