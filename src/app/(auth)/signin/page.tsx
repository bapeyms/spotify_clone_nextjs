import { Metadata } from 'next';
import SingIN from './SignInContent';

export const metadata: Metadata = {
  title: "Вхід | LumiTune",
};

export default function SignInPage() {
  return <SingIN/>;
}