'use client';

import {useState} from 'react';
import ImageGallery, {type GalleryImage} from './ImageGallery';

/* Due schede, camera e bagno, sopra la galleria di una suite. */
type RoomGalleryProps = {
  room: GalleryImage[];
  bathroom: GalleryImage[];
  labels: {room: string; bathroom: string};
};

export default function RoomGallery({room, bathroom, labels}: RoomGalleryProps) {
  const [tab, setTab] = useState<'room' | 'bathroom'>('room');
  const tabClass = (active: boolean) =>
    `font-heading text-sm font-semibold tracking-wide px-5 py-2 rounded-full transition-colors ${
      active ? 'bg-forest text-white' : 'bg-cream text-gray-600 hover:bg-cream-dark'
    }`;

  return (
    <>
      <div className="flex gap-3 mb-6" role="group">
        <button type="button" onClick={() => setTab('room')} className={tabClass(tab === 'room')} aria-pressed={tab === 'room'}>
          {labels.room}
        </button>
        <button type="button" onClick={() => setTab('bathroom')} className={tabClass(tab === 'bathroom')} aria-pressed={tab === 'bathroom'}>
          {labels.bathroom}
        </button>
      </div>
      <ImageGallery images={tab === 'room' ? room : bathroom} />
    </>
  );
}
