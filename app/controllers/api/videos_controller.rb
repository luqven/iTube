class Api::VideosController < ApplicationController

  def index
    if current_user
      @videos = current_user.videos
      render :index
    else
      @videos = Video.all
      render :index
    end
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 401
    end
  end

  def show
    @video = Video.find_by(id: params[:id])
  end

  def destroy
  end

  def video_params
    params.require(:video).permit(:title, :body, :channel_id, :uploader, :user_id)
  end

end