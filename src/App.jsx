import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Route, Switch } from "wouter";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import AuthGuard from "./components/AuthGuard";
import { ThemeProvider } from "./context/ThemeContext";
import CustomLayout from "./components/CustomLayout";
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navigation />
        <Switch className="bg-red-200 max-w-4xl mx-auto">
          <Route path="/" component={Home} />
          <AuthGuard path="/profile">
            <CustomLayout>
              <Profile />
            </CustomLayout>
          </AuthGuard>
          <AuthGuard path="/games">
            <CustomLayout>
              <div>No games yet</div>
            </CustomLayout>
          </AuthGuard>
          <AuthGuard path="/squad">
            <CustomLayout>
              <div>No Squad yet</div>
            </CustomLayout>
          </AuthGuard>
          <AuthGuard path="/community">
            <CustomLayout>
              <div>No Community yet</div>
            </CustomLayout>
          </AuthGuard>
          <Route path="/sign-up" component={Signup} />
          <Route>
            <CustomLayout>
              <div>Not found</div>
            </CustomLayout>
          </Route>
        </Switch>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
