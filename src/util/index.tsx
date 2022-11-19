export const mapCssClasses = (...props: string[]) => {
  return props.reduce((prev, next) => prev + " " + next, "");
};
