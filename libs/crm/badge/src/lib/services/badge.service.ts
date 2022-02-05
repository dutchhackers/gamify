import { DataService } from '@crm/data';
import { Injectable, Logger } from '@nestjs/common';
import { Badge } from '@crm/dto';

const TAB_BADGES = 'Badges';

@Injectable()
export class BadgeService {
  constructor(private readonly data: DataService) {}
  async findOneById(id: number): Promise<Badge> {
    Logger.log(`Getting badge with id ${id}...`);

    const badges = await this.findAll();
    return badges.find(e => e.id === id);
  }

  async findAll(): Promise<Badge[]> {
    return await this.getBadges();
  }

  private async getBadges() {
    const rows = await this.data.getSpreadsheetRows(TAB_BADGES);
    return rows.map(row => Badge.fromRow(row)).filter(e => e.id);
  }
}
