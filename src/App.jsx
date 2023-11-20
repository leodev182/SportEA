import { MyApp, Navegador, Landing } from "./index.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="navegador">
        <Navegador />
      </div>
      <div className="home centrar">
        <Landing
          url=" https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=dc9ad7cd5e3dc0a94003754e3b5aa599b5348e1c71ebc2d52e30530a13b666e8"
          logo="https://thumbs.dreamstime.com/b/el-emblema-del-club-de-f%C3%BAtbol-juventus-italia-aislada-fondo-blanco-165419494.jpg"
        />
      </div>
      <div className="footBall">
        <MyApp />
      </div>
      <div className="baseBall">
        <MyApp />
      </div>
      <div className="">
        <MyApp />
      </div>
    </>
  );
}

export default App;
