#system design

## Overview

Ecommerce website builder just providing the shop name or domain where user can add products, manage and received payments their website.

Entities:

- SuperAdmin: id, name, email, password, role
- Admin: id, name, email, password,role
- User: id, name, email, password, role
- Shop: id, name, domain, userId
- Product: id, name, description, price, stock, categoryId, subcategoryId, shopId
- Stock: id, productId, quantity, shopId
- Category: id, name, shopId
- Subcategory: id, name, categoryId
- Brand: id, name, shopId, logo
- Order: id, userId, productId, quantity, totalPrice, shopId, addressId, status
- Payment: id, orderId, paymentId, shopId, status
- Address: id, userId, address
- Review: id, userId, productId, rating, comment, shopId
- Cart: id, userId, productId, quantity, shopId
- Wishlist: id, userId, productId, shopId
- Coupon: id, code, discount, expiryDate, shopId

Relationships:

- User has many Orders
- Shop has many Products
- Shop has many Brands
- Product has many Reviews
- Product has one Category
- Stock has one Product
- Category has many Products
- Subcategory has many Products
- Brand has many Products
- Order has one User
- Order has one Payment
- Payment has one Order
- User has many Reviews
- Review has one User
- Review has one Product
- User has many Addresses
- Address has one User
- User has many Notifications
- Notification has one User
- User has many CartItems
- CartItem has one User
- CartItem has one Product
- User has many WishlistItems
- WishlistItem has one User
- WishlistItem has one Product
- User has many Coupons
- Coupon has one User

Actions:
- SuperAdmin: add, update, delete admin,shop,product,payment, shop ban
- Admin: add, update, delete user, shop, product, category, subcategory, brand, review, notification, cart, wishlist, coupon
- User: add, update, delete product, category, subcategory, brand, review, notification, cart, wishlist, coupon




Layer:
Types
DB
Services
Api

