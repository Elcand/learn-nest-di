import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplayPower(watts: number, module: string) {
    console.log(`Suppling ${watts} worth of power for ${module}`);
  }
}
