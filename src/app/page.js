"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <main>
      <div className="flex flex-col">
        {data.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </main>
  );
}
