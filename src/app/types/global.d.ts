declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg" {
  import React from "react";
  const SVG: React.FunctionComponent<
    React.SVGProps<SVGElement>
  >;
  export default SVG;
}

declare const __IS_DEV__: boolean;