import React from "react";

function Products() {
  return (
    <div>
      {/*navbar*/}
      <nav>
        <ul>
          <li>
            <a href="Home.js">Home</a>
          </li>
          <li>
            <a href="Products.js">Products</a>
          </li>
          <li>
            <a href="Contact.js">Contact</a>
          </li>
        </ul>
      </nav>

      {/*hero image*/}
      {/*<div class="hero-image">
        <div class="hero-text">
          <h1>#TRENDSETTER</h1>
          <p>shop our newest styles & use #styled to tag your pictures</p>
          <button>Shop Now</button>
        </div>
  </div>*/}

      {/*product grid display*/}
      <div class="grid-container">
        <div class="grid-item">
          <img
            src=" https://images.unsplash.com/photo-1611747581637-a4c0993020ad?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="product"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://images.unsplash.com/photo-1571273134620-1ef375de9b84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
            alt="product"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://images.unsplash.com/photo-1611476877205-747cb1e20704?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="
            https://images.unsplash.com/photo-1605389170783-bcb01d8a57dc?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://images.unsplash.com/photo-1596305589475-7f4c4020685b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGplYW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://images.unsplash.com/photo-1584720205607-82d281ec08f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://images.unsplash.com/photo-1584897149326-536f40649b38?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fGJsYWNrJTIwd29tZW4lMjBpbiUyMGplYW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://i.pinimg.com/originals/f0/04/d1/f004d1c1e6ee70d99396368f508563fa.jpg"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://am.check-images.com//Upload/Image/2020/036/f58d01ce-f87e-43c9-935c-3eb86a48cec3.jpg"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://img.ltwebstatic.com/images3_pi/2020/08/18/1597732590f4a05cf70954080bb616a9d54a0afd95_thumbnail_900x.webp"
            alt="product"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://i.pinimg.com/736x/39/f1/21/39f1219967509828b6a8f97c165c0b8b.jpg"
            alt="products"
          ></img>
        </div>

        <div class="grid-item">
          <img
            src="https://i.pinimg.com/736x/d6/bd/d1/d6bdd1257bf4522284ad17d6d090aa2e.jpg"
            alt="products"
          ></img>
        </div>
      </div>

      {/*footer*/}
      <footer>Copyright 2021. All rights reserved.</footer>
    </div>
  );
}

export default Products;
