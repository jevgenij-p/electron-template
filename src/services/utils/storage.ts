export const getItem = (name: string) => {
    let item = sessionStorage.getItem(name);
    if (!item) {
        // Try to get an item from the localStorage if it was remembered
        item = localStorage.getItem(name);
        if (item) sessionStorage.setItem(name, item)
    }
    return item;
}

export const setItem = (name: string,
    item: string | number | boolean | null,
    remember?: boolean) => {
    if (item != null) {
        if (typeof (item) != 'string') {
            item = item.toString();
        }
        sessionStorage.setItem(name, item);
        if (remember) {
            localStorage.setItem(name, item);
        }
    } else {
        removeItem(name);
    }
}

export const removeItem = (name: string) => {
    sessionStorage.removeItem(name);
    localStorage.removeItem(name);
}

export const removeItems = (items: string[]) => {
    items.map((item) => {
        removeItem(item)
    })
}