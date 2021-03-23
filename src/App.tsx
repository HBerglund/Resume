import AppTheme from "./theming/AppTheme";
import { Container } from "@material-ui/core";
import Home from "./Home";

function App() {
  return (
    <AppTheme>
      <Container
        style={{
          backgroundColor: "white",
          padding: 0,
        }}
        maxWidth="lg"
      >
        <Home />
      </Container>
    </AppTheme>
  );
}

export default App;
