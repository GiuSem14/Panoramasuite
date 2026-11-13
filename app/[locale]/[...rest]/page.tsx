import {notFound} from 'next/navigation';

// Ogni indirizzo sconosciuto dentro una lingua finisce sulla 404 tradotta.
export default function CatchAll() {
  notFound();
}
