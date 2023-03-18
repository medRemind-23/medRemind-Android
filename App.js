import AppNav from "./app/Nav/AppNav";
import AuthProvider from "./app/Nav/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
