import Header from "../components/Header/Header";
import App from "../layouts/App";


export default function Home() {
  console.log("Home component rendered");
  return (
    <App className="bg-[#F3F4F6]">
      <Header />
      <h1>a</h1>
    </App>
  );
}
