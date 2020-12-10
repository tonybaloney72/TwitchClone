@categories.each do |category|
    @json.extract! category, :id, :name, :image
end