import { Metadata } from 'next';
import SingUP from './SingUpContent';

export const metadata: Metadata = {
  title: "Реєстрація | LumiTune",
};

export default function SignUpPage() {
  return <SingUP/>;
}