import API from './settings'


export default class ArticleService {
    constructor(){}
    getCategories() {
        const url = `${API}/api/categories/`;
        const params = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        };
        return fetch(url, params)
                .then(response => response.json())
                .then((categories) => { return categories.categories; });
    }
}