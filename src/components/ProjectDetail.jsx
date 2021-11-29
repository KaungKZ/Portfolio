import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProjectDetail() {
  let params = useParams();

  console.log(params);

  // useEffect(() => {
  //   console.log(params);
  // }, []);
  return (
    <div className="text-3xl text-primary-default">
      Project detail page of {params.name}
    </div>
  );
}
