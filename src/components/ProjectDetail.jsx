import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProjectDetail() {
  let params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);
  return <div class="text-3xl text-primary-default">Project detail page</div>;
}
