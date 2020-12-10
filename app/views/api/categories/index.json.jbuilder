@categories.each do |category|
    @json.extract! category, :id, :title, :image
end