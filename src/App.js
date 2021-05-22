import "./styles.css";
import YoutubeIframe from "./YoutubeIframe";

export default function App() {
  const videoId = "ybwuiP6v7hk";
  const videoTitle = "[전인혁작곡] 야다(Yada) - 약속 (2019 ver)";

  return (
    <div className="App">
      <h1>Hello Responsive Youtube Iframe</h1>
      <h2>{videoTitle}</h2>
      <YoutubeIframe videoId={videoId} videoTitle={videoTitle} />
    </div>
  );
}
