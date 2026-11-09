import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormsPage() {
  return (
    <div id="wd-profile-forms">
      <h1>Profile Forms</h1>
      <p>The same form with its state in useState, React Context, and Zustand.</p>
      <ProfileForm />
      <hr />
      <ContextProfileForm />
      <hr />
      <ZustandProfileForm />
    </div>
  );
}
