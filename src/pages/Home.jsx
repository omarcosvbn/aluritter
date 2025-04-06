import Header from "../components/Header/Header";
import Post from "../components/Aluritte/Aluritte";
import App from "../layouts/App";


export default function Home() {
  return (
    <App className="bg-[#F3F4F6] flex flex-col items-center justify-center">
      <Header />
      <Post limit="255" />
    </App>
  );
}