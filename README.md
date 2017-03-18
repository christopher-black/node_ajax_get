# Node AJAX GET Request
Add a GET request to our client and server. In this tutorial we will:

- [ ] Create a product array
- [ ] Add a GET route in `app.js`
- [ ] Add an AJAX request in our `client.js`
- [ ] Loop through the response and display content on the screen.
- [ ] Check in our code to GitHub

## Prerequisites
Node intro [tutorial](https://github.com/christopher-black/node_intro).

## AJAX GET Request
**Client**

```JavaScript
$.ajax({
  type: "GET", // GET request
  url: "/products", // Route must match server
  success: function(response) {
    console.log(response);
  }
});
```

**Server**

```JavaScript
var products = [{make: "Geo", model: "Tracker"}, {make:"Acura", model:"Legend"}];

// Send back the products array
app.get("/products", function(req, res){
  res.send(products);
});
```
