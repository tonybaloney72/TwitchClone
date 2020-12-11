class Category < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_one_attached :image
end
