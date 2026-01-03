import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { PowerService } from 'src/power/power.service';

@Module({
  imports: [PowerService],
  controllers: [ComputerController],
})
export class ComputerModule {}
