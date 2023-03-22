import bcrypt from "bcryptjs"
export const data = {
    users: [
        {
            name: "badhon",
            email: "admin@gamil.com",
            password: bcrypt.hashSync("2165432"),
            isAdmin: true,
          
        },
        {
            name: "raja",
            email: "badhon@gamil.com",
            password: bcrypt.hashSync("2165432"),
            isAdmin: false
        }
    ],
    product: [
        {
            name: "free Shirt",
            slug: "free-Shirt",
            category: "Shirts",
            image: "/asset/b.jpg",
            price: 70,
            brand: "pon",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "A popular T shirt"
        }, {
            name: "Slim shirt",
            slug: "Slim-shirt",
            category: "Shirts",
            image: "/asset/a.jpg",
            price: 70,
            brand: "Nike",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "A popular T shirt"
        },
        {
            name: " best shirt",
            slug: "best-shirt",
            category: "Shirts",
            image: "/asset/c.jpg",
            price: 70,
            brand: "pd",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "A popular T shirt"
        },
        {
            name: "raja",
            slug: "raja",
            category: "Shirts",
            image: "/asset/d.jpg",
            price: 70,
            brand: "puma",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "A popular T shirt"
        },
        {
            name: "sanjida",
            slug: "sanjida",
            category: "Shirts",
            image: "/asset/e.jpg",
            price: 70,
            brand: "badhon",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "A popular T shirt"
        },
    ]

}