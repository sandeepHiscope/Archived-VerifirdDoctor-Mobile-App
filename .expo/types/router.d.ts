/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/Home`; params?: Router.UnknownInputParams; } | { pathname: `/logIn`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/remaining/forgetpassword`; params?: Router.UnknownInputParams; } | { pathname: `/remaining/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/Home`; params?: Router.UnknownOutputParams; } | { pathname: `/logIn`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/remaining/forgetpassword`; params?: Router.UnknownOutputParams; } | { pathname: `/remaining/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/Home${`?${string}` | `#${string}` | ''}` | `/logIn${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/remaining/forgetpassword${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/Home`; params?: Router.UnknownInputParams; } | { pathname: `/logIn`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/remaining/forgetpassword`; params?: Router.UnknownInputParams; } | `/remaining/+not-found` | { pathname: `/remaining/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
