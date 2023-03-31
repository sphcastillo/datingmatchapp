import { AuthProvider } from './hooks/useAuth'
import RootNavigation from './RootNavigation';



export default function App() {
  return (
    <AuthProvider>
      <RootNavigation/>
    </AuthProvider>
      

  );
}


