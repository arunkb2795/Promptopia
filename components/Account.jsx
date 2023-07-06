import React from "react";
import PromptCard from "./PromptCard";

const Account = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log({ data });
  return (
    <session className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={handleEdit && handleEdit}
            handleDelete={handleDelete && handleDelete}
          />
        ))}
      </div>
    </session>
  );
};

export default Account;
