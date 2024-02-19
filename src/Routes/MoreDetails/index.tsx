import React from "react";

const MoreDetails = () => {
  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center gap-4 p-10 px-20">
      <div id="headings" className="space-x-4 text-xl">
        <a href="">description</a>
        <a href="">Additional info</a>
        <a href="">Review</a>
        <a href="">video</a>
      </div>
      <div>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </div>
  );
};

export default MoreDetails;
