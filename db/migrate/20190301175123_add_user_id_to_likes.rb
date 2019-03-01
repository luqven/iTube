class AddUserIdToLikes < ActiveRecord::Migration[5.2]
  def change
    change_table :likes do |t|
      t.integer :user_id
    end
    add_index :likes, :user_id
  end
end
