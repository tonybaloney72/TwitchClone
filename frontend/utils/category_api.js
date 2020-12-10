export const fetchCategories = () => (
    $.ajax({
        url: "api/categories"
    })
)

export const fetchCategory = categoryId => (
    $.ajax({
        url: `api/categories/${categoryId}`
    })
)