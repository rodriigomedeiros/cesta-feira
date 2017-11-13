# Cesta-Feira
## A jQuery plugin for creating and manipulating a simple shopping cart on your website.

### Why should I use this shopping cart plugin?
* Full client-side operation (use of server-side languages is optional);
* Totally customizable with regard to item details when adding to cart;
* Browser support: Firefox, Chrome, Safari, IE8+, iOS, Android, Opera;
* Small file size and simple to implement;
* Based on metadatas of DOM;
* Callback API and public methods.

### License
Released under the MIT license - http://opensource.org/licenses/MIT

Let's get on with it!

## Installation

### Step 1: Link required files

First and most important, the jQuery library and jStorage library needs to be included (no need to download - link directly from CloudFlare CDN). Next, download the package of the cesta-feira and link Cesta-Feira Javascript file.

```html
<!-- jQuery library (served from CloudFlare) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<!-- jStorage library (served from CloudFlare) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jStorage/0.4.12/jstorage.min.js"></script>
<!-- Cesta-Feira Javascript file -->
<script src="/dist/cesta-feira.min.js"></script>
```

### Step 2: Create HTML markup

Create a form element with the metadata `data-cesta-feira-form` form `<form data-cesta-feira-form>` and with elements `<input>` with the metadata `data-cesta-feira-attribute` for each information of item to be added into the basket. Any text content is valid, and you can add as many inputs as you want. Only the `<input>` containing the product ID is required, being marked as follows: `<input value="1" data-cesta-feira-item-id>`

```html
<form data-cesta-feira-form>
  <input type="hidden" value="1" data-cesta-feira-item-id>
  <input type="number" name="quantity" data-cesta-feira-attribute>
  <input type="text" name="observations" data-cesta-feira-attribute>
</form>
```

### Step 3: Call the Cesta-Feira

CCall .Cesta-Feira(). Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

```javascript
$(document).ready(function(){
  $.CestaFeira();
});
```

## Configuration options

### General

**debug**

Enables verbose mode for debugging
```
default: false
options: true, false
```

### Callbacks

**onItemAdded**

Executes immediately after an item is added to the basket.
```
default: function(){}
options: function(item){ // your code here }
arguments:
  item: item added into basket.
```

**onItemUpdated**

Executes immediately after an item is updated to the basket.
```
default: function(){}
options: function(item){ // your code here }
arguments:
  item: item updated into basket.
```

### Public methods

**updateCount**

Updating the item counter in the basket.
```
example:
$.CestaFeira().updateCount();
```

**getNumItems**

Returns the number of items in the basket
```
example:
$.CestaFeira().getNumItems();
```

**getItems**

Returns an array of json objects with the items added to the basket. The array index is the item ID added and the object contains the item addition form data serialized.
```
example:
$.CestaFeira().getItems();
```

**removeItem**

Remove an item from the basket by passing the Item ID as an argument.
Returns `true` in success case.
```
example:
$.CestaFeira().removeItem(1);
```

**clearBasket**

Remove all items from the basket.
Returns `true` in success case.
```
example:
$.CestaFeira().clearBasket();
```

### Triggers

All triggers are called in `$(document)`.

**cesta-feira-item-added**

Shot when an item was added to a basket

```
example:
$(document).on('cesta-feira-item-added', function(){ // your code here });
```

**cesta-feira-item-updated**

Shot when a basket item has been updated

```
example:
$(document).on('cesta-feira-item-updated', function(){ // your code here });
```

**cesta-feira-item-deleted**

Shot when an item is deleted from the basket

```
example:
$(document).on('cesta-feira-item-deleted', function(){ // your code here });
```

**cesta-feira-clear-basket**

Shot when the basket is emptied

```
example:
$(document).on('cesta-feira-clear-basket', function(){ // your code here });
```


### Examples

The examples folder contains a complete example of how the Cesta-Feira plugin works.

Visit the Northeast of Brazil, visit Jardim do Seridó - RN.