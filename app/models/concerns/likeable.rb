module Likeable
  extend ActiveSupport::Concern

  included do
    has_many :likes, as: :likeable
  end

  def receive_like(likeable_id)
    self.likes.find_or_create_by(likeable_id: likeable_id)
  end
end