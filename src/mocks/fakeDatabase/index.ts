import { initializeContentsDatabase } from './resources/contents';
import { initializeCoordinateDatabase } from './resources/coordinate';
import { initializeMarketDatabase } from './resources/market';

const databaseInitializer = () => {
  initializeMarketDatabase();
  initializeCoordinateDatabase();
  initializeContentsDatabase();
};

export default databaseInitializer;
