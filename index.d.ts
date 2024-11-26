declare module "is-headless-browser" {
  export const checks: {
    name: string;
    check: () => boolean;
  }[];

  export function isHeadlessBrowser(): boolean;
}
