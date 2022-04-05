import { Entry } from '../interfaces';

interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry extends Omit<Entry, '_id'> {}

export const seedData: SeedData = {
  entries: [
    {
      description: 'pending: Descripción de la entry 1',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'in-progress: Descripción de la entry 2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      description: 'finished: Descripción de la entry 3',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
};