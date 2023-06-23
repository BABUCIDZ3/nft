import img from "../assets/images/signup-images/Image Placeholder.webp";
import {
  SignUpButton,
  SignUpForm,
  SignUpMainTxt,
  SignUpSecoundGradeTxt,
  SignUpSection,
} from "../styles/SignUp";

export default function SignUp() {
  return (
    <SignUpSection>
      <img src={img} />
      <SignUpForm>
        <SignUpMainTxt>Create account</SignUpMainTxt>
        <SignUpSecoundGradeTxt>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </SignUpSecoundGradeTxt>
        <input placeholder="Username" type="text" required />
        <input placeholder="Email Address" type="email" required />
        <input placeholder="Password" type="password" required />
        <input placeholder="Confirm Password" type="password" required />
        <SignUpButton>Create account</SignUpButton>
      </SignUpForm>
    </SignUpSection>
  );
}
