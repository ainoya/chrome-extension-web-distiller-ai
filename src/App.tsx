import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import Popup from "./Popup";

function App() {
  return (
    <ThemeProvider storageKey="chrome-extension-web-distiller-ai-theme">
      <Popup />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
