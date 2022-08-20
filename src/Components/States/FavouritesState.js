import { makeAutoObservable } from "mobx"

class FavouritesState {
    favouriteItems = []

    constructor() {
        makeAutoObservable(this)
    }

    addFavourite(data) {
        if (this.favouriteItems.find((item) => item.id == data.id)) {
            alert('Данный товар уже добавлен в избранное')
            return
        }
        this.favouriteItems.push(data)
        console.log(this.favouriteItems)
    }

    removeFavourite(id) {
        let index = this.favouriteItems.findIndex((item) => item.id == id)
        this.favouriteItems.splice(index, 1)
        console.log(this.favouriteItems)
    }

    removeAllFavourites() {
        this.favouriteItems = []
    }
}

export default new FavouritesState()