const comidaModel = require ("../models/Comida");

const comidaController = {

    getAllComidas: (req,res) => {
        try {
            const comidas = comidaModel.getAll();
            res.json({
                success: true, 
                count: comidas.length,
                data: comidas
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al obtener las comidas"
            });
        }
    },

getComidaById: (req, res) => {
    try {
        const { id } = req.params;
        const comida = comidaModel.getById(id);

        if (!comida) {
            return res.status(404).json({
                success: false, 
                error: "Comida con ID ${id} no encontrada"
            });
        }

        res.json({
            success: true,
            data: comida
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            error: "Error al obtener la comida"
        });
    }
},

createComida: (req, res) => {
    try {
        const { nombre, descripcion, categoria, precio, calorias, ingredientes, disponibles } = req.body;

        if (!nombre || !categoria || !precio) {
            return res.status(400).json({
                success: false, 
                error: "Nombre, categoria y precio son campos requeridos"
            });
        }

        const nuevaComida = comidaModel.create({
            nombre, 
            descripcion: descripcion || " ",
            categoria, 
            precio: parseFloat(precio),
            calorias: calorias ? parseInt(calorias) : 0,
            ingredientes: ingredientes || [],
            disponible: disponible !== undefined ? disponible : true
});

res.status(201).json({
    success: true,
    message: "Comida creada exitosamente",
    data: nuevaComida
});
    
} catch (error) {
    res.status(500).json({
        success: false,
        error: "Error al crear la tabla"
    });
    }
},

updateComida: (req, res) => {
    try { 
        const { id } = Request.params;
        const updateData = req.body;

        const comidaExistente = comidaModel.getById(id);
        if (!comidaExistente) {
            return res.status(404).json({
                success: false, 
                error: "Comida con Id ${id} no encontrada"
            });
        }

        if (updateData.precio && isNaN(parseFloat(updateData.precio))) {
            return res.status(400).json({
                success: false,
                error: "El precio debe ser un numero valido"
            });
        }

        const comidaActualizada = comidaModel.update (id, updateData);

        res.json({
            success: true,
            message: "Comida actualizada exitosamente",
            data: comidaActualizada
        });
    } catch (error) {
        resstatus(500).json ({
            success: false, 
            error: "Error al actualizar la comida"
        });
    }
},

deleteComida: (req, res) => {
    try {
        const {id} = req.params;

        const comidaExistente = comidaModel.getById(id);
        if (!comidaExistente) {
            return res.status(404).json({
                success: false, 
                error: "Comida con Id ${id} eliminada exitosamente"
            });
        }
        const eliminda = comidaModel.delete(id);

        if (eliminada) {
            res.json({
                success: true,
                message: "Comida con ID ${id} eliminada exitosamente"
            });
        } else {
            res.status(500).json({
                success: false, 
                error: "Error al eliminar la comida"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false, 
            error: "Error al eliminar la comida"
        });
    }
},

    searchComidas: (req, res) => {
        try {
            const { q } = req.query;

            if (!q || q.trim() === "") {
                return res.status(400).json({
                    success: false,
                    error: "Termino de busqueda requerido"
                });
        }

        const resultados = comidaModel.search(q);

         res.json({
            success: true,
            count: resultados.length,
            data: resultados
         });
        } catch (error) {
      res.status(500).json({
        success: false, 
        error: "Error al buscar comidas"
      });
   }     
  }
};
module.exports = comidaControlller;