class Clip < ApplicationRecord
    validates :category, :channel_id, :title, presence: true

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

    has_one_attached :video_clip

end
