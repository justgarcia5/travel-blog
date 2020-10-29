json.extract! post, :id, :title, :longitude, :body, :miles, :latitude, :location, :created_at, :updated_at
json.url post_url(post, format: :json)
