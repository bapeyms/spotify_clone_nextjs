import { Metadata } from 'next';
import Songs from './SonyapageContent';

export const metadata: Metadata = {
  title: "Улюблені треки | LumiTune",
};

export default function SonyaPage() {
  return <Songs/>;
}