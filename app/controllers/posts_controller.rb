class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all
  end

  def create
    @post = Post.create(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @posts }
        format.json { render :index, status: :created, location: @posts }
      else
        format.html { render :new }
        format.json { render json: @post.errors, message: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def post_params
    params.require(:post).permit(:longitude, :latitude, :location, :miles, :title, :body)
  end
end
