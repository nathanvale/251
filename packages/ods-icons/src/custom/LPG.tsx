import React from "react";
import { createSvgIcon } from "../_private/createCustomSvgIcon";

export default createSvgIcon(
  <>
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8,19h8v4H8V19z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M9,6C7.9,6,7,6.9,7,8v11c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V8c0-1.1-0.9-2-2-2H9z"
      />
      <g>
        <path
          id="a"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9,3h6v2H9V3z M12,3c0.6,0,1,0.4,1,1v1h-2V4C11,3.4,11.4,3,12,3z M8,1h8v2H8V1z"
        />
      </g>
    </g>
  </>,
  "LPG"
);
