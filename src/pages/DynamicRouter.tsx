import { useParams, Navigate } from 'react-router-dom';
import LocationPage from './LocationPage';
import ServiceDetailPage from './ServiceDetailPage';
import NotFound from './NotFound';
import { getLocation } from '@/data/locations';
import { getService } from '@/data/services';

export default function DynamicRouter() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/" replace />;

  // 1. Try to find a matching service
  const service = getService(slug);
  if (service) {
    return <ServiceDetailPage />;
  }

  // 2. Try to find a matching location
  // Location slugs in URLs are like 'mold-inspector-indianapolis-in'
  // but in locations.ts they are 'indianapolis-in'
  if (slug.startsWith('mold-inspector-')) {
    const locationSlug = slug.replace('mold-inspector-', '');
    const location = getLocation(locationSlug);
    if (location) {
      return <LocationPage />;
    }
  }

  // 3. Not found
  return <NotFound />;
}
