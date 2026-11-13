import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import RoomPage from '@/components/RoomPage';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'king', '/suites/king', {image: '/assets/Suites/king_room_camera_01.jpg'});

export default async function KingRoom({params}: PageProps) {
  await pageLocale(params);
  return <RoomPage room="king" roomPhotos={7} bathroomPhotos={2} />;
}
