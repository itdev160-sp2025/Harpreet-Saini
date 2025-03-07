
const books = [
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        price: "$10.99", 
        description: "A novel about the American dream.", 
        image: "images/TheGG.jpg"  
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        price: "$8.99", 
        description: "A dystopian novel set in a totalitarian society.", 
        image: "images/1984.jpg"  
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        price: "$12.99", 
        description: "A story about racial injustice in the Deep South.", 
        image: "images/killamockingbird.jpg"  
    },
    { 
        title: "Moby Dick", 
        author: "Herman Melville", 
        price: "$15.99", 
        description: "A novel about a sea captain's obsession with a white whale.", 
        image: "images/moby.jpg"  
    },
];


function displayBooks(bookList) {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = ''; 

    
    bookList.forEach(book => {
        const li = document.createElement('li'); 
        li.innerHTML = `
            <div>
                <h3>${book.title}</h3>  <!-- Display the title of the book -->
                <p>By ${book.author}</p>  <!-- Display the author of the book -->
                <p>${book.description}</p>  <!-- Display a brief description of the book -->
                <p><strong>Price: ${book.price}</strong></p>  <!-- Display the price of the book -->
                <img src="${book.image}" alt="${book.title}" style="width:100px; height:auto;" /> <!-- Display book image -->
            </div>
            <button onclick="viewBookDetails('${book.title}')">View Details</button> <!-- Button to view more details of the book -->
        `;
        bookListElement.appendChild(li); 
    });
}


function viewBookDetails(bookTitle) {
    const book = books.find(b => b.title === bookTitle);  
    alert(`Title: ${book.title}\nAuthor: ${book.author}\nPrice: ${book.price}\nDescription: ${book.description}`);  
}


displayBooks(books);


function searchBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase(); 
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) ||  
        book.author.toLowerCase().includes(searchInput)  
    );
    displayBooks(filteredBooks);  
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  
    document.getElementById('thank-you-message').style.display = 'block';  
});
