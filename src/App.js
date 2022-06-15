import Page from "./pages/page";

function getCorrectLogo(logo) {
  return "/Job-filtering" + logo.slice(1, logo.length);
}

function App() {
  return (
    <Page
      getCorrectLogo={getCorrectLogo}
      background="/Job-filtering/images/bg-header-desktop.svg"
    ></Page>
  );
}

export default App;
