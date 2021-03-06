import api from './api';


class Comment {
    async getComments() {
        const response = await api.get('comentarios');

        return response.data;
    }

    async postComment(nome, descricao) {
        const response = await api.post('comentarios', {
            name: nome,
            comentario: descricao
        });

        return response.data;
    }

    async postContact(email, nome, telefone) {
        const response = await api.post('contatos', {
            name: nome,
            email: email,
            telefone: telefone
        });

        return response.data;
    }

    async deleteComment(id) {
        const response = await api.delete(`comentarios/${id}`, {

        });
        
        return response.data;
    }


}

export default new Comment();