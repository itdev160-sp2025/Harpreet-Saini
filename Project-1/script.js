// Sample data for books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$10.99", description: "A novel about the American dream." },
    { title: "1984", author: "George Orwell", price: "$8.99", description: "A dystopian novel set in a totalitarian society." },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: "$12.99", description: "A story about racial injustice in the Deep South." },
    { title: "Moby Dick", author: "Herman Melville", price: "$15.99", description: "A novel about a sea captain's obsession with a white whale." },
];

// Function to display books in the catalog
function displayBooks(bookList) {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = ''; // Clear the list before adding new books
    bookList.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
                <p>${book.description}</p>
                <p><strong>Price: ${book.price}</strong></p>
            </div>
            <button onclick="viewBookDetails('${book.title}')">View Details</button>
        `;
        bookListElement.appendChild(li);
    });
}

// Function to show book details
function viewBookDetails(bookTitle) {
    const book = books.find(b => b.title === bookTitle);
    alert(`Title: ${book.title}\nAuthor: ${book.author}\nPrice: ${book.price}\nDescription: ${book.description}`);
}

// Display all books initially
displayBooks(books);

// Search functionality
function searchBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput) || book.author.toLowerCase().includes(searchInput));
    displayBooks(filteredBooks);
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    document.getElementById('thank-you-message').style.display = 'block'; // Show thank-you message
});
