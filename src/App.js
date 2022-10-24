import LifeCycleMethods from "./components/LifeCycleMethods";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Clock from "./components/Clock";
import React, { useState } from "react";
import OrnekUseEffect from "./components/OrnekUseEffect";

function App() {
  const [goster, setGoster] = useState(true);

  return (
    <div className="container text-center mt-4">
      {/* <LifeCycleMethods/> */}
      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        GOSTER
      </button>
      {/* {goster ? <Clock/>:""} */}

      {goster && <Clock />}

      {/* goster true iken Clock componenti görünsün, false durumunda hiçbirşey yapma */}
      {/* && iki parametrede doğruyken kullanılır, || soldaki doğruysa yada
      sağdaki doğruysa, hangisi true ise onu al */}

      {goster && <OrnekUseEffect />}
    </div>
  );
}

export default App;
