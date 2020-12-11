class Clip < ApplicationRecord
    validates :channel_id, :title, presence: true
    #:category

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

    has_one_attached :video_clip

end
