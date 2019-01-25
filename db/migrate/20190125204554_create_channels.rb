class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, unique: true, null:false
      t.string :body
      t.integer :owner_id, presence: true, unique: true
      t.integer :user_id, presence: true, unique: true
      t.timestamps
    end
    add_index :channels, :name
    add_index :channels, :owner_id
  end
end
