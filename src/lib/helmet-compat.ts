/**
 * Helmet compat shim — react-helmet-async ships CommonJS, so named imports
 * fail under SSR module evaluation ("Named export 'HelmetProvider' not
 * found"). A namespace import with a default fallback works in both the
 * client bundle and the SSR module runner.
 */
import * as helmetPkg from "react-helmet-async";

type HelmetModule = typeof import("react-helmet-async");

const resolved = ((helmetPkg as unknown as { default?: HelmetModule }).default ??
  helmetPkg) as HelmetModule;

export const Helmet = resolved.Helmet;
export const HelmetProvider = resolved.HelmetProvider;
