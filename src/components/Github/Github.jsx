import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/thevinnivicci")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="flex flex-col items-center gap-2 p-5 justify-center ">
      Name : {data.name}
      <img src={data.avatar_url} width={200} height={200} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/thevinnivicci');
  return res.json();
};
