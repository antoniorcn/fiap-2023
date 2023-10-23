import {number, object, string} from 'yup';


const ProdutoSchema = object({
    nome: string().required().min(5),
    quantidade: number().required().min(0),
    preco: number().required().min(0.1)
})

export { ProdutoSchema }

