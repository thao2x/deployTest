if(!self.define){let s,l={};const i=(i,e)=>(i=new URL(i+".js",e).href,l[i]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=l,document.head.appendChild(s)}else s=i,importScripts(i),l()})).then((()=>{let s=l[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(e,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>i(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(e.map((s=>c[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"pojo"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/Cart.2a4c7cfc.css",revision:null},{url:"/css/Checkout.1feaf7e8.css",revision:null},{url:"/css/ChooseShiping.b73babcc.css",revision:null},{url:"/css/ConfirmPin.97a1ddd2.css",revision:null},{url:"/css/FillProfile.baaf2a58.css",revision:null},{url:"/css/ForgotPassword.6b91a126.css",revision:null},{url:"/css/Home.f32c3e42.css",revision:null},{url:"/css/LetsIn.e8409b96.css",revision:null},{url:"/css/NewPassword.4e8f8f34.css",revision:null},{url:"/css/NewPin.c13e2427.css",revision:null},{url:"/css/Notifications.f2bd0cb3.css",revision:null},{url:"/css/Offers.591ac63e.css",revision:null},{url:"/css/PaymentMethods.6ebab572.css",revision:null},{url:"/css/Popular.32ea6e17.css",revision:null},{url:"/css/Product detail.43ccb450.css",revision:null},{url:"/css/Search.9797524d.css",revision:null},{url:"/css/SettingProfile.3aed7cfe.css",revision:null},{url:"/css/ShippingAddress.80a3336e.css",revision:null},{url:"/css/ShoesType.2ae30997.css",revision:null},{url:"/css/SignIn.5b8b68b6.css",revision:null},{url:"/css/SignUp.b24bfeee.css",revision:null},{url:"/css/VerifyPassword.5024f176.css",revision:null},{url:"/css/Wishlist.019c3962.css",revision:null},{url:"/css/app.6fa323e7.css",revision:null},{url:"/img/1.5ef89388.png",revision:null},{url:"/img/1.806a0217.png",revision:null},{url:"/img/2.a6cb1acb.png",revision:null},{url:"/img/3.e4e6e127.png",revision:null},{url:"/img/4.93d147f4.png",revision:null},{url:"/img/5.0b796029.png",revision:null},{url:"/img/adidas_logo.be709729.png",revision:null},{url:"/img/congrats.edd1105b.png",revision:null},{url:"/img/converse_logo.280dac81.png",revision:null},{url:"/img/forgotPass.579b0dc9.jpg",revision:null},{url:"/img/letsin.70765f23.png",revision:null},{url:"/img/new-pass.868f1d7a.jpg",revision:null},{url:"/img/newbalance_logo.11643ee9.png",revision:null},{url:"/img/orderSuccess.aea3bde4.png",revision:null},{url:"/img/picwish.501c53b3.png",revision:null},{url:"/img/product3-featured-img-removebg-preview 1.2818217b.png",revision:null},{url:"/img/reebok-logo.ea9d8aed.png",revision:null},{url:"/index.html",revision:"ec8aa0ec695629e487b98cf69bf23216"},{url:"/js/Cart.4553d238.js",revision:null},{url:"/js/Checkout.5e3217ec.js",revision:null},{url:"/js/ChooseShiping.b6e6c231.js",revision:null},{url:"/js/ConfirmPin.06b906ec.js",revision:null},{url:"/js/FillProfile.dd460f41.js",revision:null},{url:"/js/ForgotPassword.8513b3ab.js",revision:null},{url:"/js/Home.3d161713.js",revision:null},{url:"/js/LetsIn.bfbeccef.js",revision:null},{url:"/js/NewPassword.b64691f9.js",revision:null},{url:"/js/NewPin.24e8e7a7.js",revision:null},{url:"/js/Notifications.76b2c37d.js",revision:null},{url:"/js/Offers.850c4bdc.js",revision:null},{url:"/js/PaymentMethods.17ebe186.js",revision:null},{url:"/js/Popular.3e2532fc.js",revision:null},{url:"/js/Product detail.67083477.js",revision:null},{url:"/js/Search.49accc44.js",revision:null},{url:"/js/SettingProfile.af2b45c4.js",revision:null},{url:"/js/ShippingAddress.bf76c848.js",revision:null},{url:"/js/ShoesType.a541b9b5.js",revision:null},{url:"/js/SignIn.18690c85.js",revision:null},{url:"/js/SignUp.1d6cb315.js",revision:null},{url:"/js/VerifyPassword.316e0c3d.js",revision:null},{url:"/js/Wishlist.0cae587d.js",revision:null},{url:"/js/app.fb19860b.js",revision:null},{url:"/js/chunk-vendors.c2e5e7f2.js",revision:null},{url:"/manifest.json",revision:"7adf4a42b3bcee98a963093eb37cc4d2"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
