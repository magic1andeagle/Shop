import { useMemo } from "react"

export const useCategory = (items, category) => {
    const itemsCategory = useMemo(() => {
        return [...items.filter((item) => item.category == category)]
    }, [category])
    return itemsCategory
}