# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :user_id, :video_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
end
