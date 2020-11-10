class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_post, only: %i[update show]

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    # byebug
    @post = Post.create!(post_params)
    respond_to do |format|
      if @post.save
        format.html { redirect_to root_path }
        format.json { render :index, status: :created, location: @posts }
      else
        format.html { render :new }
        format.json { render json: @post.errors, message: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def show;end

  def update
    if @post.update(post_params)
      redirect_to @posts
      flash[:notice] = 'post has been successfully updated'
    else
      render :edit
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :miles, :location, :latitude, :longitude, :body1, :body2, :body3, :body4, :body5, images: [])
  end

  def find_post
    @post = Post.find(params[:id])
  end

end
