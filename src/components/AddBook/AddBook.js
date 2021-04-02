import React, { useState } from "react";
import BookNav from "../BookNav/BookNav";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddBook = () => {
  const {register, handleSubmit} = useForm();
  const [imgUrl, setImageUrl] = useState("");
  const [button, setButton] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
    const productData = {
      productName: data.productName,
      productPrice: data.productPrice,
      productUrl: imgUrl,
      productDescription: data.productDescription,
    };
    console.log(productData);
    fetch("http://localhost:4500/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Data Console", data));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const bookImgData = new FormData();
    bookImgData.set("key", "85bceaafaf990a647877e6ddcc675175");
    bookImgData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", bookImgData)
      .then(function (response) {
        console.log('respons check img',response)
        setImageUrl(response.data.data.display_url);
        setButton(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bookshop-section">
      <div className="container">
        <div className="row">
          <BookNav></BookNav>
          <div className="book-add-section">
            <div className="add-title">
              <h2>Add book</h2>
            </div>
            <div className="book-add-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="add-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-form">
                        <div className="form">
                          <span className="field-required"></span>
                          <label for="#">Book Name</label>
                          <input
                            name="productName"
                            defaultValue="Book Name"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-form">
                        <div className="form">
                          <span className="field-required"></span>
                          <label for="#">Book Name</label>
                          <input
                            name="productDescription"
                            defaultValue="description"
                            ref={register({ required: true })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-form">
                        <div className="form">
                          <span className="field-required"></span>
                          <label for="#">Book Name</label>
                          <input
                            type="text"
                            name="productPrice"
                            placeholder="Book Price"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-form">
                        <div className="form">
                          <span className="field-required"></span>
                          <label for="#">Book Name</label>
                          <input
                            type="file"
                            name="file"
                            onChange={handleImageUpload}
                          />
                        </div>
                      </div>
                    </div>
                      <input className={button ? "productSubmit" : "productSubmit disable"} type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
