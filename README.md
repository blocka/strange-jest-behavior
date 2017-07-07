# To run

``` bash
npm install && npm start
```

## Technologies Used/Architecture

1. VueJS for view layer
2. redux for data layer/state management
3. oidc-client-js (https://github.com/IdentityModel/oidc-client-js) to handle anvil authentication
4. redux-oidc (https://github.com/maxmantz/redux-oidc) to connect the authentication to the redux store.
This package exposes redux middleware, actions and a reducer. It also provides two react components, `OidcProvider` which handles all the oidc callbacks, and a component for handling the authentication callback from anvil. We have written vue version of these components.
5. vue-component-router (https://github.com/blocka/vue-component-router) to declaratively handle routing.
6. vuedux (https://github.com/jaredramirez/vuedux) redux bindings for vue, with an HoC based API (like react-redux)
7. apollo/apollo-vue are used to connect the iceburg3 client to a graphql api. GraphQL allows to make data access for components declarative. Apollo also takes care of non-trivial things like caching, and query deduplication.
8. We are using jest for testing. While developing, `run npm test -- --watch` to set the test runner in watch mode. Tests are colocated with the components/units that they're testing.

## GraphQL
We are using the vue-apollo integration to connect vue to graphql. However, we are using a custom HOC instead of the regular api (ie., adding a "apollo" options hash to a component). The api of this HOC is inspired by the react-apollo component, and has the same goal of separating data from the presentational component. This component is located in /src/components/graphql.

## File Layout
1. `src/main.js` is the main entrypoint, where all the providers are set up (vuedux, history and oidc), and then the main `App` is rendered
2. `src/store.js` is the bootstraping of the redux store
3. `src/userManager.js` returns the UserManager instance used by the OidcProvider
4. `src/App.vue` is the main app component. It renders two routes, one to handle the oidc callback, and the other two render the rest of the application.
5. `src/components` contains components that are shared throughout the app.
6. `src/modules` contains redux modules, following the "ducks" architecture (https://github.com/erikras/ducks-modular-redux).
7. `silent_renew` contains html page with iframe, and javascript which runs in that iframe to handle the automatic silent renew of token in the background.
Webpack is set up to emit two entry points, one for the main app, the other for the silent renew script.
8. We have installed a module called `wavy` which allows access to the root from ~. So any module can point to ~/src/**/.*

## Testing
We are using jest which provides a test runner + assertions all in one package. When testing components the most important to look for are conditionals, and to verify that the correct props are getting sent to children. The general rule is, if you would need to verify it by hand, and it _can_ be verified automatically, write a test.

For help with testing vue components, we use avoriaz.

## Recommended dev tools

1. Vue dev tools chrome extension
2. Redux dev tools chrome extension
3. Apollo chrome extension
