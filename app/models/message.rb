class Message < ApplicationRecord
    validates :user_id, :clip_id, :body, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
