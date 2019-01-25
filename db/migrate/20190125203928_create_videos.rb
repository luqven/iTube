class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :body
      t.integer :channel_id, null: false, unique: true
      t.timestamps
    end
    add_index :videos, :title
  end
end
