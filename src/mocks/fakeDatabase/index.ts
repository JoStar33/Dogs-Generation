import { initializeContentsDatabase } from '@/mocks/fakeDatabase/resources/contents';
import { initializeCoordinateDatabase } from '@/mocks/fakeDatabase/resources/coordinate';
import { initializeMarketDatabase } from '@/mocks/fakeDatabase/resources/market';

const databaseInitializer = () => {
  initializeMarketDatabase();
  initializeCoordinateDatabase();
  initializeContentsDatabase();
};

export default databaseInitializer;
