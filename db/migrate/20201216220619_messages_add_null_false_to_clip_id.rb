class MessagesAddNullFalseToClipId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :messages, :clip_id, false
  end
end
