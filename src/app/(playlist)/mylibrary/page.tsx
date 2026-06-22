import { Metadata } from 'next';
import MyLibrary from './MyLibraryContent';

export const metadata: Metadata = {
  title: "Моя Медіатека | LumiTune",
};

export default function Page() {
  return <MyLibrary/>;
}