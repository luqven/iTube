# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  body       :string
#  owner_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :owner_id, presence: true, uniqueness: true

  has_many :videos,
    foreign_key: :channel_id,
    class_name: :Video

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

end
