json.videos do
  @videos.each do |video|
    json.set! video.title do
      json.id video.id
    end
  end
end