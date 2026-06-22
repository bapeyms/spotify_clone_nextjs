import { Metadata } from 'next';
import HomePage from './HomepageContent';

export const metadata: Metadata = {
  title: "Головна | LumiTune",
};

export default function Page() {
  return <HomePage/>;
}