import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Alert } from './schemas/alert.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlertsService {

  constructor(
    @InjectModel(Alert.name) private readonly alertModel: Model<Alert>
  ) {}

  async create(createAlertDto: CreateAlertDto): Promise<Alert> {
    const newAlert = new this.alertModel(createAlertDto);
    return await newAlert.save();
  }

  findAll() {
    return `This action returns all alerts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alert`;
  }

  update(id: number, updateAlertDto: UpdateAlertDto) {
    return `This action updates a #${id} alert`;
  }

  remove(id: number) {
    return `This action removes a #${id} alert`;
  }
}
