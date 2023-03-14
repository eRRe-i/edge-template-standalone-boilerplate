export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    job: string;
    city: string;
    estado: string;
    isAdmin: boolean;
    avatarUrl: string | null;
}

export const loggedUser: User = {
    id: 0,
    username: 'leandro',
    name: 'Leandro Bataglia',
    email: 'leandro@bataglia.com',
    job: 'Software Developer',
    city: 'Rio de Janeiro',
    estado: 'RJ',
    isAdmin: true,
    avatarUrl: './public/leandro.jpg',
}

export const users: User[] = [
    {
        id: 0,
        username: 'leandro',
        name: 'Leandro Bataglia',
        email: 'leandro@bataglia.com.br',
        job: 'Software Developer',
        isAdmin: true,
        city: 'Rio de Janeiro',
        estado: 'RJ',
        avatarUrl: './leandro.jpg',
    },
    {
        id: 1,
        username: 'joao',
        name: 'João Pedro Ribeiro',
        email: 'joaopedro@ribeiro.com.br',
        job: 'Software Developer',
        city: 'Rio de Janeiro',
        estado: 'RJ',
        isAdmin: false,
        avatarUrl: null,
    },
    {
        id: 2,
        username: 'rita',
        name: 'Rita Chen',
        email: 'rita@chen.com.br',
        job: 'Software Developer',
        city: 'Rio de Janeiro',
        estado: 'RJ',
        isAdmin: false,
        avatarUrl: null,
    },
    {
        id: 3,
        username: 'pedro',
        name: 'Pedro Henrique Farolfi',
        email: 'pedrohenrique@farolfi.com.br',
        job: 'Software Developer',
        city: 'Rio de Janeiro',
        estado: 'RJ',
        isAdmin: false,
        avatarUrl: null,
    }
]
