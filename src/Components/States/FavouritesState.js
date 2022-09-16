import { makeAutoObservable } from "mobx"

class FavouritesState {
    favouriteItems = []

    constructor() {
        makeAutoObservable(this)
    }

    addFavourite(data) {
        if (this.favouriteItems.some((item) => item.id == data.id)) {
            alert('Данный товар уже добавлен в избранное')
            return
        }
        this.favouriteItems.push(data)
        console.log(this.favouriteItems)
    }

    removeFavourite(id) {
        this.favouriteItems = [...this.favouriteItems.filter(item => item.id !== id)]
    }

    removeAllFavourites() {
        this.favouriteItems = []
    }
}

export default new FavouritesState()