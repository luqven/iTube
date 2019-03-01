class FixLikes < ActiveRecord::Migration[5.2]
  def change
    drop_table :likes
    
    create_table :likes do |t|
      t.boolean :liked, null: false
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :video_id
  end
end
