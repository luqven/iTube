json.videos do
  @videos.each do |video|
    json.set! video.id do
      json.title video.title
    end
  end
end