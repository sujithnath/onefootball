import { ErrorStyle } from "./style";

export const Error = ({ errorMessage }) => (
  <>{errorMessage ? <ErrorStyle>{errorMessage}</ErrorStyle> : null}</>
);
