class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, presence: true, unique: true
      t.string :email, presence: true, unique: true
      t.string :password_digest, presence: true
      t.string :session_token,
      t.timestamps
    end
    add_index :users, :username
  end
end
