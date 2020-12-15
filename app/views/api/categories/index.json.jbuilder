@categories.each do |category|
    json.set! category.id do
        json.id category.id
        json.title category.title
        json.image url_for(category.image)
    end
end