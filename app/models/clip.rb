class Clip < ApplicationRecord

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

end
