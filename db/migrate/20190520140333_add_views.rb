class AddViews < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :play_count, :integer
  end
end
