class Api::CommentsController < ApplicationController
  
  def index
    @comments = Comment.all
    render :index
  end

  def show 
    @comment = Comment.find_by(video_id: params[:video_id])
    if @comment
      render :show
    else
    render json: { comments: {} }

    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      # redirect to create page or render errors
      render json: ['Sign in to comment on this video.'], status: 401
    end
  end

  def destroy
    @comment = Comment.find_by(video_id: params[:video_id])
    @comment.delete
    render :show
  end

  def comment_params
    params.require(:comment).permit(:id, :user_id, :video_id, :body)
  end


end
