export const categoryAllQuery = '*[_type == "category"]'
export const productAllQuery = '*[_type == "product"]{..., category->}'