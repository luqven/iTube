json.videos do
  @videos.each do |video|
    json.set! video.id do
      json.views video.play_count
    end
  end
end