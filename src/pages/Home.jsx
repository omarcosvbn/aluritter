import Header from "../components/Header/Header";
import Post from "../components/Post/Post";
import App from "../layouts/App";


export default function Home() {
  return (
    <App className="bg-[#F3F4F6]">
      <Header />
      <Post limit="255" />
    </App>
  );
}