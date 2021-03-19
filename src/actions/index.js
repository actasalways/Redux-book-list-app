

// Aksiyonlar 
// Kitap Ekleme

const addBook = ({isbn, title, subtitle, description, author, pages}) =>{
  return {// Aksiyon Objesi
    type: 'ADD_BOOK',
    payload: {
      isbn, title, subtitle, description, author, pages
    }
  }
}

// kitap silme
const deleteBook = (book) =>{
  return{
    type: 'DELETE_BOOK',
    payload:book
  } 
}


//kitap secmeme
const deselectBook = () =>{
  return{
    type: 'DESELECT_BOOK'
  }
}




export { addBook, deleteBook, deselectBook} 
