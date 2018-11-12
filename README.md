## Internet shopping web application

Task:
Test project has 3 pages: search page, login page, sign up page. It should be single page application

### Sign up page
Should has "Signup" button and 3 fields: email, password and password confirm When user presses "Signup" button ,app should validate email field. As well as password and password confirm should be identical. Error message should be shown on the top of the page, if validation failed.
If email and password are corrected, auth info should be stored in the local storage. Password should be stored as hash.

### Log in page
Has Email and password fields. ANer pressing "Log in" bu.on, auth info checked and user authorized.

### Search page
Allowed for authorized users only. Search page should has item's filter and item's list. When any filter is changed, item's list reloaded according enabled filters. Page shouldn't be reloaded, just item's list. User can add item in the his cart.

Items list should be as static json file. Item's fields
+ Id
+ Name
+ Color (Red, White, Black, Blue, Yellow, Green)
+ Issue date (should be in US format)
+ Price - float (should be in US format)
+ Raiting – float
+ InStock
+ Image