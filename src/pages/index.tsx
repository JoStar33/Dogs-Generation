import { ErrorComponent } from '@/components/error/ErrorComponent';
import HomeContainer from '@/containers/home';
import { ErrorBoundary } from 'react-error-boundary';

export default function HomePage() {
  return (
    <ErrorBoundary fallback={<ErrorComponent.Text />}>
      <HomeContainer />
    </ErrorBoundary>
  );
}
