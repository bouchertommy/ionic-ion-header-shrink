Ionic Ion Header Shrink
===========================

An Ion for making all headers that shrinks based on the user scrolling (like Facebook's iOS app).

To use this, add a `<ion-header-bar>` and a `<ion-content>`. Add the `header-shrink` attribute to the `<ion-content>` element:

```html
<ion-header-bar class="bar-positive">
  <div class="buttons">
    <button class="button button-icon ion-navicon"></button>
  </div>
  <h1 class="title">Things</h1>
</ion-header-bar>
<ion-content header-shrink>
</ion-content>
```

You can also add a value to add amount of scroll before shrinking :

```html
<ion-header-bar class="bar-positive">
  <div class="buttons">
    <button class="button button-icon ion-navicon"></button>
  </div>
  <h1 class="title">Things</h1>
</ion-header-bar>
<ion-content header-shrink="200" style="top:0;">
</ion-content>
```
This example will wait the user scroll 200 px before shrinking the headers.



It's also useful to add css padding top to the content to make sure it doesn't go up under the bar:

```html
<ion-content style="top:0; padding-top:50px">
</ion-content>
```

Better option is to put this on your CSS file for the maintainability.


Also make sure to include the `ionic.ion.headerShrink` angular module in your app.

```js
angular.module('YourApp',['ionic','ionic.ion.headerShrink']);
```

Note, this also work with an `<ion-nav-bar>`.
