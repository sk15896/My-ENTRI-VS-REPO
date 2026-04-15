const API = "https://fakestoreapi.com/products";

const productList = document.getElementById("productList");
const form = document.getElementById("productForm");
const status = document.getElementById("status");

// Fetch all products
async function fetchProducts() {
  try {
    status.innerText = "Loading...";
    const res = await fetch(API);
    const data = await res.json();
    displayProducts(data);
    status.innerText = "";
  } catch (error) {
    status.innerText = "Error fetching products";
  }
}

// Display products
function displayProducts(products) {
  productList.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
      <p>${p.category}</p>
      <button onclick="editProduct(${p.id})">Edit</button>
      <button onclick="deleteProduct(${p.id})">Delete</button>
    `;

    productList.appendChild(div);
  });
}

// Add / Update product
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("productId").value;

  const product = {
    title: title.value,
    price: price.value,
    category: category.value,
    description: description.value,
    image: image.value
  };

  try {
    if (id) {
      // Update
      await fetch(`${API}/${id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
    } else {
      // Create
      await fetch(API, {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
    }

    form.reset();
    document.getElementById("productId").value = "";
    fetchProducts();

  } catch {
    status.innerText = "Error saving product";
  }
});

// Edit product
async function editProduct(id) {
  try {
    const res = await fetch(`${API}/${id}`);
    const p = await res.json();

    document.getElementById("productId").value = p.id;
    title.value = p.title;
    price.value = p.price;
    category.value = p.category;
    description.value = p.description;
    image.value = p.image;

  } catch {
    status.innerText = "Error loading product";
  }
}

// Delete product
async function deleteProduct(id) {
  try {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    fetchProducts();
  } catch {
    status.innerText = "Error deleting product";
  }
}

// Search
document.getElementById("search").addEventListener("input", async (e) => {
  const text = e.target.value.toLowerCase();

  try {
    const res = await fetch(API);
    const data = await res.json();

    const filtered = data.filter(p =>
      p.title.toLowerCase().includes(text)
    );

    displayProducts(filtered);

  } catch {
    status.innerText = "Error searching";
  }
});

// Initial load
fetchProducts();