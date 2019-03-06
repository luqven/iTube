class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.string :body, null: false, unique: true
      t.timestamps
    end
    add_index :comments, :video_id
  end
end
