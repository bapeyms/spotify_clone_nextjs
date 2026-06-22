import { Metadata } from 'next';
import SingUP1 from './SignUp1StepContent';

export const metadata: Metadata = {
  title: "Реєстрація | LumiTune",
};

export default function SignUpPage() {
  return <SingUP1/>;
}