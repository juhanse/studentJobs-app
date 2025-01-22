/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/navigation`; params?: Router.UnknownInputParams; } | { pathname: `/screens/home`; params?: Router.UnknownInputParams; } | { pathname: `/screens/messages`; params?: Router.UnknownInputParams; } | { pathname: `/screens/settings`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/navigation`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/home`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/messages`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/settings`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/navigation${`?${string}` | `#${string}` | ''}` | `/screens/home${`?${string}` | `#${string}` | ''}` | `/screens/messages${`?${string}` | `#${string}` | ''}` | `/screens/settings${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/navigation`; params?: Router.UnknownInputParams; } | { pathname: `/screens/home`; params?: Router.UnknownInputParams; } | { pathname: `/screens/messages`; params?: Router.UnknownInputParams; } | { pathname: `/screens/settings`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
