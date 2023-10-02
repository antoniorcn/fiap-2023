import {object, string} from 'yup';

const contatoSchema = object({
    nome: string().required().min(3),
    telefone: string().required(),
    email: string().required().email()
});

export {contatoSchema}