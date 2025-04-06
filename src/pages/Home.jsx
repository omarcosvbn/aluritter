import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import App from "../layouts/App";



export default function Home() {
  return (
    <App className="bg-[#F3F4F6] flex flex-col items-center min-h-screen">
      <Header email='a@a.com'/>
      <Posts limit="255" email='a@a.com' />
    </App>
  );
}