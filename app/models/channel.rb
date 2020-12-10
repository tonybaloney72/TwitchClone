class Channel < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true
    validates :name, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :clips,
    foreign_key: :channel_id,
    class_name: :Clip,
    dependent: :destroy

    has_one_attached :channel_photo

end
