const capitalise = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const getSwitchBaseDocs = (compName: string) => {
  return {
    id: `The unique id of the ${compName}, required for accessibility`,

    checked: `The value of the component. For controlled ${capitalise(
      compName,
    )}es this value needs to be provided.`,
    error: `If true means the component is in error state.`,

    onChange: [
      `Is called every time the ${compName} is ticked or un-ticked.`,
      `To read the new value, use either "event.target.checked" or "checked" (the 2nd argument).`,
    ].join(" "),
  };
};

export const getSwitchDocs = (compName: string) => {
  return {
    ...getSwitchBaseDocs(compName),
    label: `The label shown next to the ${compName}`,
    helperText: `Use this to provide further details.`,
  };
};
