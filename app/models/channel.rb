class Channel < ApplicationRecord

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :clips,
    foreign_key: :channel_id,
    class_name: :Clip,
    dependent: :destroy

end
