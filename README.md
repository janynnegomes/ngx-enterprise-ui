# NgxEnterpriseUI

This library contains enterprise common components for Angular 8 applications

# How to install

**Install Packages**
`npm install --save ngx-enterprise-ui`

**Import the module:**
```typescript
//...
import { NgxEnterpriseUIModule } from 'ngx-enterprise-ui';

@NgModule({
  //...
  imports: [
    //...
    NgxEnterpriseUIModule
  ],
  //...
})
export class AppModule { }
```
**If you're using [Angular CLI](https://github.com/angular/angular-cli) 6.0.0, add the font-awesome CSS to `styles` inside the `angular.json`**
```json
"styles": [
    "styles.css",
    "../node_modules/ngx-enterprise-ui/css/ngx-enterprise-ui.css"
],
```
*NOTE: If using SCSS preprocessor just change the `css` for `scss`*

# Components

Name      | Usage               
---       | ---                
Card      | Show singular set of information.          


# Usage and options
Name        | Type               | Options  | Optional
---         | ---                | ---      | ---
title       | `String`           | no       | Yes
description | `String`           | no       | Yes


*Example Use*
```html
<ngx-ent-ui-card 
  title="Hello" 
  description="I'm a card, you can show an item of a collection">
</ngx-ent-ui-card>
```