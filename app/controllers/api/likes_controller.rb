class Api::LikesController < ApplicationController
  
  def index
    @likes = Like.all
    render :index
  end

  def show 
    @like = Like.find_by(video_id: params[:video_id])
    render :show
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      # redirect to create page or render errors
      render json: ['Like not registered.'], status: 401
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
  end

  def like_params
    params.require(:like).permit(:id, :user_id, :video_id, :liked)
  end


end
