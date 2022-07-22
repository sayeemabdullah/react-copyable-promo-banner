# [React Copyable Promo Banner](https://www.npmjs.com/package/react-copyable-promo-banner)

A react responsive promo banner that's customizable and can be copied when clicked.

### Installing as a package

`npm i react-copyable-promo-banner`

### Customize it yourself

_Codesandbox:_ <https://codesandbox.io/s/react-copyable-promo-banner-demo-lluhoq?file=/src/App.js>

### Usage

```javascript
import PromoBanner from "react-copyable-promo-banner";

export default function App() {
  return (
    <div>
      <PromoBanner />
    </div>
  );
}
```

> **The promo banner needs props to be customized. You can learn more about props by reading the section on props.**

### Props

| Name                | Value     | Description                                                                                                       |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| backgroundColor     | `string`  | Changes the banner's background color by passing backgroundColor. The default is `#1B3954`                        |
| bannerTextColor     | `string`  | Changes the banner's font color by passing bannerTextColor. The default is `white`                                |
| textBeforePromoCode | `string`  | Changes the text to be displayed before the promo by passing textBeforePromoCode. The default is `USE PROMO CODE` |
| textAfterPromoCode  | `string`  | Changes the text to be displayed after the promo by passing textBeforePromoCode. The default is `TO GET DISCOUNT` |
| promoCode           | `string`  | Changes the promo code by passing promoCode. The default is `PROMO2022`                                           |
| promoCodeTextColor  | `string`  | Changes the promo code's font color by passing promoCodeTextColor. The default is `#FED662`                       |
| showAlert           | `boolean` | Enables an alert to be shown after copying a promotion. The default is `true`                                     |
| alertText           | `string`  | Changes alert text by passing alertText. The default is `Promo code copied to clipboard`                          |
| showCancelIcon      | `string`  | Enables banner closing icon. The default is `true`                                                                |
| cancelIconColor     | `boolean` | Changes cancel icon's color by passing cancelIconColor. The default is `white`                                    |

### Note

This version allows you to set only one promo, which can be copied. In the current version, the width of the banner is 100%, but the height increases in accordance with the content inside. If you have any suggestions for features I can add, please let me know.

### Contributing

Found a bug? Want to add a new feature? Please send a pull request or raise an issue.
