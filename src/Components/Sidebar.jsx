import React from 'react'

function Sidebar({ handleChange }) {
    const products = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
  console.log(products)
  return (
            
    <div>
    <h2 className="sidebar-title">Category</h2>

    <div>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="men's clothing" name="test" />
        <span className="checkmark"></span>Men's clothing
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="jewelery" name="test" />
        <span className="checkmark"></span>Jewelery
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="electronics" name="test" />
        <span className="checkmark"></span>Electronics
      </label>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="women's clothing" name="test" />
        <span className="checkmark"></span>Women's clothing
      </label>
     
    </div>
    <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid white" }}
          ></span>
          White
        </label>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="pink"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid pink" }}
          ></span>
          Pink
        </label>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="green"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid green" }}
          ></span>
          Green
        </label>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="red"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid red" }}
          ></span>
          Red
        </label>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="blue"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid blue" }}
          ></span>
          Blue
        </label>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="black"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          Black
        </label>

        <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={50} name="test2" />
          <span className="checkmark"></span>0 -50
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={100} name="test2" />
          <span className="checkmark"></span>50 -100
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={150} name="test2" />
          <span className="checkmark"></span>100 -150
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={200} name="test2" />
          <span className="checkmark"></span>Over 200
        </label>

      </div>
  </div>
  )
}

export default Sidebar