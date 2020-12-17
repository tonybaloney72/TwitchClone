class Clip < ApplicationRecord
    validates :user_id, :title, :category, :video_clip, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :messages,
    foreign_key: :clip_id,
    class_name: :Message

    has_one_attached :video_clip

end
