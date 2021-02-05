import React from "react";

function Contacts() {
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
      <div class="header">
        <h1>Become a Stylista</h1>
        <p>Subscribe and be the first to receive the hottest trends!</p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGJsYWNrJTIwd29tZW4lMjBpbiUyMGplYW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="clothes"
      ></img>
      {/*form*/}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" email="email" />
        </label>
        <label>
          Phone:
          <input type="text" phone="phone" />
        </label>
        <label>
          Comments:
          <input type="text" comments="comments" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/*footer*/}
      <footer>Copyright 2021. All rights reserved.</footer>
    </div>
  );
}

export default Contacts;
