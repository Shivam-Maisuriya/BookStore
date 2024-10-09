import Book from "../models/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    // 200 : sucess code
    res.status(200).json(book);
  } catch (error) {
    console.log("Error : ", error);
    // 500 : internal server error
    res.status(500).json(error);
  }
};
