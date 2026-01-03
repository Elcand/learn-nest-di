import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private PowerService: PowerService) {}

  getData() {
    console.log('Reading data from disk');
    this.PowerService.supplayPower(20, 'Disk');
    return 'Data';
  }
}
