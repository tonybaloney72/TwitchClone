class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :clip_id

      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :clip_id
  end
end
