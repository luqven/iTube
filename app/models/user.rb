# == Schema Information
#
# Table name: users
#
#  id                                                              :bigint(8)        not null, primary key
#  username                                                        :string
#  email                                                           :string
#  password_digest                                                 :string
#  created_at                                                      :datetime         not null
#  updated_at                                                      :datetime         not null
#  session_token                                                   :string
#  #<ActiveRecord::ConnectionAdapters::PostgreSQL::TableDefinition :string
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  has_one :channel,
    foreign_key: :owner_id,
    class_name: :Channel

  has_many :videos,
    through: :channel,
    source:  :videos

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
