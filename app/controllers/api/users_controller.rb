class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    # @videos = @user.videos
    # @channel = current_user.channel
    render :show
  end
  
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      @channel = Channel.create(owner_id: @user.id, name: @user.username)
      @channel.save

      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = current_user
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['user not found'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end