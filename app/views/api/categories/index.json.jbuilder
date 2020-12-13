json.array! @categories do |category|
    json.extract! category, :id, :title
    json.image url_for(category.image)
end