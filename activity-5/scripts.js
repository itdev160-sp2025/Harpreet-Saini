const packages = [
    {
        name: "Prettier",
        url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
        description: "An opinionated code formatter.",
        author: "Prettier",
        downloads: 1000000,
        stars: 5000,
        image: "images/prettier.png"
    },
    {
        name: "ESLint",
        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
        description: "Integrates ESLint JavaScript into VS Code.",
        author: "Dirk Baeumer",
        downloads: 2000000,
        stars: 6000,
        image: "images/eslint.png"
    }
];

function Package(data) {
    this.name = data.name;
    this.url = data.url;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.image = data.image;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };
}

const package1 = new Package(packages[0]);
const package2 = new Package(packages[1]);

document.getElementById('article-title').textContent = "The Best VS Code Extensions for Front-End Developers";
document.getElementById('author').textContent = "By Your Name";
document.getElementById('date').textContent = "March 2025";
document.getElementById('hero-image').src = "images/hero-image.jpg";

document.getElementById('package-name-1').textContent = package1.name;
document.getElementById('package-description-1').textContent = package1.description;
document.getElementById('package-author-1').textContent = `Author: ${package1.author}`;
document.getElementById('package-downloads-1').textContent = `Downloads: ${package1.getFormattedDownloads()}`;
document.getElementById('package-stars-1').textContent = `Stars: ${package1.stars}`;
document.getElementById('package-image-1').src = package1.image;

document.getElementById('package-name-2').textContent = package2.name;
document.getElementById('package-description-2').textContent = package2.description;
document.getElementById('package-author-2').textContent = `Author: ${package2.author}`;
document.getElementById('package-downloads-2').textContent = `Downloads: ${package2.getFormattedDownloads()}`;
document.getElementById('package-stars-2').textContent = `Stars: ${package2.stars}`;
document.getElementById('package-image-2').src = package2.image;
