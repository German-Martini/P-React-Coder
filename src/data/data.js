const products = [
    {
        id: "A1B2C3",
        nombre: "Resma de hojas A4",
        categoria: "Oficina",
        descripcion: "500 hojas de papel tamaño A4, ideal para impresiones y documentos.",
        precio: 1200,
        img: "img/resma.png",
        stock: 50
    },
    {
        id: "D4E5F6",
        nombre: "Abrochadora",
        categoria: "Oficina",
        descripcion: "Abrochadora metálica de gran resistencia para uso diario.",
        precio: 750,
        img: "img/abrochadora.webp",
        stock: 30
    },
    {
        id: "G7H8I9",
        nombre: "Sellos",
        categoria: "Oficina",
        descripcion: "Juego de sellos automáticos para oficina, incluye tinta.",
        precio: 900,
        img: "img/sellos.jpeg",
        stock: 20
    },
    {
        id: "J1K2L3",
        nombre: "Perforadora",
        categoria: "Oficina",
        descripcion: "Perforadora de dos agujeros, capacidad de hasta 20 hojas.",
        precio: 600,
        img: "img/perforadora.jpg",
        stock: 25
    },

    {
        id: "M4N5O6",
        nombre: "Acrílicos",
        categoria: "Artística",
        descripcion: "Set de pinturas acrílicas de colores vibrantes, incluye 12 tubos.",
        precio: 1500,
        img: "img/acrilicos.webp",
        stock: 40
    },
    {
        id: "P7Q8R9",
        nombre: "Pinceles",
        categoria: "Artística",
        descripcion: "Set de pinceles de diferentes tamaños para técnicas artísticas variadas.",
        precio: 800,
        img: "img/pinceles.webp",
        stock: 60
    },
    {
        id: "S1T2U3",
        nombre: "Lápices de colores",
        categoria: "Artística",
        descripcion: "Set de 24 lápices de colores de alta calidad.",
        precio: 950,
        img: "img/prismacolor.jpeg",
        stock: 35
    },
    {
        id: "V4W5X6",
        nombre: "Paleta De Madera Pintor",
        categoria: "Artística",
        descripcion: "Paleta De Madera Pintor para pintura, tamaño 24x30cm.",
        precio: 1200,
        img: "img/paletaPintor.webp",
        stock: 15
    },

    {
        id: "Y7Z8A9",
        nombre: "Afiches",
        categoria: "Escolares",
        descripcion: "Pack de 10 afiches en colores surtidos, tamaño carta.",
        precio: 300,
        img: "img/afiche.jpg",
        stock: 80
    },
    {
        id: "B1C2D3",
        nombre: "Lapiceras",
        categoria: "Escolares",
        descripcion: "Set de 5 lapiceras de tinta negra.",
        precio: 200,
        img: "img/lapiceras.jpg",
        stock: 100
    },
    {
        id: "E4F5G6",
        nombre: "Resaltadores",
        categoria: "Escolares",
        descripcion: "Set de 4 resaltadores en colores fluorescentes.",
        precio: 400,
        img: "img/resalatadores.webp",
        stock: 70
    },
    {
        id: "H7I8J9",
        nombre: "Cuaderno",
        categoria: "Escolares",
        descripcion: "Cuaderno universitario de 100 hojas con espiral.",
        precio: 500,
        img: "img/cuaderno.jpg",
        stock: 50
    }
];


const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 2000)
    })
}

const getProduct = (idProduct) => {
    return new Promise((res) => {
        setTimeout(() => {
            const product = products.find( (product )=> product.id === idProduct) 
            res(product) 
        }, 2000)
    })
}


export { getProducts, getProduct }