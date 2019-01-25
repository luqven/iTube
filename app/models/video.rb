# == Schema Information
#
# Table name: videos
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Video < ApplicationRecord
   validates :title, :channel_id, presence: true
   validates :channel_id, uniqueness: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  has_one :uploader,
    through: :channel,
    source: :owner_id
end