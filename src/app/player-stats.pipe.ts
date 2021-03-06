import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'playerStats',
  pure: false
})
export class PlayerStatsPipe implements PipeTransform {

  transform(player: Player, option: string): any {
    if (option === 'health') {
      var health = player.health / 10;
      var color = health * 120;
      return {'width': `${health*100}%`,
              'background-color': `hsl(${color}, 90%, 45%)`};
    }
  }

}
