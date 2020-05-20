import React, { useEffect, useState } from "react";
import { Text } from "@origin-digital/ods-core";

export const RenderNull = () => {
  const [renderNull, setRenderNull] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRenderNull(true);
    }, 2000);
  });
  return renderNull ? null : <Text>I'm about to render null!!!</Text>;
};
