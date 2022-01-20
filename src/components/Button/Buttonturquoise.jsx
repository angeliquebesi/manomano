import React from "react";

// eslint-disable-next-line react/prop-types
function Buttonturquoise({ content }) {
  return (
    <div>
      <button
        className="transition h-12 w-50 rounded bg-teal px-16 font-semibold hover:bg-teal-400 active:bg-teal-700  text-white"
        type="button"
      >
        {content}
      </button>
    </div>
  );
}

export default Buttonturquoise;
