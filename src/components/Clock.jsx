import { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  // const zaman=moment()

  //!componentDidMount=component ilk render edildiğinde []
  useEffect(() => {
    const time = setInterval(() => {
      setZaman(moment());
      console.log("merhaba");
    }, 1000);

    //!componentWillUnmount=component kapandığında, başka sayfaya gidildiğinde çalışan durumu durdur
    return () => {
      clearInterval(time);
      console.log("baska sayfaya gidildiği için interval durdu");
    };
  }, []);

  return (
    <div>
      {zaman.format("HH")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("mm")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}

      {zaman.format("ss")}
    </div>
  );
};

export default Clock;
