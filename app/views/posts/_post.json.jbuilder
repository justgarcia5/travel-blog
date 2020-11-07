json.extract! post, :id, :title, :longitude, :body, :miles, :latitude, :location, :images, :created_at, :updated_at

if post.images.attached?
  post.images.each do |i|
    json.image_url url_for(i)
  end
end

json.url post_url(post, format: :json)
