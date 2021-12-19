import { DataService } from '@codeheroes/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  constructor(private readonly data: DataService) {}

  async findMany() {
    const snapshotItems = await this.data.collection('games').orderBy('createdAt', 'desc').limitToLast(5).get();
    if (!snapshotItems.size) {
      return [];
    }
    return snapshotItems.docs.map(snapshot => this.map(snapshot.data()));
  }

  async findOne(id: string) {
    const snapshot = await this.data.collection('games').doc(id).get();
    if (!snapshot.exists) {
      return;
    }

    return this.map(snapshot.data());
  }

  private map(data: FirebaseFirestore.DocumentData) {
    return {
      ...data,
      id: 1,
      createdAt: FirestoreTimestampToDate(data.createdAt),
      startedAt: FirestoreTimestampToDate(data.startedAt),
      closedAt: FirestoreTimestampToDate(data.closedAt),
    };
  }
}

function FirestoreTimestampToDate(timestamp: FirebaseFirestore.Timestamp) {
  if (!timestamp) {
    return;
  }
  return timestamp.toDate();
}
