class ChangeLikes < ActiveRecord::Migration[5.2]
  def change
    change_table :likes do |t|
      t.remove :user_id, :video_id
      t.references :likeable, polymorphic: true, index: true
    end
  end
end
