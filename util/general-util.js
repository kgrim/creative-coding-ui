export const formatString = (string) => {
  return (string.charAt(0).toLowerCase() + string.slice(1)).replace(/\s/g, "");
};
