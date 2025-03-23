import App from "../layouts/App";


export default function Home() {
  console.log("Home component rendered");
  return (
    <App>
      <h1 className="text-xl text-sky-600">Hello World</h1>
    </App>
  );
}
