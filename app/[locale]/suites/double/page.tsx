import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import RoomPage from '@/components/RoomPage';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'double', '/suites/double', {image: '/assets/Suites/double_room_camera_01.jpg'});

export default async function DoubleRoom({params}: PageProps) {
  await pageLocale(params);
  return <RoomPage room="double" roomPhotos={6} bathroomPhotos={4} />;
}
