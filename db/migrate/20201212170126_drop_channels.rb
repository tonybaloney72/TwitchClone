class DropChannels < ActiveRecord::Migration[5.2]
  def change
    drop_table :channels

    rename_column :clips, :channel_id, :user_id
  end
end
