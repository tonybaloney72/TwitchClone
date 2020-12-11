class CreateClips < ActiveRecord::Migration[5.2]
  def change
    create_table :clips do |t|
      t.integer :channel_id, null: false
      t.string :category, null: false
      t.string :title, null: false

      t.timestamps
    end
    
    add_index :clips, :channel_id
  end
end
