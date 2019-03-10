# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  liked      :boolean          not null
#  user_id    :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  # validates :liked, :user_id, :video_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
end
