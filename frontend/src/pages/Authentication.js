import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {

  const searchParams = new URLSearchParams(window.location.search);
  const mode = searchParams.get("mode") || "login";
  
  console.log(mode);

  const authFormData = await request.formData();
  const authData = {
    email: authFormData.get('email'),
    password: authFormData.get('password')
  }

  console.log(authData);

}