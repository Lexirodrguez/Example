class Comida {
    constructor() {
        this.comidas = [
            {
                id: 1,
                nombre: "Pizza Margarita",
                descripcion: "Pizza clasica con salsa de tomate, mozzarella y albahaca",
                precio: 8.99,
                calorias: 285,
                ingredientes: ["masa", "salsa de tomate", "mozzarella", "albahaca"],
                disponible: true,
                fechaCreacion: new Date()
            },
            {
                id: 2, 
                nombre: "Hamburguesa Clasica",
                descripcion: "Hamburguesa con carne de res, lechuga, tomate y quesi cheddar",
                calorias: 550,
                ingredientes: ["pan", "carne de res", "lechuga", "tomate", "queso cheddar"],
                disponible: true,
                fechaCreacion: new Date()
            },
            {
                id:3,
                nombre: "Ensalada Cesar",
                descripcion: "Ensalada con lechuga romana, crutones, parmesano y aderezo cesar",
                categoria: "Ensalada",
                precio: 7.50,
                calorias: 350,
                ingredientes: ["lechuga romana", "crustones", "queso parmesano", "aderezo cesar"],
                disponible: true,
                fechaCreacion: new Date()
            }
        ];
        this.nextId = 4;
    }

    getAll() {
        return this.comidas;
    }

    getById(id) {
        const comida = this.comidas.find(c => c.id === parseInt(id));
        return comida || null;
    }

    create(comidaData) {
        const nuevaComida = {
            id: this.nextId++,
            ...comidaData,
            fechaCreacion: new Date(),
            disponible: comidaData.disponible !== undefined ? comidaData.diponible : true
        };
         this.comidas.push(nuevaComida);
         return nuevaComida;
    }

    update(id, comidaData) {
        const index = this.comidas.findIndex(c => c.id === parseInt(id));

        if (index === -1) return null;

        this.comidas[index] = {
            ...this.comidas[index],
            ...comidaData,
            id: parseInt(id) 
        };

        return this.comidas[index];

        delete(id); {
            const index = this.comidas.findIndex(c => c.id === parseInt(id));

            if (index === -1) return false;

            this.comidas.splice(index, 1);
            return true;
        }

        search(query); {
            const term = query.toLowerCase();
            return this.comidas.filter(comida =>
                comida.nombre.toLowerCase().includes(term) ||
                comida.categoria.toLowerCase().includes(term) ||
                comida.descripcion.toLowerCase().includes(term)
              );
        }
    }
}

MediaSourceHandle.exports = new Comida ();