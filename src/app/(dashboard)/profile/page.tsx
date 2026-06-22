import { Metadata } from 'next';
import HomePage from './Profile';

export const metadata: Metadata = {
  title: "Профіль | LumiTune",
};

export default function Page() {
  return <HomePage />;
}